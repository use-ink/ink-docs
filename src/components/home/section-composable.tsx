import React from 'react'

import Link from '@docusaurus/Link'

import { Button } from '../ui/button'
import { MainCta } from './main-cta'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { BubbleContainer } from '../bubblecontainer'
import { RiveAnimation } from '../rive-animation'
import { useCurrentVersion } from '@site/src/hooks/use-current-version'
import Fish1 from '@site/static/img/fishes/Fish-11.svg'
import Fish2 from '@site/static/img/fishes/Fish-12.svg'
import Fish3 from '@site/static/img/fishes/Fish-13.svg'

export function SectionComposable() {
  const currentVersion = useCurrentVersion()

  return (
    <section
      className="relative lg:h-[810px] overflow-visible pt-16 lg:pt-0"
      style={{
        background:
          'linear-gradient(180deg,#2f247d 64%,var(--token-420fbc77-dab0-404b-b97a-ded7df998265, rgb(19, 15, 33)) 70%)',
      }}
    >
      <div className="absolute left-0 w-full h-full overflow-hidden -top-12">
        <Fish1 className="z-50 absolute left-28 w-[110px] h-[110px] animate-swim-right will-change-transform" />
        <Fish2 className="z-50 absolute bottom-8 -left-16 w-[110px] h-[110px] animate-swim-right-slow will-change-transform" />
        <Fish3 className="z-50 absolute bottom-28 -right-8 w-[110px] h-[110px] animate-swim-left will-change-transform" />
      </div>
      <div className="container relative z-10 flex flex-col items-center justify-center pb-48 overflow-hidden mb-72">
        <BubbleContainer>
          <MainCta
            classNames={{
              media: 'flex flex-col items-center justify-center',
            }}
            variant="left"
            title="Composable by Design"
            description="Learn how to build faster with reusable, modular smart contract components."
            level="h2"
            cta={
              <div className="flex flex-col justify-center gap-4 lg:justify-start md:flex-row md:gap-4">
                <Link
                  to={`/docs/${currentVersion?.label ?? 'v5'}`}
                  className="hover:scale-105 hover:-rotate-1 !transition-all duration-300"
                >
                  <Button size="lg" variant="secondary">
                    Access the docs
                  </Button>
                </Link>
              </div>
            }
            media={
              <div className="relative w-[280px] h-[280px] lg:w-[450px] lg:h-[450px]">
                <RiveAnimation src={useBaseUrl('animations/Squink-educator.riv')} autoplay={true} />
              </div>
            }
          />
        </BubbleContainer>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full h-[810px] overflow-visible h-fit"
        // style={{ mask: 'linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 20%) add' }}
      >
        {/* <DeepSea className="w-full h-[810px] overflow-visible absolute bottom-0 left-0" /> */}
        <img src={useBaseUrl('/img/footer.svg')} className="object-cover object-bottom w-full h-full" alt="Deep Sea" />
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
