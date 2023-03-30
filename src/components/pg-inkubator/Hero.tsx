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
      <div className="max-w-biggest mx-auto">
        <div className={classNames('flex lg:flex-row flex-col justify-between mb-0 gap-6 px-4')}>
          <h1
            className={classNames(
              'md:text-6xl text-5xl font-bold font-montserrat dark:text-white',
              'align-middle md:max-w-xl',
            )}
          >
            <span className="leading-tight">
              Take your <SquinkText className="px-4 md:h-28 h-20 align-middle" />
              <br />
              <strong className="top-[-20px] align-middle relative">
                project to <b className="text-brand-500">new</b>
                <br />
                <b className="text-brand-500 relative top-[-10px] leading-tight">depths.</b>
              </strong>
            </span>
          </h1>
          <div className="md:max-w-md lg:pt-8">
            <h2 className="text-2xl dark:text-white/70 md:mb-10">
              <span className="bg-light-background dark:bg-dark-background">
                ink!ubator connects you with core developers and extensive resources.
              </span>
            </h2>
            {withLinkCTA && (
              <div className="md:mb-0 mb-10">
                <Link
                  to="/ubator"
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
