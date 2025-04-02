import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { cn } from '@site/src/util'

interface NumberedHeadlineProps {
  number: number
  className?: string
  level?: number
  children: React.ReactNode
}

export function NumberedHeadline({ number, className, level = 2, children }: NumberedHeadlineProps) {
  const Component = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  return (
    <Component className={cn('flex items-center gap-2 mb-10', { '!text-[36px] font-bold': level === 2 }, className)}>
      <img src={useBaseUrl(`/img/numbers/${number}_box.svg`)} alt={`Number ${number}`} className="w-12 h-12 mr-2" />
      {children}
    </Component>
  )
}
