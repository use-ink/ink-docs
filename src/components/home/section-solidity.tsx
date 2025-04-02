import React from 'react'
import Link from '@docusaurus/Link'

import { Button } from '../ui/button'
import { MainCta } from './main-cta'
import { MagicWand } from '@phosphor-icons/react'
import { AnimatedText } from '../animated-text'
import Solidity from '@site/static/img/solidity.svg'
import MetaMask from '@site/static/img/metamask.svg'
import clsx from 'clsx'
import { Clouds } from './clouds'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { BubbleContainer } from '../bubblecontainer'
import { RiveAnimation } from '../rive-animation'

export function SectionSolidity() {
  return (
    <section
      className="relative flex flex-col items-center justify-center section-solidity lg:h-[800px] overflow-hidden"
      style={{
        background: 'linear-gradient(180deg,#221e4a 0%,#413685 100%)',
      }}
    >
      <Clouds className="absolute -top-24 left-1/4" />
      <div className="absolute top-0 left-1/2 translate-x-[180px] w-[240px] h-[240px] z-20 pointer-events-none">
        <div className="hidden w-full h-full will-change-transform animate-zeppelin md:block">
          <RiveAnimation
            src={useBaseUrl('animations/Zeppelin.riv')}
            autoplay={true}
            animations={['airship', 'head', 'tentacle']}
          />
        </div>
      </div>
      <div className="container !max-w-[1000px] relative z-10 flex flex-col items-center justify-center">
        <BubbleContainer>
          <MainCta
            classNames={{
              container: 'order-4 lg:order-1 lg:mb-0',
              media: 'flex items-center justify-center',
              textWrapper: 'max-w-[400px]',
            }}
            variant="left"
            notice={
              <span className="flex flex-row items-center gap-2 !text-[#ffc249] justify-center lg:justify-start pointer-events-auto">
                <MagicWand size={16} weight="fill" className="inline animate-flip" />
                <AnimatedText text="NEW FEATURE" element="span" className="text-[16px] font-[600]" />
              </span>
            }
            title="Solidity + MetaMask Compatible"
            description="ink! can now speak with Solidity contracts and MetaMask out of the box. You can even use it to write parts of your dApp in Solidity and other parts in Rust with ink!"
            level="h2"
            cta={
              <div className="flex flex-col justify-center gap-4 lg:justify-start md:flex-row md:gap-4">
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
              <div className="relative w-[265px] h-[265px] scale-75 lg:scale-100">
                <div
                  className={clsx(
                    'absolute bottom-0 right-0 z-0 h-fit w-fit flex items-center justify-center bg-[#8c7cf7] shadow-[8px_8px_0px_0px_#6957de] rounded-[30px] duration-500 p-2.5',
                  )}
                  style={{
                    transform: 'rotate(30deg) skewX(-12deg) skewY(-12deg)',
                  }}
                >
                  <div className="flex items-center justify-center bg-white border-[#6957de] border-4 border-solid rounded-[24px]">
                    <div className="flex items-center p-4 text-black">
                      <MetaMask className="w-[100px] h-[100px] lg:w-[100px] lg:h-[100px]" />
                    </div>
                  </div>
                </div>
                <div
                  className={clsx(
                    'absolute top-0 left-0 z-0 h-fit w-fit flex items-center justify-center bg-[#8c7cf7] shadow-[8px_8px_0px_0px_#6957de] rounded-[30px] duration-500 p-2.5',
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
        </BubbleContainer>
      </div>
    </section>
  )
}
