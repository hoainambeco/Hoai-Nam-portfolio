import { useEffect, useRef } from 'react'

export function useSpaceDrift({ initX = 65, initY = 20 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    let rafId
    const s = {
      x: initX + (Math.random() - 0.5) * 12,
      y: initY + (Math.random() - 0.5) * 12,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      rot: Math.random() * 30 - 15,
      rotV: (Math.random() - 0.5) * 0.12,
    }

    const tick = () => {
      if (Math.random() < 0.007) s.vx += (Math.random() - 0.5) * 0.35
      if (Math.random() < 0.007) s.vy += (Math.random() - 0.5) * 0.35
      if (Math.random() < 0.004) s.rotV += (Math.random() - 0.5) * 0.06

      s.vx = Math.max(-1.0, Math.min(1.0, s.vx))
      s.vy = Math.max(-1.0, Math.min(1.0, s.vy))
      s.rotV = Math.max(-0.2, Math.min(0.2, s.rotV))

      s.x += s.vx * 0.06
      s.y += s.vy * 0.06
      s.rot += s.rotV

      if (s.x < 5)  s.vx += 0.15
      if (s.x > 82) s.vx -= 0.15
      if (s.y < 10) s.vy += 0.15
      if (s.y > 75) s.vy -= 0.15

      if (ref.current) {
        ref.current.style.left = s.x + '%'
        ref.current.style.top = s.y + '%'
        ref.current.style.transform = `rotate(${s.rot}deg)`
      }
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return ref
}
