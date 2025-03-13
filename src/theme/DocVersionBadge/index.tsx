import React, { type ReactNode } from 'react'
import clsx from 'clsx'
import Translate from '@docusaurus/Translate'
import { ThemeClassNames } from '@docusaurus/theme-common'
import { useDocsVersion, useVersions } from '@docusaurus/plugin-content-docs/client'
import type { Props } from '@theme/DocVersionBadge'
import Link from '@docusaurus/Link'
import { OctagonAlert } from 'lucide-react'

export default function DocVersionBadge({ className }: Props): ReactNode {
  const versionMetadata = useDocsVersion()
  const versions = useVersions()

  const activeVersionNumber = versionMetadata.label?.replace('v', '')
    ? parseInt(versionMetadata.label.replace('v', ''))
    : 0

  const currentVersion = versions.find((version: { name: string }) => version.name === 'current')
  const currentVersionNumber = currentVersion?.label.replace('v', '')
    ? parseInt(currentVersion.label.replace('v', ''))
    : 0

  const isUnreleasedVersion = activeVersionNumber > currentVersionNumber
  const isOutdatedVersion = activeVersionNumber < currentVersionNumber

  if (versionMetadata.badge) {
    return (
      <>
        <span className={clsx(className, ThemeClassNames.docs.docVersionBadge, 'badge badge--secondary')}>
          <Translate id="theme.docs.versionBadge.label" values={{ versionLabel: versionMetadata.label }}>
            {'Version: {versionLabel}'}
          </Translate>
        </span>
        {isUnreleasedVersion && (
          <div className="attention-box">
            <span className="fit-content  text-[22px] text-transparent font-freude bg-clip-text bg-gradient-to-r from-[#bd82fd] to-[#8c7cf7] leading-[22px]">
              Attention!
            </span>

            <span>
              You are viewing <em>unreleased</em> ink! {activeVersionNumber} docs.{' '}
              <Link to={'/docs'} className="underline">
                Click here
              </Link>{' '}
              to view the latest docs.
            </span>
          </div>
        )}
        {isOutdatedVersion && (
          <div className="admonition-wrap-caution admonition-wrap p-[5px] rounded-[12px] border border-solid my-4">
            <div className="theme-admonition theme-admonition-caution admonition_xJq3 alert alert--warning">
              <div className="admonitionHeading_Gvgb">
                <span className="flex items-center gap-2">
                  <OctagonAlert size={20} fill="transparent" stroke="currentColor" />
                  Attention!
                </span>
              </div>
              <span>
                You are viewing <em>outdated</em> ink! {activeVersionNumber} docs.{' '}
                <Link to={'/docs'} className="underline">
                  Click here
                </Link>{' '}
                to view the latest docs.
              </span>
            </div>
          </div>
        )}
      </>
    )
  }
  return null
}
