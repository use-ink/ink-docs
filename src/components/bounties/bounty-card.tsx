import React from 'react'
import { Bounty, PastBounty } from './bounty-list'
import { ImageContainer } from '../image-container'
import { Button } from '../ui/button'
import Link from '@docusaurus/Link'

export function BountyCard({ bounty }: { bounty: Bounty | PastBounty }) {
  return (
    <ImageContainer className="!w-full !max-w-full p-8 rounded-xl flex flex-col gap-8 !items-start divide-dotted">
      <h3 className="m-0 text-lg font-bold font-montserrat">{bounty.title}</h3>
      <div className="pt-8 m-0 border-0 border-t-2 border-t-dotted border-[rgba(189,130,253,.1)]">
        <h4 className="text-[rgb(140,124,247)] tracking-[0.5px] uppercase font-[600]  text-[12px] mb-4">Objective</h4>
        <p className="m-0">{bounty.objective}</p>
      </div>
      <div className="pt-8 m-0 border-0 border-t-2 border-t-dotted border-[rgba(189,130,253,.1)] w-full">
        <h4 className="text-[rgb(140,124,247)] tracking-[0.5px] uppercase font-[600]  text-[12px] mb-4">Status</h4>
        <p className="m-0">{bounty.status}</p>
      </div>

      <div className="pt-8 m-0 border-0 border-t-2 border-t-dotted border-[rgba(189,130,253,.1)] w-full flex flex-row gap-4">
        <Link href={bounty.applyLink}>
          <Button size="lg" variant="secondary">
            Apply Now
          </Button>
        </Link>
        {bounty.announcementLink && (
          <Link href={bounty.announcementLink}>
            <Button size="lg" variant="secondary">
              Announcement
            </Button>
          </Link>
        )}
      </div>
    </ImageContainer>
  )
}
