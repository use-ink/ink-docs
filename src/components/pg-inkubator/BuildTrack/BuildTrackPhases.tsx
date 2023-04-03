import React from 'react'
import { BigCTA } from '../../BigCTA'
import { InfoCard, InfoCardProps } from '../../InfoCard'
import { StickyScroller } from '../../StickyScroller'
import { Config } from '../config'

const TRACK_PHASES: InfoCardProps[] = [
  {
    superTitle: 'The Builder Track • Phase 1',
    title: 'Track Starts (Q2 2023)',
    bullets: [
      'Receive the first $10,000 of a $50,000 hiring and product development budget.',
      '$10,000 will be given every month until the full $50,000 has been dispersed.',
      'Product planning (Event Storming) - Participate in a one day product planning session with a mentor.',
    ],
  },
  {
    superTitle: 'The Builder Track • Phase 2',
    title: 'Product Development & Monthly Updates',
    info: [
      'Start building your product, and write a monthly update on the Polkadot Forum about what you learned and the progress you’ve made.',
      'Deploy code to a staging environment and participate in a contract audit with a team in the Auditor Track. Audit fees are covered.',
    ],
  },
  {
    superTitle: 'The Builder Track • Phase 3',
    title: 'Deploy to Production',
    info: ['Your project will receive an additional $20,000 for marketing.'],
  },
  {
    superTitle: 'The Builder Track • Phase 4',
    title: 'Track Ends',
    info: ['Present your product to the community on a livestream.'],
  },
]

export const BuilderTrackPhases: React.FC = () => {
  return (
    <StickyScroller stickyAt={200} containerWidth={(TRACK_PHASES.length + 1) * 600}>
      {TRACK_PHASES.map((phase) => (
        <li key={phase.title} className="w-full lg:max-w-[600px] p-0 m-0">
          <InfoCard {...phase} className="h-full" />
        </li>
      ))}

      <li className="lg:max-w-[600px] w-full p-0 m-0">
        <BigCTA
          className="h-full"
          title="Interested?"
          emphasized="Apply"
          cta="to the Builder Track"
          url={Config.builderFormURL}
          tabIndex={0}
        />
      </li>
    </StickyScroller>
  )
}
