import React, { type ReactNode } from 'react'
import clsx from 'clsx'
import Translate from '@docusaurus/Translate'
import { ThemeClassNames } from '@docusaurus/theme-common'
import { useDocsVersion, useVersions } from '@docusaurus/plugin-content-docs/client'
import type { Props } from '@theme/DocVersionBadge'
import Link from '@docusaurus/Link'
import { AlertCircle } from 'lucide-react'

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
            <span
              className="flex items-center gap-2 rounded-[12px] p-2"
              style={{
                background:
                  'linear-gradient(135deg, var(--token-f4360154-129c-450f-b724-996b72ffc267, rgb(189, 130, 253)) /* {"name":"ink Purple"} */ 0%, rgb(252, 129, 129) 100%)',
              }}
            >
              <AlertCircle size={22} fill="transparent" stroke="black" strokeWidth={2.5} />
            </span>
            <div className="flex flex-col gap-0.5 font-[500]">
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
          </div>
        )}
        {isOutdatedVersion && (
          <div className="attention-box">
            <span
              className="flex items-center gap-2 rounded-[12px] p-2"
              style={{
                background:
                  'linear-gradient(135deg, var(--token-f4360154-129c-450f-b724-996b72ffc267, rgb(189, 130, 253)) /* {"name":"ink Purple"} */ 0%, rgb(252, 129, 129) 100%)',
              }}
            >
              <AlertCircle size={22} fill="transparent" stroke="black" strokeWidth={2.5} />
            </span>
            <div className="flex flex-col gap-0.5 font-[500]">
              <span className="fit-content  text-[22px] text-transparent font-freude bg-clip-text bg-gradient-to-r from-[#bd82fd] to-[#8c7cf7] leading-[22px]">
                Attention!
              </span>
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
