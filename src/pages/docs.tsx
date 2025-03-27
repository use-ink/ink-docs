import React from 'react'
import { Redirect } from '@docusaurus/router'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'

export default function DocsRedirect() {
  const docsBaseUrl = useBaseUrl('/docs/v5')
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext()

  // Redirect to the latest version (e.g., /docs/current)
  return <Redirect to={docsBaseUrl} />
}
