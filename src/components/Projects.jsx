import { useState, useEffect, useRef } from 'react'
import Stars from './Stars'
import asteroidBg from '../assets/MacBook Pro 16_ - 2.png'
import earthImg from '../assets/Group 3.svg'
import astronautImg from '../assets/Group 15.svg'
import { useSpaceDrift } from '../hooks/useSpaceDrift'
import DetailPanel from './DetailPanel'
import { PROJECTS } from '../data/profile'

const TITLE_STYLE = {
  border: '1px solid rgba(0,245,255,0.6)', color: '#00F5FF', fontFamily: 'Orbitron, monospace',
  fontSize: 14, fontWeight: 700, letterSpacing: '0.25em', background: 'rgba(0,245,255,0.04)',
  display: 'inline-block', padding: '8px 32px', boxShadow: '0 0 18px rgba(0,245,255,0.08)',
}


export default function Projects({ goTo }) {
  const [current, setCurrent] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)
  const astronautRef = useSpaceDrift({ initX: 55, initY: 50 })
  const earthRef = useRef(null)
  const rotVel = useRef(0.03)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) ref.current?.classList.add('visible') }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    let angle = 0
    let rafId
    const BASE = 0.03
    const tick = () => {
      if (rotVel.current > BASE) rotVel.current = Math.max(BASE, rotVel.current * 0.95)
      angle += rotVel.current
      if (earthRef.current) earthRef.current.style.transform = `translateX(-50%) rotate(${angle}deg)`
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  const expandedRef = useRef(false)
  useEffect(() => { expandedRef.current = expanded }, [expanded])

  const autoRef = useRef(null)
  const startAuto = () => {
    clearInterval(autoRef.current)
    autoRef.current = setInterval(() => {
      if (!expandedRef.current) { setCurrent(c => (c + 1) % PROJECTS.length); rotVel.current += 3 }
    }, 4500)
  }
  useEffect(() => { startAuto(); return () => clearInterval(autoRef.current) }, [])

  const prev = () => { setCurrent(c => (c - 1 + PROJECTS.length) % PROJECTS.length); setExpanded(false); rotVel.current += 3; startAuto() }
  const next = () => { setCurrent(c => (c + 1) % PROJECTS.length); setExpanded(false); rotVel.current += 3; startAuto() }
  const p = PROJECTS[current]

  const swipeX = useRef(null)
  const swipeY = useRef(null)
  const handleTouchStart = (e) => { swipeX.current = e.touches[0].clientX; swipeY.current = e.touches[0].clientY }
  const handleTouchEnd = (e) => {
    if (swipeX.current === null) return
    const dx = e.changedTouches[0].clientX - swipeX.current
    const dy = e.changedTouches[0].clientY - swipeY.current
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) { dx < 0 ? next() : prev(); e.stopPropagation() }
    swipeX.current = null
  }

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        backgroundImage: `url(${asteroidBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#080D1E',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(5,8,20,0.6) 0%, rgba(10,5,30,0.35) 50%, rgba(0,0,0,0) 100%)', zIndex: 0 }} />
      <Stars count={50} />

      {/* Earth at bottom — continuously rotates, bursts on item switch */}
      <div ref={earthRef} className="absolute pointer-events-none" style={{ bottom: window.innerWidth < 768 ? -210 : -350, left: '50%', zIndex: 3, width: 'min(520px, 80vw)' }}>
        <img src={earthImg} alt="Earth" style={{ width: '100%', filter: 'drop-shadow(0 0 50px rgba(0,130,255,0.5))' }} />
      </div>

      {/* Astronaut on planet */}
      <div ref={astronautRef} className="absolute pointer-events-none" style={{ left: '55%', top: '50%', zIndex: 8, width: 'min(120px, 14vw)' }}>
        <img src={astronautImg} alt="astronaut" style={{ width: '100%', filter: 'drop-shadow(0 0 14px rgba(0,245,255,0.5))' }} />
      </div>

      {/* CONTACT ME */}
      <button onClick={() => goTo(5)} className="absolute top-20 right-6 z-30 transition-colors" style={{ fontFamily: 'Orbitron, monospace', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.72)', background: 'none', border: 'none', cursor: 'pointer' }}
        onMouseEnter={e => e.currentTarget.style.color = '#00F5FF'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.72)'}>
        CONTACT ME
      </button>

      {/* Main ref wrapper */}
      <div ref={ref} className="relative section-reveal w-full flex flex-col items-center" style={{ zIndex: 10 }}>
        {/* Title */}
        <div style={{ ...TITLE_STYLE, marginBottom: 48 }}>MY PROJECTS</div>

        {/* Project info — centered, no arrows */}
        <div className="text-center w-full px-6" style={{ maxWidth: 680 }}>
          <p style={{ fontFamily: 'Orbitron, monospace', fontSize: 11, letterSpacing: '0.25em', color: 'rgba(0,245,255,0.5)', marginBottom: 16 }}>
            PROJECT {current + 1} / {PROJECTS.length}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 14 }}>
            <h3
              onClick={() => setExpanded(x => !x)}
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: 'clamp(2rem, 7vw, 3.6rem)',
                fontWeight: 800,
                color: p.color,
                letterSpacing: '0.1em',
                textShadow: `0 0 28px ${p.color}88`,
                cursor: 'pointer',
                margin: 0,
                transition: 'all 0.3s',
              }}
            >
              {p.name}
            </h3>
            {p.inactive && (
              <span style={{ fontFamily: 'Orbitron, monospace', fontSize: 7, letterSpacing: '0.15em', color: 'rgba(255,130,130,0.6)', border: '1px solid rgba(255,130,130,0.25)', background: 'rgba(255,80,80,0.05)', padding: '3px 8px', borderRadius: 2, flexShrink: 0 }}>
                OFFLINE
              </span>
            )}
          </div>
          <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '1.25rem', color: 'rgba(255,255,255,0.72)', letterSpacing: '0.1em', marginBottom: 6 }}>
            {p.sub}
          </p>
          <p style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.15em', marginBottom: 28 }}>
            {p.period}
          </p>
          <button onClick={() => setExpanded(x => !x)} style={{
            fontFamily: 'Orbitron, monospace', fontSize: 11, letterSpacing: '0.2em',
            color: p.color, border: `1px solid ${p.color}`, background: `${p.color}0a`,
            padding: '12px 34px', cursor: 'pointer', transition: 'all 0.25s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = `${p.color}18`}
            onMouseLeave={e => e.currentTarget.style.background = `${p.color}0a`}
          >
            {expanded ? 'CLOSE ✕' : 'EXPLORE →'}
          </button>
        </div>

        {/* Dot indicators */}
        <div style={{ display: 'flex', gap: 8, marginTop: 24, justifyContent: 'center' }}>
          {PROJECTS.map((_, i) => (
            <button key={i} onClick={() => { setCurrent(i); setExpanded(false); rotVel.current += 3; startAuto() }}
              style={{ width: i === current ? 24 : 8, height: 8, borderRadius: 4, border: 'none', cursor: 'pointer', transition: 'all 0.3s', background: i === current ? '#00F5FF' : 'rgba(255,255,255,0.50)' }} />
          ))}
        </div>
      </div>

      {/* EXPANDED PANEL */}
      {expanded && <DetailPanel color={p.color} onClose={() => setExpanded(false)}>
        <p style={{ fontFamily: 'Orbitron, monospace', fontSize: 11, color: p.color, letterSpacing: '0.15em', marginBottom: 8, paddingRight: 28 }}>{p.name}</p>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.72)', letterSpacing: '0.08em', marginBottom: 4 }}>{p.sub}</p>
        <p style={{ fontFamily: 'Orbitron, monospace', fontSize: 9, color: 'rgba(255,255,255,0.60)', letterSpacing: '0.1em', marginBottom: 14 }}>{p.period}</p>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, marginBottom: 16 }}>{p.description}</p>
        {p.award && <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '0.9rem', color: '#FFD700', marginBottom: 14 }}>{p.award}</p>}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
          {p.tech.map(t => (
            <span key={t} style={{ fontFamily: 'Orbitron, monospace', fontSize: 8, border: `1px solid ${p.color}55`, color: p.color, background: `${p.color}0a`, padding: '4px 10px', borderRadius: 2 }}>{t}</span>
          ))}
        </div>
        {p.link && (
          <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Orbitron, monospace', fontSize: 9, color: p.color, letterSpacing: '0.15em', textDecoration: 'none', borderBottom: `1px solid ${p.color}44`, paddingBottom: 2 }}>
            VISIT PROJECT →
          </a>
        )}
      </DetailPanel>}

    </section>
  )
}
