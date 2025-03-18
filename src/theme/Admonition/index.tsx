import React, { type ComponentType, type ReactNode } from 'react'
import { processAdmonitionProps } from '@docusaurus/theme-common'
import type { Props } from '@theme/Admonition'
import AdmonitionTypes from '@theme/Admonition/Types'
import clsx from 'clsx'

type AdmonitionType = 'note' | 'info' | 'tip' | 'caution' | 'danger' | 'color'

function getAdmonitionTypeComponent(type: AdmonitionType): ComponentType<Props> {
  const component = AdmonitionTypes[type]
  if (component) {
    return component
  }
  console.warn(`No admonition component found for admonition type "${type}". Using Info as fallback.`)
  return AdmonitionTypes.info!
}

export default function Admonition(unprocessedProps: Props): ReactNode {
  const props = processAdmonitionProps(unprocessedProps)
  const AdmonitionTypeComponent = getAdmonitionTypeComponent(props.type)

  if (!['note', 'info', 'tip', 'caution', 'danger', 'color'].includes(props.type)) {
    props.type = 'info'
  }

  return (
    <div
      className={clsx(
        `admonition-wrap-${props.type}`,
        'admonition-wrap p-[5px] rounded-[12px] border border-solid my-2',
      )}
    >
      <AdmonitionTypeComponent {...props} />
    </div>
  )
}
