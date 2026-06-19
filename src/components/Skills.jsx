import { useEffect, useRef } from 'react'
import Stars from './Stars'
import mushroomBg from '../assets/MacBook Pro 16_ - 3.png'
import astronautLaptop from '../assets/Group 6.svg'
import { useSpaceDrift } from '../hooks/useSpaceDrift'
import { SKILLS } from '../data/profile'

const TITLE_STYLE = {
  border: '1px solid rgba(0,245,255,0.6)',
  color: '#00F5FF',
  fontFamily: 'Orbitron, monospace',
  fontSize: 14,
  fontWeight: 700,
  letterSpacing: '0.25em',
  background: 'rgba(0,245,255,0.04)',
  display: 'inline-block',
  padding: '8px 32px',
  boxShadow: '0 0 18px rgba(0,245,255,0.08)',
}

export default function Skills({ goTo }) {
  const ref = useRef(null)
  const astronautRef = useSpaceDrift({ initX: 62, initY: 25 })
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) ref.current?.classList.add('visible') }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${mushroomBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
        backgroundColor: '#1A0A30',
      }}
    >
      {/* Dark overlay so text stays readable at top */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(18,6,30,0.82) 0%, rgba(10,18,5,0.45) 55%, rgba(0,0,0,0) 100%)', zIndex: 0 }} />
      <Stars count={40} />

      {/* Floating astronaut with laptop */}
      <div ref={astronautRef} className="absolute pointer-events-none" style={{ left: '62%', top: '25%', zIndex: 8, width: 'min(160px, 18vw)' }}>
        <img src={astronautLaptop} alt="astronaut" style={{ width: '100%', filter: 'drop-shadow(0 0 14px rgba(0,245,255,0.4))' }} />
      </div>

      {/* CONTACT ME */}
      <button onClick={() => goTo(5)} className="absolute top-20 right-6 z-30 transition-colors" style={{ fontFamily: 'Orbitron, monospace', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.72)', background: 'none', border: 'none', cursor: 'pointer' }}
        onMouseEnter={e => e.currentTarget.style.color = '#00F5FF'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.72)'}>
        CONTACT ME
      </button>

      {/* Content */}
      <div ref={ref} className="relative section-reveal text-center px-6 max-w-4xl w-full" style={{ zIndex: 10, paddingBottom: '5rem' }}>
        <div style={TITLE_STYLE}>MY SKILLS</div>

        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '0.95rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.5)', margin: '20px 0 32px', textTransform: 'uppercase' }}>
          HERE IS A LIST OF SOME OF MY SKILLS
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
          {SKILLS.map((s, i) => {
            const even = i % 2 === 0
            return (
              <div key={s} className="skill-tag" style={{
                fontFamily: 'Orbitron, monospace', fontSize: 10, fontWeight: 600,
                letterSpacing: '0.08em', padding: '8px 18px', borderRadius: 2,
                color: even ? '#00F5FF' : '#FF9F43',
                borderColor: even ? 'rgba(0,245,255,0.35)' : 'rgba(255,159,67,0.35)',
                background: even ? 'rgba(0,245,255,0.05)' : 'rgba(255,159,67,0.05)',
              }}>
                {s}
              </div>
            )
          })}
        </div>
      </div>

    </section>
  )
}
