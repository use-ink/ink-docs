import React from 'react'
import { Button } from '../ui/button'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'

export function TutorialCard({
  image,
  title,
  description,
  link,
}: {
  image: string
  title: string
  description: React.ReactNode
  link: string
}) {
  const _link = useBaseUrl(link)

  return (
    <div className="flex flex-col items-center w-full justify-center max-w-[540px] mx-auto border border-solid border-[#8c7cf726] bg-[#bd82fd1a] rounded-[24px]">
      <img src={image} alt={title} className="rounded-t-[24px]" />
      <div className="flex flex-col p-[18px] gap-[18px] w-full h-full">
        <h2 className="mb-0 font-bold !text-[30px] !leading-[30px] line-clamp-2">{title}</h2>
        <p className="text-[14px] font-medium mb-0 flex-1">{description}</p>
        <Link href={_link}>
          <Button variant="secondary" size="lg">
            View tutorial
          </Button>
        </Link>
      </div>
    </div>
  )
}
