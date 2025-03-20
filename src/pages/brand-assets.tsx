import React from 'react'
import Layout from './layout'
import { motion } from 'framer-motion'
import { ImageContainer } from '../components/image-container'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'

const head = (
  <>
    <title>Brand Assets | ink!</title>
    <meta name="description" content="Explore the brand assets for ink!, including logos and guidelines." />
    <meta name="keywords" content="brand, assets, logos, corporate identity, design" />
    <meta name="author" content="ink! Alliance" />
    <meta property="og:title" content="Brand Assets | ink!" />
    <meta property="og:description" content="Explore the brand assets for ink!, including logos and guidelines." />
    <meta property="og:image" content="https://use-ink.com/img/og-image.png" />
    <meta property="og:url" content="https://use-ink.com" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="ink!" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="ink! logo" />
    <meta property="og:image:type" content="image/png" />
  </>
)

export default function PageAssets() {
  return (
    <Layout className="container" head={head}>
      <section>
        <div className="flex flex-col items-center justify-center my-12 text-center">
          <motion.h1
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            Brand Assets
          </motion.h1>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center max-w-xl mx-auto my-12">
        <Card>
          <CardContent>
            <p>
              Our primary logo is our squid mascot (named &quot;Squink&quot;) plus our text logo. Please use this
              combined logo if possible!
            </p>
            <hr className="dotted" />
            <h2 className="!text-[21px] font-montserrat font-bold text-[rgb(189,130,253)]">Black Version</h2>
            <div className="flex items-center justify-center h-40 p-4 mb-4 overflow-hidden bg-white rounded-xl">
              <img
                src={useBaseUrl('img/logo/ink-logo-with-squid-black.svg')}
                alt="ink! logo black"
                className="w-full h-full"
              />
            </div>
            <p>
              Download here:{' '}
              <a href={useBaseUrl('img/logo/ink-logo-with-squid-black.svg')}>
                <code>ink-logo-with-squid-black.svg</code>
              </a>
              .
            </p>
            <hr className="dotted" />
            <h2 className="!text-[21px] font-montserrat font-bold text-[rgb(189,130,253)]">White Version</h2>
            <div className="flex items-center justify-center h-40 p-4 mb-4 overflow-hidden bg-black rounded-xl">
              <img
                src={useBaseUrl('img/logo/ink-logo-with-squid-white.svg')}
                alt="ink! logo"
                className="w-full h-full"
              />
            </div>
            <p>
              Download here:{' '}
              <a href={useBaseUrl('img/logo/ink-logo-with-squid-white.svg')} download>
                <code>ink-logo-with-squid-white.svg</code>
              </a>
              .
            </p>
            <hr className="dotted" />
            <h2 className="!text-[21px] font-montserrat font-bold text-[rgb(189,130,253)]">Squink Mascot</h2>
            <div className="flex items-center justify-center h-40 p-4 mb-4 overflow-hidden bg-gradient-to-br from-[#2a0e37] to-[#be54ff] rounded-xl">
              <img src={useBaseUrl('img/logo/ink-squink.svg')} alt="ink! squink mascot" className="w-full h-full" />
            </div>
            <p>
              Download here:{' '}
              <a href={useBaseUrl('img/logo/ink-squink.svg')} download>
                <code>ink-squink.svg</code>
              </a>
              .
            </p>
            <hr className="dotted" />
            <a href={useBaseUrl('img/logo/ink-brand-assets.zip')} download>
              <Button size="lg" className="w-full">
                Download all ink! brand assets
              </Button>
            </a>
          </CardContent>
        </Card>
      </section>
    </Layout>
  )
}
