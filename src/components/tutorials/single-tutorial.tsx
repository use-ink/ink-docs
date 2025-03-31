import React from 'react'
import Link from '@docusaurus/Link'
import { CaretDoubleLeft } from '@phosphor-icons/react'
import useBaseUrl from '@docusaurus/useBaseUrl'

import { RiveAnimation } from '../rive-animation'
import { CTA } from '../cta'

import TitleImage from '@site/static/img/title/heart.svg'

export function SingleTutorial({ children, title }: { children: React.ReactNode; title: React.ReactNode }) {
  return (
    <article className="single-tutorial">
      <header className="max-w-[1000px] mx-auto flex flex-col lg:flex-row gap-[36px] items-center mb-4 lg:mb-0">
        <div className="gap-[120px] flex flex-col">
          <Link
            to="/tutorials"
            className="text-[13px] font-[500] !text-[rgb(220,215,224)] flex items-center gap-1 !no-underline !hover:underline"
          >
            <CaretDoubleLeft size={13} color="rgb(189, 130, 253)" />
            Back to tutorials
          </Link>
          <div className="flex flex-col gap-[12px]">
            <span className="text-[rgb(189,130,253)] text-[21px] font-[500]">ink! Tutorial:</span>
            <h1 className="text-[30px] font-[700] !text-white my-0">{title}</h1>
          </div>
        </div>
        <div className="relative w-[280px] h-[280px] lg:w-[420px] lg:h-[372px] scale-[120%]">
          <RiveAnimation src={useBaseUrl('animations/Squink-educator.riv')} autoplay={true} />
        </div>
      </header>
      <div className="max-w-[1000px] mx-auto rounded-[24px] border-[rgba(140,124,247,.15)] border border-solid bg-[#bd82fd1a] w-full">
        <TitleImage />
        <div className="p-[30px]">{children}</div>
      </div>
      <CTA text="Have questions not covered here?" btnText="Read full docs" btnLink="/docs" btnVariant="secondary" />
    </article>
  )
}
