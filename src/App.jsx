import { useState, useEffect, useCallback, useRef } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

const SECTIONS = ['home', 'about', 'skills', 'projects', 'experience', 'contact']

export default function App() {
  const [current, setCurrent] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const transitioning = useRef(false)
  const touchStartY = useRef(0)

  const goTo = useCallback((index) => {
    if (index < 0 || index >= SECTIONS.length) return
    setCurrent(index)
  }, [])

  const navigate = useCallback((dir) => {
    if (transitioning.current) return
    transitioning.current = true
    setCurrent(c => {
      const next = Math.max(0, Math.min(SECTIONS.length - 1, c + dir))
      return next
    })
    setTimeout(() => { transitioning.current = false }, 520)
  }, [])

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault()
      if (menuOpen) return
      navigate(e.deltaY > 0 ? 1 : -1)
    }
    const handleKey = (e) => {
      if (menuOpen) return
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      if (['ArrowRight', 'ArrowDown'].includes(e.key)) navigate(1)
      if (['ArrowLeft', 'ArrowUp'].includes(e.key)) navigate(-1)
    }
    const handleTouchStart = (e) => { touchStartY.current = e.touches[0].clientY }
    const handleTouchEnd = (e) => {
      if (menuOpen) return
      const delta = touchStartY.current - e.changedTouches[0].clientY
      if (Math.abs(delta) > 50) navigate(delta > 0 ? 1 : -1)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKey)
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKey)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [navigate, menuOpen])

  const pageStyle = (i) => ({
    position: 'fixed', inset: 0, overflow: 'hidden',
    opacity: current === i ? 1 : 0,
    filter: current === i ? 'blur(0px)' : 'blur(3px)',
    pointerEvents: current === i ? 'auto' : 'none',
    transition: 'opacity 0.5s ease, filter 0.5s ease',
    zIndex: current === i ? 2 : 1,
  })

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'fixed', inset: 0 }}>
      <div style={pageStyle(0)}><Hero goTo={goTo} /></div>
      <div style={pageStyle(1)}><About goTo={goTo} /></div>
      <div style={pageStyle(2)}><Skills goTo={goTo} isActive={current === 2} /></div>
      <div style={pageStyle(3)}><Projects goTo={goTo} /></div>
      <div style={pageStyle(4)}><Experience goTo={goTo} /></div>
      <div style={pageStyle(5)}><Contact goTo={goTo} isActive={current === 5} /></div>

      {/* Navbar always on top */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
        <Navbar current={current} goTo={goTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>

      {/* Dot indicators */}
      <div style={{
        position: 'fixed', bottom: 22, left: '50%', transform: 'translateX(-50%)',
        zIndex: 100, display: 'flex', gap: 10, alignItems: 'center',
      }}>
        {SECTIONS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? 26 : 8, height: 8, borderRadius: 4, border: 'none',
              cursor: 'pointer', transition: 'all 0.3s', padding: 0,
              background: i === current ? '#00F5FF' : 'rgba(255,255,255,0.22)',
              boxShadow: i === current ? '0 0 10px rgba(0,245,255,0.6)' : 'none',
            }}
          />
        ))}
      </div>

      {/* Keyboard hint */}
      <div style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 100,
        fontFamily: 'Orbitron, monospace', fontSize: 10,
        letterSpacing: '0.2em', color: 'rgba(255,255,255,0.5)',
      }}>
        SCROLL TO NAVIGATE
      </div>
    </div>
  )
}
