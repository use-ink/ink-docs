import BuilderAnimation from '../../../../static/animations/builder.json'
import React from 'react'
import { Waves } from '../../Waves'
import { BuilderTrackPhases } from './BuildTrackPhases'
import { ScrollPlayer } from '../../ScrollPlayer'

export const BuilderTrack: React.FC = () => {
  return (
    <section>
      <div className="px-4">
        <div className="max-w-biggest mx-auto">
          <h2 className="lg:text-6xl text-5xl font-bold font-montserrat dark:text-white w-full text-center mx-auto md:my-20 mt-6 mb-10 md:max-w-full max-w-xs">
            ink!ubator provides <i className="font-bold text-brand-500">3 tracks</i>
          </h2>

          <div className="md:flex-row flex flex-col justify-between w-full">
            <div className="md:max-w-2xl w-full">
              <h3 className="text-base uppercase font-bold font-montserrat w-full">Track 1 • 3 - 6 months</h3>
              <h2 className="text-5xl font-semibold font-montserrat w-full text-brand-500">
                The <i className="font-bold text-black dark:text-white">Builder</i> Track
              </h2>
              <p className="mt-8 dark:text-white/70 text-black/70">
                We will only accept two projects that are aspiring to build on ink!. If accepted, you will receive
                technical help from the core ink! team and developers from supporting community teams including Aleph
                Zero, Astar, and Phala, and 727 Ventures.
              </p>
              <p className="mt-6 dark:text-white/70 text-black/70">
                — You will also receive a budget to help kickstart your project, and have contracts audited by members
                of the Auditor Track.
              </p>
            </div>

            <div className="w-full flex items-end lg:mb-[-200px] md:mb-[-152px] mb-[-152px] max-w-2xl">
              <ScrollPlayer animationData={BuilderAnimation} />
            </div>
          </div>
        </div>
      </div>

      <Waves className="mb-28 w-full" />

      <div className="overflow-x-clip">
        <BuilderTrackPhases />
      </div>
    </section>
  )
}
