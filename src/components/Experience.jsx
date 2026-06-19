import { useState, useEffect, useRef } from 'react'
import Stars from './Stars'

const EXPERIENCES = [
  {
    role: 'BACKEND ENGINEER',
    company: 'IGB SOFT JSC',
    period: '04/2025 – PRESENT',
    color: '#00F5FF',
    bullets: [
      'Migrating legacy PHP systems to Microservices architecture using NestJS, Kafka, and Redis.',
      'Optimizing API performance and system stability for a large-scale recruitment platform.',
    ],
    tech: ['NestJS', 'PostgreSQL', 'Kafka', 'Redis Cluster', 'Elasticsearch', 'Docker'],
  },
  {
    role: 'FULLSTACK & BLOCKCHAIN DEV',
    company: 'DATH SOLUTIONS JSC',
    period: '07/2024 – 04/2025',
    color: '#9D4EDD',
    bullets: [
      'Developed SocialFi platforms and Telegram MiniApps with real-time features.',
      'Built and deployed Smart Contracts on BNB Chain and Aptos/Movement.',
    ],
    tech: ['NestJS', 'Next.js', 'Solidity', 'Web3', 'PostgreSQL', 'AWS', 'GitHub Actions'],
  },
  {
    role: 'BACKEND ENGINEER',
    company: 'BYTESOFT VIETNAM JSC',
    period: '06/2022 – 07/2024',
    color: '#00F5FF',
    bullets: [
      'Developed business operation software (BOffice) focusing on recruitment and timekeeping modules.',
      'Implemented RESTful APIs, GraphQL, and WebSockets for international markets.',
    ],
    tech: ['NestJS', 'React.js', 'MySQL', 'MongoDB', 'Docker', 'CI/CD'],
  },
]

const TITLE_STYLE = {
  border: '1px solid rgba(0,245,255,0.6)', color: '#00F5FF', fontFamily: 'Orbitron, monospace',
  fontSize: 14, fontWeight: 700, letterSpacing: '0.25em', background: 'rgba(0,245,255,0.04)',
  display: 'inline-block', padding: '8px 32px', boxShadow: '0 0 18px rgba(0,245,255,0.08)',
}

const EARTH = (
  <div style={{ width: '100%', paddingBottom: '100%', position: 'relative', borderRadius: '50%',
    background: 'radial-gradient(circle at 38% 32%, #6ABCFF 0%, #2A80F0 20%, #0A4ABB 45%, #051E5A 70%, #020E30 100%)',
    boxShadow: '0 0 60px 20px rgba(0,130,255,0.38), 0 0 120px 40px rgba(0,70,200,0.2)',
  }}>
    <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'radial-gradient(ellipse at 38% 28%, rgba(140,210,255,0.18) 0%, transparent 50%)' }} />
    <div style={{ position: 'absolute', top: '24%', left: '12%', width: '48%', height: 5, background: 'rgba(255,255,255,0.14)', borderRadius: 9999, filter: 'blur(3px)' }} />
  </div>
)

