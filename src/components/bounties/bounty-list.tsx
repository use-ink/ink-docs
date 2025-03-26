import React from 'react'
import { BountyCard } from './bounty-card'
import { Button } from '../ui/button'
import Link from '@docusaurus/Link'
import { CTA } from '../cta'
export interface Bounty {
  title: string
  applyLink?: string
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

export const activeBounties: Bounty[] = []

export const pastBounties: PastBounty[] = [
  {
    title: 'ink! Documentation Website Upgrade',
    announcementLink: 'https://github.com/use-ink/ink-alliance/blob/main/bounties/001-website_upgrade.md',
    objective: (
      <>
        The current ink! documentation website (<a href="https://use.ink/">https://use.ink</a>) is an extensive
        developer documentation. We want to move this content under <a href="https://use.ink/docs">use.ink/docs</a> and
        have an engaging website in its place that provides a less overwhelming entry point to ink!.
      </>
    ),
    status: 'Work was successfully completed on schedule by selected team. Bounty is now closed.',
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
      {activeBounties.length > 0 && (
        <>
          <h2>
            Active Bounties{' '}
            <span className="text-[36px] font-[600] text-[rgb(140,124,247))]">({activeBounties.length})</span>
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
        </>
      )}
      <h2>
        Past Bounties <span className="text-[36px] font-[600] text-[rgb(140,124,247)]">({pastBounties.length})</span>
      </h2>
      <div className="flex flex-col items-start justify-start gap-4">
        {pastBounties.map((bounty) => (
          <BountyCard key={bounty.title} bounty={bounty} />
        ))}
      </div>
      {activeBounties.length === 0 && (
        <>
          <hr className="mt-16 mb-8" />
          <CTA
            text="Not seeing a bounty you wish was available?"
            btnText="Request bounty"
            btnLink="https://t.me/inkathon"
            btnVariant="default"
          />
        </>
      )}
    </>
  )
}
