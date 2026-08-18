'use client'
import { useEffect, useState, ReactNode } from 'react'
import { flushSync } from 'react-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CursorTrail from './CursorTrail'

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored) setDark(stored === 'dark')
    setMounted(true)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  /** Toggles the theme, animating a circular reveal from (x, y) when the
   *  browser supports the View Transitions API. Falls back to an instant
   *  (CSS-transition-smoothed) switch otherwise. */
  const toggleDark = (x: number, y: number) => {
    const next = !dark

    // Cast to `any` instead of suppressing a type error inline — whether
    // startViewTransition exists in the DOM lib types varies by TS version
    // (present in newer lib.dom.d.ts, absent in older ones), and a directive
    // comment meant to silence that missing type can itself fail the build
    // as an "unused directive" on setups where the type IS present.
    const docAny = document as any

    const supportsViewTransitions =
      typeof document !== 'undefined' &&
      typeof docAny.startViewTransition === 'function' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!supportsViewTransitions) {
      setDark(next)
      return
    }

    document.documentElement.style.setProperty('--theme-x', `${x}px`)
    document.documentElement.style.setProperty('--theme-y', `${y}px`)

    docAny.startViewTransition(() => {
      flushSync(() => setDark(next))
    })
  }

  return (
    <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>
      <CursorTrail />
      <Navbar dark={dark} onToggleTheme={toggleDark} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}