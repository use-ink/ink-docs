import React, { type ReactNode } from 'react'
import NavbarLayout from '@theme/Navbar/Layout'
import NavbarContent from '@theme/Navbar/Content'

export default function Navbar(): ReactNode {
  return (
    <>
      <div
        className="relative z-50 flex flex-col items-center justify-center gap-1 px-4 py-2 text-white text-sm"
        style={{
          backgroundColor: '#8b0000',
        }}
      >
        <p className="m-0">
          Since January 2026, we are unfortunately unable to actively maintain or develop ink! further.
        </p>
        <p className="m-0">
          We have written down the details in a{' '}
          <a
            href={'https://forum.polkadot.network/t/discontinuation-of-ink-rust-smart-contract-language/16849'}
            className="text-white underline"
          >
            Polkadot Forum post
          </a>
          .
        </p>
      </div>
      <NavbarLayout className="relative nav-top">
        <div className="absolute inset-0 z-0 mask"></div>
        <NavbarContent />
      </NavbarLayout>
    </>
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
