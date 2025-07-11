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

// Component for docs context
function DocsVersionDropdown({ mobile, docsPluginId, dropdownActiveClassDisabled, dropdownItemsBefore, dropdownItemsAfter, ...props }: Props) {
  const { search, hash } = useLocation()
  const activeDocContext = useActiveDocContext(docsPluginId)
  const versions = useVersions(docsPluginId)
  const currentVersion = useCurrentVersion().label
  const { savePreferredVersionName } = useDocsPreferredVersion(docsPluginId)
  const dropdownVersion = useDocsVersionCandidates(docsPluginId)[0]

  function versionToLink(version: GlobalVersion): LinkLikeNavbarItemProps {
    const targetDoc = getVersionTargetDoc(version, activeDocContext)
    return {
      label: version.label,
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

  const dropdownLabel = dropdownVersion.label
  const dropdownTo = getVersionMainDoc(dropdownVersion).path

  const versionItem: NavItemProps = {
    title: dropdownLabel,
    href: dropdownTo,
    links: items.map((item) => {
      return {
        label: (
          <div className="flex items-center text-white">
            <span>{item.label}</span>
            {currentVersion === item.label && (
              <span className="px-2 py-0.5 ml-4 text-black bg-white rounded-[8px] text-[12px]">latest</span>
            )}
          </div>
        ),
        href: item.to?.replace(/\/$/, ''),
      }
    }),
  }

  if (mobile) {
    return (
      <DefaultNavbarItem
        {...props}
        mobile={mobile}
        label={translate({
          id: 'theme.navbar.mobileVersionsDropdown.label',
          message: 'Versions',
          description: 'The label for the navbar versions dropdown on mobile view',
        })}
        to={getVersionMainDoc(dropdownVersion).path}
      >
        {items.map((linkLikeItem, i) => (
          <DefaultNavbarItem
            {...props}
            key={i}
            mobile={mobile}
            {...linkLikeItem}
            onClick={undefined}
          />
        ))}
      </DefaultNavbarItem>
    )
  }

  return <NavItem item={versionItem} />
}

// Component for tutorials context - kept for future use
// function TutorialsVersionDropdown({ mobile, dropdownActiveClassDisabled, dropdownItemsBefore, dropdownItemsAfter, ...props }: Props) {
//   const { search, hash } = useLocation()
//   const activeDocContext = useActiveDocContext('tutorials')
//   const versions = useVersions('tutorials')
//   const currentVersion = useCurrentVersion().label
//   const { savePreferredVersionName } = useDocsPreferredVersion('tutorials')
//   const dropdownVersion = useDocsVersionCandidates('tutorials')[0]

//   function versionToLink(version: GlobalVersion): LinkLikeNavbarItemProps {
//     const targetDoc = getVersionTargetDoc(version, activeDocContext)
//     return {
//       label: version.label,
//       to: `${targetDoc.path}${search}${hash}`,
//       isActive: () => version === activeDocContext.activeVersion,
//       onClick: () => savePreferredVersionName(version.name),
//     }
//   }

//   const items: LinkLikeNavbarItemProps[] = [
//     ...dropdownItemsBefore,
//     ...versions.map(versionToLink),
//     ...dropdownItemsAfter,
//   ]

//   const dropdownLabel = dropdownVersion.label
//   const dropdownTo = getVersionMainDoc(dropdownVersion).path

//   const versionItem: NavItemProps = {
//     title: dropdownLabel,
//     href: dropdownTo,
//     links: items.map((item) => {
//       return {
//         label: (
//           <div className="flex items-center text-white">
//             <span>{item.label}</span>
//             {currentVersion === item.label && (
//               <span className="px-2 py-0.5 ml-4 text-black bg-white rounded-[8px] text-[12px]">latest</span>
//             )}
//           </div>
//         ),
//         href: item.to?.replace(/\/$/, ''),
//       }
//     }),
//   }

//   if (mobile) {
//     return (
//       <DefaultNavbarItem
//         {...props}
//         mobile={mobile}
//         label={translate({
//           id: 'theme.navbar.mobileVersionsDropdown.label',
//           message: 'Versions',
//           description: 'The label for the navbar versions dropdown on mobile view',
//         })}
//         to={getVersionMainDoc(dropdownVersion).path}
//       >
//         {items.map((linkLikeItem, i) => (
//           <DefaultNavbarItem
//             {...props}
//             key={i}
//             mobile={mobile}
//             {...linkLikeItem}
//             onClick={undefined}
//           />
//         ))}
//       </DefaultNavbarItem>
//     )
//   }

//   return <NavItem item={versionItem} />
// }

export default function DocsVersionDropdownNavbarItem({
  mobile,
  docsPluginId,
  dropdownActiveClassDisabled,
  dropdownItemsBefore,
  dropdownItemsAfter,
  ...props
}: Props): ReactNode {
  const { pathname } = useLocation()
  
  // Detect if we're in tutorials context
  const isInTutorials = pathname.startsWith('/tutorials')
  
  // Hide version dropdown for tutorials
  if (isInTutorials) {
    return null
  }
  
  return (
    <DocsVersionDropdown
      mobile={mobile}
      docsPluginId={docsPluginId}
      dropdownActiveClassDisabled={dropdownActiveClassDisabled}
      dropdownItemsBefore={dropdownItemsBefore}
      dropdownItemsAfter={dropdownItemsAfter}
      {...props}
    />
  )
}
