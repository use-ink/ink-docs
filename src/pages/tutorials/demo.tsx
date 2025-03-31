import React from 'react'
import Layout from '../layout'
import Link from '@docusaurus/Link'
import { CaretDoubleLeft } from '@phosphor-icons/react'
import { RiveAnimation } from '@site/src/components/rive-animation'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { Alignment, Fit, Layout as RiveLayout } from '@rive-app/react-canvas'
import { CTA } from '@site/src/components/cta'
import { SingleTutorial } from '@site/src/components/tutorials/single-tutorial'

const head = (
  <>
    <title>Tutorial: Creating an ink! Project | ink!</title>
    <meta
      name="description"
      content="Access tutorials to help you get started with ink! smart contracts and deploy them on Polkadot and beyond."
    />
    <meta name="keywords" content="tutorials, learning, ink!, guides, Polkadot" />
    <meta name="author" content="ink! Alliance" />
    <meta property="og:title" content="Tutorial: Creating an ink! Project | ink!" />
    <meta
      property="og:description"
      content="Access tutorials to help you get started with ink! smart contracts and deploy them on Polkadot and beyond."
    />
    <meta property="og:image" content="https://use-ink.com/img/opengraph-home.png" />
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

export default function PageTutorialDemo() {
  return (
    <Layout className="container" head={head}>
      <SingleTutorial />
    </Layout>
  )
}
