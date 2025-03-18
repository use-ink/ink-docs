import React from 'react'
import { Navbar } from '../components/landing/nav'
import { Footer } from '../components/footer'
import Head from '@docusaurus/Head'
import classNames from 'classnames'
import '../css/pages.css'

import { StarryBackground } from '../components/starry-background'
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
      {head && <Head>{head}</Head>}

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
