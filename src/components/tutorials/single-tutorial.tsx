import React from 'react'
import Link from '@docusaurus/Link'
import { CaretDoubleLeft } from '@phosphor-icons/react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { RiveAnimation } from '../rive-animation'
import { CTA } from '../cta'
import TitleImage from '@site/static/img/title/heart.svg'

export function SingleTutorial() {
  return (
    <>
      <section className="max-w-[1000px] mx-auto flex flex-col lg:flex-row gap-[36px] items-center">
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
            <h1 className="text-[30px] font-[700] !text-white my-0">Creating an ink! Project</h1>
          </div>
        </div>
        <div className="relative w-[280px] h-[280px] lg:w-[420px] lg:h-[372px] scale-125">
          <RiveAnimation src={useBaseUrl('animations/Squink-educator.riv')} autoplay={true} />
        </div>
      </section>
      <div className="max-w-[1000px] mx-auto rounded-[24px] border-[rgba(140,124,247,.15)] border border-solid bg-[#241a38] w-full">
        <TitleImage />
        <div className="p-[30px]">
          <section className="">
            <h2 className="font-[500] !text-white flex items-center gap-2">
              <span className="">1.</span>
              <span className="">Start, build and test your smart contract!</span>
            </h2>
          </section>
          <hr className="" />
          <section className="">
            <h2 className="font-[500] !text-white flex items-center gap-2">
              <span className="">2.</span>
              <span className="">Deploy and interact with your smart contract!</span>
            </h2>
          </section>
          <hr className="" />
          <section className="">
            <h2 className="font-[500] !text-white flex items-center gap-2">
              <span className="">3.</span>
              <span className="">Frontend development 101</span>
            </h2>
          </section>
        </div>
      </div>
      <CTA text="Have questions not covered here?" btnText="Read full docs" btnLink="/docs" btnVariant="secondary" />
    </>
  )
}
