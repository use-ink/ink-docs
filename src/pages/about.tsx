import React, { useRef } from 'react'
import Layout from './layout'
import { motion, useScroll } from 'motion/react'

import Squink from '@site/static/img/ink-squink.svg'
import { useParallax } from '../util'
import { ImageContainer } from '../components/image-container'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Link from '@docusaurus/Link'
import { Button } from '../components/ui/button'

const head = (
  <>
    <title>About | ink!</title>
    <meta name="description" content="Learn about ink!, its history, and its community-driven development." />
    <meta name="keywords" content="ink! Alliance, Use Ink, Parity Technologies, PolkaVM, Polkadot" />
    <meta name="author" content="ink! Alliance" />
    <meta property="og:title" content="About | ink!" />
    <meta property="og:description" content="Learn about ink!, its history, and its community-driven development." />
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

export default function PageAbout() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)

  return (
    <Layout className="container relative" head={head}>
      <Squink
        className="-z-20 absolute opacity-35 top-[80vh] left-[18%] w-[444px] h-auto -translate-x-1/2 -translate-y-1/2"
        style={{ maskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)' }}
      />
      <section className="relative flex flex-col items-center justify-center my-12 overflow-hidden text-center">
        <motion.h1
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          About ink!
        </motion.h1>
      </section>
      <section className="flex flex-col items-start justify-center max-w-4xl gap-8 mx-auto my-12 text-left md:flex-row">
        <h2 className="w-auto whitespace-nowrap">what is ink!?</h2>
        <p className="text-balance font-[600]">
          <b>ink! is a programming language for smart contracts</b> — one of several that blockchains built with the
          Substrate framework can choose from. It&apos;s an opinionated language created by Parity team members by
          extending the popular Rust programming language with functionality needed to make it smart contract
          compatible.
        </p>
        <motion.div
          className="w-[400px] h-[400px]"
          initial={{ visibility: 'hidden' }}
          animate={{ visibility: 'visible' }}
          ref={ref}
          style={{ y }}
        >
          <Squink className="w-full h-full translate-y-1/5" />
        </motion.div>
      </section>
      <section className="max-w-4xl mx-auto">
        <h2 className="mb-8">The history of ink!</h2>

        <div className="flex flex-col items-start w-full gap-8">
          <img
            src={useBaseUrl('/img/about/ink-history.png')}
            alt="ink! history"
            className="shadow-xl rounded-xl aspect-video"
          />
          <div className="flex flex-col items-start gap-8 md:flex-row">
            <ImageContainer className="!w-auto">
              <div>
                <h4 className="mb-0 text-gray-500 uppercase font-[600] text-center">YEARS</h4>
                <div className="font-[500] font-freude text-[40px] text-center">&apos;19 - &apos;24</div>
              </div>
            </ImageContainer>
            <div className="flex flex-col items-start flex-1">
              <h4 className="text-[rgb(140,124,247)] tracking-[0.5px] uppercase font-[600] text-center text-[12px] mb-4">
                The early years — a squink is born
              </h4>
              <p>
                In 2019, ink! started out as a small project at Parity Technologies (the company that stewarded
                Polkadot). Over the years, ink! grew into a sophisticated ecosystem and a community did form around it.
                Throughout all this time Parity continued to allocate developer resources to the project, which is
                amazing!
              </p>
              <p>
                In April 2024, ink! moved out of the Parity umbrella. Instead of one company, it is nowadays developed
                and maintained by an alliance of individual developers, companies, and community teams altogether. You
                can read more on our transition out of Parity here.
              </p>
              <p>
                We continue to work closely with Parity, we contribute code to Parity-maintained components and
                regularly synchronize with Parity developers. Parity continues to be involved in ink! as well: in late
                2024 SRLabs and the Parity security team conducted an audit of ink! v5 (read more here).
              </p>
            </div>
          </div>
        </div>
        <hr className="my-12" />
        <div className="flex flex-col items-start w-full gap-8">
          <div className="w-full overflow-hidden aspect-video">
            <img
              src={useBaseUrl('/img/about/ink-alliance.png')}
              alt="ink! history"
              className="object-cover shadow-xl rounded-xl"
            />
          </div>
          <div className="flex flex-col items-start gap-8 md:flex-row">
            <ImageContainer className="!w-auto">
              <div>
                <h4 className="mb-0 text-gray-500 uppercase font-[600] text-center">YEAR</h4>
                <div className="font-[500] font-freude text-[40px] text-center">2024</div>
              </div>
            </ImageContainer>
            <div className="flex flex-col items-start flex-1">
              <h4 className="text-[rgb(140,124,247)] tracking-[0.5px] uppercase font-[600] text-center text-[12px] mb-4">
                Introducing the Alliance
              </h4>
              <p>
                The ink! Alliance holds bi-weekly meetings about the continued development and direction of ink!. That
                concerns all product aspects, from core development to for example putting out a public call for redoing
                our old and clunky website to the shiny new thing you are currently surfing (
                <a
                  href="https://forum.polkadot.network/t/bounty-ink-documentation-website-upgrade/11747"
                  target="_blank"
                  rel="noreferrer"
                >
                  see here for more info
                </a>
                ).
              </p>
              <p>
                We record our meeting notes in{' '}
                <a href="https://github.com/use-ink/ink-alliance/tree/main" target="_blank" rel="noreferrer">
                  this repository
                </a>
                .
              </p>
              <p>
                The Alliance also created a Use Ink Ltd. in the UK to which all licenses and intellectual property was
                transferred.
              </p>
              <p>
                The largest part of our funding comes from the Polkadot treasury. We are very happy about this continued
                support! The treasury proposals are all open and transparent, our last big one was{' '}
                <a
                  href="https://forum.polkadot.network/t/treasury-ink-alliance-for-a-more-successful-plaza/9692"
                  target="_blank"
                  rel="noreferrer"
                >
                  this one
                </a>
                .
              </p>
              <p>
                The funding got transferred to{' '}
                <a
                  href="https://assethub-polkadot.subscan.io/account/122izuBjb4jxdQcwbQZLCHSMDLZLzWZS2grTME5ihpDm7Shm"
                  target="_blank"
                  rel="noreferrer"
                >
                  this multisig
                </a>
                , which is controlled by six curators with a threshold of 4/6 approvals.
              </p>
              <p>
                If you are interested in contributing to ink! or joining one of these calls, just talk to us in the{' '}
                <a href="https://t.me/inkathon" target="_blank" rel="noreferrer">
                  ink! Developers Group on Telegram
                </a>{' '}
                or pick up one of our{' '}
                <a
                  href="https://github.com/use-ink/ink/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22"
                  target="_blank"
                  rel="noreferrer"
                >
                  Good First Issues
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr className="my-12" />
        <div className="flex flex-col items-center justify-center gap-4 my-16 md:flex-row">
          <p className="m-0">Want to join the ink! Alliance?</p>
          <Link href="https://t.me/inkathon" className="text-blue-500">
            <Button size="lg" variant="secondary">
              Join our Telegram
            </Button>
          </Link>
        </div>
        <hr className="my-12" />

        <div className="flex flex-col items-start w-full gap-8">
          <img
            src={useBaseUrl('/img/about/inkubator2-0.png')}
            alt="ink! history"
            className="shadow-xl rounded-xl aspect-video"
          />
          <div className="flex flex-col items-start gap-8 md:flex-row">
            <ImageContainer className="!w-auto">
              <div>
                <h4 className="mb-0 text-gray-500 uppercase font-[600] text-center">TODAY</h4>
                <div className="font-[500] font-freude text-[40px] text-center">2025</div>
              </div>
            </ImageContainer>
            <div className="flex flex-col items-start flex-1">
              <h4 className="text-[rgb(140,124,247)] tracking-[0.5px] uppercase font-[600] text-center text-[12px] mb-4">
                TRANSITION TO A Community Project
              </h4>
              <p>
                The{' '}
                <a href="https://use.ink/inkubator/" target="_blank" rel="noreferrer">
                  ink!ubator
                </a>{' '}
                is a community-driven funding program for advancing the ink! ecosystem. The first round of projects was
                completed in autumn 2024! A final summary was posted by Toma, one of the curators, on the Polkadot Forum{' '}
                <a
                  href="https://forum.polkadot.network/t/final-report-of-ink-ubator/10120"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </p>
              <p>
                Applications for the second round are currently open. The best way to follow this is to watch the
                <a href="https://github.com/use-inkubator/Ecosystem-Grants" target="_blank" rel="noreferrer">
                  ink!ubator 2.0 repository on GitHub
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        {/* 
        <div className="flex flex-col items-start w-full gap-8">
          <h2>Brand Assets</h2>
          <div className="flex flex-col items-start gap-8">
            <p>
              Our primary logo is our squid mascot (named &quot;Squink&quot;) plus our text logo. Please use this
              combined logo preferably.
            </p>
            <p>
              <a href={useBaseUrl('/img/about/ink-logo.svg')} download>
                Download ink! logo
              </a>
            </p>
          </div>
        </div> */}
      </section>
    </Layout>
  )
}
