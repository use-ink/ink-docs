import React from 'react'
import Link from '@docusaurus/Link'

import { Button } from '../ui/button'
import { MainCta } from './main-cta'
import WaterLine from '@site/static/img/water-line.svg'

import Fish1 from '@site/static/img/fishes/Fish-29.svg'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { useRive } from '@rive-app/react-canvas'

export function SectionRisc() {
  const { RiveComponent: RiscV } = useRive({
    src: useBaseUrl('animations/Risc-v.riv'),
    autoplay: true,
  })

  return (
    <section
      className="relative min-h-screen section-risc"
      style={{ background: 'linear-gradient(180deg,#7565da 0%,rgb(48,36,125) 51%)' }}
    >
      <WaterLine className="absolute -top-10 left-0 h-auto w-[100vw]" />
      <Fish1 className="absolute top-20 left-0 w-[30px] h-[30px] animate-swim-right will-change-transform" />
      <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen">
        <MainCta
          variant="right"
          title="PolkaVM for Max Efficiency"
          description="Get blazing fast execution and lower gas costs with PolkaVM RISC-V engine."
          level="h2"
          cta={
            <div className="flex flex-col gap-4 md:flex-row md:gap-4">
              <Link
                to="https://github.com/use-ink/ink-examples"
                className="hover:scale-105 hover:-rotate-1 !transition-all duration-300"
              >
                <Button size="lg" variant="secondary">
                  Explore PolkaVM
                </Button>
              </Link>
            </div>
          }
          media={
            <div className="w-full h-[800px]">
              <RiscV />
            </div>
          }
        />
      </div>
    </section>
  )
}
