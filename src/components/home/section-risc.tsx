import React from 'react'
import Link from '@docusaurus/Link'

import { Button } from '../ui/button'
import { MainCta } from './main-cta'
import WaterLine from '@site/static/img/water-line.svg'

import Fish1 from '@site/static/img/fishes/Fish-29.svg'
import { Layout, Alignment } from '@rive-app/react-canvas'
import { BubbleContainer } from '../bubblecontainer'
import { RiveAnimation } from '../rive-animation'

export function SectionRisc() {
  return (
    <section
      className="relative flex flex-col items-center justify-center section-risc lg:h-[800px]"
      style={{ background: 'linear-gradient(180deg,#7565da 0%,rgb(48,36,125) 51%)' }}
    >
      <WaterLine className="absolute -top-4 md:-top-6 lg:-top-8 xl:-top-10 left-0 h-auto w-[100vw]" />
      <Fish1 className="absolute top-20 left-0 w-[30px] h-[30px] animate-swim-right will-change-transform" />
      <div className="container relative z-10 flex flex-col items-center justify-center">
        <BubbleContainer>
          <MainCta
            classNames={{
              media: 'flex items-center justify-center',
              textWrapper: '!ml-8',
            }}
            variant="right"
            title="PolkaVM for Max Efficiency"
            description="Get blazing fast execution and lower gas costs with PolkaVM RISC-V engine."
            level="h2"
            cta={
              <div className="flex flex-col justify-center gap-4 lg:justify-start md:flex-row md:gap-4">
                <Link
                  to={'/docs/v6/background/why-riscv-and-polkavm-for-smart-contracts'}
                  className="hover:scale-105 hover:-rotate-1 !transition-all duration-300"
                >
                  <Button size="lg" variant="secondary">
                    Explore PolkaVM
                  </Button>
                </Link>
              </div>
            }
            media={
              <div className="w-full h-[200px] md:h-[400px] lg:h-[600px] overflow-visible relative scale-[120%] lg:scale-[150%] lg:-ml-24 lg:-mt-8 mb-8 lg:mb-0">
                <RiveAnimation
                  src="animations/Risc-v.riv"
                  autoplay={true}
                  layout={
                    new Layout({
                      alignment: Alignment.Center,
                    })
                  }
                />
              </div>
            }
          />
        </BubbleContainer>
      </div>
    </section>
  )
}
