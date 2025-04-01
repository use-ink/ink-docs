import React, { memo, type ReactNode } from 'react'
import { DocSidebarItemsExpandedStateProvider, useVisibleSidebarItems } from '@docusaurus/plugin-content-docs/client'
import DocSidebarItem from '@theme/DocSidebarItem'

import type { Props } from '@theme/DocSidebarItems'

function DocSidebarItems({ items, ...props }: Props): ReactNode {
  const visibleItems = useVisibleSidebarItems(items, props.activePath)
  return (
    <DocSidebarItemsExpandedStateProvider>
      {visibleItems.map((item, index) => (
        <DocSidebarItem key={index} item={item} index={index} {...props} />
      ))}
    </DocSidebarItemsExpandedStateProvider>
  )
}

// Optimize sidebar at each "level"
export default memo(DocSidebarItems)
