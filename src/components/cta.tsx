import Link from '@docusaurus/Link'
import React from 'react'
import { Button } from './ui/button'

export function CTA({ text, btnText, btnLink }: { text: string; btnText: string; btnLink: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 my-8 md:flex-row">
      <p className="m-0">{text}</p>
      <Link href={btnLink} className="text-blue-500">
        <Button size="lg" variant="secondary">
          {btnText}
        </Button>
      </Link>
    </div>
  )
}
