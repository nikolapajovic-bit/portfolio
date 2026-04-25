'use client'

import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

interface NavbarProps {
  dark: boolean
  setDark: (value: boolean) => void
}

export default function Navbar({ dark, setDark }: NavbarProps) {
  const [open, setOpen] = useState(false)

  const links = ['About', 'Projects', 'Contact']

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-[background,border-color] duration-300 bg-glass border-b border-border">
        <div className="max-w-225 mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <a
            href="#"
            className="font-syne font-extrabold text-xl tracking-tight hover:text-accent transition-colors duration-300"
          >
            NP<span style={{ color: "var(--accent)" }}>.</span>
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

            <ThemeToggle dark={dark} setDark={setDark} />
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col items-center gap-6 py-6 bg-glass border-t border-border">
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

            <ThemeToggle dark={dark} setDark={setDark} />
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16" />
    </>
  )
}