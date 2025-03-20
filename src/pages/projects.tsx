import React from 'react'
import Layout from './layout'
import PolkadotLogo from '@site/static/img/Polkadot_Logo_White.svg'
import ProjectGrid from '../components/projects/project-grid'
import { motion } from 'framer-motion'

const head = (
  <>
    <title>Projects | ink!</title>
    <meta name="description" content="Explore projects built with ink! and their impact on the ecosystem." />
    <meta name="keywords" content="chains, interoperability, rollups, Polkadot, parachain" />
    <meta name="author" content="ink! Alliance" />
    <meta property="og:title" content="Projects | ink!" />
    <meta property="og:description" content="Explore projects built with ink! and their impact on the ecosystem." />
    <meta property="og:image" content="https://use-ink.com/img/og-image.png" />
    <meta property="og:url" content="https://use-ink.com" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="ink!" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="ink! logo" />
    <meta property="og:image:type" content="image/png" />
  </>
)

export default function PageProjects() {
  return (
    <Layout className="container" head={head}>
      <div className="flex flex-col items-center justify-center my-12 text-center">
        <motion.h1
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          Explore Community Projects
        </motion.h1>
        <motion.div
          className="flex-row items-center gap-2 flexw"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
        >
          <span className="block">Powered by</span>
          <PolkadotLogo className="w-auto h-6" />
        </motion.div>
      </div>
      <ProjectGrid />
    </Layout>
  )
}
