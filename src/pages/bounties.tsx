import React from 'react'
import { motion } from 'motion/react'
import BountiesBackground from '@site/static/img/Bounties.svg'
import Layout from './layout'
import { BountyList } from '../components/bounties/bounty-list'

const head = (
  <>
    <title>Bounties | ink!</title>
    <meta name="description" content="Discover available bounties and contribute to the ink! ecosystem." />
    <meta name="keywords" content="Grant, Funding, Bounties, Contribute" />
    <meta name="author" content="ink! Alliance" />
    <meta property="og:title" content="Bounties |  ink!" />
    <meta property="og:description" content="Discover available bounties and contribute to the ink! ecosystem." />
    <meta property="og:image" content="https://niklasp.github.io/ink-docs/img/opengraph/bounties.png" />
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

export default function PageBounties() {
  return (
    <Layout className="relative" head={head}>
      <section className="flex flex-col h-[calc(100vh-80px)] my-0 text-center container">
        <BountiesBackground className="absolute -top-[80px] left-0 w-full -z-10" />
        <motion.h1
          className="text-center mt-[31vw]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          ink! Bounties
        </motion.h1>
        <motion.p
          className="max-w-lg mx-auto text-[17px] font-[600]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
        >
          Explore active and past ink! bounties. Got skills and want to contribute? Join in — and earn for your efforts!
        </motion.p>
      </section>
      <section className="max-w-4xl mx-auto my-16 text-[17px] font-[500]">
        <BountyList />
      </section>
    </Layout>
  )
}
