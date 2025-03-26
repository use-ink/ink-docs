import React from 'react'
import Link from '@docusaurus/Link'

import { Button } from '../ui/button'
import { MainCta } from './main-cta'
import Orb from '../../reactbits/Backgrounds/Orb/Orb'
import { useRive } from '@rive-app/react-canvas'
import useBaseUrl from '@docusaurus/useBaseUrl'

export function SectionRust() {
  const { RiveComponent: RustMedal } = useRive({
    src: useBaseUrl('animations/Medal.riv'),
    autoplay: true,
  })
  return (
    <section
      className="relative h-screen section-rust"
      style={{
        background: 'linear-gradient(180deg,rgba(24,18,56,0) 0%,#221E4A 100%)',
      }}
    >
      <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen">
        <MainCta
          variant="right"
          title="Get Rust-Powered Protection Built-in"
          description="Deploy smart contracts with built-in safety guarantees from the world's most secure programming language."
          level="h2"
          cta={
            <div className="flex flex-col gap-4 md:flex-row md:gap-4">
              <Link
                to="https://github.com/use-ink/ink-examples"
                className="hover:scale-105 hover:-rotate-1 !transition-all duration-300"
              >
                <Button size="lg" variant="secondary">
                  See ink! examples
                </Button>
              </Link>
            </div>
          }
          media={<RustMedal />}
        />
        <div className="absolute inset-0 -z-10">
          <Orb hoverIntensity={0.4} rotateOnHover={false} hue={0} forceHoverState={false} />
        </div>
      </div>
    </section>
  )
}
