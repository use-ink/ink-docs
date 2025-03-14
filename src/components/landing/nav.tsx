import React from 'react'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { cn } from '../../util'
import { NavItem } from './nav-item'
import { Button } from '../ui/button'
import { navLinks } from '../../config'

export function Navbar({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <header className={cn('fixed w-full', className)}>
      <div className="container flex items-center h-[80px]">
        <div className="flex items-center mr-8">
          <Link href="/" className="font-bold">
            <img src={useBaseUrl('/img/text-white.svg')} alt="ink!" className="w-20 h-20" />
          </Link>
        </div>
        <nav className="flex items-center flex-1">
          <div className="flex gap-6 mx-auto">
            {navLinks.map((item) => (
              <NavItem key={item.title} item={item} />
            ))}
          </div>
        </nav>
        <div>
          <Button className="transition-all !duration-300 hover:scale-105 hover:rotate-1 will-change-transform">
            Start Building
          </Button>
        </div>
      </div>
    </header>
  )
}
