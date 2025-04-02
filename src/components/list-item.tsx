import React from 'react'
import { cn } from '../util'

export function ListItem({
  children,
  icon,
  href,
  className,
}: {
  children: React.ReactNode
  icon?: React.ReactNode
  href?: string
  className?: string
}) {
  const content = (
    <>
      <span className="text-[#8c7cf7] inline-flex group-hover:text-[#bd83fb]">{icon}</span>
      <div className="transition-transform duration-200 will-change-transform group-hover:translate-x-1">
        {children}
      </div>
    </>
  )

  return (
    <li
      className={cn(
        'flex items-center gap-2 group bg-[rgba(128,83,184,0.06)] hover:bg-[#8a66b329] rounded-[12px] text-[15px] font-[600]',
        className,
      )}
    >
      {href ? (
        <a
          href={href}
          className="flex items-center content-center w-full h-full gap-2 px-3 py-2 text-white group hover:no-underline hover:text-white"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  )
}
