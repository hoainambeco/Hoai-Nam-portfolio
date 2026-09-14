import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { PROJECTS } from '../data/profile'

export default function Projects() {
  const [expanded, setExpanded] = useState(null)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  return (
    <div className="w-full h-full flex items-center justify-center p-4" ref={containerRef}>
      <div className="glass-strong rounded-2xl p-6 md:p-8 max-w-3xl w-full max-h-[85vh] content-scroll">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#00F5FF]/60 font-['Orbitron'] text-[10px] tracking-[0.4em] mb-1">
            ● MISSION LOG
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-5">
            <span className="text-white/50">&lt;</span>
            <span className="text-gradient">Missions</span>
            <span className="text-white/50"> /&gt;</span>
          </h2>
        </motion.div>

        <div className="grid gap-3">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 + 0.1 }}
            >
              <div
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="rounded-xl border border-white/5 bg-white/[0.02] p-4 cursor-pointer transition-all duration-300 hover:border-white/10"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.color }} />
                      <h3 className="text-sm font-bold text-white truncate">{project.name}</h3>
                    </div>
                    <p className="text-[10px] text-gray-500 font-['Orbitron'] tracking-wider">
                      {project.sub}
                    </p>
                  </div>
                  <span className="shrink-0 text-[9px] text-gray-600 font-['Orbitron'] tracking-wider">
                    {project.period}
                  </span>
                </div>

                {project.award && (
                  <p className="text-[10px] text-yellow-500/80 mt-2">{project.award}</p>
                )}

                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 text-xs leading-relaxed my-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-[9px] font-medium"
                            style={{
                              background: `${project.color}11`,
                              color: project.color,
                              border: `1px solid ${project.color}22`,
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      {project.link && !project.inactive && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] font-['Orbitron'] tracking-wider uppercase hover:underline"
                          style={{ color: project.color }}
                        >
                          &gt;&gt; VIEW MISSION
                        </a>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {expanded !== i && (
                  <p className="text-[9px] text-gray-700 mt-2 font-['Orbitron']">[ CLICK TO EXPAND ]</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
