import React from 'react'
import BrowserOnly from '@docusaurus/BrowserOnly'
import Head from '@docusaurus/Head'

const TITLE = 'ink!ubator | Take your ink! project to new depths.'
const DESCRIPTION =
  'ink!ubator connects you with core developers and extensive resources. Get funding and technical support for your next ink! project.'

const Inkubator = () => (
  <>
    <Head>
      <meta name="title" content={TITLE} />
      <meta name="description" content={DESCRIPTION} />
      <meta name="og:image" content="https://use.ink/img/twitter/inkubator-twitter.png" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://use.ink/img/twitter/inkubator-twitter.png" />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:site" content="@ink_lang" />
      <meta name="twitter:creator" content="@ink_lang" />
    </Head>
    <BrowserOnly>
      {() => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const InkubatorPage = require('../components/pg-inkubator').default
        return <InkubatorPage />
      }}
    </BrowserOnly>
  </>
)

export default Inkubator
