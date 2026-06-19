import { useState, useEffect } from 'react'

const links = [
  { label: 'HOME', href: '#home' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(10, 10, 26, 0.85)'
          : 'rgba(10, 10, 26, 0.4)',
        backdropFilter: 'blur(12px)',
        borderBottom: scrolled ? '1px solid rgba(0,245,255,0.15)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span
          className="text-lg font-bold tracking-widest"
          style={{ fontFamily: 'Orbitron, monospace', color: '#00f5ff' }}
        >
          HN.
        </span>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className="nav-link text-sm font-semibold tracking-widest text-gray-300"
                style={{ fontFamily: 'Orbitron, monospace', fontSize: '11px' }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-white transition-all" style={{ background: menuOpen ? '#00f5ff' : 'white' }} />
          <span className="block w-6 h-0.5 bg-white transition-all" style={{ background: menuOpen ? '#00f5ff' : 'white' }} />
          <span className="block w-4 h-0.5 bg-white transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4" style={{ background: 'rgba(10,10,26,0.95)' }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className="nav-link text-sm font-semibold tracking-widest text-gray-300 py-2 border-b border-white/10"
              style={{ fontFamily: 'Orbitron, monospace', fontSize: '11px' }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
