import React from 'react'
import { InkubatorLogo } from '../icons'
import Link from '@docusaurus/Link'
import { useUI } from '../../hooks'
import { Config } from './config'

export const Nav: React.FC = () => {
  const { setShowSidebar } = useUI()

  return (
    <nav className="fixed top-0 z-40 p-4 w-full bg-background-100 dark:bg-background-800">
      <div className="flex justify-between items-center mx-auto max-w-biggest">
        <InkubatorLogo className="h-6 lg:h-10 md:h-8" />
        <ul className="flex gap-6 justify-end items-center p-0 m-0 h-full list-none">
          <button
            onClick={() => setShowSidebar(true)}
            className="visible bg-transparent border-none transition-opacity duration-75 lg:hidden hover:opacity-80 hover:cursor-pointer"
          >
            <img src="/img/menu.svg" className="w-6" alt="menu" />
          </button>

          <Link
            href="/"
            className="hidden lg:block font-montserrat text-black/70 hover:text-black/90 dark:text-white/90 dark:hover:text-white"
          >
            Documentation
          </Link>
        </ul>
      </div>
    </nav>
  )
}
