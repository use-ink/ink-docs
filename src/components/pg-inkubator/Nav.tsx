import React from 'react'
import { DropdownMenu } from '../DropdownMenu'
import { InkubatorLogo } from '../icons'
import { Link } from 'react-router-dom'
import { useUI } from '../../hooks'
import { Config } from './config'

export const Nav: React.FC = () => {
  const { setShowSidebar } = useUI()

  return (
    <nav className="p-4 fixed top-0 bg-background-100 dark:bg-background-800 w-full z-40">
      <div className="flex items-center justify-between max-w-biggest mx-auto">
        <InkubatorLogo className="lg:h-10 md:h-8 h-6" />
        <ul className="flex items-center justify-end h-full p-0 m-0 list-none gap-6">
          <button
            onClick={() => setShowSidebar(true)}
            className="visible lg:hidden hover:opacity-80 hover:cursor-pointer border-none bg-transparent transition-opacity duration-75"
          >
            <img src="/img/menu.svg" className="w-6" alt="menu" />
          </button>

          <Link
            to="/"
            className="hidden lg:block font-montserrat text-black/70 hover:text-black/90 dark:text-white/90 dark:hover:text-white"
          >
            Documentation
          </Link>

          <DropdownMenu
            className="hidden lg:block"
            title="Apply"
            items={[
              {
                href: Config.builderFormURL,
                emphasized: 'Apply',
                title: 'for the Builder Track',
              },
              {
                href: Config.auditorFormURL,
                emphasized: 'Apply',
                title: 'for the Auditor Track',
              },
              {
                href: Config.grantsApplicationURL,
                emphasized: 'Apply',
                title: 'for an Ecosystem Grant',
              },
            ]}
          />
        </ul>
      </div>
    </nav>
  )
}
