import React from 'react'
import { Redirect } from '@docusaurus/router'
import { useLatestVersion } from '@docusaurus/plugin-content-docs/client'

export default function DocsRedirect() {
  const latestVersion = useLatestVersion('docs')
  return <Redirect to={`/docs/${latestVersion.path}`} />
}
