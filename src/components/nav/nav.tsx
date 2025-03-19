'use client'

import React, { useEffect, useState } from 'react'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X, CaretDown, Info, BookOpen, YoutubeLogo, Coins } from '@phosphor-icons/react'
import { Cross as Hamburger } from 'hamburger-react'

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
  const ctaHref = ctaLink.includes('http') ? ctaLink : useBaseUrl(ctaLink)
  const logo = useBaseUrl('/img/text-white.svg')

  const mobileNavLinks = [
    ...navLinks.filter((item) => item.title !== 'ink!ubator'),
    {
      title: 'Funding',
      links: [
        {
          label: 'ink!ubator',
          href: '/inkubator',
          icon: <Coins size={20} weight="fill" />,
        },
      ],
    },
  ]

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.header
        className={cn('nav-top fixed w-full z-40', className)}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 z-0 mask"></div>
        <div className="max-w-[1920px] mx-auto">
          <div className="ml-6 mr-2 md:ml-8 md:mr-8 flex items-center h-[80px] justify-between md:justify-start">
            <div className="flex items-center mr-8">
              <Link href="/" className="z-10 font-bold">
                <img src={logo} alt="ink!" className="w-20 h-20" />
              </Link>
            </div>
            <nav className="z-10 items-center flex-1 hidden md:flex">
              <div className="flex gap-6 mx-auto">
                {navLinks.map((item) => (
                  <NavItem key={item.title} item={item} />
                ))}
              </div>
            </nav>
            <div className="z-10 md:hidden">
              <Hamburger
                toggled={isMobileMenuOpen}
                toggle={setMobileMenuOpen}
                color="#BD82FD"
                size={22}
                distance="lg"
                rounded
                label="Open menu"
              />
            </div>
            <div className="hidden md:block">
              <Link href={ctaHref}>
                <Button className="transition-all !duration-300 hover:scale-105 hover:rotate-1 will-change-transform">
                  {cta}
                </Button>
              </Link>
            </div>
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
            className="fixed z-30 flex flex-col w-full h-screen bg-gradient-to-b from-black/90 to-[#151023]/90 lg:hidden backdrop-blur-md border-0 border-b-2 border-[rgb(189,130,253)] border-solid"
          >
            <nav className="flex flex-col gap-4 mt-[60px] overflow-y-auto p-6">
              {mobileNavLinks.map((item) => (
                <div key={item.title} className="flex flex-col gap-2">
                  <span className="font-semibold text-[#BD82FD] text-[14px] uppercase">{item.title}</span>
                  <div className="flex flex-col gap-2 text-center">
                    {item.links?.map((link) => (
                      <ListItem key={link.label} href={link.href} icon={link.icon} className="text-center">
                        {link.label}
                      </ListItem>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
