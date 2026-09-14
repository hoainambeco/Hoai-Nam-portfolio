import { motion, AnimatePresence } from 'framer-motion'
import { UI } from '../data/ui'
import { LANGS, useLang } from '../i18n'

const SECTIONS = [
  { id: 'home', icon: '◈' },
  { id: 'about', icon: '◉' },
  { id: 'skills', icon: '⚡' },
  { id: 'projects', icon: '◆' },
  { id: 'experience', icon: '◈' },
  { id: 'contact', icon: '◉' },
]

function LangSwitch() {
  const { lang, setLang, t } = useLang()
  return (
    <div
      role="group"
      aria-label={t(UI.nav.language)}
      className="flex items-center rounded border border-white/10 overflow-hidden text-[10px] font-display tracking-widest"
    >
      {LANGS.map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-2 py-1 transition-colors duration-300 ${
            lang === code
              ? 'bg-[#00F5FF]/15 text-[#00F5FF]'
              : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default function Navbar({ current, goTo, menuOpen, setMenuOpen }) {
  const { t } = useLang()

  return (
    <>
      {/* Top HUD */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="flex items-center justify-between px-4 md:px-8 py-3">
          <div className="pointer-events-auto">
            <button
              onClick={() => goTo(0)}
              className="text-[#00F5FF] font-display text-sm font-bold tracking-widest hover:opacity-80 transition-opacity"
            >
              NAM<span className="text-white/40">.dev</span>
            </button>
          </div>

          <div className="flex items-center gap-3 pointer-events-auto">
            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {SECTIONS.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  className={`relative group px-3 py-1.5 text-[10px] font-display tracking-[0.15em] uppercase transition-all duration-300 ${
                    current === i
                      ? 'text-[#00F5FF]'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                >
                  <span className="mr-1.5 text-xs">{s.icon}</span>
                  {t(UI.nav.sections[i])}
                  {current === i && (
                    <div className="absolute -bottom-px left-2 right-2 h-[1px] bg-gradient-to-r from-transparent via-[#00F5FF] to-transparent" />
                  )}
                </button>
              ))}
            </div>

            <LangSwitch />

            {/* Menu button mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={t(UI.nav.menu)}
              aria-expanded={menuOpen}
              className="lg:hidden w-8 h-8 flex items-center justify-center"
            >
              <div className="flex flex-col gap-1">
                <motion.span
                  className="block w-5 h-[1.5px] bg-white/60 rounded"
                  animate={menuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                  className="block w-5 h-[1.5px] bg-white/60 rounded"
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                />
                <motion.span
                  className="block w-5 h-[1.5px] bg-white/60 rounded"
                  animate={menuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-xl flex items-center justify-center lg:hidden"
          >
            <div className="space-y-2">
              {SECTIONS.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => { goTo(i); setMenuOpen(false) }}
                  className={`block w-full text-center px-8 py-3 text-sm font-display tracking-widest uppercase transition-all ${
                    current === i
                      ? 'text-[#00F5FF]'
                      : 'text-gray-500 hover:text-white'
                  }`}
                >
                  <span className="mr-2">{s.icon}</span>
                  {t(UI.nav.sections[i])}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom navigation arrows */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
        <button
          onClick={() => goTo(current - 1)}
          aria-label={t(UI.nav.prev)}
          className={`p-2 rounded-full border border-white/10 text-white/30 hover:text-[#00F5FF] hover:border-[#00F5FF]/30 transition-all duration-300 ${current === 0 ? 'opacity-0 pointer-events-none' : ''}`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <div className="flex gap-2">
          {SECTIONS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              aria-label={t(UI.nav.sections[i])}
              style={{
                width: i === current ? 20 : 5,
                height: 5,
                borderRadius: 3,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                padding: 0,
                background: i === current ? '#00F5FF' : 'rgba(255,255,255,0.12)',
                boxShadow: i === current ? '0 0 8px rgba(0,245,255,0.5)' : 'none',
              }}
            />
          ))}
        </div>
        <button
          onClick={() => goTo(current + 1)}
          aria-label={t(UI.nav.next)}
          className={`p-2 rounded-full border border-white/10 text-white/30 hover:text-[#00F5FF] hover:border-[#00F5FF]/30 transition-all duration-300 ${current === SECTIONS.length - 1 ? 'opacity-0 pointer-events-none' : ''}`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </>
  )
}
