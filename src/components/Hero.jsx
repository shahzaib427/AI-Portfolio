import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: 'easeOut', delay },
})

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent2/5 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-mono mb-8">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-4"
        >
          Shahzaib{' '}
          <span className="text-gradient">Naseem</span>
        </motion.h1>

        {/* Title */}
        <motion.div {...fadeUp(0.35)} className="mb-6">
          <p className="font-display font-semibold text-xl md:text-3xl text-dim tracking-wide">
            MERN Stack <span className="text-accent">+</span> AI Developer
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          {...fadeUp(0.45)}
          className="max-w-2xl mx-auto text-dim text-base md:text-lg leading-relaxed mb-10 font-body"
        >
          I build full-stack web applications with React &amp; Node.js, and craft intelligent
          AI/ML solutions with TensorFlow &amp; Python. From pixels to predictions — I bridge
          the gap between modern web and machine intelligence.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => handleScroll('#projects')}
            className="group px-8 py-4 bg-accent text-bg font-display font-semibold rounded-xl hover:bg-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] text-base"
          >
            View Projects
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="px-8 py-4 border border-border text-text font-display font-semibold rounded-xl hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 text-base"
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Tech pills */}
        <motion.div
          {...fadeUp(0.65)}
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
        >
          {['React', 'Node.js', 'Python', 'TensorFlow', 'MongoDB', 'NLP'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-mono text-muted bg-surface border border-border rounded-lg hover:border-accent/30 hover:text-dim transition-all duration-200"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-accent/50 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}
