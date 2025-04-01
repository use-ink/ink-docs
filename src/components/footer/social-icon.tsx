import clsx from 'clsx'
import React from 'react'

export function SocialIcon({
  href,
  icon,
  className,
  helpText,
  size = 100,
}: {
  href?: string
  icon: React.ReactNode
  className?: string
  helpText?: string
  size?: number
}) {
  const inner = (
    <div
      className={clsx(
        'z-0 relative flex items-center justify-center w-[124px] h-[124px] bg-[#8c7cf7] rounded-[30px] shadow-[8px_8px_0px_0px_#6957de] hover:shadow-[10px_10px_0px_0px_#6957de] transition-shadow duration-500 group',
        className,
      )}
    >
      <div
        className={`flex items-center justify-center w-[${size}px] h-[${size}px] bg-white border-[#6957de] border-4 border-solid rounded-[24px]`}
      >
        <div className="flex items-center text-black group-hover:text-[#BD82FD] transition-colors duration-500">
          {icon}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center transition-transform transform will-change-transform group"
        >
          {helpText && (
            <div className="absolute z-20 left-1/2 -translate-x-1/2 flex items-center justify-center w-auto p-3 min-w-[200px] max-w-[250px] text-center transition-all duration-700 border-2 shadow-lg opacity-0 pointer-events-none bg-white -top-1/2 rounded-2xl group-hover:opacity-[97%] group-hover:-top-8 font-[600] text-black">
              {helpText}
            </div>
          )}
          {inner}
        </a>
      ) : (
        inner
      )}
    </>
  )
}
