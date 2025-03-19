import React from 'react'
import { Navbar } from '../components/landing/nav'
import { Footer } from '../components/footer'
import Head from '@docusaurus/Head'
import classNames from 'classnames'
import '../css/pages.css'

import { StarryBackground } from '../components/starry-background'

const defaultHead = (
  <>
    <title>Default Title | ink!</title>
    <meta name="description" content="Default description for ink! pages." />
    <meta name="keywords" content="ink!, smart contracts, rust, Polkadot" />
    <meta property="og:title" content="Default Title | ink!" />
    <meta property="og:description" content="Default description for ink! pages." />
    <meta property="og:image" content="https://niklasp.github.io/ink-docs/image/opengraph/home.png" />
    <meta property="og:url" content="https://niklasp.github.io/ink-docs/" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="ink!" />
    <meta property="og:locale" content="en_US" />
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
