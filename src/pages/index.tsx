import React from 'react'
import { motion } from 'framer-motion'
import Link from '@docusaurus/Link'

import { Button } from '../components/ui/button'
import { MainCta } from '../main-cta'
import Layout from './layout'
import Hero from '@site/static/img/Hero.svg'
import { Star } from '@phosphor-icons/react'
import { AnimatedText } from '../components/animated-text'
import TentaclesLeft from '@site/static/img/home/Tentacles_l.svg'
import TentaclesRight from '@site/static/img/home/Tentacles_r.svg'
import MetaBalls from '../reactbits/Animations/MetaBalls/MetaBalls'
import Particles from '../reactbits/Backgrounds/Particles/Particles'
import Orb from '../reactbits/Backgrounds/Orb/Orb'
import WaterLine from '@site/static/img/water-line.svg'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { useRive } from '@rive-app/react-canvas'
import Fish1 from '@site/static/img/fishes/Fish-29.svg'
import Fish2 from '@site/static/img/fishes/Fish-13.svg'
import { StarryBackground } from '../components/starry-background'

const head = (
  <>
    <title>Home | ink!</title>
    <meta
      name="description"
      content="ink! is the Rust smart contract language of Polkadot. Running on RISC-V and PolkaVM."
    />
    <meta name="keywords" content="Smart contracts, Rust, Polkadot, PolkaVM, RISC-V" />
    <meta name="author" content="ink! Alliance" />
    <meta property="og:title" content="Home | ink!" />
    <meta
      property="og:description"
      content="ink! is the Rust smart contract language of Polkadot. Running on RISC-V and PolkaVM."
    />
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
  const { RiveComponent: HeroSquink } = useRive({
    src: useBaseUrl('animations/Hero.riv'),
    autoplay: true,
    animations: ['main', 'head', 'code', 'floating'],
  })

  const { RiveComponent: RustMedal } = useRive({
    src: useBaseUrl('animations/Medal.riv'),
    autoplay: true,
  })

  const { RiveComponent: RiscV } = useRive({
    src: useBaseUrl('animations/Risc-v.riv'),
    autoplay: true,
  })

  return (
    <Layout head={head} className="!mt-0">
      <div style={{ width: '100vw', height: '150vh', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
        <StarryBackground />
      </div>
      <section className="relative flex flex-col items-center justify-center min-h-screen my-16 pointer-events-none section-intro md:my-0">
        <div className="container relative z-10 flex flex-col items-center justify-center">
          <MainCta
            notice={
              <a
                className="flex flex-row items-center gap-2 !text-[#ffc249] hover:!text-[rgb(189,130,253)] justify-center lg:justify-start pointer-events-auto"
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
                <Link to="/docs" className=" !transition-all duration-300 flex-1 lg:flex-none pointer-events-auto">
                  <Button size="lg" className="w-full lg:w-auto">
                    Start building
                  </Button>
                </Link>

                <Link to="/tutorials" className="flex-1 pointer-events-auto lg:flex-none">
                  <Button variant="secondary" size="lg" className="!transition-all duration-300 w-full lg:w-auto">
                    View tutorials
                  </Button>
                </Link>
              </div>
            }
            media={
              <motion.div
                initial={{ opacity: 0, y: -100, rotateY: 0 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="w-full h-full px-4"
              >
                <div className="w-full h-full">
                  <HeroSquink className="w-full h-full" />
                </div>
                {/* <Hero style={{ filter: 'drop-shadow(0 10px 10px #0003' }} className=" animate-float" /> */}
              </motion.div>
            }
          />
        </div>
      </section>
      <section className="relative w-full min-h-screen overflow-hidden section-interop">
        <TentaclesLeft className="absolute top-[200px] lg:top-0 h-full -left-[280px] max-w-[500px] z-10 pointer-events-none" />
        <TentaclesRight className="absolute top-[100px] lg:top-0 -right-[380px] h-full origin-right max-w-[55%] 2xl:max-w-[1000px] z-10 pointer-events-none" />
        <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen pointer-events-none">
          <MainCta
            classNames={{
              container: 'max-w-lg',
            }}
            variant="center"
            title="Future-Proof Interoperability"
            description="Develop smart contracts that seamlessly integrate across Polkadot, Kusama, and Substrate."
            level="h2"
            cta={
              <div className="flex flex-row gap-4 pointer-events-auto">
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
            media={<></>}
          />
        </div>
        <div
          className="absolute inset-0 -z-0"
          style={{ maskImage: 'radial-gradient(circle, transparent 0%, transparent 30%, black 100%)' }}
        >
          <MetaBalls
            color="#bb82fa"
            cursorBallColor="#bb82fa"
            cursorBallSize={0.8}
            ballCount={15}
            animationSize={10}
            enableMouseInteraction={true}
            enableTransparency={true}
            hoverSmoothness={0.05}
            clumpFactor={0.3}
            speed={0.1}
          />
        </div>
      </section>
      <section
        className="h-screen section-rust"
        style={{
          background: 'linear-gradient(180deg,rgba(24,18,56,0) 0%,rgb(34,30,74) 100%)',
        }}
      >
        <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen">
          <MainCta
            variant="right"
            title="Get Rust-Powered Protection Built-in"
            description="Deploy smart contracts with built-in safety guarantees from the world's most secure programming language."
            level="h2"
            cta={
              <div className="flex flex-col gap-4 md:flex-row md:gap-4">
                <Link
                  to="https://github.com/use-ink/ink-examples"
                  className="hover:scale-105 hover:-rotate-1 !transition-all duration-300"
                >
                  <Button size="lg" variant="secondary">
                    See ink! examples
                  </Button>
                </Link>
              </div>
            }
            media={<RustMedal />}
          />
          <div className="absolute inset-0 -z-10">
            <Orb hoverIntensity={0.4} rotateOnHover={false} hue={0} forceHoverState={false} />
          </div>
        </div>
      </section>
      <section
        className="min-h-screen section-solidity"
        style={{
          background: 'linear-gradient(180deg,#221e4a 0%,rgb(65,54,133) 100%)',
        }}
      >
        <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen">
          <MainCta
            variant="left"
            title="Solidity + MetaMask Compatible"
            description="ink! can now speak with Solidity contracts and MetaMask out of the box. You can even use it to write parts of your dApp in Solidity and other parts in Rust with ink!"
            level="h2"
            cta={
              <div className="flex flex-col gap-4 md:flex-row md:gap-4">
                <Link
                  to="https://github.com/use-ink/ink-examples"
                  className="hover:scale-105 hover:-rotate-1 !transition-all duration-300"
                >
                  <Button size="lg" variant="secondary">
                    See ink! examples
                  </Button>
                </Link>
              </div>
            }
            media={<></>}
          />
        </div>
      </section>
      <section className="relative h-screen min-h-screen section-risc">
        <Fish1 className="absolute top-20 left-0 w-[30px] h-[30px] animate-swim-right will-change-transform" />
        <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen">
          <MainCta
            variant="right"
            title="PolkaVM for Max Efficiency"
            description="Get blazing fast execution and lower gas costs with PolkaVM RISC-V engine."
            level="h2"
            cta={
              <div className="flex flex-col gap-4 md:flex-row md:gap-4">
                <Link
                  to="https://github.com/use-ink/ink-examples"
                  className="hover:scale-105 hover:-rotate-1 !transition-all duration-300"
                >
                  <Button size="lg" variant="secondary">
                    Explore PolkaVM
                  </Button>
                </Link>
              </div>
            }
            media={
              <div className="w-full h-[800px]">
                <RiscV />
              </div>
            }
          />
        </div>
        <WaterLine className="absolute -top-10 left-0 h-auto w-[100vw]" />
      </section>
      <section
        className="relative h-screen section-polkavm"
        style={{ background: 'linear-gradient(180deg,#7565d9 0%,rgb(48,36,125) 51%)' }}
      >
        <div
          className="absolute inset-0 h-full"
          style={{ mask: 'linear-gradient(0deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 20%) add' }}
        >
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
