import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { BIO, STATS, LOCATION, ROLE } from '../data/profile'

function StatCard({ value, label, delay }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay }}
      className="text-center p-3 rounded-lg border border-white/5 bg-white/[0.02]"
    >
      <div className="text-2xl md:text-3xl font-['Orbitron'] font-bold text-gradient mb-0.5">
        {isInView ? value : ''}
      </div>
      <div className="text-[9px] text-gray-600 tracking-[0.3em] font-medium font-['Orbitron']">
        {label}
      </div>
    </motion.div>
  )
}

export default function About({ goTo }) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  return (
    <div className="w-full h-full flex items-center justify-center p-4" ref={containerRef}>
      <div className="glass-strong rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[85vh] content-scroll">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#00F5FF]/60 font-['Orbitron'] text-[10px] tracking-[0.4em] mb-1">
            ● PROFILE SCAN
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-1">
            <span className="text-white/50">&lt;</span>
            <span className="text-gradient">About</span>
            <span className="text-white/50"> /&gt;</span>
          </h2>
          <p className="text-xs text-gray-500 font-['Orbitron'] tracking-wider mb-5">
            {ROLE} // BASED IN {LOCATION}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 text-sm leading-relaxed mb-6"
        >
          {BIO}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6"
        >
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} delay={i * 0.08 + 0.2} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button
            onClick={() => goTo(2)}
            className="text-[10px] font-['Orbitron'] tracking-[0.2em] text-gray-500 hover:text-[#00F5FF] transition-colors inline-flex items-center gap-2"
          >
            <span className="text-[#00F5FF]/50">&gt;&gt;</span> VIEW SKILL MATRIX
          </button>
        </motion.div>
      </div>
    </div>
  )
}
