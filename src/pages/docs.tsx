import React from 'react'
import { Redirect } from '@docusaurus/router'
import Head from '@docusaurus/Head'

export default function DocsRedirect() {
  return (
    <>
      <Head>
        {/* Canonical URL + Meta Tags */}
        <link rel="canonical" href={'https://use.ink/docs/v6/'} />
        <meta name="robots" content="noindex, follow" /> {/* Optional */}
      </Head>
      <Redirect to={'/docs/v6/'} />
    </>
  )
}
