import { useState, useEffect, useRef } from 'react'
import Stars from './Stars'
import experienceBg from '../assets/MacBook Pro 16_ - 1.png'
import earthImg from '../assets/Group 3.svg'
import astronautImg from '../assets/Group 15.svg'
import { useSpaceDrift } from '../hooks/useSpaceDrift'
import { useIsMobile } from '../hooks/useIsMobile'
import { TITLE_STYLE, CONTACT_ME_BTN } from '../styles/shared'
import DetailPanel from './DetailPanel'
import { EXPERIENCES } from '../data/profile'


export default function Experience({ goTo }) {
  const [current, setCurrent] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const astronautRef = useSpaceDrift({ initX: 30, initY: 30 })
  const earthRef = useRef(null)
  const rotVel = useRef(0.03)
  const isMobile = useIsMobile()

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
      if (!expandedRef.current) { setCurrent(c => (c + 1) % EXPERIENCES.length); rotVel.current += 3 }
    }, 4500)
  }
  useEffect(() => { startAuto(); return () => clearInterval(autoRef.current) }, [])

  const prev = () => { setCurrent(c => (c - 1 + EXPERIENCES.length) % EXPERIENCES.length); setExpanded(false); rotVel.current += 3; startAuto() }
  const next = () => { setCurrent(c => (c + 1) % EXPERIENCES.length); setExpanded(false); rotVel.current += 3; startAuto() }
  const exp = EXPERIENCES[current]

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
      id="experience"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        backgroundImage: `url(${experienceBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#0D0A2E',
      }}
    >
      {/* Dark purple overlay for experience vibe */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(13,8,46,0.65) 0%, rgba(30,8,80,0.4) 50%, rgba(0,0,0,0) 100%)', zIndex: 0 }} />
      <Stars count={50} />

      {/* Purple ambient glow */}
      <div className="absolute pointer-events-none" style={{ left: '6%', top: '35%', width: 220, height: 220, background: 'radial-gradient(circle, rgba(123,47,191,0.22) 0%, transparent 70%)', filter: 'blur(30px)', zIndex: 1 }} />
      <div className="absolute pointer-events-none" style={{ right: '6%', top: '28%', width: 240, height: 240, background: 'radial-gradient(circle, rgba(157,78,221,0.2) 0%, transparent 70%)', filter: 'blur(30px)', zIndex: 1 }} />

      {/* Floating astronaut */}
      <div ref={astronautRef} className="absolute pointer-events-none" style={{ left: '30%', top: '30%', zIndex: 8, width: 'min(130px, 16vw)' }}>
        <img src={astronautImg} alt="astronaut" style={{ width: '100%', filter: 'drop-shadow(0 0 14px rgba(0,245,255,0.5))' }} />
      </div>

      {/* Earth at bottom — rotates with current experience */}
      <div ref={earthRef} className="absolute pointer-events-none" style={{ bottom: isMobile ? -210 : -350, left: '50%', zIndex: 3, width: 'min(520px, 80vw)' }}>
        <img src={earthImg} alt="Earth" style={{ width: '100%', filter: 'drop-shadow(0 0 50px rgba(0,130,255,0.5))' }} />
      </div>

      {/* CONTACT ME */}
      <button onClick={() => goTo(5)} className="absolute top-20 right-6 z-30" style={CONTACT_ME_BTN}
        onMouseEnter={e => e.currentTarget.style.color = '#00F5FF'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.72)'}>
        CONTACT ME
      </button>

      <div className="relative w-full flex flex-col items-center" style={{ zIndex: 10 }}>
        <div style={{ ...TITLE_STYLE, marginBottom: 56 }}>MY WORK EXPERIENCE</div>

        {/* Experience info — centered, no arrows */}
        <div className="text-center w-full px-6" style={{ maxWidth: 600 }}>
          <h3 onClick={() => setExpanded(x => !x)} style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: 'clamp(1.6rem, 5vw, 2.8rem)',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '0.08em',
            lineHeight: 1.15,
            cursor: 'pointer',
            marginBottom: 14,
            transition: 'color 0.25s',
          }}
            onMouseEnter={e => e.currentTarget.style.color = exp.color}
            onMouseLeave={e => e.currentTarget.style.color = '#FFFFFF'}
          >
            {exp.role}
          </h3>
          <p style={{ fontFamily: 'Orbitron, monospace', fontSize: 'clamp(0.85rem, 2.2vw, 1.2rem)', color: exp.color, letterSpacing: '0.12em', marginBottom: 8 }}>
            @ {exp.company}
          </p>
          <p style={{ fontFamily: 'Orbitron, monospace', fontSize: 'clamp(0.7rem, 1.4vw, 0.9rem)', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.12em', marginBottom: 28 }}>
            {exp.period}
          </p>
          <button onClick={() => setExpanded(x => !x)} style={{
            fontFamily: 'Orbitron, monospace', fontSize: 10, letterSpacing: '0.2em',
            color: exp.color, border: `1px solid ${exp.color}`, background: `${exp.color}0a`,
            padding: '10px 28px', cursor: 'pointer', transition: 'all 0.25s',
          }}
            onMouseEnter={e => e.currentTarget.style.background = `${exp.color}18`}
            onMouseLeave={e => e.currentTarget.style.background = `${exp.color}0a`}
          >
            {expanded ? 'CLOSE ✕' : 'EXPLORE →'}
          </button>
        </div>

        {/* Dot indicators */}
        <div style={{ display: 'flex', gap: 8, marginTop: 28, justifyContent: 'center' }}>
          {EXPERIENCES.map((_, i) => (
            <button key={i} onClick={() => { setCurrent(i); setExpanded(false); rotVel.current += 3; startAuto() }}
              style={{ width: i === current ? 24 : 8, height: 8, borderRadius: 4, border: 'none', cursor: 'pointer', transition: 'all 0.3s', background: i === current ? '#00F5FF' : 'rgba(255,255,255,0.50)' }} />
          ))}
        </div>
      </div>

      {/* EXPANDED PANEL — right side */}
      {expanded && <DetailPanel color={exp.color} onClose={() => setExpanded(false)}>
        <p style={{ fontFamily: 'Orbitron, monospace', fontSize: 11, color: exp.color, letterSpacing: '0.12em', marginBottom: 4, paddingRight: 28 }}>{exp.role}</p>
        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.72)', letterSpacing: '0.08em', marginBottom: 4 }}>@ {exp.company}</p>
        <p style={{ fontFamily: 'Orbitron, monospace', fontSize: 9, color: 'rgba(255,255,255,0.60)', letterSpacing: '0.1em', marginBottom: 16 }}>{exp.period}</p>
        <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: 16 }}>
          {exp.bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
              <span style={{ color: exp.color, flexShrink: 0, marginTop: 3 }}>›</span>
              <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{b}</span>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {exp.tech.map(t => (
            <span key={t} style={{ fontFamily: 'Orbitron, monospace', fontSize: 8, border: `1px solid ${exp.color}55`, color: exp.color, background: `${exp.color}0a`, padding: '4px 10px', borderRadius: 2 }}>{t}</span>
          ))}
        </div>
      </DetailPanel>}

    </section>
  )
}
