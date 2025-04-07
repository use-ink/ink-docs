import React from 'react'
import Link from '@docusaurus/Link'

import { Button } from '../ui/button'
import { MainCta } from './main-cta'
import TentaclesLeft from '@site/static/img/home/Tentacles_l.svg'
import TentaclesRight from '@site/static/img/home/Tentacles_r.svg'
import { Clouds } from './clouds'
import { BubbleContainer } from '../bubblecontainer'
import { useCurrentVersion } from '@site/src/hooks/use-current-version'

export function SectionInterop() {
  const currentVersion = useCurrentVersion()

  return (
    <section className="relative flex flex-col items-center justify-center w-full overflow-hidden section-interop md:h-[820px]">
      <Clouds />

      <TentaclesLeft className="absolute hidden sm:block top-[20px] lg:top-0 h-full -left-[100px] md:left-0 origin-left max-w-[30%] z-30 pointer-events-none" />
      <TentaclesRight className="absolute hidden sm:block top-[50px] lg:top-0 -right-[180px] md:-right-[280px] lg:-right-[380px] h-full origin-right max-w-[55%] 2xl:max-w-[1000px] z-30 pointer-events-none" />
      <div className="container relative z-10 flex flex-col items-center justify-center pointer-events-none">
        <BubbleContainer>
          <MainCta
            classNames={{
              container: 'max-w-lg',
              description: 'max-w-[350px] text-center items-center w-full',
              textWrapper: 'items-center',
            }}
            variant="center"
            title="Future-Proof Interoperability"
            description="Develop smart contracts that seamlessly integrate across Polkadot, Kusama, and Substrate."
            level="h2"
            cta={
              <div className="flex flex-row gap-4 pointer-events-auto">
                <Link to={`/docs/${currentVersion?.label ?? 'v5'}`} className="">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="!transition-all duration-300 hover:scale-105 hover:-rotate-1"
                  >
                    Read the docs
                  </Button>
                </Link>
              </div>
            }
            media={<></>}
          />
        </BubbleContainer>
      </div>
      <div className="relative h-[350px] w-full -mt-[100px] sm:hidden">
        <TentaclesLeft className="absolute top-[full]  h-full left-[-25%] md:left-0 origin-left max-h-[90%] max-w-[80%] z-30 pointer-events-none" />
        <TentaclesRight className="absolute top-[0px] -right-[40%] h-full origin-right max-w-[90%] z-30 pointer-events-none" />
      </div>
    </section>
  )
}
