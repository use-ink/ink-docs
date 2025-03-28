import React from 'react'

import Link from '@docusaurus/Link'

import { Button } from '../ui/button'
import { MainCta } from './main-cta'
import DeepSea from '@site/static/img/footer.svg'
import { useRive } from '@rive-app/react-canvas'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { BubbleContainer } from '../bubblecontainer'

export function SectionComposable() {
  const { RiveComponent: SquinkEducator } = useRive({
    src: useBaseUrl('animations/Squink-educator.riv'),
    autoplay: true,
    animations: ['squink', 'click', 'crab', 'idle'],
  })

  return (
    <section
      className="relative lg:h-[810px] overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg,#2f247d 64%,var(--token-420fbc77-dab0-404b-b97a-ded7df998265, rgb(19, 15, 33)) 70%)',
      }}
    >
      <div className="container relative z-10 flex flex-col items-center justify-center mb-72">
        <BubbleContainer>
          <MainCta
            variant="left"
            title="Composable by Design"
            description="Learn how to build faster with reusable, modular smart contract components."
            level="h2"
            cta={
              <div className="flex flex-col justify-center gap-4 lg:justify-start md:flex-row md:gap-4">
                <Link to="/docs" className="hover:scale-105 hover:-rotate-1 !transition-all duration-300">
                  <Button size="lg" variant="secondary">
                    Access the docs
                  </Button>
                </Link>
              </div>
            }
            media={
              <div className="relative w-[450px] h-[450px]">
                <SquinkEducator />
              </div>
            }
          />
        </BubbleContainer>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-auto"
        // style={{ mask: 'linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 20%) add' }}
      >
        <DeepSea className="w-full h-[810px] overflow-visible absolute bottom-0 left-0" />
        {/* <img
          decoding="async"
          loading="lazy"
          src={useBaseUrl('img/home/footer.png')}
          className="object-cover object-bottom w-[100vw] h-full"
          alt="deep see"
        /> */}
      </div>
    </section>
  )
}
