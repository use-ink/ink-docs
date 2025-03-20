import React from 'react'
import { motion } from 'framer-motion'
import { ArrowCircleDown, Heart } from '@phosphor-icons/react'
import useBaseUrl from '@docusaurus/useBaseUrl'

import Layout from './layout'
import Admonition from '../theme/Admonition/index'
import { ImageContainer } from '../components/image-container'
import { Button } from '../components/ui/button'

const head = (
  <>
    <title>Chains | ink!</title>
    <meta name="description" content="Information about blockchains hosting ink! smart contracts and their features." />
    <meta name="keywords" content="chains, interoperability, rollups, Polkadot, parachain" />
    <meta name="author" content="ink! Alliance" />
    <meta property="og:title" content="Chains | ink!" />
    <meta
      property="og:description"
      content="Information about blockchains hosting ink! smart contracts and their features."
    />
    <meta property="og:image" content="https://niklasp.github.io/ink-docs/img/opengraph/chains.png" />
    <meta property="og:url" content="https://niklasp.github.io/ink-docs/" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="ink!" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="ink! logo" />
    <meta property="og:image:type" content="image/png" />
  </>
)

export default function PageChains() {
  return (
    <Layout className="container" head={head}>
      <section className="flex flex-col items-center justify-center h-[calc(90vh-80px)] text-center relative">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="flex items-center gap-4 text-2xl font-bold"
          >
            Chains that{' '}
            <span className="text-[rgb(255,38,112)] animate-heartbeat">
              <Heart size={52} weight="fill" />
            </span>{' '}
            ink!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.2, ease: 'easeInOut' }}
            className="text-gray-200 font-[600] max-w-[500px]"
          >
            Explore the different chains that you can deploy ink! smart contracts with, separated by version.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-0"
        >
          <a href="#chains" className="scroll-m-64">
            <ArrowCircleDown size={32} weight="duotone" fill="rgb(140, 124, 247)" />
          </a>
        </motion.div>
      </section>
      <section id="chains" className="grid grid-cols-1 gap-4 pt-32 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 50, x: -50, rotate: 10 }}
          animate={{ opacity: 1, y: 0, x: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="hidden px-8 pt-24 text-right md:col-span-2 md:sticky md:top-24 md:self-start md:block"
        >
          <img src={useBaseUrl('/img/ink-squink.svg')} alt="chains" className="w-full h-full mx-auto max-w-[80px]" />
        </motion.div>
        <div className="flex flex-col gap-4 md:col-span-9">
          <h2>Introducing ink! v6</h2>
          <Admonition type="color">
            <p>
              With ink! version 6 we are transitioning to a new execution engine: the{' '}
              <code className="whitespace-nowrap">pallet-revive</code> module of Polkadot SDK. This module executes
              smart contracts that are uploaded to it in the RISC-V bytecode format. This transition is currently
              ongoing and we are working hard to an alpha release of ink! v6.
              <br />
              <br />
              You can read more about the details that motivated this transition{' '}
              <a href="https://use.ink/6.x/current-state/" className="underline">
                here
              </a>
              .
            </p>
          </Admonition>
          <p className="font-[600] text-[18px] mb-1">
            The two blockchains that have already added pallet-revive to their testnets are:
          </p>
          <div className="flex flex-row gap-4">
            <ImageContainer>
              <img
                src={useBaseUrl('/img/chains/testnet.svg')}
                alt="chains"
                className="w-full h-full mx-auto mix-blend-lighten"
              />
            </ImageContainer>
            <ImageContainer>
              <img
                src={useBaseUrl('/img/chains/polkadot-pop-network.svg')}
                alt="chains"
                className="w-full h-full mx-auto mix-blend-lighten"
              />
            </ImageContainer>
          </div>
          <hr className="my-10" />
          <h2 className="mb-2 text-[rgba(187,178,247,0.66)]">ink! (up to v5)</h2>
          <p className="font-[600] text-[18px] mb-1">In Production:</p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            <ImageContainer>
              <img
                src={useBaseUrl('/img/chains/testnet.svg')}
                alt="chains"
                className="w-full h-full mx-auto mix-blend-lighten"
              />
            </ImageContainer>
            <ImageContainer>
              <img
                src={useBaseUrl('/img/chains/polkadot-pop-network.svg')}
                alt="chains"
                className="w-full h-full mx-auto mix-blend-lighten"
              />
            </ImageContainer>
            <ImageContainer>
              <img
                src={useBaseUrl('/img/chains/polkadot-pop-network.svg')}
                alt="chains"
                className="w-full h-full mx-auto mix-blend-lighten"
              />
            </ImageContainer>
            <ImageContainer>
              <img
                src={useBaseUrl('/img/chains/polkadot-pop-network.svg')}
                alt="chains"
                className="w-full h-full mx-auto mix-blend-lighten"
              />
            </ImageContainer>
            <ImageContainer>
              <img
                src={useBaseUrl('/img/chains/polkadot-pop-network.svg')}
                alt="chains"
                className="w-full h-full mx-auto mix-blend-lighten"
              />
            </ImageContainer>
            <ImageContainer>
              <img
                src={useBaseUrl('/img/chains/polkadot-pop-network.svg')}
                alt="chains"
                className="w-full h-full mx-auto mix-blend-lighten"
              />
            </ImageContainer>
            <ImageContainer>
              <img
                src={useBaseUrl('/img/chains/polkadot-pop-network.svg')}
                alt="chains"
                className="w-full h-full mx-auto mix-blend-lighten"
              />
            </ImageContainer>
            <ImageContainer>
              <img
                src={useBaseUrl('/img/chains/polkadot-pop-network.svg')}
                alt="chains"
                className="w-full h-full mx-auto mix-blend-lighten"
              />
            </ImageContainer>
          </div>
          <hr className="my-10" />
          <p className="font-[600] text-[18px] mb-1">Testnet now — Mainnet soon!</p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            <ImageContainer>
              <img
                src={useBaseUrl('/img/chains/testnet.svg')}
                alt="chains"
                className="w-full h-full mx-auto mix-blend-lighten"
              />
            </ImageContainer>
            <ImageContainer>
              <img
                src={useBaseUrl('/img/chains/polkadot-pop-network.svg')}
                alt="chains"
                className="w-full h-full mx-auto mix-blend-lighten"
              />
            </ImageContainer>
            <ImageContainer>
              <img
                src={useBaseUrl('/img/chains/polkadot-pop-network.svg')}
                alt="chains"
                className="w-full h-full mx-auto mix-blend-lighten"
              />
            </ImageContainer>
            <ImageContainer>
              <img
                src={useBaseUrl('/img/chains/polkadot-pop-network.svg')}
                alt="chains"
                className="w-full h-full mx-auto mix-blend-lighten"
              />
            </ImageContainer>
            <ImageContainer>
              <img
                src={useBaseUrl('/img/chains/polkadot-pop-network.svg')}
                alt="chains"
                className="w-full h-full mx-auto mix-blend-lighten"
              />
            </ImageContainer>
            <ImageContainer>
              <img
                src={useBaseUrl('/img/chains/polkadot-pop-network.svg')}
                alt="chains"
                className="w-full h-full mx-auto mix-blend-lighten"
              />
            </ImageContainer>
          </div>
          <hr className="my-10" />
          <p className="font-[600] text-[18px] mb-1">ink! Testnet</p>
          <ImageContainer>
            <img
              src={useBaseUrl('/img/chains/testnet.svg')}
              alt="chains"
              className="w-full h-full mx-auto mix-blend-lighten"
            />
          </ImageContainer>
          <hr className="my-10" />
          <div className="flex flex-row items-center justify-center gap-4">
            <p className="font-[600] text-[18px] mb-1">Want ink! smart contracts for your chain?</p>
            <Button variant="secondary" size="lg">
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
