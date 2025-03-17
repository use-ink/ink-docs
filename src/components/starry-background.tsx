import React, { useEffect, useRef } from 'react'

export default function OptimizedStarryBackground() {
  const svgRef = useRef<SVGSVGElement>(null)
  const starsRef = useRef<SVGCircleElement[]>([])
  const scrollYRef = useRef(0)
  const animationRef = useRef<number>(0)
  const dimensionsRef = useRef({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      if (!svgRef.current) return

      // Update dimensions
      dimensionsRef.current = {
        width: window.innerWidth,
        height: window.innerHeight,
      }

      // Clear existing stars
      if (svgRef.current) {
        const defs = svgRef.current.querySelector('defs')
        while (svgRef.current.lastChild && svgRef.current.lastChild !== defs) {
          svgRef.current.removeChild(svgRef.current.lastChild)
        }
      }

      // Generate new stars
      const starCount = Math.min(150, Math.floor((dimensionsRef.current.width * dimensionsRef.current.height) / 8000))
      starsRef.current = []

      for (let i = 0; i < starCount; i++) {
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        const x = Math.random() * dimensionsRef.current.width
        const y = Math.random() * dimensionsRef.current.height
        const radius = Math.random() * 1.5 + 1
        const opacity = Math.random() * 0.5 + 0.5

        circle.setAttribute('cx', x.toString())
        circle.setAttribute('cy', y.toString())
        circle.setAttribute('r', radius.toString())
        circle.setAttribute('fill', 'white')
        circle.setAttribute('opacity', opacity.toString())
        circle.dataset.speed = (Math.random() * 0.5 + 0.01).toString()
        circle.dataset.originalY = y.toString()

        svgRef.current.appendChild(circle)
        starsRef.current.push(circle)
      }
    }

    const handleScroll = () => {
      scrollYRef.current = window.scrollY
    }

    const animate = () => {
      starsRef.current.forEach((star) => {
        const speed = Number.parseFloat(star.dataset.speed || '0.01')
        const originalY = Number.parseFloat(star.dataset.originalY || '0')

        // Calculate new position based on scroll
        const yPos = originalY - scrollYRef.current * speed
        const wrappedY =
          ((yPos % dimensionsRef.current.height) + dimensionsRef.current.height) % dimensionsRef.current.height

        star.setAttribute('cy', wrappedY.toString())
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)

    handleResize()
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div
      className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10"
      style={{
        mask: 'linear-gradient(150deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%) add',
      }}
    >
      <svg ref={svgRef} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="starGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}
