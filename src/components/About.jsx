import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const journey = [
  {
    year: '2022',
    title: 'Started CS Degree',
    desc: 'Enrolled in BSc Computer Science at University of Education, Lahore, discovering my passion for building with code.',
    icon: '🎓',
  },
  {
    year: '2023',
    title: 'Mastered MERN Stack',
    desc: 'Dove deep into React, Node.js, Express, and MongoDB. Built full-stack apps with JWT auth, REST APIs, and responsive UIs.',
    icon: '⚡',
  },
  {
    year: '2024',
    title: 'Entered the AI World',
    desc: 'Began exploring machine learning, TensorFlow, and NLP. Built a Speech Emotion Recognition system and an AI-powered chatbot.',
    icon: '🤖',
  },
  {
    year: '2025+',
    title: 'Bridging Web & AI',
    desc: 'Now building AI-integrated web applications — deploying ML models as APIs and embedding intelligence into full-stack products.',
    icon: '🚀',
  },
]

function TimelineItem({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex gap-4 md:gap-6 group"
    >
      {/* Left: icon + line */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-lg shrink-0 group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-300">
          {item.icon}
        </div>
        {index < journey.length - 1 && (
          <div className="w-px flex-1 bg-gradient-to-b from-border to-transparent mt-2" />
        )}
      </div>

      {/* Right: content */}
      <div className="pb-8">
        <div className="flex items-center gap-3 mb-1">
          <span className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded">
            {item.year}
          </span>
          <h3 className="font-display font-semibold text-text text-base">{item.title}</h3>
        </div>
        <p className="text-dim text-sm leading-relaxed font-body">{item.desc}</p>
      </div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent font-mono text-sm mb-3 tracking-widest uppercase">01 — About</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text leading-tight">
            The developer
            <br />
            <span className="text-gradient">behind the code</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Left: description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-dim leading-relaxed font-body text-base">
              I'm <span className="text-text font-medium">Shahzaib Naseem</span>, a Computer Science
              student at the University of Education, Lahore (AI specialization). I thrive at the
              intersection of full-stack web development and artificial intelligence.
            </p>
            <p className="text-dim leading-relaxed font-body text-base">
              My journey started with building MERN applications — crafting responsive UIs with
              React and powering them with Node.js backends. That foundation gave me confidence to
              venture into the world of AI/ML, where I now design deep learning pipelines and
              deploy intelligent models to production.
            </p>
            <p className="text-dim leading-relaxed font-body text-base">
              I believe the future belongs to developers who can both <span className="text-accent">build
              the interface</span> and <span className="text-accent2">train the intelligence</span> behind it.
              That's exactly what I'm building toward.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { label: 'Projects', value: '5+' },
                { label: 'Certifications', value: '2' },
                { label: 'Year of Grad', value: '2026' },
              ].map((stat) => (
                <div key={stat.label} className="bg-surface border border-border rounded-xl p-4 text-center hover:border-accent/30 transition-colors">
                  <p className="font-display font-bold text-2xl text-gradient">{stat.value}</p>
                  <p className="text-muted text-xs font-body mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-sm font-mono text-muted mb-6 uppercase tracking-widest">My Journey</p>
            <div>
              {journey.map((item, i) => (
                <TimelineItem key={item.year} item={item} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
