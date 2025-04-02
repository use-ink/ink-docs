import React from 'react'
import Link from '@docusaurus/Link'

import { Button } from '../ui/button'
import { MainCta } from './main-cta'
import { Clouds } from './clouds'
import { BubbleContainer } from '../bubblecontainer'
import { RiveAnimation } from '../rive-animation'
import { Alignment, Fit, Layout } from '@rive-app/react-canvas'

export function SectionRust() {
  return (
    <section
      className="relative flex flex-col items-center justify-center section-rust lg:h-[800px]"
      style={{
        background: 'linear-gradient(180deg,rgba(24,18,56,0) 0%,#221E4A 100%)',
      }}
    >
      <Clouds className="absolute bottom-0 left-1/3" />
      <div className="container relative z-10 flex flex-col items-center justify-center">
        <BubbleContainer>
          <MainCta
            variant="right"
            title="Get Rust-Powered Protection Built-in"
            description="Deploy smart contracts with built-in safety guarantees from the world's most secure programming language."
            level="h2"
            cta={
              <div className="flex flex-col justify-center gap-4 lg:justify-start md:flex-row md:gap-4">
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
            media={
              <div className="w-full mt-8 lg:mt-0 h-[300px] lg:h-[410px]">
                <RiveAnimation
                  src="animations/Medal.riv"
                  autoplay={true}
                  layout={
                    new Layout({
                      alignment: Alignment.Center,
                      fit: Fit.Contain,
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
