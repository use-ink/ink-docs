import React from 'react'
import { motion } from 'framer-motion'
import Layout from './layout'
import { BountyList } from '../components/bounties/bounty-list'
import { ArrowCircleDown } from '@phosphor-icons/react'
import { useRive } from '@rive-app/react-canvas'
import useBaseUrl from '@docusaurus/useBaseUrl'

const head = (
  <>
    <title>Bounties | ink!</title>
    <meta name="description" content="Discover available bounties and contribute to the ink! ecosystem." />
    <meta name="keywords" content="Grant, Funding, Bounties, Contribute" />
    <meta name="author" content="ink! Alliance" />
    <meta property="og:title" content="Bounties | ink!" />
    <meta property="og:description" content="Discover available bounties and contribute to the ink! ecosystem." />
    <meta property="og:image" content="https://use.ink/img/opengraph/bounties.png" />
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
  const { RiveComponent: BountiesBackground } = useRive({
    src: useBaseUrl('animations/Bounties.riv'),
    autoplay: true,
    animations: ['floating', 'eye', 'fan', 'bubbles'],
  })

  return (
    <Layout className="relative -mt-[80px]" head={head}>
      <div className="w-[100vw] h-[33.5vw] relative">
        {/* <BountiesBackgroundSvg className="absolute bottom-0 left-0 w-full -z-10" /> */}
        <BountiesBackground className="w-full h-full" />
      </div>
      <section className="container flex flex-col mt-16 mb-8 text-center lg:mt-8">
        <motion.h1
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          ink! Bounties
        </motion.h1>
        <motion.p
          className="mx-auto text-[18px] font-[600] text-[rgb(220,215,224)] max-w-[300px] lg:max-w-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
        >
          Explore active and past ink! bounties. Got skills and want to contribute? Join in — and earn for your efforts!
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12"
        >
          <a href="#bounties" className="scroll-m-60">
            <ArrowCircleDown size={32} weight="duotone" fill="rgb(140, 124, 247)" />
          </a>
        </motion.div>
      </section>
      <section id="bounties" className="pt-16 container max-w-4xl mx-auto mt-16 text-[17px] font-[500]">
        <BountyList />
      </section>
    </Layout>
  )
}
