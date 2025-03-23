import React from 'react'
import { BountyCard } from './bounty-card'
import { Button } from '../ui/button'
import Link from '@docusaurus/Link'
import { CTA } from '../cta'
export interface Bounty {
  title: string
  applyLink: string
  announcementLink?: string
  objective: React.ReactNode
  status: React.ReactNode
}

export interface PastBounty extends Bounty {
  team: {
    title: string
    linkText: string
    linkHref: string
    description: string
  }[]
}

export const activeBounties: Bounty[] = [
  {
    title: 'Build a new ink! app',
    applyLink: 'https://github.com/use-inkubator/Ecosystem-Grants',
    announcementLink: 'https://github.com/use-inkubator/Ecosystem-Grants',
    objective:
      'The current ink! documentation website (https://use.ink/) is an extensive developer documentation. We want to move this content under use.ink/docs and have an engaging website in its place that provides a less overwhelming entry point to ink!.',
    status: 'Looking for applicants. Please review bounty requirements before applying.',
  },
]

export const pastBounties: PastBounty[] = [
  {
    title: 'Build a new ink! app',
    applyLink: 'https://github.com/use-inkubator/Ecosystem-Grants',
    objective:
      'The current ink! documentation website (https://use.ink/) is an extensive developer documentation. We want to move this content under use.ink/docs and have an engaging website in its place that provides a less overwhelming entry point to ink!.',
    status: 'A team has been selected. Work has been completed. We love the new website!',
    team: [
      {
        title: 'Flez — Designer',
        linkText: '@iamflez',
        linkHref: 'https://x.com/iamflez',
        description:
          'Flez is an Entrepreneur, Web/UI Designer @ flez.xyz, Polkadot UX Bounty Curator, Permanence DAO Core Member, and Project Manager @ Polkadot.Cloud.',
      },
      {
        title: 'Niftesty — Developer',
        linkText: '@niftesty',
        linkHref: 'https://x.com/niftesty',
        description:
          'Niftesty is a full-stack developer based in the Berlin. He is developing several projects in the Polkadot ecosystem.',
      },
    ],
  },
]

export function BountyList() {
  return (
    <>
      <h2>
        Active Bounties <span className="text-sm text-gray-500">({activeBounties.length})</span>
      </h2>
      <div className="flex flex-col items-start justify-start gap-4">
        {activeBounties.map((bounty) => (
          <BountyCard key={bounty.title} bounty={bounty} />
        ))}
      </div>
      <hr className="my-16" />
      <CTA
        text="Not seeing a bounty you wish was available?"
        btnText="Request a new bounty"
        btnLink="https://t.me/inkathon"
      />
      <hr className="my-16" />
      <h2>
        Past Bounties <span className="text-sm text-gray-500">({pastBounties.length})</span>
      </h2>
      <div className="flex flex-col gap-4 item">
        {pastBounties.map((bounty) => (
          <BountyCard key={bounty.title} bounty={bounty} />
        ))}
      </div>
    </>
  )
}
