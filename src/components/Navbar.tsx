'use client'

import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'

interface NavbarProps {
  dark: boolean
  onToggleTheme: (x: number, y: number) => void
}

export default function Navbar({ dark, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false)

  const links = ['About', 'Projects', 'Contact']

  return (
    <>
      <div className="fixed top-4 inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[calc(100%-2rem)] max-w-225 z-50">
        <nav className="rounded-2xl border border-border bg-glass backdrop-blur-md transition-[background,border-color] duration-300">
          <div className="px-4 md:px-8 h-16 flex items-center justify-between">

            {/* Logo */}
            <a
              href="#"
              className="inline-flex items-center transition-transform duration-300 hover:scale-105"
              aria-label="Go to top"
            >
              <Logo size={34} />
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="nav-link font-syne-mono text-xs uppercase tracking-widest3 hover:text-accent transition-colors duration-150"
                >
                  {link}
                </a>
              ))}

              <ThemeToggle dark={dark} onToggle={onToggleTheme} />
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col gap-1"
              aria-label="Toggle menu"
            >
              <span className={`block h-[2.5px] w-6 rounded-full bg-(--accent) ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-[2.5px] w-6 rounded-full bg-(--accent) ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-[2.5px] w-6 rounded-full bg-(--accent) ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? 'max-h-60 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <div className="rounded-2xl border border-border bg-glass backdrop-blur-md flex flex-col items-center gap-6 py-6">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="font-syne-mono text-xs uppercase tracking-widest3 hover:text-accent transition"
              >
                {link}
              </a>
            ))}

            <ThemeToggle dark={dark} onToggle={onToggleTheme} />
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-24" />
    </>
  )
}