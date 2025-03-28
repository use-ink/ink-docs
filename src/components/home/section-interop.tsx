import React from 'react'
import Link from '@docusaurus/Link'

import { Button } from '../ui/button'
import { MainCta } from './main-cta'
import TentaclesLeft from '@site/static/img/home/Tentacles_l.svg'
import TentaclesRight from '@site/static/img/home/Tentacles_r.svg'
import MetaBalls from '../../reactbits/Animations/MetaBalls/MetaBalls'
import Orb from '@site/src/reactbits/Backgrounds/Orb/Orb'
import { Clouds } from './clouds'
import { BubbleContainer } from '../bubblecontainer'
export function SectionInterop() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full overflow-hidden section-interop md:h-[820px]">
      <Clouds />
      <TentaclesLeft className="absolute top-[200px] lg:top-0 h-full -left-[280px] max-w-[500px] z-10 pointer-events-none" />
      <TentaclesRight className="absolute top-[100px] lg:top-0 -right-[380px] h-full origin-right max-w-[55%] 2xl:max-w-[1000px] z-10 pointer-events-none" />
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
                <Link to="/inkubator" className="">
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
      {/* <div
        className="absolute inset-0 -z-0"
        style={{ maskImage: 'radial-gradient(circle, transparent 0%, transparent 20%, black 70%)' }}
      >
        <MetaBalls
          color="#bb82fa"
          cursorBallColor="#bb82fa"
          cursorBallSize={0.8}
          ballCount={15}
          animationSize={10}
          enableMouseInteraction={true}
          enableTransparency={true}
          hoverSmoothness={0.05}
          clumpFactor={0.3}
          speed={0.1}
        />
      </div> */}
      <div className="absolute inset-0 hidden -z-0 md:block">
        <Orb hoverIntensity={0.4} rotateOnHover={false} hue={0} forceHoverState={false} />
      </div>
    </section>
  )
}
