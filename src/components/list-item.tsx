import React from 'react'

export function ListItem({
  children,
  icon,
  href,
}: {
  children: React.ReactNode
  icon?: React.ReactNode
  href?: string
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
    <li className="flex items-center gap-2 group bg-[#8053b80f] hover:bg-[#8a66b329] text-[15px] font-[600]">
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
