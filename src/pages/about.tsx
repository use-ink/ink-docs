import React, { useRef } from 'react'
import { motion, useScroll } from 'motion/react'

import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'

import Layout from './layout'
import { useParallax } from '../util'
import { ImageContainer } from '../components/image-container'
import { Button } from '../components/ui/button'

import Fish1 from '@site/static/img/fishes/Fish-29.svg'
import Fish2 from '@site/static/img/fishes/Fish-13.svg'
import WaterLine from '@site/static/img/water-line.svg'
import { useRive } from '@rive-app/react-canvas'
import { CTA } from '../components/cta'

const head = (
  <>
    <title>About | ink!</title>
    <meta name="description" content="Learn about ink!, its history, and its community-driven development." />
    <meta name="keywords" content="ink! Alliance, Use Ink, Parity Technologies, PolkaVM, Polkadot" />
    <meta name="author" content="ink! Alliance" />
    <meta property="og:title" content="About | ink!" />
    <meta property="og:description" content="Learn about ink!, its history, and its community-driven development." />
    <meta property="og:image" content="https://use-ink.com/img/opengraph/home.png" />
    <meta property="og:url" content="https://use-ink.com/about" />
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
  const { RiveComponent: SquinkAbout } = useRive({
    src: useBaseUrl('animations/about_squink.riv'),
    autoplay: true,
    animations: ['squink', 'click', 'crab', 'idle'],
  })

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, -200)

  return (
    <Layout className="relative" head={head} ref={ref}>
      <WaterLine className="absolute top-56 lg:top-64 left-0 h-auto w-[100vw] -z-10 opacity-70" />
      <section className="relative flex flex-col items-center justify-center !max-w-[1000px] mx-auto my-24 md:my-12 mt-28 md:mt-24 lg:mt-36 text-center">
        <motion.h1
          className="text-center !text-[80px] md:!text-[150px] lg:!text-[210px] font-freude mix-blend-color-burn animate-float"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          About ink!
        </motion.h1>
      </section>
      <section className="relative w-full h-0">
        <Fish1 className="absolute -top-20 left-0 w-[30px] h-[30px] animate-swim-right will-change-transform" />
      </section>
      <section className="container grid !max-w-[1000px] grid-cols-1 gap-8 mx-auto md:grid-cols-2 mt-24">
        <div className="flex flex-col items-start gap-1">
          <h2 className="w-auto whitespace-nowrap">What is ink!?</h2>
          <p className="text-balance font-[500] text-[21px] leading-[28px]">
            <span className="font-bold text-[rgb(187,131,250)]">
              ink! is a Rust-based domain-specific language (DSL) for writing smart contracts on chains built with
              the{' '}
            </span>
            <a href="https://polkadot.com/platform/sdk" target="_blank" rel="noreferrer">
              Polkadot SDK
            </a>{' '}
            . Created by Parity Technologies, ink! extends Rust with specialized functionalities to ensure seamless,
            Polkadot-ready smart contract development.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <motion.div
            className="w-[500px] h-[500px] -mt-[30px] animate-float"
            initial={{ visibility: 'hidden' }}
            animate={{ visibility: 'visible' }}
          >
            <SquinkAbout />
          </motion.div>
        </div>
      </section>
      <section className="relative w-full h-48">
        <Fish2 className="absolute right-0 w-[100px] h-[100px] animate-swim-left will-change-transform" />
      </section>
      <section className="container !max-w-[1000px] mx-auto">
        <h2 className="mb-8">History of ink!</h2>

        <div className="flex flex-col items-start w-full gap-8">
          <div className="w-full overflow-hidden aspect-video border-[5px] border-solid border-[#b782fc] rounded-[20px]">
            <img src={useBaseUrl('/img/about/ink-history.png')} alt="ink! history" className="object-cover" />
          </div>
          <div className="flex flex-col items-start gap-8 md:flex-row">
            <ImageContainer className="w-full md:!w-auto max-w-full">
              <div>
                <h4 className="mb-0 text-gray-500 uppercase font-[600] text-center text-[12px]">YEARS</h4>
                <div className="font-[500] text-[rgb(222,217,255)] font-freude text-[40px] leading-[50px] text-center">
                  &apos;19-&apos;24
                </div>
              </div>
            </ImageContainer>
            <div className="flex flex-col items-start flex-1">
              <h4 className="text-[rgb(222,217,255)] tracking-[0.5px] uppercase font-[600] text-center text-[12px] mb-4">
                The early years — a squink is born
              </h4>
              <p>
                In 2019, ink! started out as a small project at{' '}
                <Link to="https://parity.io" target="_blank" rel="noreferrer">
                  Parity Technologies
                </Link>{' '}
                (the company that stewarded{' '}
                <Link to="https://polkadot.com" target="_blank" rel="noreferrer">
                  Polkadot
                </Link>
                ). From the very beginning, ink! and Polkadot were developed side by side, resulting in a powerful smart
                contract language that natively taps into the powerful features of the Polkadot ecosystem. Over the
                years, ink! grew into a sophisticated ecosystem with a community of passionate teams and individuals.
              </p>

              <p>
                In April 2024, ink! moved out of the Parity umbrella. It is now developed and maintained by an alliance
                of independent developers, companies, and community teams. You can read more about the transition{' '}
                <Link to="https://x.com/ink_lang/status/1783877356819783916" target="_blank" rel="noreferrer">
                  here
                </Link>
                .
              </p>

              <p>
                The alliance continues to collaborate closely with Parity by contributing code to Parity-led initiatives
                and staying in sync with core developers. Parity remains actively involved as well: in late 2024, SRLabs
                and Parity’s security team conducted an audit of ink! v5 (
                <Link to="https://x.com/paritytech/status/1882492494661005760" target="_blank" rel="noreferrer">
                  read more here
                </Link>
                ).
              </p>
            </div>
          </div>
        </div>
        <hr className="mt-12 mb-16" />
        <div className="flex flex-col items-start w-full gap-8">
          <div className="w-full overflow-hidden aspect-video border-[5px] border-solid border-[#b782fc] rounded-[20px]">
            <img src={useBaseUrl('/img/about/ink-alliance.png')} alt="ink! history" className="object-cover" />
          </div>
          <div className="flex flex-col items-start gap-8 md:flex-row">
            <ImageContainer className="w-full md:!w-auto max-w-full">
              <div>
                <h4 className="mb-0 text-gray-500 uppercase font-[600] text-center text-[12px]">YEAR</h4>
                <div className="font-[500] text-[rgb(222,217,255)] font-freude text-[40px] leading-[50px] text-center">
                  2024
                </div>
              </div>
            </ImageContainer>
            <div className="flex flex-col items-start flex-1">
              <h4 className="text-[rgb(222,217,255)] tracking-[0.5px] uppercase font-[600] text-center text-[12px] mb-4">
                Introducing the Alliance
              </h4>
              <p>
                The ink! Alliance meets bi-weekly to plan development priorities, explore product improvements, and
                manage community projects—such as developing the new ink! website (
                <a
                  href="https://forum.polkadot.network/t/bounty-ink-documentation-website-upgrade/11747"
                  target="_blank"
                  rel="noreferrer"
                >
                  more info
                </a>
                ). Meeting notes are publicly recorded in{' '}
                <a href="https://github.com/use-ink/ink-alliance/tree/main" target="_blank" rel="noreferrer">
                  this repository
                </a>
                .
              </p>
              <p>
                To manage intellectual property, the Alliance established Use Ink Ltd. in the UK. Much of the funding
                comes from the Polkadot Treasury, and the proposals are fully transparent—the latest major one can be
                viewed
                <a
                  href="https://forum.polkadot.network/t/treasury-ink-alliance-for-a-more-successful-plaza/9692"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </p>
              <p>
                Once approved, treasury funds are transferred to a{' '}
                <a
                  href="https://assethub-polkadot.subscan.io/account/122izuBjb4jxdQcwbQZLCHSMDLZLzWZS2grTME5ihpDm7Shm"
                  target="_blank"
                  rel="noreferrer"
                >
                  multisig wallet
                </a>
                , maintained by six curators (requiring 4 approvals).
              </p>
              <p>
                If you&apos;d like to contribute to ink!, join the{' '}
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
                .
              </p>
            </div>
          </div>
        </div>
        <hr className="mt-12 mb-16" />

        <div className="flex flex-col items-start w-full gap-8">
          <div className="w-full overflow-hidden aspect-video border-[5px] border-solid border-[#b782fc] rounded-[20px]">
            <img src={useBaseUrl('/img/about/inkubator2-0.png')} alt="ink! history" />
          </div>
          <div className="flex flex-col items-start gap-8 md:flex-row">
            <ImageContainer className="w-full md:!w-auto max-w-full">
              <div>
                <h4 className="mb-0 text-gray-500 uppercase font-[600] text-center text-[12px]">TODAY</h4>
                <div className="font-[500] text-[rgb(222,217,255)] font-freude text-[40px] leading-[50px] text-center">
                  2025
                </div>
              </div>
            </ImageContainer>
            <div className="flex flex-col items-start flex-1">
              <h4 className="text-[rgb(222,217,255)] tracking-[0.5px] uppercase font-[600] text-center text-[12px] mb-4">
                TRANSITION TO A Community Project
              </h4>
              <p>
                The{' '}
                <a href={useBaseUrl('/inkubator')} target="_blank" rel="noreferrer">
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
                Applications for the second round are currently open. For the latest updates, visit the{' '}
                <a href="https://github.com/use-inkubator/Ecosystem-Grants" target="_blank" rel="noreferrer">
                  ink!ubator 2.0 repository
                </a>
                on GitHub.
              </p>
            </div>
          </div>
        </div>
        <hr className="my-12" />
        <CTA text="Want to join the ink! Alliance?" btnText="Join our Telegram" btnLink="https://t.me/inkathon" />
      </section>
    </Layout>
  )
}
