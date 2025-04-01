import React from 'react'
import Layout from './layout'
import { StarryBackground } from '../components/starry-background'
import { SectionComposable } from '../components/home/section-composable'
import { SectionRisc } from '../components/home/section-risc'
import { SectionSolidity } from '../components/home/section-solidity'
import { SectionRust } from '../components/home/section-rust'
import { SectionInterop } from '../components/home/section-interop'
import { SectionHero } from '../components/home/section-hero'

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
      <div className="relative">
        <SectionHero />
        <SectionInterop />
        <SectionRust />
        <SectionSolidity />
        <SectionRisc />
        <SectionComposable />
      </div>
    </Layout>
  )
}
