import React from 'react'
import Link from '@docusaurus/Link'
import { ListItem } from '../list-item'
import { cn } from '../../util'
import { CaretDown, Control } from '@phosphor-icons/react'
import useBaseUrl from '@docusaurus/useBaseUrl'

interface NavItemProps {
  item: {
    title: string
    href?: string
    links?: {
      label: string
      href: string
      icon?: React.ReactNode
    }[]
  }
}

export function NavItem({ item }: NavItemProps) {
  if (!item.links?.length) {
    return (
      <Link
        href={item.href}
        className="flex items-center text-[16px] transition-colors text-foreground hover:text-primary font-[700] text-white hover:text-[#8c7cf7] hover:no-underline"
      >
        {item.title}
      </Link>
    )
  }

  return (
    <div className="relative group/nav-item">
      <li className="flex items-center gap-1 font-[700] text-[16px] transition-colors outline-none cursor-pointer text-white group-hover/nav-item:text-primary hover:text-[#8c7cf7]">
        {item.title}
        <CaretDown
          size={16}
          weight="fill"
          className="w-4 h-4 transition-transform duration-200 group-hover/nav-item:rotate-180"
        />
      </li>
      <div
        className={cn(
          'absolute z-50 flex flex-col invisible w-[200px] gap-2 mt-2 transition-all duration-200 ease-in-out origin-top transform scale-y-90 scale-x-90 -translate-x-1/2 border shadow-md opacity-0 left-1/2 top-full bg-background',
          'group-hover/nav-item:visible group-hover/nav-item:opacity-100 group-hover/nav-item:scale-y-100 group-hover/nav-item:scale-x-100',
          'bg-[#171233cc] backdrop-blur-md p-[12px] rounded-[18px] shadow-[rgba(140,_124,_247,_0.12)_0px_2px_1px_0px_inset,_rgba(189,_130,_253,_0.15)_0px_0px_10px_0px_inset,_rgba(0,_0,_0,_0.24)_36px_36px_24px_0px]',
        )}
      >
        {item.links.map((link) => {
          let href = link.href
          if (link.href.includes('http')) {
            href = link.href
          } else {
            href = useBaseUrl(link.href)
          }
          return (
            <ListItem key={link.label} href={href} icon={link.icon}>
              {link.label}
            </ListItem>
          )
        })}
      </div>
    </div>
  )
}
