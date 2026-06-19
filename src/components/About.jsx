import { useEffect, useRef } from 'react'
import Stars from './Stars'
import earthImg from '../assets/Group 3.svg'
import astronautImg from '../assets/Group 6.svg'
import { useSpaceDrift } from '../hooks/useSpaceDrift'
import { NAME, ROLE, BIO, STATS, LOCATION, AVAILABLE } from '../data/profile'

const TITLE_STYLE = {
  border: '1px solid rgba(0,245,255,0.6)', color: '#00F5FF', fontFamily: 'Orbitron, monospace',
  fontSize: 14, fontWeight: 700, letterSpacing: '0.25em', background: 'rgba(0,245,255,0.04)',
  display: 'inline-block', padding: '8px 32px', boxShadow: '0 0 18px rgba(0,245,255,0.08)',
  flexShrink: 0,
}

function BioContent({ text }) {
  const lines = text.split('\n')
  const elements = []
  let bulletGroup = []

  const flushBullets = (key) => {
    if (bulletGroup.length === 0) return
    elements.push(
      <ul key={`ul-${key}`} style={{ listStyle: 'none', padding: 0, margin: '6px 0', textAlign: 'left' }}>
        {bulletGroup.map((b, i) => (
          <li key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
            <span style={{ color: '#00F5FF', flexShrink: 0 }}>›</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    )
    bulletGroup = []
  }

  lines.forEach((line, i) => {
    const trimmed = line.trim()
    if (!trimmed) {
      flushBullets(i)
      return
    }
    if (trimmed.startsWith('-')) {
      bulletGroup.push(trimmed.slice(1).trim())
    } else {
      flushBullets(i)
      elements.push(
        <p key={i} style={{ margin: '0 0 10px' }}>{trimmed}</p>
      )
    }
  })
  flushBullets('end')

  return <>{elements}</>
}

export default function About({ goTo }) {
  const astronautRef = useSpaceDrift({ initX: 72, initY: 18 })
  const earthRef = useRef(null)

  useEffect(() => {
    let angle = 0, rafId
    const tick = () => {
      angle += 0.03
      if (earthRef.current) earthRef.current.style.transform = `translateX(-50%) rotate(${angle}deg)`
      rafId = requestAnimationFrame(tick)
    }
    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #050520 0%, #0B0830 35%, #0D1540 70%, #080C28 100%)' }}
    >
      <Stars count={90} />

      {/* Nebula glows */}
      <div className="absolute pointer-events-none" style={{ width: 500, height: 500, top: '-10%', left: '-8%', background: 'radial-gradient(circle, rgba(0,80,200,0.2) 0%, transparent 65%)', filter: 'blur(30px)' }} />
      <div className="absolute pointer-events-none" style={{ width: 400, height: 400, bottom: '10%', right: '-6%', background: 'radial-gradient(circle, rgba(255,159,67,0.12) 0%, transparent 65%)', filter: 'blur(35px)' }} />

      {/* Floating astronaut */}
      <div ref={astronautRef} className="absolute pointer-events-none" style={{ left: '72%', top: '18%', zIndex: 8, width: 'min(130px, 15vw)' }}>
        <img src={astronautImg} alt="astronaut" style={{ width: '100%', filter: 'drop-shadow(0 0 14px rgba(0,245,255,0.45))' }} />
      </div>

      {/* Earth at bottom */}
      <div ref={earthRef} className="absolute pointer-events-none" style={{ bottom: window.innerWidth < 768 ? -220 : -400, left: '50%', zIndex: 3, width: 'min(560px, 85vw)' }}>
        <img src={earthImg} alt="Earth" style={{ width: '100%', filter: 'drop-shadow(0 0 60px rgba(0,130,255,0.5))' }} />
      </div>

      {/* CONTACT ME */}
      <button onClick={() => goTo(5)} className="absolute top-20 right-6 z-30" style={{ fontFamily: 'Orbitron, monospace', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.72)', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.25s' }}
        onMouseEnter={e => e.currentTarget.style.color = '#00F5FF'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.72)'}>
        CONTACT ME
      </button>

      {/* Scrollable content column */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 10,
        overflowY: 'auto', overflowX: 'hidden',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        paddingTop: 'clamp(72px, 12vh, 100px)',
        paddingBottom: 'clamp(60px, 12vh, 100px)',
        paddingLeft: 24, paddingRight: 24,
      }}>
        <div style={{ width: '100%', maxWidth: 680 }}>

          {/* Title + name */}
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div style={{ ...TITLE_STYLE, marginBottom: 28 }}>MY STORY</div>
            <h2 style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: 'clamp(1.5rem, 5vw, 3rem)',
              fontWeight: 900, color: '#FFFFFF',
              letterSpacing: '0.08em', lineHeight: 1.1, marginBottom: 12,
            }}>
              {NAME}
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'Orbitron, monospace', fontSize: 'clamp(0.6rem, 1.8vw, 0.85rem)', color: '#00F5FF', letterSpacing: '0.2em' }}>
                {ROLE}
              </span>
              {AVAILABLE && (
                <span style={{ fontFamily: 'Orbitron, monospace', fontSize: 8, letterSpacing: '0.15em', color: 'rgba(80,255,150,0.85)', border: '1px solid rgba(80,255,150,0.3)', background: 'rgba(80,255,150,0.06)', padding: '3px 10px', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 5 }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(80,255,150,0.9)', display: 'inline-block', boxShadow: '0 0 6px rgba(80,255,150,0.8)' }} />
                  OPEN TO WORK
                </span>
              )}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(0,245,255,0.3), transparent)', marginBottom: 24 }} />

          {/* Bio */}
          <div style={{
            fontFamily: 'Rajdhani, sans-serif',
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: 'rgba(255,255,255,0.72)',
            lineHeight: 1.8,
            marginBottom: 28,
          }}>
            <BioContent text={BIO} />
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'linear-gradient(to right, transparent, rgba(0,245,255,0.3), transparent)', marginBottom: 24 }} />

          {/* Stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(8px,2.5vw,16px)', flexWrap: 'wrap', marginBottom: 20 }}>
            {STATS.map((s, i) => (
              <div key={i} style={{
                border: `1px solid ${i % 2 === 0 ? 'rgba(0,245,255,0.25)' : 'rgba(255,159,67,0.25)'}`,
                background: i % 2 === 0 ? 'rgba(0,245,255,0.04)' : 'rgba(255,159,67,0.04)',
                padding: 'clamp(10px,2vw,14px) clamp(12px,2.5vw,20px)',
                textAlign: 'center', minWidth: 76,
              }}>
                <div style={{ fontFamily: 'Orbitron, monospace', fontSize: 'clamp(0.9rem, 2.5vw, 1.4rem)', fontWeight: 800, color: i % 2 === 0 ? '#00F5FF' : '#FF9F43', letterSpacing: '0.05em', marginBottom: 4 }}>{s.value}</div>
                <div style={{ fontFamily: 'Orbitron, monospace', fontSize: 'clamp(7px, 1.1vw, 9px)', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.16em' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Location */}
          <p style={{ textAlign: 'center', fontFamily: 'Orbitron, monospace', fontSize: 9, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.4)', marginBottom: 28 }}>
            📍 {LOCATION}
          </p>

          {/* CV buttons */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/portfolio/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Orbitron, monospace', fontSize: 10, letterSpacing: '0.2em',
                color: '#00F5FF', border: '1px solid #00F5FF', background: 'rgba(0,245,255,0.06)',
                padding: '11px 28px', cursor: 'pointer', textDecoration: 'none', display: 'inline-block',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,245,255,0.14)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,245,255,0.06)'}
            >
              VIEW CV →
            </a>
            <a
              href="/portfolio/cv.pdf"
              download="Nguyen_Hoai_Nam_CV.pdf"
              style={{
                fontFamily: 'Orbitron, monospace', fontSize: 10, letterSpacing: '0.2em',
                color: 'rgba(255,255,255,0.72)', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.04)',
                padding: '11px 28px', cursor: 'pointer', textDecoration: 'none', display: 'inline-block',
                transition: 'all 0.25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.09)'; e.currentTarget.style.color = '#fff' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'rgba(255,255,255,0.72)' }}
            >
              ↓ DOWNLOAD
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
