import React from 'react'
import Layout from './layout'

const head = (
  <>
    <title>Tooling | ink!</title>
    <meta name="description" content="Discover tools and libraries for developing with ink!." />
    <meta name="keywords" content="tooling, IDE, frontend, developer, libraries" />
    <meta name="author" content="ink! Alliance" />
    <meta property="og:title" content="Tooling | ink!" />
    <meta property="og:description" content="Discover tools and libraries for developing with ink!." />
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

export default function PageTooling() {
  return (
    <Layout className="container" head={head}>
      <div>Tooling</div>
    </Layout>
  )
}
