'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export default function Footer() {
  const links = [
    {
      label: 'GitHub',
      href: 'https://github.com/nikolapajovic-bit',
      icon: <FaGithub size={16} />,
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nikola-pajovic-818410191',
      icon: <FaLinkedin size={16} />,
    },
    {
      label: 'Email',
      href: 'mailto:nikpajovic@gmail.com',
      icon: <HiOutlineMail size={16} />,
    },
  ]

  return (
    <footer className="mt-auto py-10 relative z-10">
      
      {/* Gradient top line */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-(--accent) to-transparent opacity-40 mb-10" />

      <div className="max-w-225 mx-auto px-4 md:px-8 flex flex-col items-center md:flex-row md:justify-between gap-10">
        
        {/* Logo / Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <span className="font-syne font-extrabold text-xl tracking-tight">
            NP<span style={{ color: 'var(--accent)' }}>.</span>
          </span>

          <span className="text-xs text-muted uppercase tracking-widest2">
            Software Engineer · {new Date().getFullYear()}
          </span>

          <span className="text-xs text-muted opacity-80">
            Building clean & modern web experiences
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-xs uppercase tracking-widest3 text-paper-dim transition-colors duration-200 hover:text-accent px-3 py-1.5 rounded-md hover:bg-accent/10"
            >
              <span className="text-accent/80 group-hover:text-accent transition">
                {l.icon}
              </span>

              <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 group-hover:after:w-full">
                {l.label}
              </span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <span className="text-xs text-muted uppercase tracking-widest4 text-center md:text-left">
          © {new Date().getFullYear()} Nikola Pajović. All rights reserved.
        </span>
      </div>
    </footer>
  )
}