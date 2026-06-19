import { useEffect, useRef } from 'react'
import Stars from './Stars'

const SKILLS = [
  'NestJS', 'Node.js', 'Express', 'Microservices', 'WebSockets', 'Kafka', 'S3',
  'React.js', 'Next.js', 'TypeScript', 'Ethers.js', 'Web3.js',
  'Solidity', 'Aptos', 'BNB Chain',
  'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Oracle', 'Elasticsearch',
  'Docker', 'GitHub Actions', 'AWS', 'Linux', 'Nginx',
  'GraphQL', 'REST API', 'CI/CD', 'Redis Cluster', 'OpenSearch',
]

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

export default function Skills() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) ref.current?.classList.add('visible') }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #1A0A30 0%, #3A1A08 40%, #1A2208 70%, #0A1205 100%)' }}
    >
      <Stars count={55} />

      {/* MUSHROOM LANDSCAPE — bottom 35% */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 2 }}>
        <svg viewBox="0 0 1440 340" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '310px' }}>
          {/* ── Ground ── */}
          <rect x="0" y="305" width="1440" height="35" fill="#07090400" />
          <path d="M0,325 Q360,295 720,310 Q1080,322 1440,298 L1440,340 L0,340 Z" fill="#060a03" />

          {/* ── Mushroom A (far-left, medium) ── */}
          {/* stem */}
          <rect x="118" y="195" width="20" height="130" fill="#2A1E08" />
          {/* cap layer 3 (darkest, widest) */}
          <ellipse cx="128" cy="192" rx="75" ry="32" fill="#5C3A10" />
          {/* cap layer 2 */}
          <ellipse cx="128" cy="184" rx="70" ry="28" fill="#7A4E14" />
          {/* cap layer 1 (top, brightest) */}
          <ellipse cx="128" cy="177" rx="64" ry="23" fill="#8A5A18" />
          {/* spots */}
          <circle cx="110" cy="172" r="5" fill="rgba(255,220,130,0.28)" />
          <circle cx="140" cy="175" r="4" fill="rgba(255,220,130,0.22)" />
          <circle cx="125" cy="165" r="3" fill="rgba(255,230,150,0.25)" />
          {/* underglow */}
          <ellipse cx="128" cy="192" rx="75" ry="10" fill="rgba(180,140,40,0.08)" />

          {/* ── Mushroom B (center-left, TALLEST) ── */}
          <rect x="358" y="130" width="26" height="195" fill="#241808" />
          <ellipse cx="371" cy="126" rx="105" ry="46" fill="#4A2E08" />
          <ellipse cx="371" cy="116" rx="100" ry="41" fill="#6A4210" />
          <ellipse cx="371" cy="107" rx="94" ry="35" fill="#7C4E14" />
          <circle cx="348" cy="100" r="7" fill="rgba(255,210,110,0.28)" />
          <circle cx="392" cy="104" r="5" fill="rgba(255,220,130,0.22)" />
          <circle cx="370" cy="92" r="4" fill="rgba(255,230,150,0.25)" />
          <ellipse cx="371" cy="126" rx="105" ry="14" fill="rgba(180,140,40,0.07)" />

          {/* ── Mushroom C (center, small) ── */}
          <rect x="660" y="215" width="14" height="110" fill="#2A1E08" />
          <ellipse cx="667" cy="212" rx="58" ry="26" fill="#5C3A10" />
          <ellipse cx="667" cy="205" rx="54" ry="22" fill="#7A4E14" />
          <ellipse cx="667" cy="199" rx="48" ry="18" fill="#8A5A18" />
          <circle cx="655" cy="194" r="4" fill="rgba(255,220,130,0.26)" />
          <circle cx="678" cy="197" r="3" fill="rgba(255,220,130,0.2)" />
          <ellipse cx="667" cy="212" rx="58" ry="9" fill="rgba(180,140,40,0.07)" />

          {/* ── Mushroom D (center-right, LARGE) ── */}
          <rect x="970" y="145" width="24" height="180" fill="#201505" />
          <ellipse cx="982" cy="141" rx="110" ry="48" fill="#452C08" />
          <ellipse cx="982" cy="131" rx="104" ry="43" fill="#60380C" />
          <ellipse cx="982" cy="122" rx="98" ry="37" fill="#724410" />
          <circle cx="955" cy="115" r="8" fill="rgba(255,210,110,0.26)" />
          <circle cx="1008" cy="119" r="6" fill="rgba(255,220,130,0.2)" />
          <circle cx="982" cy="107" r="4" fill="rgba(255,230,150,0.24)" />
          <ellipse cx="982" cy="141" rx="110" ry="15" fill="rgba(180,140,40,0.07)" />

          {/* ── Mushroom E (far-right, medium) ── */}
          <rect x="1282" y="200" width="18" height="125" fill="#241808" />
          <ellipse cx="1291" cy="197" rx="72" ry="30" fill="#5C3A10" />
          <ellipse cx="1291" cy="189" rx="67" ry="26" fill="#7A4E14" />
          <ellipse cx="1291" cy="183" rx="61" ry="21" fill="#8A5A18" />
          <circle cx="1274" cy="177" r="5" fill="rgba(255,220,130,0.26)" />
          <circle cx="1306" cy="180" r="4" fill="rgba(255,220,130,0.2)" />
          <ellipse cx="1291" cy="197" rx="72" ry="10" fill="rgba(180,140,40,0.07)" />

          {/* ── Purple ambient glow at ground ── */}
          <ellipse cx="720" cy="320" rx="600" ry="40" fill="rgba(80,20,140,0.1)" />
        </svg>
      </div>

      {/* Ambient glows behind mushrooms */}
      <div className="absolute pointer-events-none" style={{ bottom: '20%', left: '20%', width: 260, height: 260, background: 'radial-gradient(circle, rgba(123,47,191,0.14) 0%, transparent 70%)', filter: 'blur(35px)' }} />
      <div className="absolute pointer-events-none" style={{ bottom: '20%', right: '18%', width: 240, height: 240, background: 'radial-gradient(circle, rgba(100,60,10,0.18) 0%, transparent 70%)', filter: 'blur(35px)' }} />

      {/* CONTACT ME */}
      <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className="absolute top-20 right-6 z-30 transition-colors" style={{ fontFamily: 'Orbitron, monospace', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.45)', background: 'none', border: 'none', cursor: 'pointer' }}
        onMouseEnter={e => e.currentTarget.style.color = '#00F5FF'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}>
        CONTACT ME
      </button>

      {/* Content */}
      <div ref={ref} className="relative section-reveal text-center px-6 max-w-4xl w-full" style={{ zIndex: 10, paddingBottom: '5rem' }}>
        <div style={TITLE_STYLE}>MY SKILLS</div>

        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '0.95rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.5)', margin: '20px 0 32px', textTransform: 'uppercase' }}>
          HERE IS A LIST OF SOME OF MY SKILLS
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
          {SKILLS.map((s) => (
            <div key={s} className="skill-tag" style={{
              fontFamily: 'Orbitron, monospace', fontSize: 10, fontWeight: 600,
              color: 'rgba(255,255,255,0.85)', letterSpacing: '0.08em',
              padding: '8px 18px', borderRadius: 2,
            }}>
              {s}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute" style={{ bottom: 22, left: 28, zIndex: 20, fontFamily: 'Orbitron, monospace', fontSize: 8, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.28)' }}>PRESS</div>
      <div className="absolute" style={{ bottom: 22, right: 28, zIndex: 20, fontFamily: 'Orbitron, monospace', fontSize: 8, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.28)' }}>SCROLL</div>
    </section>
  )
}
