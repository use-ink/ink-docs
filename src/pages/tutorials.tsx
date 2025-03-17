import React from 'react'
import Layout from './layout'
import { ArrowCircleDown } from '@phosphor-icons/react/dist/ssr'
import { tutorials } from '../config'
import { TutorialCard } from '../components/tutorial-card'
import { motion } from 'framer-motion'

import Rocket from '@site/static/img/rocket.svg'

export default function PageTutorials() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center max-w-[540px] min-h-[50vh] mx-auto text-center mt-[10vh]">
        <motion.div
          className="w-[246px] h-[246px] rotate-[25deg]"
          initial={{ scale: 0.7, translateY: 200, translateX: -100, rotate: 30 }}
          animate={{ scale: 1, translateY: 0, translateX: 0, rotate: 30 }}
          transition={{
            duration: 1,
            translateY: { type: 'spring', visualDuration: 0.9, bounce: 0.5 },
            translateX: { type: 'spring', visualDuration: 0.9, bounce: 0.5 },
            rotate: { type: 'spring', visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <Rocket className="w-full h-full" style={{ filter: 'drop-shadow(0 10px 10px #0009' }} />
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
      </section>
    </Layout>
  )
}
