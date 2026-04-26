export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm font-body">
          © {year} <span className="text-dim">Shahzaib Naseem</span>. Built with React + Tailwind.
        </p>
        <div className="flex items-center gap-5">
          {[
            { label: 'GitHub',   href: 'https://github.com/shahzaib427' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shahzaib-naseem' },
            { label: 'Email',    href: 'mailto:shahzaibnaseem3169@gmail.com' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="text-muted hover:text-accent text-sm font-body transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
