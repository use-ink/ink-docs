import React from 'react'
import { motion } from 'framer-motion'
import { ArrowCircleDown, ExclamationMark, Heart, TriangleDashed } from '@phosphor-icons/react'
import useBaseUrl from '@docusaurus/useBaseUrl'

import Layout from './layout'
import Admonition from '../theme/Admonition/index'
import { ImageContainer } from '../components/image-container'
import { Button } from '../components/ui/button'
import CircleAnimation from '../components/chains/circle-animation'
import { TriangleAlert } from 'lucide-react'
import Link from '@docusaurus/Link'
import { StarryBackground } from '../components/starry-background'

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
    <Layout className="" head={head}>
      <StarryBackground />
      <div
        style={{
          mask: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%)',
          background: 'radial-gradient(41% 50% at 50% 50%, rgb(71, 60, 160) 36.9776%, rgb(0, 0, 0) 100%)',
        }}
        className="absolute inset-0"
      ></div>
      <section
        className="flex flex-col -mt-[80px] !pt-[80px] items-center justify-center min-h-[calc(90vh)] text-center relative w-full overflow-hidden"
        style={{
          mask: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0) 50%, rgb(0, 0, 0) 100%)',
        }}
      >
        <div className="absolute">
          <CircleAnimation
            circleSize={'1000px'}
            animationDuration={80}
            className="border-dotted border-[rgba(189,130,253,0.2)] -z-10"
            start={250}
          >
            <div className="bg-[#bd84fb] rounded-full w-[100px] h-[100px] mx-auto">
              <img
                src={useBaseUrl('/img/chains/pop-token.png')}
                alt="chains"
                className="w-[100px] h-[100px] mx-auto p-2 rotate-90"
              />
            </div>
          </CircleAnimation>
        </div>
        <div className="absolute">
          <CircleAnimation
            circleSize={'700px'}
            animationDuration={35}
            start={120}
            reverse
            className="border-solid border-[rgba(189,130,253,0.2)] -z-10"
          >
            <div className="bg-[#bd84fb] rounded-full w-[100px] h-[100px] mx-auto">
              <img
                src={useBaseUrl('/img/chains/polkadot-token.svg')}
                alt="chains"
                className="w-[100px] h-[100px] mx-auto"
              />
            </div>
          </CircleAnimation>
        </div>
        <div className="relative flex flex-col items-center justify-center gap-4 mx-4 text-center md:mx-0">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-4 text-2xl font-bold align-middle sm:flex-row"
          >
            Chains that <br className="block md:hidden" />
            <span className="text-[rgb(255,38,112)] animate-heartbeat">
              <Heart size={52} weight="fill" />
            </span>{' '}
            ink!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.2, ease: 'easeInOut' }}
            className="text-[rgb(220,215,224)] font-[600] max-w-[500px]"
          >
            Explore the different chains that you can deploy ink! smart contracts with, separated by version.
          </motion.p>
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative items-center w-full text-center"
      >
        <a href="#chains" className="scroll-m-64">
          <ArrowCircleDown size={32} weight="duotone" fill="rgb(140, 124, 247)" className="animate-bounce" />
        </a>
      </motion.div>
      <section id="chains" className="container grid grid-cols-1 gap-4 px-4 pt-32 md:grid-cols-12 md:px-0">
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
          <Admonition type="color" title="Attention">
            <p className="text-[16px]">
              With ink! version 6 we are transitioning to a new execution engine: the{' '}
              <Link to="https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/revive">
                <code className="whitespace-nowrap">pallet-revive</code>
              </Link>{' '}
              module of Polkadot SDK. This module executes smart contracts that are uploaded to it in the RISC-V
              bytecode format. This transition is currently ongoing and we are working hard to an alpha release of ink!
              v6. ongoing and we are working hard to an alpha release of ink! v6.
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
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            <ImageContainer>
              <img
                src={useBaseUrl('/img/chains/assethub.svg')}
                alt="chains"
                className="w-full h-full mx-auto mix-blend-lighten max-h-[48px]"
              />
            </ImageContainer>
            <ImageContainer>
              <img
                src={useBaseUrl('/img/chains/polkadot-pop-network.svg')}
                alt="chains"
                className="w-full h-full mx-auto mix-blend-lighten max-h-[48px] font-freude"
              />
            </ImageContainer>
          </div>
          <hr className="my-10" />
          <h2 className="mb-2 text-[rgba(187,178,247,0.66)]">ink! (up to v5)</h2>
          <p className="font-[600] text-[18px] mb-1">In Production:</p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            <Link to="https://alephzero.org/">
              <ImageContainer>
                <img
                  src={useBaseUrl('/img/chains/aleph-zero.svg')}
                  alt="chains"
                  className="w-full h-full mx-auto mix-blend-lighten max-h-[48px]"
                />
              </ImageContainer>
            </Link>
            <Link to="https://astar.network/">
              <ImageContainer>
                <img
                  src={useBaseUrl('/img/chains/astar.svg')}
                  alt="chains"
                  className="w-full h-full mx-auto mix-blend-lighten max-h-[48px]"
                />
              </ImageContainer>
            </Link>
            <Link to="https://shiden.astar.network/">
              <ImageContainer>
                <img
                  src={useBaseUrl('/img/chains/shiden.svg')}
                  alt="chains"
                  className="w-full h-full mx-auto mix-blend-lighten max-h-[48px]"
                />
              </ImageContainer>
            </Link>
            <Link to="http://phala.network/">
              <ImageContainer>
                <img
                  src={useBaseUrl('/img/chains/phala.svg')}
                  alt="chains"
                  className="w-full h-full mx-auto mix-blend-lighten max-h-[48px]"
                />
              </ImageContainer>
            </Link>
            <Link to="https://pendulumchain.org/">
              <ImageContainer>
                <img
                  src={useBaseUrl('/img/chains/pendulum.svg')}
                  alt="chains"
                  className="w-full h-full mx-auto mix-blend-lighten max-h-[48px]"
                />
              </ImageContainer>
            </Link>
            <Link to="https://pendulumchain.org/amplitude">
              <ImageContainer>
                <img
                  src={useBaseUrl('/img/chains/amplitude.svg')}
                  alt="chains"
                  className="w-full h-full mx-auto mix-blend-lighten max-h-[48px]"
                />
              </ImageContainer>
            </Link>
            <Link to="https://krest.peaq.network/">
              <ImageContainer>
                <img
                  src={useBaseUrl('/img/chains/krest.svg')}
                  alt="chains"
                  className="w-full h-full mx-auto mix-blend-lighten max-h-[48px]"
                />
              </ImageContainer>
            </Link>
            <Link to="https://www.ternoa.network/">
              <ImageContainer>
                <img
                  src={useBaseUrl('/img/chains/ternoa.svg')}
                  alt="chains"
                  className="w-full h-full mx-auto mix-blend-lighten max-h-[48px]"
                />
              </ImageContainer>
            </Link>
          </div>
          <hr className="my-10" />
          <p className="font-[600] text-[18px] mb-1">Testnet now — Mainnet soon!</p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            <Link to="https://t3rn.io/">
              <ImageContainer>
                <img
                  src={useBaseUrl('/img/chains/t3rn.svg')}
                  alt="chains"
                  className="w-full h-full mx-auto mix-blend-lighten max-h-[48px]"
                />
              </ImageContainer>
            </Link>
            <Link to="https://enjin.io/">
              <ImageContainer>
                <img
                  src={useBaseUrl('/img/chains/enjin.svg')}
                  alt="chains"
                  className="w-full h-full mx-auto mix-blend-lighten max-h-[48px]"
                />
              </ImageContainer>
            </Link>
            <Link to="https://zeitgeist.pm/">
              <ImageContainer>
                <img
                  src={useBaseUrl('/img/chains/zeitgeist.svg')}
                  alt="chains"
                  className="w-full h-full mx-auto mix-blend-lighten max-h-[48px]"
                />
              </ImageContainer>
            </Link>
            <Link to="https://www.peaq.network/">
              <ImageContainer>
                <img
                  src={useBaseUrl('/img/chains/peaq.svg')}
                  alt="chains"
                  className="w-full h-full mx-auto mix-blend-lighten max-h-[48px]"
                />
              </ImageContainer>
            </Link>
            <Link to="https://bit.country/">
              <ImageContainer>
                <img
                  src={useBaseUrl('/img/chains/bitcountry.svg')}
                  alt="chains"
                  className="w-full h-full mx-auto mix-blend-lighten max-h-[48px]"
                />
              </ImageContainer>
            </Link>
            <Link to="https://github.com/yerbatech">
              <ImageContainer>
                <img
                  src={useBaseUrl('/img/chains/yerba.svg')}
                  alt="chains"
                  className="w-full h-full mx-auto mix-blend-lighten max-h-[48px]"
                />
              </ImageContainer>
            </Link>
          </div>
          <hr className="my-10" />
          <p className="font-[600] text-[18px] mb-1">ink! Testnet</p>
          <Link to="https://onpop.io/">
            <ImageContainer>
              <img
                src={useBaseUrl('/img/chains/polkadot-pop-network.svg')}
                alt="chains"
                className="w-full h-full mx-auto mix-blend-lighten max-h-[48px]"
              />
            </ImageContainer>
          </Link>
          <hr className="my-10" />
          <div className="flex flex-row items-center justify-center gap-4">
            <p className="font-[600] text-[18px] mb-1">Want ink! smart contracts for your chain?</p>
            <Link to="https://t.me/inkathon">
              <Button variant="secondary" size="lg">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
