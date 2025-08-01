import React from 'react'
import { Redirect } from '@docusaurus/router'
import Head from '@docusaurus/Head'

export default function TutorialsRedirect() {
  return (
    <>
      <Head>
        <link rel="canonical" href={'https://use.ink/tutorials/guide'} />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Redirect to={'/tutorials/guide'} />
    </>
  )
}
