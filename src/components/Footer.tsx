'use client'

export default function Footer() {
  const links = [
    { label: 'GitHub', href: 'https://github.com/nikolapajovic-bit' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nikola-pajovic-818410191' },
    { label: 'Email', href: 'mailto:nikpajovic@gmail.com' },
  ]

  return (
    <footer className="mt-auto border-t border-border py-8 relative z-10">
      <div className="max-w-225 mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-syne font-extrabold text-xl tracking-tight">
            NP<span style={{ color: "var(--accent)" }}>.</span>
          </span>
          <span className="font-syne-mono text-xs uppercase tracking-widest2 text-muted">
            Software Engineer · {new Date().getFullYear()}
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-syne-mono text-xs uppercase tracking-widest3 transition-colors duration-150 text-paper-dim hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <span className="font-syne-mono text-xs uppercase tracking-widest4 text-muted text-center md:text-left">
          &copy; {new Date().getFullYear()} Nikola Pajović. All rights reserved.
        </span>
      </div>
    </footer>
  )
}