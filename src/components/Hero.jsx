import Stars from './Stars'

const GITHUB_SVG = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LINKEDIN_SVG = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const EMAIL_SVG = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const SOCIAL = [
  { href: 'https://github.com/hoainambeco', icon: GITHUB_SVG, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/namnguyen1024/', icon: LINKEDIN_SVG, label: 'LinkedIn' },
  { href: 'mailto:namxg1@gmail.com', icon: EMAIL_SVG, label: 'Email' },
]

export default function Hero() {
  const scroll = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0C0520 0%, #130A30 30%, #1F0F45 60%, #0D1535 100%)' }}
    >
      <Stars count={110} />

      {/* Nebula glows */}
      <div className="absolute pointer-events-none" style={{ width: 600, height: 600, top: '-5%', right: '-8%', background: 'radial-gradient(circle, rgba(100,30,200,0.28) 0%, transparent 65%)', filter: 'blur(25px)' }} />
      <div className="absolute pointer-events-none" style={{ width: 400, height: 400, top: '25%', left: '-6%', background: 'radial-gradient(circle, rgba(20,60,200,0.2) 0%, transparent 70%)', filter: 'blur(25px)' }} />

      {/* CONTACT ME */}
      <button onClick={() => scroll('#contact')} className="absolute top-20 right-6 z-30 transition-colors" style={{ fontFamily: 'Orbitron, monospace', fontSize: 10, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.45)', background: 'none', border: 'none', cursor: 'pointer' }}
        onMouseEnter={e => e.currentTarget.style.color = '#00F5FF'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}>
        CONTACT ME
      </button>

      {/* Mountain silhouette */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 3, height: 220 }}>
        <svg viewBox="0 0 1440 220" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
          <path d="M0,220 L0,155 Q70,85 140,125 Q210,165 290,85 Q355,30 430,85 Q500,140 575,60 Q640,5 720,55 Q795,100 860,45 Q925,5 1005,60 Q1075,110 1150,55 Q1220,10 1310,72 Q1380,125 1440,85 L1440,220 Z" fill="#0E062A" />
          <path d="M0,220 L0,195 Q120,155 240,182 Q360,208 480,172 Q600,140 720,175 Q840,208 960,170 Q1080,138 1200,178 Q1320,210 1440,182 L1440,220 Z" fill="#080415" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative text-center px-6" style={{ zIndex: 10, marginBottom: 120 }}>
        <p className="mb-3 fade-in-up" style={{ fontFamily: 'Orbitron, monospace', fontSize: 11, letterSpacing: '0.32em', color: 'rgba(0,245,255,0.55)', animationDelay: '0.05s' }}>
          ✦ A MESSAGE FROM EARTH ✦
        </p>

        <h1 className="glow-text fade-in-up" style={{
          fontFamily: 'Orbitron, monospace',
          fontSize: 'clamp(1.8rem, 5vw, 4rem)',
          fontWeight: 900,
          color: '#00F5FF',
          letterSpacing: '0.06em',
          lineHeight: 1.1,
          marginBottom: '0.5rem',
          animationDelay: '0.2s',
        }}>
          HELLO FELLOW<br />GALAXY MEMBER
        </h1>

        <h2 className="fade-in-up" style={{
          fontFamily: 'Orbitron, monospace',
          fontSize: 'clamp(1.3rem, 3.5vw, 2.8rem)',
          fontWeight: 700,
          color: '#FFFFFF',
          letterSpacing: '0.1em',
          marginBottom: '0.75rem',
          animationDelay: '0.4s',
        }}>
          I AM <span style={{ color: '#00F5FF' }}>NGUYEN HOAI NAM</span>
        </h2>

        <p className="fade-in-up" style={{
          fontFamily: 'Rajdhani, sans-serif',
          fontSize: 'clamp(0.9rem, 1.8vw, 1.15rem)',
          letterSpacing: '0.25em',
          color: 'rgba(255,255,255,0.48)',
          marginBottom: '2.5rem',
          animationDelay: '0.6s',
        }}>
          A FULL-STACK DEVELOPER
        </p>

        <button
          onClick={() => scroll('#skills')}
          className="fade-in-up"
          style={{
            fontFamily: 'Orbitron, monospace', fontSize: 11, letterSpacing: '0.18em',
            color: '#00F5FF', border: '1px solid #00F5FF', background: 'rgba(0,245,255,0.05)',
            padding: '12px 32px', cursor: 'pointer', transition: 'all 0.3s',
            boxShadow: '0 0 12px rgba(0,245,255,0.18)',
            animationDelay: '0.8s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,245,255,0.12)'; e.currentTarget.style.boxShadow = '0 0 24px rgba(0,245,255,0.4)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,245,255,0.05)'; e.currentTarget.style.boxShadow = '0 0 12px rgba(0,245,255,0.18)' }}
        >
          CLICK TO SCROLL ↓
        </button>
      </div>

      {/* Floating astronaut */}
      <div className="absolute animate-float" style={{ top: '17%', right: '10%', fontSize: 72, zIndex: 10, filter: 'drop-shadow(0 0 18px rgba(0,245,255,0.6))', userSelect: 'none' }}>
        🧑‍🚀
      </div>

      {/* EARTH PLANET — blue */}
      <div className="absolute pointer-events-none" style={{ bottom: -250, left: '50%', transform: 'translateX(-50%)', zIndex: 5, width: 'min(680px, 105vw)' }}>
        <div style={{
          width: '100%', paddingBottom: '100%', borderRadius: '50%', position: 'relative',
          background: 'radial-gradient(circle at 38% 32%, #6ABCFF 0%, #2A80F0 20%, #0A4ABB 45%, #051E5A 70%, #020E30 100%)',
          boxShadow: '0 0 80px 30px rgba(0,150,255,0.5), 0 0 160px 60px rgba(0,80,200,0.3)',
        }}>
          {/* Atmosphere highlight */}
          <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'radial-gradient(ellipse at 38% 28%, rgba(140,210,255,0.22) 0%, transparent 50%)' }} />
          {/* Cloud wisps */}
          <div style={{ position: 'absolute', top: '18%', left: '8%', width: '55%', height: 7, background: 'rgba(255,255,255,0.18)', borderRadius: 9999, filter: 'blur(4px)' }} />
          <div style={{ position: 'absolute', top: '36%', left: '20%', width: '65%', height: 5, background: 'rgba(255,255,255,0.12)', borderRadius: 9999, filter: 'blur(4px)' }} />
          <div style={{ position: 'absolute', top: '55%', left: '5%', width: '40%', height: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 9999, filter: 'blur(3px)' }} />
          {/* Landmass patches */}
          <div style={{ position: 'absolute', top: '26%', left: '44%', width: '20%', height: '16%', background: 'rgba(20,120,50,0.45)', borderRadius: '40% 60% 55% 45%', filter: 'blur(2px)' }} />
          <div style={{ position: 'absolute', top: '48%', left: '14%', width: '16%', height: '12%', background: 'rgba(30,100,45,0.38)', borderRadius: '50%', filter: 'blur(2px)' }} />
          {/* Shadow rim */}
          <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'radial-gradient(ellipse at 72% 72%, rgba(0,0,0,0.45) 0%, transparent 55%)' }} />
        </div>
      </div>

      {/* Social sidebar */}
      <div className="absolute hidden md:flex flex-col items-center gap-5" style={{ left: 24, top: '50%', transform: 'translateY(-50%)', zIndex: 20 }}>
        <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, transparent, rgba(0,245,255,0.35))' }} />
        {SOCIAL.map((s) => (
          <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
            style={{ color: 'rgba(255,255,255,0.38)', transition: 'all 0.25s' }} title={s.label}
            onMouseEnter={e => { e.currentTarget.style.color = '#00F5FF'; e.currentTarget.style.transform = 'scale(1.25)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.38)'; e.currentTarget.style.transform = 'scale(1)' }}
          >{s.icon}</a>
        ))}
        <div style={{ width: 1, height: 48, background: 'linear-gradient(to top, transparent, rgba(0,245,255,0.35))' }} />
      </div>

      {/* PRESS bottom-left */}
      <div className="absolute" style={{ bottom: 24, left: 28, zIndex: 20, fontFamily: 'Orbitron, monospace', fontSize: 8, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.28)' }}>
        PRESS
      </div>

      {/* SCROLL bottom-right */}
      <div className="absolute flex flex-col items-center gap-1" style={{ bottom: 20, right: 28, zIndex: 20, fontFamily: 'Orbitron, monospace', fontSize: 8, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.28)' }}>
        SCROLL
        <div className="animate-bounce" style={{ width: 8, height: 8, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.28)', marginTop: 2 }} />
      </div>
    </section>
  )
}
