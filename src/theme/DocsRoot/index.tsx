import React, { type ReactNode } from 'react'
import clsx from 'clsx'
import { ThemeClassNames, HtmlClassNameProvider } from '@docusaurus/theme-common'
import renderRoutes from '@docusaurus/renderRoutes'
import Layout from '@theme/Layout'

import '../../css/docs.css'
import '../../css/docs-components.css'

import type { Props } from '@theme/DocVersionRoot'

export default function DocsRoot(props: Props): ReactNode {
  return (
    <HtmlClassNameProvider className={clsx(ThemeClassNames.wrapper.docsPages)}>
      <Layout>{renderRoutes(props.route.routes!)}</Layout>
      <div className="absolute top-0 left-0 w-full h-[150vh] gradient-purple -z-10"></div>
    </HtmlClassNameProvider>
  )
}
