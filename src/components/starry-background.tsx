'use client'

import React, { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  radius: number
  opacity: number
  speed: number
}

export function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }
    updateCanvasSize()

    const stars: Star[] = Array.from({ length: 100 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.3 + 0.4,
      speed: Math.random() * 0.2 + 0.1,
    }))

    let scrollY = 0
    let rafId: number

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        let y = star.y - scrollY * star.speed

        // Wrap stars to bottom when they move off the top
        if (y < 0) {
          y = window.innerHeight + (y % window.innerHeight)
        }

        ctx.beginPath()
        ctx.arc(star.x, y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
      })

      // Apply linear gradient mask
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, 'rgba(0, 0, 0, 1)')
      gradient.addColorStop(0.7, 'rgba(0, 0, 0, 0)')

      ctx.globalCompositeOperation = 'destination-in'
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = 'source-over'

      rafId = requestAnimationFrame(render)
    }

    function handleScroll() {
      scrollY = window.scrollY
    }

    function handleResize() {
      updateCanvasSize()
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    render()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }} />
}
