import { useState, useEffect, useCallback, useMemo, useRef, lazy, Suspense } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { LangContext, detectInitialLang, saveLang, translate } from './i18n'
import { UI } from './data/ui'

// three.js is ~1MB — load it after the text content has painted
const Scene3D = lazy(() => import('./components/Scene3D'))

const SECTIONS = [Hero, About, Skills, Projects, Experience, Contact]
const TRANSITION_MS = 600

// True when the event target sits inside a panel that can still scroll in that direction,
// so the gesture should scroll the panel instead of switching sections.
function canScrollInside(target, deltaY) {
  const el = target?.closest?.('.content-scroll')
  if (!el) return false
  return deltaY > 0
    ? el.scrollTop + el.clientHeight < el.scrollHeight - 1
    : el.scrollTop > 0
}

export default function App() {
  const [current, setCurrent] = useState(0)
  const [visited, setVisited] = useState(() => new Set([0]))
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLangState] = useState(detectInitialLang)
  const lockRef = useRef(false)
  const touchStart = useRef({ x: 0, y: 0, target: null })

  const setLang = useCallback((next) => {
    setLangState(next)
    saveLang(next)
  }, [])

  const i18n = useMemo(() => ({ lang, setLang, t: (value) => translate(value, lang) }), [lang, setLang])

  useEffect(() => {
    // Drives the Vietnamese font swap in index.css and screen-reader pronunciation
    document.documentElement.lang = lang
    document.title = translate(UI.meta.title, lang)
  }, [lang])

  const goTo = useCallback((index) => {
    if (index < 0 || index >= SECTIONS.length || lockRef.current) return
    lockRef.current = true
    setCurrent(index)
    setVisited(v => (v.has(index) ? v : new Set(v).add(index)))
    setTimeout(() => { lockRef.current = false }, TRANSITION_MS)
  }, [])

  useEffect(() => {
    const navigate = (dir) => goTo(current + dir)

    const handleWheel = (e) => {
      if (menuOpen || canScrollInside(e.target, e.deltaY)) return
      e.preventDefault()
      if (Math.abs(e.deltaY) < 10) return
      navigate(e.deltaY > 0 ? 1 : -1)
    }
    const handleKey = (e) => {
      if (menuOpen) return
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return
      // Space activates a focused button/link — don't also switch sections
      if (e.key === ' ' && ['BUTTON', 'A'].includes(e.target.tagName)) return
      if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key)) navigate(1)
      if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) navigate(-1)
    }
    const handleTouchStart = (e) => {
      touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, target: e.target }
    }
    const handleTouchEnd = (e) => {
      if (menuOpen) return
      const dy = touchStart.current.y - e.changedTouches[0].clientY
      const dx = touchStart.current.x - e.changedTouches[0].clientX
      if (Math.abs(dy) > 50) {
        if (!canScrollInside(touchStart.current.target, dy)) navigate(dy > 0 ? 1 : -1)
      } else if (Math.abs(dx) > 80) {
        navigate(dx > 0 ? 1 : -1)
      }
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
  }, [current, goTo, menuOpen])

  const pageStyle = (i) => ({
    position: 'fixed', inset: 0, overflow: 'hidden',
    opacity: current === i ? 1 : 0,
    pointerEvents: current === i ? 'auto' : 'none',
    transition: 'opacity 0.4s ease, transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
    transform: current === i ? 'scale(1) translateY(0)' : `scale(0.97) translateY(${current > i ? '-20px' : '20px'})`,
    zIndex: current === i ? 2 : 1,
  })

  return (
    <LangContext value={i18n}>
      <div className="w-screen h-screen overflow-hidden fixed inset-0">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>

        {SECTIONS.map((Section, i) => (
          <div key={i} style={pageStyle(i)} aria-hidden={current !== i}>
            {/* Mount on first visit so each section's entrance animation plays when it is reached */}
            {visited.has(i) && <Section goTo={goTo} />}
          </div>
        ))}

        <Navbar current={current} goTo={goTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <div className="retro-scanline" />
        <div className="noise-overlay" />
      </div>
    </LangContext>
  )
}
