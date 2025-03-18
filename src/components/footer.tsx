import React from 'react'
import { ListItem } from './list-item'

import clsx from 'clsx'
import { GetSupport } from './get-support'
import { footerLinks } from '../config'
import useBaseUrl from '@docusaurus/useBaseUrl'

export function Footer({ className }: { className?: string }) {
  // linear-gradient(180deg,rgba(33,15,59,0) 0%,rgb(29,24,61) 38%,rgb(0,0,0) 100%)

  return (
    <footer
      className={clsx(
        'grid w-full pb-12 pt-24 mt-20 border-0 border-t border-solid border-[rgb(140,124,247)]',
        className,
      )}
      style={{
        background: 'linear-gradient(180deg,#5c4ec4 0%,rgb(47,34,133) 33%,rgb(0,0,0) 83%)',
      }}
    >
      <GetSupport />
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 justify-center">
        <div className="flex flex-col gap-4">
          <p className="text-[12px] text-gray-400">© use.ink {new Date().getFullYear()}. All rights reserved.</p>
        </div>
        {footerLinks.map((link) => (
          <div className="flex flex-col gap-[10px]" key={link.title}>
            <h3
              className="font-montserrat text-[rgb(140,124,247)] mb-0 text-lg border-[#6057de] border-solid border-b border-x-0 border-t-0 font-[600] pb-2"
              style={{ mask: 'linear-gradient(270deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 60.00000000000001%)' }}
            >
              {link.title}
            </h3>

            {link.links.map((link) => {
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
        ))}
      </div>
    </footer>
  )
}
