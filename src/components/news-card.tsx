import React from 'react'
import { Button } from './ui/button'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'

export function NewsCard({
  image,
  title,
  description,
  link,
  date,
  key,
}: {
  image: string
  title: string
  description: React.ReactNode
  link: string
  date: string
  key: string
}) {
  const _link = useBaseUrl(link)
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div
      className="flex flex-col items-center w-full justify-center max-w-[750px] mx-auto border border-solid border-[#8c7cf726] bg-[#bd82fd1a] rounded-[24px]"
      key={key}
    >
      <img src={image} alt={title} className="rounded-t-[24px]" />
      <div className="flex flex-col p-[24px] gap-[18px] w-full h-full">
        <h2 className="mb-0 font-bold !text-[30px] !leading-[30px] line-clamp-2">{title}</h2>
        <p className="!text-[14px] mb-0 text-gray-400">{formattedDate}</p>
        <p className="flex-1 mb-2">{description}</p>
        <Link href={_link}>
          <Button variant="secondary" size="lg">
            Read more
          </Button>
        </Link>
      </div>
    </div>
  )
}
