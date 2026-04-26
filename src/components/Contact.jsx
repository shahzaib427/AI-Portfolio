import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const contacts = [
  {
    label: 'Email',
    value: 'shahzaibnaseem3169@gmail.com',
    href: 'mailto:shahzaibnaseem3169@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    desc: 'Best way to reach me',
  },
  {
    label: 'GitHub',
    value: 'github.com/shahzaib427',
    href: 'https://github.com/shahzaib427',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    desc: 'Check out my code',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/shahzaib-naseem',
    href: 'https://www.linkedin.com/in/shahzaib-naseem',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    desc: 'Let\'s connect professionally',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-accent font-mono text-sm mb-3 tracking-widest uppercase">04 — Contact</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-text leading-tight">
            Let's build
            <br />
            <span className="text-gradient">something together</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: message */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-dim leading-relaxed font-body text-base">
              I'm open to freelance projects, internships, collaborations, and full-time
              opportunities. Whether you need a full-stack web app or an AI-powered solution —
              let's talk.
            </p>
            <p className="text-dim leading-relaxed font-body text-base">
              Drop me an email or connect on LinkedIn. I typically respond within 24 hours.
            </p>

            {/* Quick CTA */}
            <a
              href="mailto:shahzaibnaseem3169@gmail.com"
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-accent text-bg font-display font-semibold rounded-xl hover:bg-accent/90 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all duration-300 hover:scale-105"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Send me an email
            </a>
          </motion.div>

          {/* Right: contact cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-4 p-4 card-glass rounded-2xl hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-dim group-hover:text-accent group-hover:border-accent/40 transition-all duration-300 shrink-0">
                  {c.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono text-muted uppercase tracking-wide mb-0.5">{c.label}</p>
                  <p className="text-sm font-body text-dim group-hover:text-text transition-colors truncate">{c.value}</p>
                  <p className="text-xs text-muted font-body">{c.desc}</p>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-muted group-hover:text-accent ml-auto shrink-0 group-hover:translate-x-1 transition-all duration-200">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
