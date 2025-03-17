import React from 'react'
import Link from '@docusaurus/Link'

import { Button } from '../components/ui/button'
import { MainCta } from '../components/landing/main-cta'
import Layout from './layout'

export default function Home() {
  return (
    <Layout className="!mt-0">
      <section className="relative min-h-screen section-intro">
        <div className="container relative z-10 flex flex-col items-center justify-center min-h-screen">
          <MainCta
            title="Build Rust-Based Smart Contracts"
            description="Create, manage, and deploy smart contracts with ink!"
            cta={
              <div className="flex flex-row gap-4">
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
      <section className="h-screen section-interop">
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
              <div className="flex flex-row gap-4">
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
