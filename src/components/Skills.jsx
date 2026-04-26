import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'accent',
    skills: [
      { name: 'React.js',      level: 85 },
      { name: 'Tailwind CSS',  level: 80 },
      { name: 'HTML5 / CSS3',  level: 90 },
      { name: 'JavaScript',    level: 82 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'accent2',
    skills: [
      { name: 'Node.js',       level: 80 },
      { name: 'Express.js',    level: 78 },
      { name: 'MongoDB',       level: 75 },
      { name: 'REST APIs',     level: 85 },
    ],
  },
  {
    category: 'AI / ML',
    icon: '🤖',
    color: 'green',
    skills: [
      { name: 'Python',        level: 85 },
      { name: 'TensorFlow',    level: 72 },
      { name: 'Scikit-learn',  level: 75 },
      { name: 'NLP Basics',    level: 70 },
    ],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    color: 'yellow',
    skills: [
      { name: 'Git / GitHub',  level: 82 },
      { name: 'Postman',       level: 80 },
      { name: 'Jupyter',       level: 78 },
      { name: 'VS Code',       level: 90 },
    ],
  },
]

const colorMap = {
  accent:  { bar: 'bg-accent',  glow: 'shadow-[0_0_8px_rgba(0,212,255,0.4)]',  border: 'border-accent/30',  bg: 'bg-accent/10'  },
  accent2: { bar: 'bg-accent2', glow: 'shadow-[0_0_8px_rgba(123,97,255,0.4)]', border: 'border-accent2/30', bg: 'bg-accent2/10' },
  green:   { bar: 'bg-emerald-400', glow: 'shadow-[0_0_8px_rgba(52,211,153,0.4)]', border: 'border-emerald-400/30', bg: 'bg-emerald-400/10' },
  yellow:  { bar: 'bg-amber-400',   glow: 'shadow-[0_0_8px_rgba(251,191,36,0.4)]', border: 'border-amber-400/30',   bg: 'bg-amber-400/10'   },
}

function SkillBar({ skill, color, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const c = colorMap[color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -10 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="space-y-1.5"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-body text-dim">{skill.name}</span>
        <span className="text-xs font-mono text-muted">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-bg border border-border/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.07 + 0.2, ease: 'easeOut' }}
          className={`h-full rounded-full ${c.bar} ${c.glow}`}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent font-mono text-sm mb-3 tracking-widest uppercase">03 — Skills</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text leading-tight">
            What I work
            <br />
            <span className="text-gradient">with daily</span>
          </h2>
        </motion.div>

        {/* Skill cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group, gi) => {
            const c = colorMap[group.color]
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
                className={`card-glass rounded-2xl p-5 hover:${c.border} hover:bg-opacity-80 transition-all duration-300 group`}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center text-base group-hover:scale-110 transition-transform duration-300`}>
                    {group.icon}
                  </div>
                  <h3 className="font-display font-semibold text-text text-sm">{group.category}</h3>
                </div>

                {/* Skill bars */}
                <div className="space-y-3">
                  {group.skills.map((skill, si) => (
                    <SkillBar key={skill.name} skill={skill} color={group.color} index={si} />
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional tech chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10"
        >
          <p className="text-xs font-mono text-muted uppercase tracking-widest mb-4">Also familiar with</p>
          <div className="flex flex-wrap gap-2">
            {['PyTorch', 'NumPy', 'Pandas', 'Keras', 'JWT', 'SQL', 'Hugging Face', 'ChatGPT API', 'Matplotlib', 'Seaborn', 'Flask', 'LSTM'].map((t) => (
              <span
                key={t}
                className="text-xs font-mono text-muted bg-surface border border-border/50 px-3 py-1.5 rounded-lg hover:border-accent/30 hover:text-dim transition-all duration-200"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
