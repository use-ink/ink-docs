import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import React from 'react'
import classNames from 'classnames'
import { ClassNameable } from '../types'
import Link from '@docusaurus/Link'

export interface MenuLinkProps extends ClassNameable {
  title: string
  items: { href?: string; path?: string; title: string; emphasized?: string }[]
}

export const DropdownMenu: React.FC<MenuLinkProps> = ({ title, items, className }) => {
  const linkClasses = classNames(
    'rounded-xl hover:bg-brand-gradient hover:text-white dark:text-white text-black',
    'block px-6 py-4 text-3xl font-montserrat font-semibold hover:no-underline',
  )

  return (
    <Menu as="div" className={classNames('inline-block relative text-left', className)}>
      <div>
        <Menu.Button className="inline-flex justify-center px-4 py-3 w-full text-sm font-medium rounded-full border-0 cursor-pointer font-montserrat text-background-800 bg-brand-500 hover:bg-brand-500/90 focus:outline-none focus:ring-0">
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="-mr-1 ml-2 w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={classNames(
            'absolute right-0 mt-8 bg-white border border-solid origin-top-right w-[320px] border-background-700',
            'overflow-y-auto overflow-x-hidden rounded-xl dark:bg-dark-background focus:outline-none',
          )}
        >
          {items.map((item) => (
            <div key={item.title}>
              <Menu.Item>
                <>
                  {item.href && (
                    <a href={item.href} className={linkClasses} target="_blank" rel="noreferrer">
                      {item.emphasized && <i className="mr-2 underline">{item.emphasized}</i>}
                      {item.title}
                    </a>
                  )}

                  {item.path && (
                    <Link href={item.path} className={linkClasses}>
                      {item.emphasized && <i className="mr-2 underline">{item.emphasized}</i>}
                      {item.title}
                    </Link>
                  )}
                </>
              </Menu.Item>
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
