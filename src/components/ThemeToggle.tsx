'use client'

import { LuSun, LuMoon } from 'react-icons/lu'

interface ThemeToggleProps {
  dark: boolean
  onToggle: (x: number, y: number) => void
}

export default function ThemeToggle({ dark, onToggle }: ThemeToggleProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    onToggle(x, y)
  }

  return (
    <button
      onClick={handleClick}
      role="switch"
      aria-checked={dark}
      aria-label="Toggle theme"
      className="relative w-14.5 h-7.5 rounded-full border cursor-pointer transition-colors duration-300 shrink-0"
      style={{
        borderColor: 'var(--border)',
        background: 'var(--glass)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* faint icon watermarks in the track */}
      <LuSun
        size={12}
        className="absolute left-1.75 top-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300"
        style={{ color: 'var(--muted)', opacity: dark ? 0 : 1 }}
      />
      <LuMoon
        size={12}
        className="absolute right-1.75 top-1/2 -translate-y-1/2 pointer-events-none transition-opacity duration-300"
        style={{ color: 'var(--muted)', opacity: dark ? 1 : 0 }}
      />

      {/* sliding glow thumb */}
      <span
        className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ease-out"
        style={{
          transform: dark ? 'translateX(1.75rem)' : 'translateX(0)',
          background: 'linear-gradient(100deg, var(--accent), var(--accent-2))',
          boxShadow: '0 0 12px var(--accent-10)',
        }}
      >
        {dark ? (
          <LuMoon size={12} style={{ color: 'var(--ink)' }} />
        ) : (
          <LuSun size={12} style={{ color: 'var(--ink)' }} />
        )}
      </span>
    </button>
  )
}