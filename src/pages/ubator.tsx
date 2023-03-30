import React from 'react'
import BrowserOnly from '@docusaurus/BrowserOnly'

const Inkubator = () => (
  <BrowserOnly>
    {() => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const InkubatorPage = require('../components/pg-inkubator').default
      return <InkubatorPage />
    }}
  </BrowserOnly>
)

export default Inkubator