export default function Experience() {
  const [current, setCurrent] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) ref.current?.classList.add('visible') }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const prev = () => { setCurrent(c => (c - 1 + EXPERIENCES.length) % EXPERIENCES.length); setExpanded(false) }
  const next = () => { setCurrent(c => (c + 1) % EXPERIENCES.length); setExpanded(false) }
  const exp = EXPERIENCES[current]

  return (
    <section
      id="experience"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0D0A2E 0%, #1C0A40 30%, #2A0A5A 60%, #1A0835 100%)' }}
    >
      <Stars count={65} />

      {/* PURPLE ASTEROID ROCKS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
        <svg viewBox="0 0 1440 800" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
          {/* Left purple rocks */}
          <ellipse cx="68" cy="150" rx="65" ry="46" fill="#2A1050" />
          <ellipse cx="60" cy="140" rx="58" ry="41" fill="#3A1860" />
          <ellipse cx="50" cy="130" rx="50" ry="35" fill="#4A2070" />
          <ellipse cx="110" cy="280" rx="48" ry="34" fill="#221040" />
          <ellipse cx="55" cy="400" rx="72" ry="50" fill="#2E1455" />
          <ellipse cx="46" cy="388" rx="64" ry="45" fill="#3E1C68" />
          <ellipse cx="40" cy="376" rx="55" ry="38" fill="#501E7A" />
          <ellipse cx="150" cy="520" rx="40" ry="28" fill="#24103A" />
          <ellipse cx="80" cy="630" rx="56" ry="39" fill="#301258" />
          <ellipse cx="20" cy="720" rx="30" ry="21" fill="#1E0C35" />
          {/* left glow */}
          <ellipse cx="55" cy="378" rx="55" ry="14" fill="rgba(150,80,255,0.06)" />
          <ellipse cx="68" cy="138" rx="48" ry="11" fill="rgba(150,80,255,0.06)" />

          {/* Right purple rocks */}
          <ellipse cx="1372" cy="135" rx="68" ry="48" fill="#2C1255" />
          <ellipse cx="1364" cy="124" rx="61" ry="43" fill="#3C1A65" />
          <ellipse cx="1355" cy="114" rx="52" ry="36" fill="#4E2278" />
          <ellipse cx="1420" cy="265" rx="46" ry="33" fill="#221040" />
          <ellipse cx="1394" cy="390" rx="74" ry="52" fill="#301658" />
          <ellipse cx="1385" cy="378" rx="66" ry="47" fill="#401C70" />
          <ellipse cx="1376" cy="366" rx="57" ry="40" fill="#52207E" />
          <ellipse cx="1305" cy="515" rx="42" ry="29" fill="#261248" />
          <ellipse cx="1430" cy="620" rx="52" ry="36" fill="#321460" />
          <ellipse cx="1290" cy="725" rx="32" ry="22" fill="#200E38" />
          {/* right glow */}
          <ellipse cx="1385" cy="366" rx="57" ry="14" fill="rgba(150,80,255,0.06)" />
          <ellipse cx="1372" cy="122" rx="50" ry="12" fill="rgba(150,80,255,0.06)" />

          {/* top floaters */}
          <ellipse cx="360" cy="50" rx="26" ry="18" fill="#221040" />
          <ellipse cx="760" cy="35" rx="18" ry="12" fill="#1A0C30" />
          <ellipse cx="1100" cy="58" rx="30" ry="20" fill="#221245" />
        </svg>

        {/* Purple ambient glow */}
        <div style={{ position: 'absolute', left: '6%', top: '35%', width: 220, height: 220, background: 'radial-gradient(circle, rgba(123,47,191,0.22) 0%, transparent 70%)', filter: 'blur(30px)' }} />
        <div style={{ position: 'absolute', right: '6%', top: '28%', width: 240, height: 240, background: 'radial-gradient(circle, rgba(157,78,221,0.2) 0%, transparent 70%)', filter: 'blur(30px)' }} />
      </div>

      {/* Earth at bottom */}
      <div className="absolute pointer-events-none" style={{ bottom: -270, left: '50%', transform: 'translateX(-50%)', zIndex: 3, width: 'min(580px, 88vw)' }}>
        {EARTH}
      </div>

      {/* CONTACT ME */}
      <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="absolute top-20 right-6 z-30 transition-colors" style={{ fontFamily: 'Orbitron, monospace', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.45)', background: 'none', border: 'none', cursor: 'pointer' }}
        onMouseEnter={e => e.currentTarget.style.color = '#00F5FF'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}>
        CONTACT ME
      </button>

      <div ref={ref} className="relative section-reveal w-full flex flex-col items-center" style={{ zIndex: 10 }}>
        <div style={{ ...TITLE_STYLE, marginBottom: 56 }}>MY WORK EXPERIENCE</div>

        {/* Navigation + floating big text */}
        <div className="flex items-center justify-center w-full px-6" style={{ gap: 24, maxWidth: 900 }}>
          <button onClick={prev} style={{ flexShrink: 0, width: 44, height: 44, border: '1px solid rgba(0,245,255,0.4)', color: '#00F5FF', background: 'rgba(0,245,255,0.04)', fontSize: 26, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.25s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,245,255,0.12)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,245,255,0.04)'}>
            ‹
          </button>

          <div className="flex-1 text-center">
            {/* Big role text — NO card wrapper, floating */}
            <h3 onClick={() => setExpanded(x => !x)} style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: 'clamp(1.2rem, 3.2vw, 2.4rem)',
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
            <p style={{ fontFamily: 'Orbitron, monospace', fontSize: 'clamp(0.75rem, 1.8vw, 1.1rem)', color: exp.color, letterSpacing: '0.12em', marginBottom: 8 }}>
              @ {exp.company}
            </p>
            <p style={{ fontFamily: 'Orbitron, monospace', fontSize: 'clamp(0.65rem, 1.2vw, 0.85rem)', color: 'rgba(255,255,255,0.38)', letterSpacing: '0.12em', marginBottom: 28 }}>
              {exp.period}
            </p>

            {/* Astronaut floating center */}
            <div className="animate-float" style={{ fontSize: 58, filter: `drop-shadow(0 0 14px ${exp.color}88)`, userSelect: 'none', marginBottom: 24 }}>
              🧑‍🚀
            </div>

            <button onClick={() => setExpanded(x => !x)} style={{
              fontFamily: 'Orbitron, monospace', fontSize: 10, letterSpacing: '0.2em',
              color: exp.color, border: `1px solid ${exp.color}`, background: `${exp.color}0a`,
              padding: '10px 28px', cursor: 'pointer', transition: 'all 0.25s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = `${exp.color}18`}
              onMouseLeave={e => e.currentTarget.style.background = `${exp.color}0a`}
            >
              {expanded ? 'CLOSE ✕' : 'CLICK TO OPEN →'}
            </button>
          </div>

          <button onClick={next} style={{ flexShrink: 0, width: 44, height: 44, border: '1px solid rgba(0,245,255,0.4)', color: '#00F5FF', background: 'rgba(0,245,255,0.04)', fontSize: 26, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.25s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,245,255,0.12)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,245,255,0.04)'}>
            ›
          </button>
        </div>

        {/* Dot indicators */}
        <div style={{ display: 'flex', gap: 8, marginTop: 28, justifyContent: 'center' }}>
          {EXPERIENCES.map((_, i) => (
            <button key={i} onClick={() => { setCurrent(i); setExpanded(false) }}
              style={{ width: i === current ? 24 : 8, height: 8, borderRadius: 4, border: 'none', cursor: 'pointer', transition: 'all 0.3s', background: i === current ? '#00F5FF' : 'rgba(255,255,255,0.2)' }} />
          ))}
        </div>
      </div>

      {/* EXPANDED PANEL — right side */}
      {expanded && (
        <div className="absolute" style={{
          right: '3%', top: '50%', transform: 'translateY(-50%)', zIndex: 20,
          maxWidth: 340, width: '90vw',
          background: 'rgba(10,5,35,0.93)',
          border: `1px solid ${exp.color}44`,
          padding: '24px 28px',
          backdropFilter: 'blur(12px)',
          boxShadow: `0 0 30px ${exp.color}18`,
          animation: 'fadeInUp 0.3s ease-out',
        }}>
          <p style={{ fontFamily: 'Orbitron, monospace', fontSize: 11, color: exp.color, letterSpacing: '0.12em', marginBottom: 4 }}>{exp.role}</p>
          <p style={{ fontFamily: 'Orbitron, monospace', fontSize: 9, color: 'rgba(255,255,255,0.38)', letterSpacing: '0.1em', marginBottom: 16 }}>@ {exp.company} · {exp.period}</p>
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
        </div>
      )}

      <div className="absolute" style={{ bottom: 22, left: 28, zIndex: 20, fontFamily: 'Orbitron, monospace', fontSize: 8, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.28)' }}>PRESS</div>
      <div className="absolute" style={{ bottom: 22, right: 28, zIndex: 20, fontFamily: 'Orbitron, monospace', fontSize: 8, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.28)' }}>SCROLL</div>
    </section>
  )
}
