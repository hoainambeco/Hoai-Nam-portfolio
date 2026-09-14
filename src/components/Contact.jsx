import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { EMAIL, SOCIAL } from '../data/profile'

export default function Contact() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })
  const [sent, setSent] = useState(false)

  // No backend on GitHub Pages — hand the message to the visitor's mail app
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = `Portfolio contact from ${data.get('name')}`
    const body = `${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <div className="w-full h-full flex items-center justify-center p-4" ref={containerRef}>
      <div className="glass-strong rounded-2xl p-6 md:p-8 max-w-lg w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#00F5FF]/60 font-['Orbitron'] text-[10px] tracking-[0.4em] mb-1">
            ● TRANSMISSION
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-1">
            <span className="text-white/50">&lt;</span>
            <span className="text-gradient">Connect</span>
            <span className="text-white/50"> /&gt;</span>
          </h2>
          <p className="text-xs text-gray-500 font-['Orbitron'] tracking-wider mb-6">
            SEND A SIGNAL ACROSS THE COSMOS
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="[ YOUR NAME ]"
            required
            className="w-full px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-white text-xs placeholder-gray-600 focus:outline-none focus:border-[#00F5FF]/40 focus:bg-white/[0.05] transition-all font-['Orbitron'] tracking-wider"
          />
          <input
            type="email"
            name="email"
            placeholder="[ YOUR EMAIL ]"
            required
            className="w-full px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-white text-xs placeholder-gray-600 focus:outline-none focus:border-[#00F5FF]/40 focus:bg-white/[0.05] transition-all font-['Orbitron'] tracking-wider"
          />
          <textarea
            name="message"
            placeholder="[ YOUR MESSAGE ]"
            rows={3}
            required
            className="w-full px-4 py-2.5 rounded-lg bg-white/[0.03] border border-white/10 text-white text-xs placeholder-gray-600 focus:outline-none focus:border-[#00F5FF]/40 focus:bg-white/[0.05] transition-all resize-none font-['Orbitron'] tracking-wider"
          />
          <div className="flex items-center justify-between pt-2">
            <button
              type="submit"
              className="px-5 py-2 rounded-lg border border-[#00F5FF]/30 text-[#00F5FF] text-[10px] font-['Orbitron'] tracking-[0.2em] uppercase hover:bg-[#00F5FF]/10 hover:border-[#00F5FF]/60 transition-all duration-300"
            >
              {sent ? '✓ OPENING MAIL APP' : '>> SEND SIGNAL'}
            </button>
            <div className="flex gap-2">
              {SOCIAL.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg border border-white/10 flex items-center justify-center text-[8px] font-['Orbitron'] tracking-wider text-gray-500 hover:text-[#00F5FF] hover:border-[#00F5FF]/30 transition-all"
                >
                  {link.label[0]}
                </a>
              ))}
            </div>
          </div>
        </motion.form>
      </div>
    </div>
  )
}
