import React from 'react'
import { Navbar } from '../components/landing/nav'
import { Footer } from '../components/footer'
import Head from '@docusaurus/Head'

export default function Layout({ children, head }: { children: React.ReactNode; head?: React.ReactNode }) {
  return (
    <>
      {head && <Head>{head}</Head>}
      <Navbar />
      <main className="flex flex-col min-h-screen mt-[80px]">{children}</main>
      <Footer />
    </>
  )
}
