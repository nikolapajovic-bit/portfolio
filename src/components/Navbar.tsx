'use client'

import ThemeToggle from './ThemeToggle'

interface NavbarProps {
  dark: boolean
  setDark: (value: boolean) => void
}

export default function Navbar({ dark, setDark }: NavbarProps) {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-[background,border-color] duration-300 bg-glass border-b border-border">
        <div className="max-w-225 mx-auto px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-syne font-extrabold text-xl tracking-tight transition-colors duration-300 hover:text-accent"
          >
            NP<span style={{ color: "var(--accent)" }}>.</span>
          </a>

          {/* Menu */}
          <div className="flex items-center gap-8">
            {['About', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="nav-link font-syne-mono text-xs uppercase tracking-widest3 transition-colors duration-150 hover:text-accent"
              >
                {link}
              </a>
            ))}

            <ThemeToggle dark={dark} setDark={setDark} />
          </div>
        </div>
      </nav>

      {/* Spacer so content doesn't hide behind navbar */}
      <div className="h-16" />
    </>
  )
}