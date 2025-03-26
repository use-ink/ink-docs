import React from 'react'

import Link from '@docusaurus/Link'

import { Button } from '../ui/button'
import { MainCta } from './main-cta'
import DeepSea from '@site/static/img/home/deepsea.svg'
import { useRive } from '@rive-app/react-canvas'
import useBaseUrl from '@docusaurus/useBaseUrl'

export function SectionComposable() {
  const { RiveComponent: SquinkEducator } = useRive({
    src: useBaseUrl('animations/Squink-educator.riv'),
    autoplay: true,
    animations: ['squink', 'click', 'crab', 'idle'],
  })

  return (
    <section className="relative min-h-[80vh] overflow-visible" style={{ background: '#30247d' }}>
      <div className="container relative z-10 flex flex-col items-center justify-center">
        <MainCta
          variant="left"
          title="Composable by Design"
          description="Learn how to build faster with reusable, modular smart contract components."
          level="h2"
          cta={
            <div className="flex flex-col gap-4 md:flex-row md:gap-4">
              <Link
                to="https://github.com/use-ink/ink-examples"
                className="hover:scale-105 hover:-rotate-1 !transition-all duration-300"
              >
                <Button size="lg">Access the docs</Button>
              </Link>
            </div>
          }
          media={
            <div className="relative w-[450px] h-[450px]">
              <SquinkEducator />
            </div>
          }
        />
      </div>
      <div
        className="h-[400px]"
        // style={{ mask: 'linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 20%) add' }}
      >
        <DeepSea className="w-full h-[810px] overflow-visible absolute bottom-0 left-0" />
        {/* <img
        decoding="async"
        loading="lazy"
        sizes="100vw"
        srcSet="https://framerusercontent.com/images/QN8pq6Ny20mww2CWMxsJ7FI2w.png?scale-down-to=512 512w,https://framerusercontent.com/images/QN8pq6Ny20mww2CWMxsJ7FI2w.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/QN8pq6Ny20mww2CWMxsJ7FI2w.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/QN8pq6Ny20mww2CWMxsJ7FI2w.png 2200w"
        src="https://framerusercontent.com/images/QN8pq6Ny20mww2CWMxsJ7FI2w.png?scale-down-to=2048"
        className="object-cover w-full h-full"
        alt="deep see"
      /> */}
      </div>
    </section>
  )
}
