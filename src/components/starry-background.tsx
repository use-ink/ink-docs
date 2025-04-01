'use client'

import React, { useEffect, useRef } from 'react'

function generateStarPath(count: number): string {
  return Array.from({ length: count }, () => {
    const x = Math.random() * 500
    const y = Math.random() * 500
    const radius = (Math.floor(Math.random() * 3) + 1) / 2 // Random radius between 0.5-1.5
    return `M ${x} ${y} m -${radius} 0 a ${radius} ${radius} 0 1 0 ${radius * 2} 0 a ${radius} ${radius} 0 1 0 -${radius * 2} 0`
  }).join(' ')
}

export function StarryBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

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
        mask: 'linear-gradient(150deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 70%) add',
      }}
    >
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <pattern id="stars1" width="500" height="500" patternUnits="userSpaceOnUse">
            <path d={generateStarPath(50)} fill="white" opacity="0.6" />
          </pattern>
          <pattern id="stars2" width="500" height="500" patternUnits="userSpaceOnUse">
            <path d={generateStarPath(30)} fill="white" opacity="0.8" />
          </pattern>
          <pattern id="stars3" width="500" height="500" patternUnits="userSpaceOnUse">
            <path d={generateStarPath(20)} fill="white" opacity="1" />
          </pattern>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#stars1)"
          style={{ transform: 'translateY(calc(var(--scroll) * 0.1))' }}
        />
        <rect
          width="100%"
          height="100%"
          fill="url(#stars2)"
          style={{ transform: 'translateY(calc(var(--scroll) * 0.2))' }}
        />
        <rect
          width="100%"
          height="100%"
          fill="url(#stars3)"
          style={{ transform: 'translateY(calc(var(--scroll) * 0.3))' }}
        />
      </svg>
    </div>
  )
}
