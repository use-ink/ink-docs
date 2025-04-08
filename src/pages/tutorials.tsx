import React from 'react'
import Layout from './layout'
import { ArrowCircleDown } from '@phosphor-icons/react/dist/ssr'
import { tutorials } from '../data/tutorials'
import { TutorialCard } from '../components/tutorials/tutorial-card'
import { motion } from 'framer-motion'

import Rocket from '@site/static/img/rocket.svg'
import { Button } from '../components/ui/button'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { StarryBackground } from '../components/starry-background'
import { useCurrentVersion } from '../hooks/use-current-version'
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
    <meta property="og:image" content="https://use-ink.com/img/opengraph-home.png" />
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
  const currentVersion = useCurrentVersion()
  const versionedTutorials = tutorials.map((tutorial) => {
    return {
      ...tutorial,
      link: tutorial.link.replace('docs/', `docs/${currentVersion?.label ?? 'v5'}/`),
    }
  })

  return (
    <Layout className="container overflow-hidden" head={head}>
      <div
        style={{
          width: '100vw',
          height: '200vh',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          overflow: 'hidden',
        }}
      >
        <StarryBackground />
      </div>
      <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center mt-[10vh]">
        <img
          src={useBaseUrl('/img/Constellation.svg')}
          alt="constellation"
          className="w-[246px] h-[246px] lg:w-[450px] lg:h-[450px] absolute left-[2vw] lg:left-[18vw] top-10"
        />
        <motion.div
          className="w-[246px] h-[246px] rotate-[25deg]"
          initial={{ opacity: 0, scale: 0.7, translateY: 200, translateX: -100, rotate: 30 }}
          animate={{ opacity: 1, scale: 1, translateY: 0, translateX: 0, rotate: 25 }}
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
          <h1 className="font-bold text-[64px]">ink! Tutorials</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <p className="text-[18px] font-semibold">
            Explore step-by-step tutorials and learn how to build a dApp with ink! smart contracts.
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
          {versionedTutorials.map((tutorial) => (
            <TutorialCard key={tutorial.title} {...tutorial} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-4 my-16 md:flex-row">
          <p className="m-0">Do you have an idea or need for a tutorial?</p>
          <Link href="https://t.me/inkathon" className="text-blue-500">
            <Button size="lg" variant="secondary">
              Request a topic
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
