import React from 'react'
import Layout from '../layout'
import Link from '@docusaurus/Link'
import { CaretDoubleLeft } from '@phosphor-icons/react'
import { RiveAnimation } from '@site/src/components/rive-animation'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { Alignment, Fit, Layout as RiveLayout } from '@rive-app/react-canvas'
import { CTA } from '@site/src/components/cta'
import Button from '@site/src/components/ui/button'
const head = (
  <>
    <title>Tutorials | ink!</title>
    <meta
      name="description"
      content="Access tutorials to help you get started with ink! smart contracts and deploy them on Polkadot and beyond."
    />
    <meta name="keywords" content="tutorials, learning, ink!, guides, Polkadot" />
    <meta name="author" content="ink! Alliance" />
    <meta property="og:title" content="Tutorials | ink!" />
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
      <section className="max-w-[1000px] mx-auto flex flex-col lg:flex-row gap-[36px] items-center">
        <div className="gap-[120px] flex flex-col">
          <Link
            to="/tutorials"
            className="text-[13px] font-[500] !text-[rgb(220,215,224)] flex items-center gap-1 !no-underline !hover:underline"
          >
            <CaretDoubleLeft size={13} color="rgb(189, 130, 253)" />
            Back to tutorials
          </Link>
          <div className="flex flex-col gap-[12px]">
            <span className="text-[rgb(189,130,253)] text-[21px] font-[500]">ink! Tutorial:</span>
            <h1 className="text-[30px] font-[700] !text-white my-0">Creating an ink! Project</h1>
          </div>
        </div>
        <div className="relative w-[280px] h-[280px] lg:w-[420px] lg:h-[372px] scale-125">
          <RiveAnimation src={useBaseUrl('animations/Squink-educator.riv')} autoplay={true} />
        </div>
      </section>
      <section>
        <CTA
          title="Ready to get started?"
          description="Create your first ink! project in minutes with our step-by-step tutorial."
          cta={<Button>Get started</Button>}
        />
      </section>
    </Layout>
  )
}
