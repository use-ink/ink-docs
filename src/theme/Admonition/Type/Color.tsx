import React, { type ReactNode } from 'react'
import clsx from 'clsx'
import Translate from '@docusaurus/Translate'
import type { Props } from '@theme/Admonition/Type/Color'
import AdmonitionLayout from '@theme/Admonition/Layout'
import { WarningOctagon } from '@phosphor-icons/react'

const infimaClassName = 'color'

const defaultProps = {
  icon: <WarningOctagon weight="bold" />,
  title: (
    <Translate id="theme.admonition.color" description="The default label used for the Color admonition (:::color)">
      Attention
    </Translate>
  ),
}

// TODO remove before v4: Caution replaced by Warning
// see https://github.com/facebook/docusaurus/issues/7558
export default function AdmonitionTypeCaution(props: Props): ReactNode {
  return (
    <AdmonitionLayout {...defaultProps} {...props} className={clsx(infimaClassName, props.className)}>
      {props.children}
    </AdmonitionLayout>
  )
}
