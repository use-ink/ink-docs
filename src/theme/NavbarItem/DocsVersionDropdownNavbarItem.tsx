import React, { type ReactNode } from 'react'
import {
  useVersions,
  useActiveDocContext,
  useDocsVersionCandidates,
  useDocsPreferredVersion,
} from '@docusaurus/plugin-content-docs/client'
import { translate } from '@docusaurus/Translate'
import { useLocation } from '@docusaurus/router'
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem'
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem'
import type { Props } from '@theme/NavbarItem/DocsVersionDropdownNavbarItem'
import type { LinkLikeNavbarItemProps } from '@theme/NavbarItem'
import type { GlobalVersion, GlobalDoc, ActiveDocContext } from '@docusaurus/plugin-content-docs/client'
import { NavItem, NavItemProps } from '@site/src/components/nav/nav-item'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { useCurrentVersion } from '@site/src/hooks/use-current-version'
import { cn } from '@site/src/util'
function getVersionMainDoc(version: GlobalVersion): GlobalDoc {
  return version.docs.find((doc) => doc.id === version.mainDocId)!
}

function getVersionTargetDoc(version: GlobalVersion, activeDocContext: ActiveDocContext): GlobalDoc {
  // We try to link to the same doc, in another version
  // When not possible, fallback to the "main doc" of the version
  return activeDocContext.alternateDocVersions[version.name] ?? getVersionMainDoc(version)
}

export default function DocsVersionDropdownNavbarItem({
  mobile,
  docsPluginId,
  dropdownActiveClassDisabled,
  dropdownItemsBefore,
  dropdownItemsAfter,
  ...props
}: Props): ReactNode {
  const { search, hash } = useLocation()
  const activeDocContext = useActiveDocContext(docsPluginId)
  const versions = useVersions(docsPluginId)
  const currentVersion = useCurrentVersion().label
  const { savePreferredVersionName } = useDocsPreferredVersion(docsPluginId)

  const baseUrl = useBaseUrl('/').split('/').slice(2).join('/')

  function versionToLink(version: GlobalVersion): LinkLikeNavbarItemProps {
    const targetDoc = getVersionTargetDoc(version, activeDocContext)
    return {
      label: version.label,
      // preserve ?search#hash suffix on version switches
      to: `${targetDoc.path}${search}${hash}`,
      isActive: () => version === activeDocContext.activeVersion,
      onClick: () => savePreferredVersionName(version.name),
    }
  }

  const items: LinkLikeNavbarItemProps[] = [
    ...dropdownItemsBefore,
    ...versions.map(versionToLink),
    ...dropdownItemsAfter,
  ]

  const dropdownVersion = useDocsVersionCandidates(docsPluginId)[0]

  // Mobile dropdown is handled a bit differently
  const dropdownLabel =
    mobile && items.length > 1
      ? translate({
          id: 'theme.navbar.mobileVersionsDropdown.label',
          message: 'Versions',
          description: 'The label for the navbar versions dropdown on mobile view',
        })
      : dropdownVersion.label
  const dropdownTo =
    mobile && items.length > 1 ? undefined : getVersionTargetDoc(dropdownVersion, activeDocContext).path

  // We don't want to render a version dropdown with 0 or 1 item. If we build
  // the site with a single docs version (onlyIncludeVersions: ['1.0.0']),
  // We'd rather render a button instead of a dropdown
  if (items.length <= 1) {
    return (
      <DefaultNavbarItem
        {...props}
        mobile={mobile}
        label={dropdownLabel}
        to={dropdownTo}
        isActive={dropdownActiveClassDisabled ? () => false : undefined}
      />
    )
  }

  const versionItem: NavItemProps = {
    title: dropdownLabel,
    href: dropdownTo,
    links: items.map((item) => {
      return {
        label: (
          <div className="flex items-center text-white">
            <span>ink! {item.label}</span>
            {currentVersion === item.label && (
              <span className="px-2 py-0.5 ml-4 text-black bg-white rounded-[8px] text-[12px]">latest</span>
            )}
          </div>
        ),
        href: `${baseUrl}/${item.to.split('/').slice(2).join('/')}`.slice(0, -1),
      }
    }),
  }
  return (
    <>
      <DropdownNavbarItem
        {...props}
        mobile={mobile}
        label={dropdownLabel}
        to={dropdownTo}
        items={items}
        isActive={dropdownActiveClassDisabled ? () => false : undefined}
        className={cn('block lg:!hidden', {
          '!hidden': !mobile,
        })}
      />
      <NavItem item={versionItem} className="hidden w-auto lg:block" dropdownClassName="bg-[#171233f3] w-[180px]" />
    </>
  )
}
