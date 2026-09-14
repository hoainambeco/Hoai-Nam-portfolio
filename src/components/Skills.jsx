import { useRef, useMemo, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILLS } from '../data/profile'
import { UI } from '../data/ui'
import { useLang } from '../i18n'

const COLORS = ['#00F5FF', '#8B5CF6', '#FF9F43', '#06D6A0', '#FF6B6B']
const CATEGORIES = [
  { id: 'backend', name: 'Backend', icon: '⚙️', keywords: ['NestJS', 'Node.js', 'Express', 'Microservices', 'GraphQL', 'REST API'] },
  { id: 'blockchain', name: 'Blockchain', icon: '⛓️', keywords: ['Ethers.js', 'Web3.js', 'Solidity', 'Aptos', 'BNB Chain'] },
  { id: 'frontend', name: 'Frontend', icon: '🎨', keywords: ['React.js', 'Next.js', 'TypeScript'] },
  { id: 'database', name: { en: 'Database', vi: 'Cơ sở dữ liệu' }, icon: '🗄️', keywords: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Oracle', 'Elasticsearch', 'OpenSearch'] },
  { id: 'devops', name: 'DevOps', icon: '🚀', keywords: ['Docker', 'GitHub Actions', 'AWS', 'Linux', 'Nginx', 'CI/CD'] },
  { id: 'infra', name: { en: 'Infra', vi: 'Hạ tầng' }, icon: '🌐', keywords: ['Kafka', 'WebSockets', 'S3', 'Redis Cluster'] },
]

export default function Skills() {
  const { t } = useLang()
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })
  const [activeCat, setActiveCat] = useState(null)

  const taggedSkills = useMemo(
    () => SKILLS.map((s, i) => ({ name: s, color: COLORS[i % COLORS.length], delay: i * 0.02 })),
    []
  )

  return (
    <div className="w-full h-full flex items-center justify-center p-4" ref={containerRef}>
      <div className="glass-strong rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[85vh] content-scroll">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#00F5FF]/60 font-display text-[10px] tracking-[0.4em] mb-1">
            {t(UI.skills.tag)}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-5">
            <span className="text-white/50">&lt;</span>
            <span className="text-gradient">{t(UI.skills.title)}</span>
            <span className="text-white/50"> /&gt;</span>
          </h2>
        </motion.div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {CATEGORIES.map((cat, i) => (
            <motion.button
              key={cat.id}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              onClick={() => setActiveCat(activeCat === i ? null : i)}
              className={`px-3 py-1.5 rounded text-[10px] font-display tracking-wider transition-all duration-300 border ${
                activeCat === i
                  ? 'bg-[#00F5FF]/10 border-[#00F5FF]/40 text-[#00F5FF]'
                  : 'border-white/5 text-gray-500 hover:text-gray-300 hover:border-white/10'
              }`}
            >
              {cat.icon} {t(cat.name)}
            </motion.button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="flex flex-wrap gap-2">
          {taggedSkills
            .filter(s => {
              if (activeCat === null) return true
              return CATEGORIES[activeCat].keywords.includes(s.name)
            })
            .map((skill) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.25, delay: skill.delay + 0.2 }}
                whileHover={{ scale: 1.05, y: -1 }}
                className="px-3 py-1.5 rounded text-[11px] font-medium tracking-wide cursor-default transition-all duration-300 border"
                style={{
                  borderColor: `${skill.color}22`,
                  color: skill.color,
                  background: `${skill.color}08`,
                }}
              >
                {skill.name}
              </motion.span>
            ))}
        </div>
      </div>
    </div>
  )
}
