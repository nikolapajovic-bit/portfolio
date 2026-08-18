'use client'

import { useEffect, useRef } from 'react'

const TRAIL_LENGTH = 14
const IDLE_TIMEOUT_MS = 120
const SETTLE_THRESHOLD_PX = 0.4

export default function CursorTrail() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const trailRefs = useRef<HTMLDivElement[]>([])
  const trailPos = useRef(
    Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 }))
  )
  const mouse = useRef({ x: 0, y: 0 })
  const rafId = useRef<number | null>(null)
  const lastMoveAt = useRef(0)

  useEffect(() => {
    const isDesktop =
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!isDesktop) return

    const ensureLoopRunning = () => {
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(animate)
      }
    }

    const handleMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      lastMoveAt.current = performance.now()

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      }
      ensureLoopRunning()
    }

    const handleEnter = () => {
      if (!ringRef.current) return
      ringRef.current.style.width = '54px'
      ringRef.current.style.height = '54px'
    }
    const handleLeave = () => {
      if (!ringRef.current) return
      ringRef.current.style.width = '36px'
      ringRef.current.style.height = '36px'
    }

    document.addEventListener('mousemove', handleMove)

    const interactiveEls = document.querySelectorAll('a, button')
    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    // Trail dots ease toward the cursor each frame. Once they've caught up
    // and the mouse has been still for a bit, stop the RAF loop entirely
    // instead of burning a frame every ~16ms forever.
    function animate() {
      let maxDelta = 0

      trailPos.current.forEach((p, i) => {
        const target = i === 0 ? mouse.current : trailPos.current[i - 1]
        const dx = target.x - p.x
        const dy = target.y - p.y
        p.x += dx * 0.35
        p.y += dy * 0.35
        maxDelta = Math.max(maxDelta, Math.abs(dx), Math.abs(dy))

        const el = trailRefs.current[i]
        if (el) {
          el.style.transform = `translate(${p.x}px, ${p.y}px) translate(-50%, -50%)`
        }
      })

      const idleFor = performance.now() - lastMoveAt.current
      const settled = maxDelta < SETTLE_THRESHOLD_PX

      if (settled && idleFor > IDLE_TIMEOUT_MS) {
        rafId.current = null
        return
      }

      rafId.current = requestAnimationFrame(animate)
    }

    ensureLoopRunning()

    return () => {
      document.removeEventListener('mousemove', handleMove)
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
      if (rafId.current !== null) cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <div className="cursor-fx">
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) trailRefs.current[i] = el
          }}
          className="trail-dot"
          style={{
            width: `${6 - i * 0.3}px`,
            height: `${6 - i * 0.3}px`,
            opacity: (1 - i / TRAIL_LENGTH) * 0.5,
          }}
        />
      ))}
    </div>
  )
}