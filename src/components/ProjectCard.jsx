import { motion } from 'framer-motion'

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group card-glass rounded-2xl p-6 flex flex-col gap-5 hover:border-accent/30 hover:glow-accent transition-all duration-400 h-full"
    >
      {/* Top: number + tag */}
      <div className="flex items-start justify-between">
        <span className="text-xs font-mono text-muted/60 select-none">
          {String(index + 1).padStart(2, '0')}
        </span>
        {project.featured && (
          <span className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Icon / Emoji */}
      <div className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
        {project.icon}
      </div>

      {/* Title + Description */}
      <div className="flex-1 space-y-2">
        <h3 className="font-display font-semibold text-lg text-text group-hover:text-accent transition-colors duration-200 leading-tight">
          {project.title}
        </h3>
        <p className="text-dim text-sm leading-relaxed font-body">
          {project.description}
        </p>
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-mono text-muted bg-bg border border-border/60 px-2.5 py-1 rounded-md hover:text-dim hover:border-accent/20 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 pt-1">
        <a
          href={project.demo || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 text-center py-2.5 text-sm font-medium rounded-xl transition-all duration-200 font-body
            ${project.demo
              ? 'bg-accent text-bg hover:bg-accent/90 hover:shadow-[0_0_20px_rgba(0,212,255,0.25)]'
              : 'bg-surface text-muted border border-border cursor-not-allowed opacity-50'
            }`}
        >
          {project.demo ? 'Live Demo ↗' : 'Coming Soon'}
        </a>
        <a
          href={project.github || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 text-center py-2.5 text-sm font-medium rounded-xl border transition-all duration-200 font-body
            ${project.github
              ? 'border-border text-dim hover:border-accent/40 hover:text-text hover:bg-accent/5'
              : 'border-border text-muted cursor-not-allowed opacity-50'
            }`}
        >
          GitHub
        </a>
      </div>
    </motion.div>
  )
}
