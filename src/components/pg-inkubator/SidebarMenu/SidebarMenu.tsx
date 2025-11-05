import classNames from 'classnames'
import React from 'react'
import Link from '@docusaurus/Link'
import { Sidebar } from '../../../components/Sidebar'
import { useUI } from '../../../hooks'
import { Config } from '../config'

export const SidebarMenu: React.FC = () => {
  const { showSidebar, setShowSidebar } = useUI()
  const linkClasses = classNames(
    'rounded-xl hover:bg-brand-gradient active:bg-brand-gradient hover:text-white dark:text-white text-black',
    'block px-6 py-4 text-2xl font-montserrat font-semibold hover:no-underline',
  )

  return (
    <Sidebar show={showSidebar} onClose={() => setShowSidebar(false)}>
      <ul className="px-2 m-0 list-none">
        <li className="p-0 m-0">
          <Link href="/" className={linkClasses}>
            <i className="mr-2 underline">View</i>
            ink! Documentation
          </Link>
        </li>

        <li className="px-0 pt-2 mx-6 mb-2 border-t-0 border-b border-solid border-background-700/20 dark:border-background-300/20 border-x-0" />
      </ul>
    </Sidebar>
  )
}
