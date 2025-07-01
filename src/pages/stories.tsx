import React from 'react'
import { motion } from 'framer-motion'

import Layout from './layout'
import { StoryList } from '../components/stories/story-list'

const head = (
  <>
    <title>Stories | ink!</title>
    <meta name="description" content="Read success stories and case studies from the ink! community." />
    <meta name="keywords" content="stories, ecosystem, case studies, dApp, examples" />
    <meta name="author" content="ink! Alliance" />
    <meta property="og:title" content="Stories | ink!" />
    <meta property="og:description" content="Read success stories and case studies from the ink! community." />
    <meta property="og:image" content="https://use-ink.com/img/opengraph/home.png" />
    <meta property="og:url" content="https://use-ink.com/stories" />
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
    <Layout className="container overflow-hidden" head={head}>
      <div className="flex flex-col items-center justify-center my-12 text-center">
        <motion.h1
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          ink! Success Stories
        </motion.h1>
      </div>
      <StoryList />
    </Layout>
  )
}
