'use client'
import { useEffect, useState, ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

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

  return (
    <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>
      <Navbar dark={dark} setDark={setDark} />
        {children}
      <Footer />
    </div>
  )
}