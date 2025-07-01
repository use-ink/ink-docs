import React from 'react'
import Layout from './layout'
import ProjectGrid from '../components/projects/project-grid'
import { motion } from 'framer-motion'
import { CTA } from '../components/cta'

const head = (
  <>
    <title>Projects | ink!</title>
    <meta name="description" content="Explore projects built with ink! and their impact on the ecosystem." />
    <meta name="keywords" content="chains, interoperability, rollups, Polkadot, parachain" />
    <meta name="author" content="ink! Alliance" />
    <meta property="og:title" content="Projects | ink!" />
    <meta property="og:description" content="Explore projects built with ink! and their impact on the ecosystem." />
    <meta property="og:image" content="https://use-ink.com/img/opengraph/home.png" />
    <meta property="og:url" content="https://use-ink.com/projects" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="ink!" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="ink! logo" />
    <meta property="og:image:type" content="image/png" />
    <script defer src="https://use-ink-data.netlify.app/script.js" data-website-id="c97b4e05-21a3-4873-8884-4fc81c38d6f0"></script>
  </>
)

export default function PageProjects() {
  return (
    <Layout className="container overflow-hidden" head={head}>
      <div className="flex flex-col items-center justify-center my-12 text-center">
        <motion.h1
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          Explore Community Projects
        </motion.h1>
      </div>
      <ProjectGrid />
      <hr className="w-full my-12" />
      <CTA text="Want to join the ink! community?" btnText="Say hi on Telegram" btnLink="https://t.me/inkathon" />
    </Layout>
  )
}
