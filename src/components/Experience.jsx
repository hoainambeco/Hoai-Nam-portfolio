import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { EXPERIENCES } from '../data/profile'
import { UI } from '../data/ui'
import { useLang } from '../i18n'

export default function Experience() {
  const { t } = useLang()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  return (
    <div className="w-full h-full flex items-center justify-center p-4" ref={containerRef}>
      <div className="glass-strong rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[85vh] content-scroll">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#00F5FF]/60 font-display text-[10px] tracking-[0.4em] mb-1">
            {t(UI.experience.tag)}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-5">
            <span className="text-white/50">&lt;</span>
            <span className="text-gradient">{t(UI.experience.title)}</span>
            <span className="text-white/50"> /&gt;</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 + 0.1 }}
            >
              <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all duration-300 hover:border-white/10">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 mt-1">
                    <div
                      className="w-2 h-2 rounded-full border"
                      style={{
                        borderColor: exp.color,
                        background: `${exp.color}22`,
                        boxShadow: `0 0 6px ${exp.color}33`,
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                      <div>
                        <h3 className="text-sm font-bold text-white">{t(exp.role)}</h3>
                        <p className="text-xs" style={{ color: exp.color }}>{exp.company}</p>
                      </div>
                      <span className="text-[9px] text-gray-600 font-display tracking-wider">
                        {t(exp.period)}
                      </span>
                    </div>
                    <ul className="space-y-1 mb-3">
                      {t(exp.bullets).map((bullet, j) => (
                        <li key={j} className="text-gray-400 text-xs leading-relaxed flex gap-1.5">
                          <span style={{ color: exp.color }} className="shrink-0">&gt;</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-1.5 py-0.5 rounded text-[9px] font-medium"
                          style={{
                            background: `${exp.color}11`,
                            color: exp.color,
                            border: `1px solid ${exp.color}22`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
