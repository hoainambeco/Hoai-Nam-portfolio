import { useState, useEffect, useRef } from 'react'
import Stars from './Stars'

const PROJECTS = [
  {
    id: 1,
    name: 'CAREERVIET',
    sub: 'Recruitment Platform',
    period: '04/2025 – PRESENT',
    color: '#00F5FF',
    description: 'Migration of a complex legacy PHP monolith to NestJS Microservices architecture. Engineered Event-Driven Architecture with Kafka and Saga Pattern for distributed transactions across PostgreSQL, MongoDB, and Oracle. Migrated from Solr to Elasticsearch and deployed Kong Gateway + Redis Cluster for high-availability caching.',
    tech: ['NestJS', 'Microservices', 'Kafka', 'Redis Cluster', 'Elasticsearch', 'PostgreSQL', 'MongoDB', 'Oracle', 'Kong Gateway', 'Docker'],
    github: 'https://github.com/hoainambeco',
  },
  {
    id: 2,
    name: 'ACANET',
    sub: 'SocialFi & Telegram MiniApp',
    period: '07/2024 – 04/2025',
    color: '#9D4EDD',
    description: 'SocialFi network and Telegram mini-app to automate and manage high-volume airdrop campaigns. Developed and deployed Smart Contracts on BNB Chain and Aptos/Movement using Solidity. Built real-time features with WebSockets and Bull queue for token distribution.',
    tech: ['NestJS', 'Next.js', 'Solidity', 'Web3', 'PostgreSQL', 'OpenSearch', 'AWS (EC2, ECR, S3)'],
    github: 'https://github.com/hoainambeco',
  },
  {
    id: 3,
    name: 'BOFFICE',
    sub: 'Business Management',
    period: '07/2022 – 07/2024',
    color: '#00F5FF',
    description: 'Core modules for recruitment, timekeeping, and library functions for domestic and international markets. Implemented real-time updates using WebSockets, Swagger API documentation, and managed deployment with Docker, Nginx, and GitLab Runner.',
    tech: ['NestJS', 'MySQL', 'Redis', 'WebSockets', 'React.js', 'Docker', 'Nginx'],
    github: 'https://github.com/hoainambeco',
  },
  {
    id: 4,
    name: 'BVOTE',
    sub: 'Online Voting Platform',
    period: '10/2022 – 12/2024',
    color: '#7B2FBF',
    description: 'Secure online General Meeting of Shareholders (GMS) platform with MERN stack. Engineered RBAC system and real-time voting with Socket.io and WebSockets for concurrent users. Runner-up at Movement Olympus Hackathon.',
    tech: ['MongoDB', 'Express.js', 'React.js', 'Redux', 'Node.js', 'Socket.io', 'Redis', 'Docker', 'Nginx'],
    github: 'https://github.com/hoainambeco',
    award: '🏆 Runner-up – Movement Olympus Hackathon',
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
    boxShadow: '0 0 60px 20px rgba(0,130,255,0.4), 0 0 120px 40px rgba(0,70,200,0.22)',
  }}>
    <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'radial-gradient(ellipse at 38% 28%, rgba(140,210,255,0.2) 0%, transparent 50%)' }} />
    <div style={{ position: 'absolute', top: '22%', left: '10%', width: '50%', height: 5, background: 'rgba(255,255,255,0.15)', borderRadius: 9999, filter: 'blur(3px)' }} />
    <div style={{ position: 'absolute', top: '40%', left: '18%', width: '62%', height: 4, background: 'rgba(255,255,255,0.1)', borderRadius: 9999, filter: 'blur(3px)' }} />
  </div>
)

