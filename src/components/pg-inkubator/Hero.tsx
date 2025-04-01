import HeroAnimation from '../../../static/animations/inkubator.json'
import React from 'react'
import { SquinkText } from '../icons'
import classNames from 'classnames'
import { ClassNameable } from '../types'
import { Link } from 'react-router-dom'
import { ScrollPlayer } from '../ScrollPlayer'

export interface InkubatorHeroProps extends ClassNameable {
  withLinkCTA?: boolean
}

export const Hero: React.FC<InkubatorHeroProps> = ({ withLinkCTA, className }) => {
  return (
    <section
      className={classNames(
        "bg-[url('/img/terrain-lab-light.svg')] dark:bg-[url('/img/terrain-lab-dark.svg')] bg-cover bg-bottom",
        className,
      )}
    >
      <div className="mx-auto max-w-biggest">
        <div className="absolute inset-0 -z-10 section-bg" />
        <div className={classNames('flex lg:flex-row flex-col justify-between mb-0 gap-6 px-4')}>
          <h1 className="font-freude text-[64px] leading-[57px] max-w-2xl">Take your ink! project to new depths.</h1>
          <div className="md:max-w-md lg:pt-6">
            <hgroup className="md:mb-10">
              <h2 className="mb-2 text-[18px] leading-[28px] font-[600] font-montserrat">
                <span className="">ink!ubator provides access to core developers and a wealth of resources.</span>
              </h2>
              <h3 className="text-[18px] leading-[28px] font-[600] font-montserrat">
                <p>The first cohort has successfully concluded, and applications for the next cohort are now open.</p>
                <p>
                  <a
                    href={'https://forum.polkadot.network/t/final-report-of-ink-ubator/10120'}
                    className="text-brand-500"
                  >
                    Read the final report of the first cohort here.
                  </a>
                </p>
              </h3>
            </hgroup>
            {withLinkCTA && (
              <div className="mb-10 md:mb-0">
                <Link
                  to="/inkubator"
                  className={classNames(
                    'py-4 px-6 bg-brand-500 hover:bg-brand-500/90 hover:text-dark-background text-center',
                    'transition duration-75 text-dark-background hover:no-underline rounded-full text-lg',
                  )}
                >
                  Learn More
                </Link>
              </div>
            )}
          </div>
        </div>

        <ScrollPlayer animationData={HeroAnimation} className="mt-0 lg:w-[70%] w-full mx-auto" />
      </div>
    </section>
  )
}
