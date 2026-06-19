import { useEffect } from 'react';

const LINKS = [
  { label: 'HOME', index: 0 },
  { label: 'SKILLS', index: 1 },
  { label: 'PROJECTS', index: 2 },
  { label: 'EXPERIENCE', index: 3 },
  { label: 'CONTACT', index: 4 },
];

export default function Navbar({ current, goTo, menuOpen, setMenuOpen }) {
  const handleNav = (index) => {
    setMenuOpen(false);
    goTo(index);
  };

  // Block pull-to-refresh and swipe-page when overlay is open
  useEffect(() => {
    if (!menuOpen) return
    const prevent = (e) => e.preventDefault()
    document.addEventListener('touchmove', prevent, { passive: false })
    return () => document.removeEventListener('touchmove', prevent)
  }, [menuOpen])

  return (
    <>
      <nav
        style={{
          background: 'rgba(10, 10, 26, 0.55)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(0,245,255,0.1)',
          position: 'relative',
          zIndex: 200,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <span
            style={{
              fontFamily: 'Orbitron, monospace',
              color: '#00f5ff',
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: '0.12em',
              cursor: 'pointer',
            }}
            onClick={() => handleNav(0)}
          >
            <span style={{ color: 'rgba(0,245,255,0.4)' }}></span>
          </span>
          {/* Desktop links */}
          <ul className="hidden md:flex gap-8">
            {LINKS.map((l) => (
              <li key={l.index}>
                <button
                  onClick={() => handleNav(l.index)}
                  className="nav-link"
                  style={{
                    fontFamily: 'Orbitron, monospace',
                    fontSize: 11,
                    color:
                      current === l.index ? '#00F5FF' : 'rgba(255,255,255,0.6)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'color 0.25s',
                    letterSpacing: '0.18em',
                    textShadow:
                      current === l.index
                        ? '0 0 10px rgba(0,245,255,0.5)'
                        : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (current !== l.index)
                      e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    if (current !== l.index)
                      e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                  }}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-end gap-1.5 p-2"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              zIndex: 300,
            }}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              style={{
                display: 'block',
                height: 2,
                width: 26,
                background: menuOpen ? '#00f5ff' : 'white',
                borderRadius: 2,
                transform: menuOpen
                  ? 'rotate(45deg) translate(5px, 5px)'
                  : 'none',
                transition: 'all 0.3s ease',
              }}
            />
            <span
              style={{
                display: 'block',
                height: 2,
                width: 26,
                background: menuOpen ? '#00f5ff' : 'white',
                borderRadius: 2,
                opacity: menuOpen ? 0 : 1,
                transition: 'all 0.3s ease',
              }}
            />
            <span
              style={{
                display: 'block',
                height: 2,
                width: menuOpen ? 26 : 18,
                background: menuOpen ? '#00f5ff' : 'white',
                borderRadius: 2,
                transform: menuOpen
                  ? 'rotate(-45deg) translate(5px, -5px)'
                  : 'none',
                transition: 'all 0.3s ease',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      <div
        className="md:hidden"
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(6,3,20,0.97)',
          backdropFilter: 'blur(20px)',
          zIndex: 150,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.35s ease',
        }}
      >
        {/* Decorative top line */}
        <div
          style={{
            width: 1,
            height: 60,
            background:
              'linear-gradient(to bottom, transparent, rgba(0,245,255,0.4))',
            marginBottom: 40,
          }}
        />

        {LINKS.map((l, i) => (
          <button
            key={l.index}
            onClick={() => handleNav(l.index)}
            style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: 'clamp(1.2rem, 6vw, 2rem)',
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: current === l.index ? '#00F5FF' : 'rgba(255,255,255,0.55)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '18px 0',
              transition: 'color 0.2s, transform 0.2s',
              textShadow:
                current === l.index ? '0 0 20px rgba(0,245,255,0.6)' : 'none',
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: menuOpen ? `${i * 0.06}s` : '0s',
              display: 'block',
              width: '100%',
              textAlign: 'center',
            }}
            onTouchStart={(e) => {
              e.currentTarget.style.color = '#00F5FF';
            }}
            onTouchEnd={(e) => {
              e.currentTarget.style.color =
                current === l.index ? '#00F5FF' : 'rgba(255,255,255,0.55)';
            }}
          >
            {l.label}
          </button>
        ))}

        {/* Decorative bottom line */}
        <div
          style={{
            width: 1,
            height: 60,
            background:
              'linear-gradient(to top, transparent, rgba(0,245,255,0.4))',
            marginTop: 40,
          }}
        />

        {/* Current page indicator */}
        <p
          style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: 9,
            letterSpacing: '0.3em',
            color: 'rgba(0,245,255,0.35)',
            marginTop: 20,
          }}
        >
          {String(current + 1).padStart(2, '0')} /{' '}
          {String(LINKS.length).padStart(2, '0')}
        </p>
      </div>
    </>
  );
}
