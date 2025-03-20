import React from 'react'
import { Navbar } from '../components/nav/nav'
import { Footer } from '../components/footer'
import Head from '@docusaurus/Head'
import classNames from 'classnames'
import '../css/pages.css'

import { StarryBackground } from '../components/starry-background'

const defaultHead = (
  <>
    <title>Smart Contracts on Polkadot in Rust | ink!</title>
    <meta name="description" content="Build Rust-based smart contracts on Polkadot with ink!" />
    <meta name="keywords" content="Smart contracts, Rust, Polkadot, PolkaVM, RISC-V" />
    <meta property="og:title" content="Smart Contracts on Polkadot in Rust | ink!" />
    <meta property="og:description" content="Build Rust-based smart contracts on Polkadot with ink!" />
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

export default function Layout({
  children,
  head,
  className,
}: {
  children: React.ReactNode
  head?: React.ReactNode
  className?: string
}) {
  return (
    <>
      <Head>{head || defaultHead}</Head>

      <Navbar />
      <main className={classNames('page flex flex-col min-h-screen mt-[80px] z-10', className)}>
        <StarryBackground />
        {children}
      </main>
      <Footer />
      <div className="absolute inset-0 z-0 section-bg" />
    </>
  )
}
