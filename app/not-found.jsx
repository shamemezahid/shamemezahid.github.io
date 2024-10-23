'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { Merriweather_Sans } from 'next/font/google'
import { HomeIcon } from '@heroicons/react/24/outline'
import AccessibilityAccordion from '@/components/utils/accessibilitySettings'

const merriweatherSans = Merriweather_Sans({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const NotFound = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = 69

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 69 + 10,
        speedX: (Math.random() - 0.5) * 4,
        speedY: (Math.random() - 0.5) * 4,
        opacity: Math.random() * 0.1 + 0.1
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        ctx.fillStyle = `rgba(24, 93, 56, ${particle.opacity})`
        ctx.font = `${particle.size}px ${merriweatherSans.style.fontFamily}`
        ctx.fillText('404', particle.x, particle.y)

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className={`relative flex flex-col items-center justify-center min-h-screen bg-neutral-100 dark:bg-neutral-900 overflow-hidden ${merriweatherSans.className}`}>
      <AccessibilityAccordion />
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="relative z-10 text-center bg-white/30 dark:bg-black/30 backdrop-blur-sm rounded-3xl p-6 sm:p-10 border border-neutral-200 dark:border-neutral-800">
        <h2 className="text-lg sm:text-2xl font-bold text-neutral-600 dark:text-neutral-400 mb-8">There are no easter eggs here</h2>
        <Link href="/" className="group flex items-center justify-center h-12 font-semibold text-emerald-700 dark:text-emerald-500 transition-all duration-500 px-4 py-3 rounded-2xl bg-neutral-200/[0.5] dark:bg-neutral-700/[0.5] hover:bg-emerald-100 dark:hover:bg-emerald-900">
          <HomeIcon className="w-0 h-0 group-hover:w-6 group-hover:h-6 transition-all duration-200" />
          <span className="ml-2 texl-base sm:text-lg transition-all duration-500">Return to Home</span>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
