import HeroAnimation from '../../../static/animations/inkubator.json'
import React from 'react'
import { SquinkText } from '../icons'
import classNames from 'classnames'
import { ClassNameable } from '../types'
import { Link } from 'react-router-dom'
import { ScrollPlayer } from '../ScrollPlayer'
import { ClosedNotice } from './ClosedNotice'

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
        <div className={classNames('flex lg:flex-row flex-col justify-between mb-0 gap-6 px-4')}>
          <h1
            className={classNames(
              'md:text-6xl text-5xl font-bold font-montserrat dark:text-white',
              'align-middle md:max-w-xl',
            )}
          >
            <span className="leading-tight">
              Take your <SquinkText className="h-20 px-4 align-middle md:h-28" />
              <br />
              <strong className="top-[-20px] align-middle relative">
                project to <b className="text-brand-500">new</b>
                <br />
                <b className="text-brand-500 relative top-[-10px] leading-tight">depths.</b>
              </strong>
            </span>
          </h1>
          <div className="md:max-w-md lg:pt-8">
            <hgroup className="md:mb-10">
              <h2 className="mb-2 text-2xl dark:text-white/70">
                <span className="">ink!ubator provides access to core developers and a wealth of resources.</span>
              </h2>
              <h3 className="italic font-semibold text-brand-500/80 text-md">
                <p>The first cohort has successfully concluded, and applications for the next cohort are now open.</p>
                <p>
                  <a href={'https://forum.polkadot.network/t/final-report-of-ink-ubator/10120'}>
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
