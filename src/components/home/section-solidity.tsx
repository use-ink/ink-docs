import React from 'react'
import Link from '@docusaurus/Link'

import { Button } from '../ui/button'
import { MainCta } from './main-cta'
import { MagicWand, Star } from '@phosphor-icons/react'
import { AnimatedText } from '../animated-text'
import { SocialIcon } from '../footer/social-icon'
import Solidity from '@site/static/img/solidity.svg'
import MetaMask from '@site/static/img/metamask.svg'
import clsx from 'clsx'
import ShapeBlur from '@site/src/reactbits/Backgrounds/ShapeBlur/ShapeBlur'

export function SectionSolidity() {
  return (
    <section
      className="relative min-h-screen section-solidity"
      style={{
        background: 'linear-gradient(180deg,#221e4a 0%,#413685 100%)',
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        {/* <ShapeBlur
          variation={0}
          pixelRatioProp={window.devicePixelRatio || 0.5}
          shapeSize={1}
          roundness={0.6}
          borderSize={0.05}
          circleSize={0.5}
          circleEdge={1}
        /> */}
      </div>
      <div className="container !max-w-[1000px] md:px-0 relative z-10 flex flex-col items-center justify-center min-h-screen">
        <MainCta
          classNames={{
            media: 'flex items-center justify-center',
          }}
          variant="left"
          notice={
            <span className="flex flex-row items-center gap-2 !text-[#ffc249] hover:!text-[rgb(189,130,253)] justify-center lg:justify-start pointer-events-auto">
              <MagicWand size={16} weight="fill" className="inline animate-flip" />
              <AnimatedText text="NEW FEATURE" element="span" className="text-[16px] font-[600]" />
            </span>
          }
          title="Solidity + MetaMask Compatible"
          description="ink! can now speak with Solidity contracts and MetaMask out of the box. You can even use it to write parts of your dApp in Solidity and other parts in Rust with ink!"
          level="h2"
          cta={
            <div className="flex flex-col gap-4 md:flex-row md:gap-4">
              <Link
                to="https://github.com/use-ink/ink-examples"
                className="hover:scale-105 hover:-rotate-1 !transition-all duration-300"
              >
                <Button size="lg" variant="secondary">
                  Learn more
                </Button>
              </Link>
            </div>
          }
          media={
            <div className="relative w-[265px] h-[265px]">
              <div
                className={clsx(
                  'absolute bottom-0 right-0 z-0 h-fit w-fit flex items-center justify-center bg-[#8c7cf7] rounded-[30px] shadow-[8px_8px_0px_0px_#6957de,0_0_100px_#000a] hover:shadow-[10px_10px_0px_0px_#6957de,0_0_100px_#6957deaa] transition-shadow duration-500 p-2.5',
                )}
                style={{
                  transform: 'rotate(30deg) skewX(-12deg) skewY(-12deg)',
                }}
              >
                <div className="flex items-center justify-center bg-white border-[#6957de] border-4 border-solid rounded-[24px]">
                  <div className="flex items-center p-4 text-black">
                    <MetaMask className="w-[100px] h-[100px]" />
                  </div>
                </div>
              </div>
              <div
                className={clsx(
                  'absolute top-0 left-0 z-0 h-fit w-fit flex items-center justify-center bg-[#8c7cf7] rounded-[30px] shadow-[8px_8px_0px_0px_#6957de,0_0_100px_#000a] hover:shadow-[10px_10px_0px_0px_#6957de,0_0_100px_#6957deaa] transition-shadow duration-500 p-2.5',
                )}
                style={{
                  transform: 'rotate(15deg) skewX(-15deg) skewY(-3deg)',
                }}
              >
                <div className="flex items-center justify-center bg-white border-[#6957de] border-4 border-solid rounded-[24px]">
                  <div className="flex items-center p-4 text-black">
                    <Solidity className="w-[100px] h-[100px]" />
                  </div>
                </div>
              </div>
            </div>
          }
        />
      </div>
    </section>
  )
}
