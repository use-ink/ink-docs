import React, { type ReactNode } from 'react'
import NavbarLayout from '@theme/Navbar/Layout'
import NavbarContent from '@theme/Navbar/Content'

export default function Navbar(): ReactNode {
  return (
    <NavbarLayout className="relative nav-top">
      <div className="absolute inset-0 z-0 mask"></div>
      <NavbarContent />
    </NavbarLayout>
    // <MainNavbar
    //   className="z-50"
    //   childrenRight={
    //     <NavbarSearch>
    //       <SearchBar />
    //     </NavbarSearch>
    //   }
    // />
  )
}
