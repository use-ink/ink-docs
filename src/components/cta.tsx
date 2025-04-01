import Link from '@docusaurus/Link'
import React from 'react'
import { Button } from './ui/button'
import { cn } from '../util'

export function CTA({
  text,
  btnText,
  btnLink,
  btnVariant = 'secondary',
  className,
}: {
  className?: string
  text: string
  btnText: string
  btnLink: string
  btnVariant?: 'secondary' | 'default' | 'destructive' | 'base' | 'outline' | 'ghost' | 'link'
}) {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-4 my-8 md:flex-row', className)}>
      <p className="m-0">{text}</p>
      <Link href={btnLink} className="text-blue-500">
        <Button size="lg" variant={btnVariant}>
          {btnText}
        </Button>
      </Link>
    </div>
  )
}
