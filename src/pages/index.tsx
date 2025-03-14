import React from 'react'
import Link from '@docusaurus/Link'

import '../css/landing.css'
import { Navbar } from '../components/landing/nav'
import { Footer } from '../components/footer'
import { Button } from '../components/ui/button'
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen" style={{ fontFamily: 'Montserrat  ' }}>
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
      <section className="h-screen"> </section>
      <Footer />
    </>
  )
}
