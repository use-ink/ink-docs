import React, { type ReactNode } from 'react'
import { Footer as FooterComponent } from '../../components/footer'

function Footer(): ReactNode {
  // const { footer } = useThemeConfig()
  // if (!footer) {
  //   return null
  // }

  return <FooterComponent />
}

export default React.memo(Footer)
