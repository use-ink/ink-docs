import { useVersions } from '@docusaurus/plugin-content-docs/client'

export const useCurrentVersion = () => {
  const versions = useVersions()
  const currentVersion = versions.find((version) => version.name === 'current')
  return currentVersion
}
