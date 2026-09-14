import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'

const STAR_COUNT = 2000
const STAR_COLORS = [[1, 1, 1], [0.5, 0.8, 1], [1, 0.6, 0.4]]

function createStarData(count) {
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 60
    positions[i * 3 + 1] = (Math.random() - 0.5) * 40
    positions[i * 3 + 2] = (Math.random() - 0.5) * 60 - 10
    const roll = Math.random()
    const color = STAR_COLORS[roll < 0.6 ? 0 : roll < 0.8 ? 1 : 2]
    colors.set(color, i * 3)
  }
  return { positions, colors }
}

// Random scene data is generated once at module load, so re-renders never reshuffle it
const STAR_DATA = createStarData(STAR_COUNT)
const ORBITALS = Array.from({ length: 8 }, () => ({
  radius: 2.5 + Math.random() * 1.5,
  speed: 0.2 + Math.random() * 0.3,
  offset: Math.random() * Math.PI * 2,
  size: 0.02 + Math.random() * 0.03,
  color: Math.random() > 0.5 ? '#00F5FF' : '#8B5CF6',
}))

// ─── Cursor attraction ───────────────────────────────────────────────────────
// Stars near the cursor are pulled part of the way toward it, in screen space on the GPU.
const ATTRACT_RADIUS = 0.55 // reach, in units of half the viewport height
const ATTRACT_PULL = 0.6 // share of the distance a star right under the cursor travels
const CURSOR_FOLLOW_RATE = 3 // how quickly the pull point chases the cursor
const STRENGTH_RATE = 1.2 // how quickly stars gather (and drift back once the cursor leaves)

const STAR_UNIFORMS = {
  uMouse: { value: new THREE.Vector2() },
  uAspect: { value: 1 },
  uStrength: { value: 0 },
  uRadius: { value: ATTRACT_RADIUS },
  uPull: { value: ATTRACT_PULL },
}

// Patches the built-in PointsMaterial so size attenuation, vertex colors and blending stay intact
function injectAttraction(shader) {
  Object.assign(shader.uniforms, STAR_UNIFORMS)
  shader.vertexShader = shader.vertexShader
    .replace('#include <common>', `#include <common>
uniform vec2 uMouse;
uniform float uAspect;
uniform float uStrength;
uniform float uRadius;
uniform float uPull;`)
    .replace('#include <project_vertex>', `#include <project_vertex>
if (gl_Position.w > 0.0) {
  vec2 ndc = gl_Position.xy / gl_Position.w;
  vec2 toMouse = uMouse - ndc;
  float dist = length(vec2(toMouse.x * uAspect, toMouse.y));
  float pull = uStrength * uPull * (1.0 - smoothstep(0.0, uRadius, dist));
  gl_Position.xy = (ndc + toMouse * pull) * gl_Position.w;
}`)
}

function Planet() {
  const groupRef = useRef()
  const ringRef = useRef()

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime()
    groupRef.current.rotation.y = t * 0.1
    groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.05
    groupRef.current.position.x += (pointer.x * 0.6 - groupRef.current.position.x) * 0.02
    groupRef.current.position.y += (pointer.y * 0.4 - groupRef.current.position.y) * 0.02
    ringRef.current.rotation.z = t * 0.05
  })

  return (
    <group ref={groupRef}>
      <Sphere args={[1.2, 64, 64]}>
        <MeshDistortMaterial
          color="#00F5FF"
          transparent
          opacity={0.15}
          wireframe
          distort={0.3}
          speed={1.5}
        />
      </Sphere>
      <Sphere args={[1, 64, 64]}>
        <meshPhongMaterial
          color="#0a1628"
          emissive="#00F5FF"
          emissiveIntensity={0.05}
          transparent
          opacity={0.9}
        />
      </Sphere>
      <Sphere args={[1.01, 64, 64]}>
        <meshBasicMaterial color="#00F5FF" transparent opacity={0.03} wireframe />
      </Sphere>
      {/* atmosphere glow */}
      <Sphere args={[1.15, 32, 32]}>
        <meshBasicMaterial color="#00F5FF" transparent opacity={0.06} side={THREE.BackSide} />
      </Sphere>
      {/* orbital rings */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[1.6, 1.8, 64]} />
        <meshBasicMaterial color="#00F5FF" transparent opacity={0.12} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[Math.PI / 2.5, 0.3, 0]}>
        <ringGeometry args={[2.0, 2.05, 64]} />
        <meshBasicMaterial color="#8B5CF6" transparent opacity={0.06} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

function Stars() {
  const ref = useRef()
  const cursorActive = useRef(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleMove = () => { cursorActive.current = !reducedMotion.matches }
    // relatedTarget is null when the pointer leaves the window (or a touch ends)
    const handleOut = (e) => { if (!e.relatedTarget) cursorActive.current = false }
    window.addEventListener('pointermove', handleMove)
    window.addEventListener('pointerout', handleOut)
    return () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerout', handleOut)
    }
  }, [])

  useFrame(({ clock, pointer, size }, delta) => {
    const t = clock.getElapsedTime()
    ref.current.rotation.y = t * 0.008
    ref.current.rotation.x = Math.sin(t * 0.003) * 0.02

    // Frame-rate independent easing, so the gathering feels the same at 60Hz and 144Hz
    const { uMouse, uAspect, uStrength } = STAR_UNIFORMS
    uMouse.value.lerp(pointer, 1 - Math.exp(-delta * CURSOR_FOLLOW_RATE))
    uStrength.value += ((cursorActive.current ? 1 : 0) - uStrength.value) * (1 - Math.exp(-delta * STRENGTH_RATE))
    uAspect.value = size.width / size.height
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[STAR_DATA.positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[STAR_DATA.colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        onBeforeCompile={injectAttraction}
      />
    </points>
  )
}

function FloatingOrbitals() {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.03
  })

  return (
    <group ref={groupRef}>
      {ORBITALS.map((orb, i) => (
        <OrbitalDot key={i} orb={orb} />
      ))}
    </group>
  )
}

function OrbitalDot({ orb }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    const angle = clock.getElapsedTime() * orb.speed + orb.offset
    ref.current.position.x = Math.cos(angle) * orb.radius
    ref.current.position.z = Math.sin(angle) * orb.radius
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[orb.size, 8, 8]} />
      <meshBasicMaterial color={orb.color} transparent opacity={0.4} />
    </mesh>
  )
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 1.5, 5], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
        // The canvas itself ignores pointer events (UI sits on top), so track the pointer on #root
        eventSource={document.getElementById('root')}
        eventPrefix="client"
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#00F5FF" />
        <pointLight position={[-5, -5, -5]} intensity={0.3} color="#8B5CF6" />
        <directionalLight position={[0, 5, 0]} intensity={0.2} />

        <Stars />
        <FloatingOrbitals />
        <Planet />
      </Canvas>
    </div>
  )
}
