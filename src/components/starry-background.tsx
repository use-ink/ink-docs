'use client'

import React, { useEffect, useRef } from 'react'

function generateStars(count: number) {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    parallax: Math.random() * 0.4 + 0.2, // parallax factor between 0.2 and 1
    animationDelay: Math.random() * 2,
  }))
}

export function StarryBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stars = generateStars(150)

  useEffect(() => {
    function handleScroll() {
      if (!containerRef.current) return
      requestAnimationFrame(() => {
        containerRef.current?.style.setProperty('--scroll', `${window.scrollY}px`)
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        imageRendering: 'pixelated',
        willChange: 'transform',
        transform: 'translate3d(0, 0, 0)',
        mask: 'linear-gradient(150deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 70%) add',
      }}
    >
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-star-glow"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            transform: `translateY(calc(var(--scroll) * ${star.parallax}))`,
            animationDelay: `${star.animationDelay}s`,
            backfaceVisibility: 'hidden',
            WebkitFontSmoothing: 'none',
          }}
        />
      ))}
    </div>
  )
}
