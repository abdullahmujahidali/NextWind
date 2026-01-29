'use client'

import { useEffect, useRef } from 'react'

export function GradientBackground({ className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const animate = () => {
      time += 0.002

      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      )

      // Animate gradient colors
      const hue1 = 239 + Math.sin(time) * 10 // Indigo range
      const hue2 = 271 + Math.cos(time) * 10 // Violet range

      gradient.addColorStop(0, `hsla(${hue1}, 84%, 67%, 0.15)`)
      gradient.addColorStop(0.5, `hsla(${hue2}, 84%, 67%, 0.1)`)
      gradient.addColorStop(1, `hsla(${hue1}, 84%, 67%, 0.15)`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add subtle floating orbs
      const orbCount = 3
      for (let i = 0; i < orbCount; i++) {
        const x = canvas.width * (0.3 + 0.4 * Math.sin(time + i * 2))
        const y = canvas.height * (0.3 + 0.4 * Math.cos(time * 0.7 + i * 2))
        const radius = 200 + 100 * Math.sin(time + i)

        const orbGradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        orbGradient.addColorStop(0, `hsla(${hue1 + i * 20}, 84%, 67%, 0.08)`)
        orbGradient.addColorStop(1, 'hsla(0, 0%, 0%, 0)')

        ctx.fillStyle = orbGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 -z-10 ${className}`}
      style={{ background: 'transparent' }}
    />
  )
}

export function StaticGradientBackground({ className = '' }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      {/* Subtle floating orbs only - no overlapping gradient */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-float rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 animate-float rounded-full bg-primary-end/5 blur-3xl" style={{ animationDelay: '-3s' }} />
    </div>
  )
}
