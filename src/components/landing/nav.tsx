import React from 'react'

import { useState } from 'react'
import { Dialog, DialogPanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import Link from '@docusaurus/Link'
// import {
//   ArrowPathIcon,
//   Bars3Icon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
//   XMarkIcon,
// } from '@heroicons/react/24/outline'
// import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const buildLinks = [
  { name: 'Docs', description: 'Get a better understanding of your traffic', href: '#', icon: null },
  { name: 'Tutorials', description: 'Speak directly to your customers', href: '#', icon: null },
  { name: 'Tooling', description: 'Your customers’ data will be safe and secure', href: '#', icon: null },
  { name: 'Chains', description: 'Connect with third-party tools', href: '#', icon: null },
  { name: 'Youtube', description: 'Build strategic funnels that will convert', href: '#', icon: null },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: null },
  { name: 'Contact sales', href: '#', icon: null },
]
const company = [
  { name: 'About us', href: '#', description: 'Learn more about our company values and mission to empower others' },
  { name: 'Careers', href: '#', description: 'Looking for you next career opportunity? See all of our open positions' },
  {
    name: 'Support',
    href: '#',
    description: 'Get in touch with our dedicated support team or reach out on our community forums',
  },
  { name: 'Blog', href: '#', description: 'Read our latest announcements and get perspectives from our team' },
]

export default function LandingNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-black/0 backdrop-blur-sm`}>
      <nav aria-label="Global" className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">ink!</span>
            <img alt="ink! logo" src="/img/text-black.svg" className="w-auto h-8" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            {/* <Bars3Icon aria-hidden="true" className="size-6" /> */}
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center font-bold text-white bg-transparent border-none gap-x-1 text-sm/6">
              Build
              {/* <ChevronDownIcon aria-hidden="true" className="flex-none text-gray-400 size-5" /> */}
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-slate-900/50 backdrop-blur-lg p-4 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              {company.map((item) => (
                <div key={item.name} className="relative p-4 rounded-lg ">
                  <a href={item.href} className="block font-semibold text-white text-sm/6">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600 text-sm/6">{item.description}</p>
                </div>
              ))}
            </PopoverPanel>
          </Popover>

          <Popover className="relative">
            <PopoverButton className="flex items-center font-bold text-white bg-transparent border-none gap-x-1 text-sm/6">
              Community
              {/* <ChevronDownIcon aria-hidden="true" className="flex-none text-gray-400 size-5" /> */}
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-slate-900/50 backdrop-blur-lg p-4 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              {company.map((item) => (
                <div key={item.name} className="relative p-4 rounded-lg ">
                  <a href={item.href} className="block font-semibold text-white text-sm/6">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  <p className="mt-1 text-gray-600 text-sm/6">{item.description}</p>
                </div>
              ))}
            </PopoverPanel>
          </Popover>
          <a href="#" className="font-semibold font-bold text-white text-sm/6">
            ink!ubator
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            type="button"
            className="px-4 py-2 font-semibold text-purple-900 bg-white border-none rounded-xl text-sm/6"
          >
            Start building
          </button>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 flex flex-col justify-between w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="w-auto h-8"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                {/* <XMarkIcon aria-hidden="true" className="size-6" /> */}
              </button>
            </div>
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6 space-y-2">
                  {buildLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="flex items-center p-3 -mx-3 font-semibold text-white rounded-lg group gap-x-6 text-base/7 hover:bg-gray-50"
                    >
                      <div className="flex items-center justify-center flex-none rounded-lg size-11 bg-gray-50 group-hover:bg-white">
                        {/* <item.icon aria-hidden="true" className="text-gray-600 size-6 group-hover:text-indigo-600" /> */}
                      </div>
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 space-y-2">
                  <a
                    href="#"
                    className="block px-3 py-2 -mx-3 font-semibold text-white rounded-lg text-base/7 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 -mx-3 font-semibold text-white rounded-lg text-base/7 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>

                  {company.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 -mx-3 font-semibold text-white rounded-lg text-base/7 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="sticky bottom-0 grid grid-cols-2 text-center divide-x divide-gray-900/5 bg-gray-50">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="p-3 font-semibold text-white text-base/7 hover:bg-gray-100"
              >
                {item.name}
              </a>
            ))}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
