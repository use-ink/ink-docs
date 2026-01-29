'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Coins } from '@phosphor-icons/react'
import { Cross as Hamburger } from 'hamburger-react'

import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import PolkadotLogo from '@site/static/img/Polkadot_Logo_White.svg'

import { cn } from '../../util'
import { NavItem } from './nav-item'
import { Button } from '../ui/button'
import { navLinks } from '../../data/nav-links'
import { ListItem } from '../list-item'
import { useCurrentVersion } from '@site/src/hooks/use-current-version'

export function Navbar({
  className,
  cta = 'Documentation',
  ctaLink = '',
  children,
  childrenRight,
}: {
  className?: string
  cta?: string
  ctaLink?: string
  children?: React.ReactNode
  childrenRight?: React.ReactNode
}) {
  const currentVersion = useCurrentVersion()

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const ctaHref = ctaLink.includes('http') ? ctaLink : useBaseUrl(`docs/${currentVersion?.label ?? 'v5'}${ctaLink}`)
  const logo = useBaseUrl('/img/text-white.svg')

  const versionedNavLinks = navLinks.map((item) => {
    return {
      ...item,
      links: item.links?.map((link) => {
        return {
          ...link,
          href: link.href?.replace('/docs', `/docs/${currentVersion?.label ?? 'v5'}`),
        }
      }),
    }
  })

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

  const baseUrl = useBaseUrl('/').slice(0, -1)

  return (
    <>
      <motion.header
        className={cn('nav-top fixed w-full z-40', className)}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <div
          className="relative z-10 flex flex-col items-center justify-center gap-1 px-4 py-2 text-white text-sm"
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
        <div className="absolute inset-0 z-0 mask"></div>
        <div className="mx-auto">
          <div className="ml-6 mr-2 md:ml-8 md:mr-8 flex items-center h-[80px] justify-between md:justify-start">
            <div className="flex flex-row items-center">
              <div className="flex items-center mr-4">
                <Link href="/" className="z-10 font-bold">
                  <img src={logo} alt="ink!" className="w-20 h-20" />
                </Link>
              </div>
              <motion.div
                className="z-10 flex-row items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
              >
                <span className="block text-xs">Powered by</span>
                <PolkadotLogo className="w-auto h-[20px]" />
              </motion.div>
            </div>
            <nav className="z-10 items-center flex-1 hidden navbar md:flex !bg-none !backdrop-filter-none">
              <div className="flex gap-6 mx-auto">
                {versionedNavLinks.map((item) => (
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
            {childrenRight ? (
              childrenRight
            ) : (
              <div className="hidden md:block">
                <Link href={ctaHref}>
                  <Button
                    variant="base"
                    className="transition-all !duration-300 hover:scale-105 hover:rotate-1 will-change-transform"
                  >
                    {cta}
                  </Button>
                </Link>
              </div>
            )}
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
                    {item.links.map((link) => {
                      let href = link.href
                      if (link.href.includes('http')) {
                        href = link.href
                      } else {
                        href = baseUrl + link.href
                      }
                      return (
                        <ListItem key={link.label} href={href} icon={link.icon}>
                          {link.label}
                        </ListItem>
                      )
                    })}
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
