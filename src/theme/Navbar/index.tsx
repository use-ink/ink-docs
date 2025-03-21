import React, { type ReactNode } from 'react'
import NavbarLayout from '@theme/Navbar/Layout'
import NavbarContent from '@theme/Navbar/Content'
import { Navbar as MainNavbar } from '../../components/nav/nav'
import NavbarSearch from './Search'
import SearchBar from '@theme/SearchBar'

export default function Navbar(): ReactNode {
  return (
    // <NavbarLayout>
    //   <NavbarContent />
    // </NavbarLayout>
    <MainNavbar
      className="z-50"
      childrenRight={
        <NavbarSearch>
          <SearchBar />
        </NavbarSearch>
      }
    />
  )
}
