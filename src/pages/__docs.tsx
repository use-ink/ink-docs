import React from 'react'
import { Redirect } from '@docusaurus/router'
import Head from '@docusaurus/Head'

export default function DocsRedirect() {
  return (
    <>
      <Head>
        <link rel="canonical" href={'https://use.ink/docs/v5/'} />
      </Head>
      <Redirect to={'/ink-docs/docs/v5/'} />
    </>
  )
}
