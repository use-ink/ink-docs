import React from 'react'
import { motion } from 'framer-motion'
import Link from '@docusaurus/Link'

import { Button } from '../components/ui/button'
import { MainCta } from '../components/home/main-cta'
import Layout from './layout'
import { MagicWand, Star } from '@phosphor-icons/react'
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
import DeepSea from '@site/static/img/home/deepsea.svg'
import { SocialIcon } from '../components/footer/social-icon'
import { FaXTwitter } from 'react-icons/fa6'
import Solidity from '@site/static/img/solidity.svg'
import MetaMask from '@site/static/img/metamask.svg'
import { SectionComposable } from '../components/home/section-composable'
import { SectionRisc } from '../components/home/section-risc'
import { SectionSolidity } from '../components/home/section-solidity'
import { SectionRust } from '../components/home/section-rust'
import { SectionInterop } from '../components/home/section-interop'
import { SectionHero } from '../components/home/section-hero'
import { Clouds } from '../components/home/clouds'

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
  return (
    <Layout head={head} className="!mt-0">
      <div style={{ width: '100vw', height: '150vh', position: 'absolute', top: 0, left: 0, zIndex: -1 }}>
        <StarryBackground />
      </div>
      <SectionHero />
      <SectionInterop />
      <SectionRust />
      <SectionSolidity />
      <SectionRisc />
      <SectionComposable />
    </Layout>
  )
}
