'use client'

import React, { useState } from 'react'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X, CaretDown } from '@phosphor-icons/react'
import { cn } from '../../util'
import { NavItem } from './nav-item'
import { Button } from '../ui/button'
import { navLinks } from '../../config'
import { ListItem } from '../list-item'

export function Navbar({
  className,
  cta = 'Start Building',
  ctaLink = '/docs',
}: {
  className?: string
  cta?: string
  ctaLink?: string
}) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const ctaHref = ctaLink.includes('http') ? ctaLink : useBaseUrl(ctaLink)
  const logo = useBaseUrl('/img/text-white.svg')

  const handleItemClick = (title: string) => {
    setActiveItem(activeItem === title ? null : title)
  }

  return (
    <>
      <motion.header
        className={cn('nav-top fixed w-full z-40', className)}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 z-0 mask"></div>
        <div className="mx-8 flex items-center h-[80px] justify-between md:justify-start">
          <div className="flex items-center mr-8">
            <Link href="/" className="z-10 font-bold">
              <img src={logo} alt="ink!" className="w-20 h-20" />
            </Link>
          </div>
          <nav className="z-10 flex items-center flex-1 hidden md:flex">
            <div className="flex gap-6 mx-auto">
              {navLinks.map((item) => (
                <NavItem key={item.title} item={item} />
              ))}
            </div>
          </nav>
          <div className="z-10 md:hidden">
            <Button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="z-100">
              <span className="sr-only">Open menu</span>
              <List size={24} />
            </Button>
          </div>
          <div className="hidden md:block">
            <Link href={ctaHref}>
              <Button className="transition-all !duration-300 hover:scale-105 hover:rotate-1 will-change-transform">
                {cta}
              </Button>
            </Link>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed z-30 flex flex-col w-full p-6 min-h-1/2 bg-gradient-to-b from-black/90 to-[#151023]/90 lg:hidden backdrop-blur-md border-0 border-b-2 border-[rgb(189,130,253)] border-solid"
          >
            <nav className="flex flex-col gap-4 mt-[80px]">
              {navLinks.map((item) => (
                <div key={item.title}>
                  <Button
                    size="lg"
                    variant="ghost"
                    onClick={() => handleItemClick(item.title)}
                    className="w-full text-lg font-semibold text-left text-white bg-transparent"
                  >
                    {item.title}
                    {item.links && (
                      <CaretDown
                        size={16}
                        weight="fill"
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeItem === item.title ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </Button>
                  <AnimatePresence>
                    {activeItem === item.title && item.links && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-2 pl-4 text-center">
                          {item.links.map((link) => (
                            <ListItem key={link.label} href={link.href} icon={link.icon} className="text-center">
                              {link.label}
                            </ListItem>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
            <div className="pt-12 mt-auto border-t">
              <Link href={ctaHref}>
                <Button className="w-full transition-all !duration-300 hover:scale-105 hover:rotate-1 will-change-transform">
                  {cta}
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
