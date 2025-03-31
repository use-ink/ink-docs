import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { GetSupport } from './get-support'
import { footerLinks } from '../../config'
import { ListItem } from '../list-item'
import FooterArms from '@site/static/img/footer-arms.svg'

export function Footer({ className }: { className?: string }) {
  return (
    <footer
      className={clsx('grid w-full pb-12 pt-24 mt-20 px-8 lg:pr-8 lg:pl-0 overflow-hidden', className)}
      style={{
        background: 'linear-gradient(0deg, rgb(29, 24, 74) 0%, rgb(17, 14, 43) 64.0514%, rgb(19, 15, 33) 100%)',
      }}
    >
      <GetSupport />
      <div className="grid items-end justify-center w-full grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="flex flex-col order-last gap-4 mt-8 -ml-8 lg:order-first justify-self-start lg:mt-0">
          <motion.div
            initial={{ opacity: 0.9, x: '-10%', rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="max-w-[500px] will-change-transform"
          >
            <FooterArms className="w-full -ml-3 origin-left animate-up-down will-change-transform" />
          </motion.div>
          <p className="text-[12px] text-gray-400 pl-8 lg:pl-16 mb-0">
            © use.ink {new Date().getFullYear()}. All rights reserved.
          </p>
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
