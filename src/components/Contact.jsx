import { useState, useEffect, useRef } from 'react'
import Stars from './Stars'
import astronautCoin from '../assets/Group 28.svg'
import { useSpaceDrift } from '../hooks/useSpaceDrift'
import { TITLE_STYLE } from '../styles/shared'
import { SOCIAL } from '../data/profile'

const EMAIL_TO = 'namxg1@gmail.com'

export default function Contact({ goTo, isActive }) {
  const [form, setForm] = useState({ email: '', subject: '', content: '' })
  const [sent, setSent] = useState(false)
  const ref = useRef(null)
  const hasRevealed = useRef(false)
  const astronautRef = useSpaceDrift({ initX: 65, initY: 45 })

  useEffect(() => {
    if (isActive && !hasRevealed.current) {
      hasRevealed.current = true
      const t = setTimeout(() => ref.current?.classList.add('visible'), 80)
      return () => clearTimeout(t)
    }
  }, [isActive])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = `From: ${form.email}\n\n${form.content}`
    window.open(`mailto:${EMAIL_TO}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`)
    setSent(true)
    setForm({ email: '', subject: '', content: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0D0820 0%, #080A30 50%, #050618 100%)' }}
    >
      <Stars count={80} />

      {/* ── CAVE STALACTITES — hanging from top ── */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{ zIndex: 2 }}>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '160px' }}>
          <polygon points="0,0 0,140 28,0" fill="#120828" />
          <polygon points="60,0 90,110 30,0" fill="#1A0A35" />
          <polygon points="130,0 155,90 105,0" fill="#140830" />
          <polygon points="200,0 230,130 170,0" fill="#12082A" />
          <polygon points="280,0 298,70 262,0" fill="#1A0A38" />
          <polygon points="360,0 388,115 332,0" fill="#160932" />
          <polygon points="440,0 458,80 422,0" fill="#120828" />
          <polygon points="510,0 540,125 480,0" fill="#1C0B3A" />
          <polygon points="610,0 628,65 592,0" fill="#140930" />
          <polygon points="680,0 710,140 650,0" fill="#180A35" />
          <polygon points="760,0 778,85 742,0" fill="#120828" />
          <polygon points="840,0 868,120 812,0" fill="#1A0A38" />
          <polygon points="930,0 948,72 912,0" fill="#140830" />
          <polygon points="1000,0 1028,130 972,0" fill="#1C0B3C" />
          <polygon points="1090,0 1108,68 1072,0" fill="#120828" />
          <polygon points="1160,0 1190,118 1130,0" fill="#180A35" />
          <polygon points="1250,0 1268,78 1232,0" fill="#14082E" />
          <polygon points="1330,0 1358,125 1302,0" fill="#1A0A38" />
          <polygon points="1410,0 1440,0 1440,100 1440,0" fill="#120828" />
          <circle cx="90" cy="110" r="3.5" fill="rgba(157,78,221,0.55)" />
          <circle cx="230" cy="130" r="4" fill="rgba(0,245,255,0.4)" />
          <circle cx="388" cy="115" r="3" fill="rgba(157,78,221,0.45)" />
          <circle cx="540" cy="124" r="4" fill="rgba(0,245,255,0.35)" />
          <circle cx="710" cy="139" r="4.5" fill="rgba(157,78,221,0.5)" />
          <circle cx="868" cy="119" r="3.5" fill="rgba(0,245,255,0.38)" />
          <circle cx="1028" cy="129" r="4" fill="rgba(157,78,221,0.42)" />
          <circle cx="1190" cy="117" r="3.5" fill="rgba(0,245,255,0.35)" />
          <circle cx="1358" cy="124" r="4" fill="rgba(157,78,221,0.45)" />
          <ellipse cx="230" cy="125" rx="22" ry="8" fill="rgba(157,78,221,0.12)" />
          <ellipse cx="710" cy="135" rx="28" ry="10" fill="rgba(157,78,221,0.12)" />
          <ellipse cx="1028" cy="125" rx="24" ry="9" fill="rgba(0,245,255,0.08)" />
        </svg>
      </div>

      {/* ── CAVE FLOOR / STALAGMITES — rising from bottom ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 2 }}>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '150px' }}>
          <path d="M0,200 L0,160 Q360,120 720,145 Q1080,165 1440,135 L1440,200 Z" fill="#0D0820" />
          <path d="M0,200 L0,178 Q240,155 480,170 Q720,185 960,165 Q1200,148 1440,172 L1440,200 Z" fill="#08061A" />
          <polygon points="80,200 68,140 92,200" fill="#1A0A35" />
          <polygon points="180,200 165,105 195,200" fill="#120828" />
          <polygon points="320,200 308,150 332,200" fill="#1C0B3A" />
          <polygon points="480,200 464,112 496,200" fill="#14082E" />
          <polygon points="630,200 618,155 642,200" fill="#180A35" />
          <polygon points="760,200 743,98 777,200" fill="#1A0A38" />
          <polygon points="890,200 878,148 902,200" fill="#120828" />
          <polygon points="1020,200 1005,115 1035,200" fill="#1C0B3C" />
          <polygon points="1160,200 1148,152 1172,200" fill="#14082E" />
          <polygon points="1280,200 1265,120 1295,200" fill="#180A38" />
          <polygon points="1390,200 1378,148 1402,200" fill="#120828" />
          <circle cx="180" cy="106" r="3.5" fill="rgba(0,245,255,0.38)" />
          <circle cx="480" cy="113" r="4" fill="rgba(157,78,221,0.42)" />
          <circle cx="760" cy="99" r="4.5" fill="rgba(0,245,255,0.45)" />
          <circle cx="1020" cy="116" r="3.5" fill="rgba(157,78,221,0.38)" />
          <circle cx="1280" cy="121" r="4" fill="rgba(0,245,255,0.35)" />
          <ellipse cx="480" cy="113" rx="20" ry="7" fill="rgba(157,78,221,0.1)" />
          <ellipse cx="760" cy="99" rx="25" ry="9" fill="rgba(0,245,255,0.08)" />
        </svg>
      </div>

      {/* Ambient glow */}
      <div className="absolute pointer-events-none" style={{ bottom: '8%', left: '12%', width: 280, height: 280, background: 'radial-gradient(circle, rgba(157,78,221,0.16) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute pointer-events-none" style={{ top: '10%', right: '8%', width: 220, height: 220, background: 'radial-gradient(circle, rgba(0,245,255,0.1) 0%, transparent 70%)', filter: 'blur(35px)' }} />

      {/* Astronaut with coin */}
      <div ref={astronautRef} className="absolute pointer-events-none" style={{ left: '65%', top: '45%', zIndex: 8, width: 'min(120px, 14vw)' }}>
        <img src={astronautCoin} alt="astronaut" style={{ width: '100%', filter: 'drop-shadow(0 0 12px rgba(157,78,221,0.5))' }} />
      </div>

      {/* GO BACK — top left */}
      <button
        onClick={() => goTo(4)}
        className="absolute z-30"
        style={{ top: 80, left: 24, fontFamily: 'Orbitron, monospace', fontSize: 9, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.65)', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.25s' }}
        onMouseEnter={e => e.currentTarget.style.color = '#00F5FF'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
      >
        ← GO BACK
      </button>

      {/* Main content */}
      <div ref={ref} className="relative section-reveal flex flex-col items-center w-full px-6" style={{ zIndex: 10, paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ ...TITLE_STYLE, marginBottom: 36 }}>CONTACT ME</div>

        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '0.95rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.72)', marginBottom: 40, textAlign: 'center' }}>
          HAVE A PROJECT IN MIND? LET'S BUILD SOMETHING GREAT TOGETHER.
        </p>

        {sent && (
          <div style={{ marginBottom: 24, padding: '12px 28px', border: '1px solid rgba(0,245,255,0.4)', background: 'rgba(0,245,255,0.08)', color: '#00F5FF', fontFamily: 'Orbitron, monospace', fontSize: 11, letterSpacing: '0.1em', borderRadius: 2, textAlign: 'center', animation: 'fadeInUp 0.3s ease' }}>
            ✓ MAIL CLIENT OPENED — SEND WHEN READY.
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 520, display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div>
            <label style={{ fontFamily: 'Orbitron, monospace', fontSize: 9, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.72)', display: 'block', marginBottom: 8 }}>EMAIL :</label>
            <input
              type="email" name="email" value={form.email} onChange={handleChange} required
              placeholder="your@email.com"
              style={{ width: '100%', padding: '12px 16px', fontFamily: 'Rajdhani, sans-serif', fontSize: '0.95rem', borderRadius: 2 }}
            />
          </div>
          <div>
            <label style={{ fontFamily: 'Orbitron, monospace', fontSize: 9, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.72)', display: 'block', marginBottom: 8 }}>SUBJECT :</label>
            <input
              type="text" name="subject" value={form.subject} onChange={handleChange} required
              placeholder="What's this about?"
              style={{ width: '100%', padding: '12px 16px', fontFamily: 'Rajdhani, sans-serif', fontSize: '0.95rem', borderRadius: 2 }}
            />
          </div>
          <div>
            <label style={{ fontFamily: 'Orbitron, monospace', fontSize: 9, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.72)', display: 'block', marginBottom: 8 }}>CONTENT :</label>
            <textarea
              name="content" value={form.content} onChange={handleChange} required rows={5}
              placeholder="Tell me about your project..."
              style={{ width: '100%', padding: '12px 16px', fontFamily: 'Rajdhani, sans-serif', fontSize: '0.95rem', resize: 'none', borderRadius: 2 }}
            />
          </div>

          <button
            type="submit"
            style={{
              marginTop: 6, padding: '14px 40px', fontFamily: 'Orbitron, monospace', fontSize: 11, letterSpacing: '0.22em',
              color: '#00F5FF', border: '1px solid #00F5FF', borderRadius: 2, cursor: 'pointer',
              background: 'rgba(0,245,255,0.07)',
              boxShadow: '0 0 18px rgba(0,245,255,0.2)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,245,255,0.15)'; e.currentTarget.style.boxShadow = '0 0 32px rgba(0,245,255,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,245,255,0.07)'; e.currentTarget.style.boxShadow = '0 0 18px rgba(0,245,255,0.2)' }}
          >
            SEND MESSAGE →
          </button>
        </form>

        {/* Social links */}
        <div style={{ display: 'flex', gap: 32, marginTop: 48, justifyContent: 'center', flexWrap: 'wrap' }}>
          {SOCIAL.map((s) => (
            <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
              className="nav-link"
              style={{ fontFamily: 'Orbitron, monospace', fontSize: 9, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', transition: 'color 0.25s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#00F5FF'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
            >
              {s.label}
            </a>
          ))}
        </div>

        <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '0.75rem', color: 'rgba(255,255,255,0.50)', marginTop: 36, letterSpacing: '0.15em', textAlign: 'center' }}>
          © 2025 NGUYEN HOAI NAM — BUILT WITH REACT + VITE
        </p>
      </div>
    </section>
  )
}
