import { cn } from '@site/src/util'
import React from 'react'

import type { CSSProperties, ReactNode } from 'react'

interface CircleAnimationProps {
  circleSize?: string | number
  className?: string
  children: ReactNode
  start?: number // 0-360 degrees, where to place the element initially
  dotPosition?: number // 0-360 degrees, where to place the dot initially
  animationDuration?: number // in seconds
  reverse?: boolean // direction of rotation
}

export default function CircleAnimation({
  circleSize = 200,
  className = '',
  children,
  start = 0,
  dotPosition = 0,
  animationDuration = 4,
  reverse = false,
}: CircleAnimationProps) {
  // Convert circleSize to string if it's a number (adding px)
  const circleSizeValue = typeof circleSize === 'number' ? `${circleSize}px` : circleSize

  // Use start if provided, otherwise fall back to dotPosition for backward compatibility
  const initialRotation = start !== undefined ? start : dotPosition

  // Container style
  const containerStyle: CSSProperties = {
    width: circleSizeValue,
    height: circleSizeValue,
    position: 'relative',
  }

  return (
    <div style={containerStyle}>
      {/* Global styles for animations */}
      <style>
        {`
          @keyframes rotate {
            from { transform: rotate(${initialRotation}deg); }
            to { transform: rotate(${initialRotation + 360}deg); }
          }
          
          @keyframes rotate-reverse {
            from { transform: rotate(${initialRotation}deg); }
            to { transform: rotate(${initialRotation - 360}deg); }
          }
          
          @keyframes counter-rotate {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(-360deg); }
          }
          
          @keyframes counter-rotate-reverse {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
        `}
      </style>

      {/* Circle border */}
      <div className={cn('absolute inset-0 border-2 rounded-full', className)}></div>

      {/* Rotating wrapper - this rotates around the center */}
      <div
        className="absolute inset-0"
        style={{
          transformOrigin: 'center',
          animation: `${reverse ? 'rotate-reverse' : 'rotate'} ${animationDuration}s linear infinite`,
        }}
      >
        {/* This element is positioned at the top of the circle, exactly on the border */}
        <div
          className="absolute top-0 left-1/2"
          style={{
            transform: 'translateX(-50%) translateY(-50%)',
            animation: `${reverse ? 'counter-rotate-reverse' : 'counter-rotate'} ${animationDuration}s linear infinite`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
