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
  const circleSizeValue = typeof circleSize === 'number' ? `${circleSize}px` : circleSize

  const containerStyle: CSSProperties = {
    width: circleSizeValue,
    height: circleSizeValue,
    position: 'relative',
    '--start-degree': `${start}deg`,
    '--end-degree': `${start + 360}deg`,
    '--reverse-end-degree': `${start - 360}deg`,
  } as CSSProperties

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes rotate {
            from { transform: rotate(var(--start-degree)); }
            to { transform: rotate(var(--end-degree)); }
          }
          
          @keyframes rotate-reverse {
            from { transform: rotate(var(--start-degree)); }
            to { transform: rotate(var(--reverse-end-degree)); }
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

      <div className={cn('absolute inset-0 border-2 rounded-full', className)}></div>

      <div
        className="absolute inset-0"
        style={{
          transformOrigin: 'center',
          animation: `${reverse ? 'rotate-reverse' : 'rotate'} ${animationDuration}s linear infinite`,
        }}
      >
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
