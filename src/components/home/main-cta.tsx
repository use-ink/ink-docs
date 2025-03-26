import React from 'react'
import cn from 'classnames'

export function MainCta({
  notice,
  title,
  description,
  cta,
  media,
  variant = 'left',
  level = 'h1',
  classNames,
}: {
  notice?: React.ReactNode
  title: string
  description: string
  cta: React.ReactNode
  media: React.ReactNode
  variant?: 'left' | 'right' | 'center'
  level?: 'h1' | 'h2'
  classNames?: {
    container?: string
    title?: string
    description?: string
    cta?: string
    media?: string
  }
}) {
  if (variant === 'center') {
    return (
      <div className={cn('flex flex-col items-center text-center', classNames?.container)}>
        {media && <div className={cn('w-full mb-8', classNames?.media)}>{media}</div>}
        <div className="flex flex-col gap-[30px] max-w-2xl">
          {level === 'h1' ? (
            <h1 className={cn('text-[64px] font-bold leading-[57px] p-0 m-0', classNames?.title)}>{title}</h1>
          ) : (
            <h2 className={cn('p-0 m-0', classNames?.title)}>{title}</h2>
          )}
          <p className={cn('font-[600] p-0 m-0 text-[#dcd7e0]', classNames?.description)}>{description}</p>
          <div className="flex justify-center">{cta}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-2 my-32 lg:grid-cols-2 lg:my-0">
      <div
        className={cn(
          `flex flex-col gap-[30px] justify-center max-w-2xl text-center lg:text-left ${variant === 'left' ? 'order-1' : 'order-2'}`,
          classNames?.container,
        )}
      >
        {notice && <div className="text-sm text-gray-500">{notice}</div>}
        {level === 'h1' ? (
          <h1 className={cn('text-[64px] font-bold leading-[57px] p-0 m-0', classNames?.title)}>{title}</h1>
        ) : (
          <h2 className={cn('text-[48px] font-bold leading-[40px] p-0 m-0', classNames?.title)}>{title}</h2>
        )}
        <p className={cn('font-[600] p-0 m-0 text-[#dcd7e0]', classNames?.description)}>{description}</p>
        {cta}
      </div>
      {media && (
        <div className={cn(`${variant === 'left' ? 'order-2' : 'w-full order-1'}`, classNames?.media)}>{media}</div>
      )}
    </div>
  )
}
