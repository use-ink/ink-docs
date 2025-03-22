import React, { type ReactNode } from 'react'
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import { translate } from '@docusaurus/Translate'
import IconMenu from '@theme/Icon/Menu'
import { Fade as Hamburger } from 'hamburger-react'

export default function MobileSidebarToggle(): ReactNode {
  const { toggle, shown } = useNavbarMobileSidebar()
  return (
    <button
      onClick={toggle}
      aria-label={translate({
        id: 'theme.docs.sidebar.toggleSidebarButtonAriaLabel',
        message: 'Toggle navigation bar',
        description: 'The ARIA label for hamburger menu button of mobile navigation',
      })}
      aria-expanded={shown}
      className="navbar__toggle clean-btn"
      type="button"
    >
      <Hamburger color="#BD82FD" size={28} distance="lg" rounded label="Open menu" />
    </button>
  )
}