export default function Projects() {
  const [current, setCurrent] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) ref.current?.classList.add('visible') }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const prev = () => { setCurrent(c => (c - 1 + PROJECTS.length) % PROJECTS.length); setExpanded(false) }
  const next = () => { setCurrent(c => (c + 1) % PROJECTS.length); setExpanded(false) }
  const p = PROJECTS[current]

  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #080D1E 0%, #0D0820 50%, #100828 100%)' }}
    >
      <Stars count={75} />

      {/* ASTEROID ROCKS — left column */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 2 }}>
        <svg viewBox="0 0 1440 800" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
          {/* Left rocks */}
          <ellipse cx="75" cy="145" rx="68" ry="48" fill="#201830" />
          <ellipse cx="68" cy="136" rx="62" ry="43" fill="#2A2040" />
          <ellipse cx="50" cy="295" rx="44" ry="32" fill="#1A1228" />
          <ellipse cx="130" cy="365" rx="78" ry="54" fill="#221838" />
          <ellipse cx="122" cy="355" rx="72" ry="49" fill="#2C2048" />
          <ellipse cx="45" cy="490" rx="50" ry="36" fill="#1C1430" />
          <ellipse cx="155" cy="580" rx="60" ry="42" fill="#241838" />
          <ellipse cx="20" cy="660" rx="35" ry="25" fill="#181028" />
          <ellipse cx="110" cy="710" rx="55" ry="38" fill="#201530" />
          {/* left highlights */}
          <ellipse cx="75" cy="133" rx="45" ry="11" fill="rgba(255,255,255,0.035)" />
          <ellipse cx="130" cy="344" rx="52" ry="12" fill="rgba(255,255,255,0.03)" />
          {/* Right rocks */}
          <ellipse cx="1365" cy="130" rx="70" ry="50" fill="#201830" />
          <ellipse cx="1358" cy="120" rx="64" ry="45" fill="#2C2248" />
          <ellipse cx="1415" cy="260" rx="46" ry="33" fill="#1A1228" />
          <ellipse cx="1385" cy="380" rx="80" ry="56" fill="#241840" />
          <ellipse cx="1376" cy="369" rx="73" ry="51" fill="#302250" />
          <ellipse cx="1430" cy="500" rx="42" ry="30" fill="#1C1430" />
          <ellipse cx="1300" cy="590" rx="58" ry="40" fill="#221838" />
          <ellipse cx="1440" cy="680" rx="38" ry="26" fill="#181028" />
          <ellipse cx="1360" cy="118" rx="46" ry="12" fill="rgba(255,255,255,0.035)" />
          <ellipse cx="1385" cy="357" rx="54" ry="13" fill="rgba(255,255,255,0.03)" />
          {/* top floaters */}
          <ellipse cx="380" cy="55" rx="28" ry="19" fill="#1A1228" />
          <ellipse cx="720" cy="38" rx="20" ry="14" fill="#181028" />
          <ellipse cx="1060" cy="60" rx="32" ry="22" fill="#1A1230" />
        </svg>
      </div>

      {/* Earth at bottom */}
      <div className="absolute pointer-events-none" style={{ bottom: -270, left: '50%', transform: 'translateX(-50%)', zIndex: 3, width: 'min(580px, 88vw)' }}>
        {EARTH}
      </div>

      {/* Astronaut on planet */}
      <div className="absolute animate-float" style={{ bottom: '10%', left: '50%', transform: 'translateX(-50%)', fontSize: 56, zIndex: 8, filter: 'drop-shadow(0 0 14px rgba(0,245,255,0.5))', userSelect: 'none' }}>
        🧑‍🚀
      </div>

      {/* CONTACT ME */}
      <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="absolute top-20 right-6 z-30 transition-colors" style={{ fontFamily: 'Orbitron, monospace', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.45)', background: 'none', border: 'none', cursor: 'pointer' }}
        onMouseEnter={e => e.currentTarget.style.color = '#00F5FF'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}>
        CONTACT ME
      </button>

      {/* Main ref wrapper */}
      <div ref={ref} className="relative section-reveal w-full flex flex-col items-center" style={{ zIndex: 10 }}>
        {/* Title */}
        <div style={{ ...TITLE_STYLE, marginBottom: 48 }}>MY PROJECTS</div>

        {/* Navigation arrows + floating project name */}
        <div className="flex items-center justify-center w-full px-6" style={{ gap: 24, maxWidth: 900 }}>
          <button onClick={prev} style={{ flexShrink: 0, width: 44, height: 44, border: '1px solid rgba(0,245,255,0.4)', color: '#00F5FF', background: 'rgba(0,245,255,0.04)', fontSize: 26, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.25s' }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,245,255,0.12)'} onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,245,255,0.04)'}>
            ‹
          </button>

          {/* Floating project title — NO card wrapper */}
          <div className="flex-1 text-center">
            <p style={{ fontFamily: 'Orbitron, monospace', fontSize: 10, letterSpacing: '0.25em', color: 'rgba(0,245,255,0.5)', marginBottom: 10 }}>
              PROJECT {current + 1} / {PROJECTS.length}
            </p>
            <h3
              onClick={() => setExpanded(x => !x)}
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: 'clamp(1rem, 2.8vw, 2rem)',
                fontWeight: 800,
                color: p.color,
                letterSpacing: '0.1em',
                textShadow: `0 0 20px ${p.color}88`,
                cursor: 'pointer',
                marginBottom: 8,
                transition: 'all 0.3s',
              }}
            >
              {p.name}
            </h3>
            <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '0.95rem', color: 'rgba(255,255,255,0.42)', letterSpacing: '0.12em', marginBottom: 20 }}>
              {p.sub} · {p.period}
            </p>
            <button onClick={() => setExpanded(x => !x)} style={{
              fontFamily: 'Orbitron, monospace', fontSize: 10, letterSpacing: '0.2em',
              color: p.color, border: `1px solid ${p.color}`, background: `${p.color}0a`,
              padding: '10px 28px', cursor: 'pointer', transition: 'all 0.25s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = `${p.color}18`}
              onMouseLeave={e => e.currentTarget.style.background = `${p.color}0a`}
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
        <div style={{ display: 'flex', gap: 8, marginTop: 24, justifyContent: 'center' }}>
          {PROJECTS.map((_, i) => (
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
          background: 'rgba(8,8,30,0.92)',
          border: `1px solid ${p.color}44`,
          padding: '24px 28px',
          backdropFilter: 'blur(12px)',
          boxShadow: `0 0 30px ${p.color}18`,
          animation: 'fadeInUp 0.3s ease-out',
        }}>
          <p style={{ fontFamily: 'Orbitron, monospace', fontSize: 11, color: p.color, letterSpacing: '0.15em', marginBottom: 8 }}>{p.name}</p>
          <p style={{ fontFamily: 'Orbitron, monospace', fontSize: 9, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', marginBottom: 14 }}>{p.sub} · {p.period}</p>
          <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '0.95rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.65, marginBottom: 16 }}>{p.description}</p>
          {p.award && <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '0.9rem', color: '#FFD700', marginBottom: 14 }}>{p.award}</p>}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
            {p.tech.map(t => (
              <span key={t} style={{ fontFamily: 'Orbitron, monospace', fontSize: 8, border: `1px solid ${p.color}55`, color: p.color, background: `${p.color}0a`, padding: '4px 10px', borderRadius: 2 }}>{t}</span>
            ))}
          </div>
          <a href={p.github} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'Orbitron, monospace', fontSize: 9, color: p.color, letterSpacing: '0.15em', textDecoration: 'none', borderBottom: `1px solid ${p.color}44`, paddingBottom: 2 }}>
            VIEW ON GITHUB →
          </a>
        </div>
      )}

      <div className="absolute" style={{ bottom: 22, left: 28, zIndex: 20, fontFamily: 'Orbitron, monospace', fontSize: 8, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.28)' }}>PRESS</div>
      <div className="absolute" style={{ bottom: 22, right: 28, zIndex: 20, fontFamily: 'Orbitron, monospace', fontSize: 8, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.28)' }}>SCROLL</div>
    </section>
  )
}
