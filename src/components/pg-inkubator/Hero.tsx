import HeroAnimation from '../../../static/animations/inkubator.json'
import React from 'react'
import classNames from 'classnames'
import { ClassNameable } from '../types'
import Link from '@docusaurus/Link'
import { ScrollPlayer } from '../ScrollPlayer'

export interface InkubatorHeroProps extends ClassNameable {
  withLinkCTA?: boolean
}

export const Hero: React.FC<InkubatorHeroProps> = ({ withLinkCTA, className }) => {
  return (
    <section
      className={classNames(
        "bg-[url('/img/terrain-lab-light.svg')] dark:bg-[url('/img/terrain-lab-dark.svg')] bg-cover bg-no-repeat bg-bottom",
        className,
      )}
    >
      <div className="mx-auto max-w-[1000px]">
        <div className="absolute inset-0 -z-10 section-bg" />
        <div className={classNames('flex flex-col gap-6 justify-between px-4 mb-0 lg:flex-row')}>
          <h1 className="font-freude text-[64px] leading-[57px] max-w-2xl">Take your ink! project to new depths.</h1>
          <div className="md:max-w-md lg:pt-6">
            <hgroup className="md:mb-10">
              <h2 className="mb-2 text-[18px] leading-[28px] font-[600] font-montserrat">
                <span className="">ink!ubator is a funding program, it provides access to core developers and a wealth of resources.</span>
              </h2>
              <h3 className="text-[18px] leading-[28px] font-[600] font-montserrat">
                <p>
                  <span className="text-brand-500" >⚠️ Applications are currently closed! ⚠️</span><br/>
                  The funded projects are working on their milestones
                  and we are preparing a treasury proposal to refund the ink!ubator.</p>
                <p>
                  <p>Read our reports of prior cohorts:</p>
                  <a
                      href={'https://forum.polkadot.network/t/final-report-of-ink-ubator/10120'}
                      className="text-brand-500"
                  >
                    ink!ubator v1: Final report (Sep 2024)
                  </a>
                  <br/>
                  <a
                      href={'https://forum.polkadot.network/t/the-first-report-of-ink-ubator-v2/12566'}
                      className="text-brand-500"
                  >
                    ink!ubator v2: First report (Apr 2025)
                  </a>
                  <br/>
                  <a
                      href={'https://forum.polkadot.network/t/the-second-report-of-ink-ubator-v2/13670'}
                      className="text-brand-500"
                  >
                    ink!ubator v2: Second report (Jul 2025)
                  </a>
                  <br/>
                  <a
                      href={'https://forum.polkadot.network/t/the-third-report-of-ink-ubator-v2/15726'}
                      className="text-brand-500"
                  >
                    ink!ubator v2: Third report (Oct 2025)
                  </a>
                </p>
              </h3>
            </hgroup>
            {withLinkCTA && (
                <div className="mb-10 md:mb-0">
                  <Link
                      href="/inkubator"
                      className={classNames(
                          'px-6 py-4 text-center bg-brand-500 hover:bg-brand-500/90 hover:text-dark-background',
                    'text-lg rounded-full transition duration-75 text-dark-background hover:no-underline',
                  )}
                >
                  Learn More
                </Link>
              </div>
            )}
          </div>
        </div>

        <ScrollPlayer animationData={HeroAnimation} className="mx-auto mt-0 w-full" />
      </div>
    </section>
  )
}
