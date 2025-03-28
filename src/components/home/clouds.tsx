import React from 'react'
import CloudsSvg from '@site/static/img/clouds.svg'
import clsx from 'clsx'

export function Clouds({ className }: { className?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden -z-0">
      <div
        className={clsx(
          'absolute opacity-5 top-0 left-1/4 w-[1404px] h-[246px] will-change-transform animate-clouds pointer-events-none',
          className,
        )}
      >
        <CloudsSvg className="w-full h-full" />
      </div>
    </div>
  )
}
