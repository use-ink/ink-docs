import React from 'react'
import { UIProvider, WindowProvider } from '../../contexts'
import { SidebarMenu } from './SidebarMenu'
import { Hero } from './Hero'
import { Overview } from './Overview'
import { BuilderTrack } from './BuildTrack'
import { EcosystemGrants } from './EcosystemGrants'
import { Navbar } from '../nav/nav'
import { Footer } from '../footer'

const InkubatorPage = () => {
  return (
    <WindowProvider>
      <UIProvider>
        <div className="font-montserrat bg-[rgb(19,15,33)] rounded-b-3xl">
          <Navbar cta="Apply Now" ctaLink="https://github.com/use-inkubator/Ecosystem-Grants" />
          <div className="pb-4 rounded-b-3xl xl:pb-12 md:pt-40 pt-28">
            <SidebarMenu />
            <Hero className="overflow-hidden" />
            <Overview />
            <BuilderTrack />
            <EcosystemGrants />
          </div>
          <Footer />
        </div>
      </UIProvider>
    </WindowProvider>
  )
}

export default InkubatorPage
