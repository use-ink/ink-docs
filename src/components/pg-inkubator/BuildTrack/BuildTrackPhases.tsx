import React from 'react'
import { InfoCard, InfoCardProps } from '../../InfoCard'
import classNames from 'classnames';

const TRACK_PHASES: InfoCardProps[] = [
  {
    superTitle: 'Phase 1',
    title: 'Launch and application period',
    info: [
      'ink!ubator 2.0 kicks off with an open call for ecosystem grant applications.',
      'Both alumni from previous cohorts and new projects are invited to apply, focusing ' +
      'on developing innovative solutions using ink! monthly reports on project updates, ' +
      'prepared by our team, will be shared with the community on the Polkadot Forum.'
    ],
  },
  {
    superTitle: 'Phase 2',
    title: 'Project selection and registration',
    info: [
        'All projects will submit their applications through GitHub independently, making progress tracking available to anyone interested.',
        'Projects will receive personalized support, including technical guidance, mentorship, and access to valuable resources.'
    ],
  },
  {
    superTitle: 'Phase 3',
    title: 'Development and deployment',
    info: [
        'Teams will work on building and deploying their solutions, with milestone-based reviews ensuring consistent progress.',
        'Monthly reports on project updates, prepared by our team, will be shared with the community on the Polkadot Forum.'
    ],
  },
  {
    superTitle: 'Phase 4',
    title: 'Grant distribution and showcase',
    info: [
        'Upon the successful deployment of their projects, teams will receive grants of up to $50,000.',
        'The program will conclude with the publication of a final report and a presentation of all participants and their projects on the Polkadot Forum, showcasing their contributions to the ecosystem. The program will remain open until all rewards have been distributed.'
    ],
  },
]

export const BuilderTrackPhases: React.FC = () => {
  return (
    <ul
        className={classNames(
            'list-none m-0 px-4 py-0 lg:flex-row justify-start flex-col',
            'flex flex-wrap relative gap-6',
        )}
    >
      {TRACK_PHASES.map((phase) => (
        <li key={phase.title} className="w-full lg:max-w-[600px] p-0 m-0">
          <InfoCard {...phase} className="h-full" />
        </li>
      ))}
    </ul>
  )
}
