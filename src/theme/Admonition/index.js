import React from 'react'
import Admonition from '@theme-original/Admonition'
import MyIcon from '@site/static/img/icons/info.svg'

export default function AdmonitionWrapper(props) {
  if (props.type !== 'note' && props.type !== 'info') {
    return <Admonition {...props} />
  }
  return <Admonition icon={<MyIcon />} {...props} />
}
