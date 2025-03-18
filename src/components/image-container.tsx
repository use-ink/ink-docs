import React from 'react'
import cn from 'classnames'

export function ImageContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'flex items-center justify-center max-w-[300px] w-full h-auto rounded-lg border-[rgba(140,124,247,.15)] border border-solid bg-[#241a38] p-4',
        className,
      )}
    >
      {children}
    </div>
  )
}
