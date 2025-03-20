import React from 'react'
import { motion } from 'framer-motion'
import Link from '@docusaurus/Link'

import { Button } from '../components/ui/button'
import { MainCta } from '../main-cta'
import Layout from './layout'
import Hero from '@site/static/img/Hero.svg'
import { Star } from '@phosphor-icons/react'
import { AnimatedText } from '../components/animated-text'

const head = (
  <>
    <title>Home | ink!</title>
    <meta name="description" content="ink! is the Rust smart contract language of Polkadot. Running on RISC-V and PolkaVM." />
    <meta name="keywords" content="Smart contracts, Rust, Polkadot, PolkaVM, RISC-V" />
    <meta name="author" content="ink! Alliance" />
    <meta property="og:title" content="Home | ink!" />
    <meta property="og:description" content="ink! is the Rust smart contract language of Polkadot. Running on RISC-V and PolkaVM." />
    <meta property="og:image" content="https://niklasp.github.io/ink-docs/img/opengraph/home.png" />
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

export default function Home() {
  return (
    <Layout head={head} className="!mt-0">
      <section className="relative flex flex-col items-center justify-center min-h-screen my-16 section-intro md:my-0">
        <div className="container relative z-10 flex flex-col items-center justify-center">
          <MainCta
            notice={
              <a
                className="flex flex-row items-center gap-2 !text-[#ffc249] hover:!text-[rgb(189,130,253)] justify-center lg:justify-start"
                href="https://github.com/use-ink/ink"
              >
                <Star size={16} weight="fill" className="inline animate-flip" />
                <AnimatedText text="1.4K+ stars on GitHub!" element="span" className="text-[16px] font-[600]" />
              </a>
            }
            title="Build Rust-Based Smart Contracts"
            description="Create, manage, and deploy smart contracts with ink!"
            cta={
              <div className="flex flex-col gap-4 mx-4 md:flex-row md:mx-0">
                <Link to="/docs" className=" !transition-all duration-300 flex-1 lg:flex-none">
                  <Button size="lg" className="w-full lg:w-auto">
                    Start Building →
                  </Button>
                </Link>

                <Link to="/inkubator" className="flex-1 lg:flex-none">
                  <Button variant="secondary" size="lg" className="!transition-all duration-300 w-full lg:w-auto">
                    ink!ubator
                  </Button>
                </Link>
              </div>
            }
            media={
              <motion.div
                initial={{ opacity: 0, y: -100, rotateY: 50 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="w-full h-full px-4"
              >
                <Hero style={{ filter: 'drop-shadow(0 10px 10px #0003' }} className=" animate-float" />
              </motion.div>
            }
          />
        </div>
      </section>
      <section className="min-h-screen section-interop">
        <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen">
          <MainCta
            classNames={{
              container: 'max-w-lg',
            }}
            variant="center"
            title="Future-Proof Interoperability"
            description="Develop smart contracts that seamlessly integrate across Polkadot, Kusama, and Substrate."
            level="h2"
            cta={
              <div className="flex flex-row gap-4">
                <Link to="/inkubator" className="">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="!transition-all duration-300 hover:scale-105 hover:-rotate-1"
                  >
                    Read the docs
                  </Button>
                </Link>
              </div>
            }
            media={<>👀</>}
          />
        </div>
      </section>
      <section className="h-screen section-rust">
        <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen">
          <MainCta
            variant="left"
            title="Rust Powered Protection"
            description="Deploy smart contracts with built-in safety guarantees from the world's most secure programming language."
            level="h2"
            cta={
              <div className="flex flex-col gap-4 md:flex-row md:gap-4">
                <Link to="/docs" className="hover:scale-105 hover:-rotate-1 !transition-all duration-300">
                  <Button size="lg">Start Building →</Button>
                </Link>

                <Link to="/inkubator" className="">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="!transition-all duration-300 hover:scale-105 hover:-rotate-1"
                  >
                    ink!ubator
                  </Button>
                </Link>
              </div>
            }
            media={<>👀</>}
          />
        </div>
      </section>
      <section className="h-screen section-risc"></section>
      <section className="relative h-screen section-composability">
        <div className="absolute inset-0 h-full">
          <img
            decoding="async"
            loading="lazy"
            sizes="100vw"
            srcSet="https://framerusercontent.com/images/QN8pq6Ny20mww2CWMxsJ7FI2w.png?scale-down-to=512 512w,https://framerusercontent.com/images/QN8pq6Ny20mww2CWMxsJ7FI2w.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/QN8pq6Ny20mww2CWMxsJ7FI2w.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/QN8pq6Ny20mww2CWMxsJ7FI2w.png 2200w"
            src="https://framerusercontent.com/images/QN8pq6Ny20mww2CWMxsJ7FI2w.png?scale-down-to=2048"
            className="object-cover w-full h-full"
            alt="deep see"
          />
        </div>
      </section>
    </Layout>
  )
}
