import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { NAME, SOCIAL } from '../data/profile'

const TYPE_SPEED = 60
const ERASE_SPEED = 30
const PAUSE = 1800

const ROLES = [
  'A SOFTWARE ENGINEER',
  'A FULL-STACK DEVELOPER',
  'A BLOCKCHAIN BUILDER',
  'A PROBLEM SOLVER',
]

export default function Hero({ goTo }) {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [bootText, setBootText] = useState('')
  const [bootDone, setBootDone] = useState(false)

  useEffect(() => {
    const bootMsg = '>> SYSTEM INITIALIZED...'
    let i = 0
    const interval = setInterval(() => {
      setBootText(bootMsg.slice(0, i + 1))
      i++
      if (i >= bootMsg.length) {
        clearInterval(interval)
        setTimeout(() => setBootDone(true), 400)
      }
    }, 40)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!bootDone) return
    const currentRole = ROLES[roleIndex]
    let timeout

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE)
    } else if (isDeleting && text === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setRoleIndex((r) => (r + 1) % ROLES.length)
      }, TYPE_SPEED)
    } else {
      timeout = setTimeout(() => {
        setText(
          isDeleting
            ? currentRole.slice(0, text.length - 1)
            : currentRole.slice(0, text.length + 1)
        )
      }, isDeleting ? ERASE_SPEED : TYPE_SPEED)
    }

    return () => clearTimeout(timeout)
  }, [text, roleIndex, isDeleting, bootDone])

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <div className="relative z-10 text-center px-4 max-w-5xl">
        {!bootDone ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#00F5FF]/80 font-['Orbitron'] text-xs tracking-widest mb-4"
          >
            {bootText}
            <span className="inline-block w-2 h-3 bg-[#00F5FF] ml-1 animate-[blink_0.9s_step-end_infinite]" />
          </motion.p>
        ) : (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#00F5FF]/60 font-['Orbitron'] text-[10px] tracking-[0.4em] mb-3">
                ● SYSTEM ONLINE
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3"
            >
              <span className="text-white/90">{'<'}</span>
              <span className="text-gradient">{NAME}</span>
              <span className="text-white/90">{' />'}</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-10 flex items-center justify-center mb-8"
            >
              <span className="text-base md:text-lg text-gray-400 font-['Rajdhani'] font-semibold">
                <span className="text-[#00F5FF]/50">&gt;&gt;</span> {text}
                <span className="inline-block w-[2px] h-5 bg-[#00F5FF] ml-1 animate-[blink_0.9s_step-end_infinite]" />
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-3 mb-10"
            >
              {SOCIAL.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-4 py-2 rounded border border-white/10 text-[10px] font-['Orbitron'] tracking-widest text-gray-400 hover:text-[#00F5FF] hover:border-[#00F5FF]/30 transition-all duration-300 uppercase"
                >
                  <span className="group-hover:inline hidden">[ </span>
                  {link.label}
                  <span className="group-hover:inline hidden"> ]</span>
                </a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={() => goTo(1)}
                className="group inline-flex items-center gap-2 px-6 py-2.5 rounded border border-[#00F5FF]/30 text-[#00F5FF] font-['Orbitron'] text-[10px] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-[#00F5FF]/10 hover:border-[#00F5FF]/60"
              >
                <span className="text-white/40 group-hover:text-[#00F5FF] transition-colors">&gt;&gt;</span>
                INITIALIZE PROFILE
                <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          </>
        )}
      </div>
    </div>
  )
}
