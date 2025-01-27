import React from 'react'
import BrowserOnly from '@docusaurus/BrowserOnly'
import Head from '@docusaurus/Head'

const TITLE = 'ink!ubator | Take your ink! project to new depths.'
const DESCRIPTION =
  'ink!ubator provides access to core developers and a wealth of resources.<br/>' +
  'The first cohort has successfully concluded, and applications for the next cohort are now open.';

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
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const InkubatorPage = require('../components/pg-inkubator').default;
        return <InkubatorPage />
      }}
    </BrowserOnly>
  </>
)

export default Inkubator
