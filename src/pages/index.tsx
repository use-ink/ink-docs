import React from 'react'
import Link from '@docusaurus/Link'

import '../css/landing.css'
import { Navbar } from '../components/landing/nav'
import { Footer } from '../components/footer'
import { Button } from '../components/ui/button'
export default function Home() {
  return (
    <>
      <Navbar className="z-20" />
      <section className="relative h-screen section-intro">
        <div className="absolute inset-0 z-0 section-bg"></div>
        <div
          className="relative z-10 flex flex-col items-center justify-center h-screen"
          style={{ fontFamily: 'Montserrat  ' }}
        >
          <h1 className="text-4xl font-bold">Hello ink!</h1>
          <p className="text-sm text-gray-500">(This will be the revamped ink! landing page)</p>
          <div className="flex flex-row gap-4">
            <Link to="/docs" className="">
              <Button size="lg">docs →</Button>
            </Link>

            <Link to="/ubator" className="">
              <Button
                variant="secondary"
                size="lg"
                className="!transition-all duration-300 hover:scale-105 hover:-rotate-1"
              >
                ink!ubator
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="h-screen section-interop">
        <h2 className="text-4xl font-bold">Future-Proof Interoperability</h2>
        <p className="text-sm text-gray-500">
          Develop smart contracts that seamlessly integrate across Polkadot, Kusama, and Substrate.
        </p>
      </section>
      <section className="h-screen section-rust"></section>
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
      <Footer />
    </>
  )
}
