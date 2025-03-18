import React from 'react'
import { motion } from 'motion/react'
import BountiesBackground from '@site/static/img/Bounties.svg'
import Layout from './layout'

export default function PageBounties() {
  return (
    <Layout className="relative">
      <div className="flex flex-col h-[calc(100vh-80px)] my-0 text-center container">
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
      </div>
    </Layout>
  )
}
