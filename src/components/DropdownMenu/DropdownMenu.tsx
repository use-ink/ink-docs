import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import React from 'react'
import classNames from 'classnames'
import { ClassNameable } from '../types'
import { Link } from 'react-router-dom'

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
    <Menu as="div" className={classNames('relative inline-block text-left', className)}>
      <div>
        <Menu.Button className="inline-flex cursor-pointer font-montserrat justify-center border-0 w-full px-4 py-3 text-sm font-medium text-background-800 bg-brand-500 rounded-full hover:bg-brand-500/90 focus:outline-none focus:ring-0">
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2 -mr-1"
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
            'absolute right-0 w-[320px] mt-8 origin-top-right bg-white border border-solid border-background-700',
            'dark:bg-dark-background rounded-xl focus:outline-none overflow-x-hidden overflow-y-auto',
          )}
        >
          {items.map((item) => (
            <div key={item.title}>
              <Menu.Item>
                <>
                  {item.href && (
                    <a href={item.href} className={linkClasses} target="_blank" rel="noreferrer">
                      {item.emphasized && <i className="underline mr-2">{item.emphasized}</i>}
                      {item.title}
                    </a>
                  )}

                  {item.path && (
                    <Link to={item.path} className={linkClasses}>
                      {item.emphasized && <i className="underline mr-2">{item.emphasized}</i>}
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
