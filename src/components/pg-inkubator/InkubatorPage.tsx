import React from 'react'
import { UIProvider, WindowProvider } from '../../contexts'
import { Nav } from './Nav'
import { SidebarMenu } from './SidebarMenu'
import { Hero } from './Hero'
import { Overview } from './Overview'
import { BuilderTrack } from './BuildTrack'
import { EcosystemGrants } from './EcosystemGrants'
import { Footer } from './Footer'

const InkubatorPage = () => {
  return (
    <WindowProvider>
      <UIProvider>
        <div className="font-montserrat bg-background-100 dark:bg-background-800 rounded-b-3xl">
          <div className="bg-light-background dark:bg-dark-background rounded-b-3xl xl:pb-12 pb-4 md:pt-40 pt-28">
            <Nav />
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
