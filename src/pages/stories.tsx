import React from 'react'
import { motion } from 'framer-motion'

import Layout from './layout'
import { StoryList } from '../components/stories/story-list'

import PolkadotLogo from '@site/static/img/Polkadot_Logo_White.svg'

const head = (
  <>
    <title>Stories | ink!</title>
    <meta name="description" content="Read success stories and case studies from the ink! community." />
    <meta name="keywords" content="stories, ecosystem, case studies, dApp, examples" />
    <meta name="author" content="ink! Alliance" />
    <meta property="og:title" content="Stories | ink!" />
    <meta property="og:description" content="Read success stories and case studies from the ink! community." />
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

export default function PageStories() {
  return (
    <Layout className="container" head={head}>
      <div className="flex flex-col items-center justify-center my-12 text-center">
        <motion.h1
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          ink! Success Stories
        </motion.h1>
        <motion.div
          className="flex flex-row items-center gap-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
        >
          <span className="block">Powered by</span>
          <PolkadotLogo className="w-auto h-6" />
        </motion.div>
      </div>
      <StoryList />
    </Layout>
  )
}
