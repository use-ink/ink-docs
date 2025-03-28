import React from 'react'
import cn from 'classnames'

export function CtaHome({
  notice,
  title,
  description,
  cta,
  classNames,
  level = 'h1',
}: {
  notice?: string
  title: string
  description: string
  cta: React.ReactNode
  classNames?: {
    container?: string
    title?: string
    description?: string
    cta?: string
    media?: string
    textWrapper?: string
  }
  level?: 'h1' | 'h2'
}) {
  return (
    <div className={cn('text-wrapper flex flex-col gap-[30px] max-w-2xl', classNames?.textWrapper)}>
      {notice && <div className="text-sm text-gray-500">{notice}</div>}
      {level === 'h1' ? (
        <h1 className={cn('text-[64px] font-bold leading-[57px] p-0 m-0', classNames?.title)}>{title}</h1>
      ) : (
        <h2 className={cn('font-bold p-0 m-0', classNames?.title)}>{title}</h2>
      )}
      <p className={cn('font-[600] p-0 m-0 text-[#dcd7e0]', classNames?.description)}>{description}</p>
      {cta}
    </div>
  )
}
