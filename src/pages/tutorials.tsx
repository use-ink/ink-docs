import React from 'react'
import Layout from './layout'
import { ArrowCircleDown } from '@phosphor-icons/react/dist/ssr'
import { tutorials } from '../config'
import { TutorialCard } from '../components/tutorial-card'
import { motion } from 'framer-motion'

import Rocket from '@site/static/img/rocket.svg'
import { Button } from '../components/ui/button'
import Link from '@docusaurus/Link'

const head = (
  <>
    <title>Tutorials | ink!</title>
    <meta
      name="description"
      content="Access tutorials to help you get started with ink! smart contracts and deploy them on Polkadot and beyond."
    />
    <meta name="keywords" content="tutorials, learning, ink!, guides, Polkadot" />
    <meta name="author" content="ink! Alliance" />
    <meta property="og:title" content="Tutorials | ink!" />
    <meta
      property="og:description"
      content="Access tutorials to help you get started with ink! smart contracts and deploy them on Polkadot and beyond."
    />
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

export default function PageTutorials() {
  return (
    <Layout className="container" head={head}>
      <div className="flex flex-col items-center justify-center max-w-[540px] min-h-[50vh] mx-auto text-center mt-[10vh]">
        <motion.div
          className="w-[246px] h-[246px] rotate-[25deg]"
          initial={{ opacity: 0, scale: 0.7, translateY: 200, translateX: -100, rotate: 40 }}
          animate={{ opacity: 1, scale: 1, translateY: 0, translateX: 0, rotate: 30 }}
          transition={{
            duration: 1,
            opacity: { visualDuration: 0.1 },
            translateY: { type: 'spring', visualDuration: 0.9, bounce: 0.5 },
            translateX: { type: 'spring', visualDuration: 0.9, bounce: 0.5 },
            rotate: { type: 'tween', duration: 2 },
          }}
        >
          <Rocket style={{ filter: 'drop-shadow(0 10px 10px #0005' }} className="w-full h-full animate-float" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="font-bold text-[64px]">Tutorials</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <p className="text-[18px] font-semibold">
            Explore step-by-step tutorials to help developers build and deploy ink! smart contracts on Polkadot and
            beyond.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          <a href="#tutorials" className="scroll-m-60">
            <ArrowCircleDown size={32} weight="duotone" fill="rgb(140, 124, 247)" />
          </a>
        </motion.div>
      </div>
      <section id="tutorials" className="flex flex-col items-center justify-center max-w-[900px] mx-auto pt-20">
        <div className="grid grid-cols-1 gap-[36px] md:grid-cols-2">
          {tutorials.map((tutorial) => (
            <TutorialCard key={tutorial.title} {...tutorial} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-4 my-16 md:flex-row">
          <p className="m-0">Not seeing a tutorial you wish we offered?</p>
          <Link href="https://github.com/paritytech/ink-tutorials/issues" className="text-blue-500">
            <Button size="lg" variant="secondary">
              Request a topic
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
