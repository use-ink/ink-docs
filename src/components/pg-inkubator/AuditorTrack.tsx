import AuditorAnimation from '../../../static/animations/auditor.json'
import React from 'react'
import { useWindow } from '../../hooks'
import { BigCTA } from '../BigCTA'
import { Terrain } from '../icons'
import { ScrollPlayer } from '../ScrollPlayer'
import { Config } from './config'

export const AuditorTrack: React.FC = () => {
  const { scrollY } = useWindow()

  return (
    <section className="mt-12 md:mt-28 overflow-hidden">
      <div className="px-4">
        <div className="max-w-biggest mx-auto">
          <div className="lg:flex-row flex-col flex justify-between w-full">
            <div className="lg:max-w-2xl lg:mb-[-7%] z-10">
              <h3 className="text-base uppercase font-bold font-montserrat w-full">Track 2 • 3 - 6 months</h3>
              <h2 className="text-5xl font-semibold font-montserrat w-full text-brand-500">
                The <i className="font-bold text-black dark:text-white">Auditor</i> Track
              </h2>
              <p className="mt-8 dark:text-white/70 text-black/70">
                The Auditor Track will accept two experienced consultancies that are expanding into ink! security audit
                services.
              </p>
              <p className="mt-6 dark:text-white/70 text-black/70">
                — If you are accepted you will receive technical help from the core ink! team and developers from
                supporting community teams including Aleph Zero, Astar, and Phala, and 727 Ventures. The ink!ubator
                program has allocated a budget for cohorts in the Builder Track and Ecosystem Grant recipients to pay
                for security audits, which must be used to hire cohorts in the Auditor Track.
              </p>
              <BigCTA
                className="bg-light-background dark:bg-dark-background mt-16"
                title="Interested?"
                emphasized="Apply"
                cta="to the Auditor Track"
                url={Config.auditorFormURL}
                tabIndex={0}
              />
            </div>

            <div className="w-full flex items-end xl:mb-[-150px] lg:mb-[-9%] md:mb-[-140px] mb-[-96px] lg:max-w-2xl z-10 md:max-w-lg max-w-unset lg:mx-unset md:mx-auto mx-unset md:mt-4 mt-0 lg:mt-0">
              <ScrollPlayer animationData={AuditorAnimation} />
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-[200%] w-[300%] mx-auto relative md:left-[-50%] left-[-100%] flex flex-col justify-start">
        <Terrain className="rotate-180" />
        <div
          className="mt-[-1px] border border-b border-x-0 border-t border-solid border-background-300 dark:border-background-700 bg-inkubator-banner-light dark:bg-inkubator-banner-dark bg-repeat-x bg-contain h-16"
          style={{ backgroundPositionX: -scrollY / 6 }}
        />
      </div>
    </section>
  )
}
