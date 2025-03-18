import React from 'react'
import { motion } from 'framer-motion'

import Layout from './layout'
import { StoryList } from '../components/stories/story-list'

import PolkadotLogo from '@site/static/img/Polkadot_Logo_White.svg'

export default function PageStories() {
  return (
    <Layout className="container">
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
