import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { ListItem } from './list-item'
import { Info } from '@phosphor-icons/react'
import clsx from 'clsx'

export function Footer({ className }: { className?: string }) {
  const footerLinks = [
    {
      title: 'Build with ink!',
      links: [
        {
          label: 'Docs',
          href: '/docs',
          icon: <Info size={20} />,
        },
        {
          label: 'Tutorials',
          href: 'https://github.com/use-ink/ink',
          icon: <Info size={20} />,
        },
        {
          label: 'Tooling',
          href: 'https://github.com/use-ink/ink',
          icon: <Info size={20} />,
        },
        {
          label: 'Chains',
          href: 'https://github.com/use-ink/ink',
          icon: <Info size={20} />,
        },
        {
          label: 'YouTube',
          href: 'https://www.youtube.com/@ink_lang',
          icon: <Info size={20} />,
        },
      ],
    },
    {
      title: 'Join our community',
      links: [
        {
          label: 'About',
          href: 'https://discord.gg/ink',
          icon: <Info size={20} />,
        },
        {
          label: 'Bounty',
          href: 'https://twitter.com/ink_lang',
          icon: <Info size={20} />,
        },
        {
          label: 'Hackathons',
          href: 'https://discord.gg/ink',
          icon: <Info size={20} />,
        },
        {
          label: 'Stories',
          href: 'https://discord.gg/ink',
          icon: <Info size={20} />,
        },
        {
          label: 'Support',
          href: 'https://discord.gg/ink',
          icon: <Info size={20} />,
        },
      ],
    },
    {
      title: 'Helpful Links',
      links: [
        {
          label: 'ink!ubator',
          href: 'https://discord.gg/ink',
          icon: <Info size={20} />,
        },
        {
          label: 'ink! examples',
          href: 'https://github.com/use-ink/ink-examples',
          icon: <Info size={20} />,
        },
        {
          label: 'Funding Programs',
          href: 'https://github.com/use-ink/ink-docs',
          icon: <Info size={20} />,
        },
        {
          label: 'Brand Assets',
          href: 'https://github.com/use-ink/ink-docs',
          icon: <Info size={20} />,
        },
        {
          label: 'FAQ',
          href: 'https://github.com/use-ink/ink-docs',
          icon: <Info size={20} />,
        },
      ],
    },
  ]

  // linear-gradient(180deg,rgba(33,15,59,0) 0%,rgb(29,24,61) 38%,rgb(0,0,0) 100%)

  return (
    <footer
      className={clsx(
        'grid w-full pb-12 pt-20 dark:bg-gradient-to-b from-[rgba(33,15,59,0)] via-[rgb(29,24,61)] to-black',
        className,
      )}
    >
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 justify-center">
        <div className="flex flex-col gap-4">
          <p className="text-[12px] text-gray-400">© use.ink {new Date().getFullYear()}. All rights reserved.</p>
        </div>
        {footerLinks.map((link) => (
          <div className="flex flex-col gap-[10px]" key={link.title}>
            <h3
              className="font-montserrat text-[#dcd7e0] mb-0 text-lg border-[#6057de] border-solid border-b border-x-0 border-t-0 font-[600] pb-2"
              style={{ mask: 'linear-gradient(270deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 60.00000000000001%)' }}
            >
              {link.title}
            </h3>
            {link.links.map((link) => (
              <ListItem key={link.label} href={link.href} icon={link.icon}>
                {link.label}
              </ListItem>
            ))}
          </div>
        ))}
      </div>
    </footer>
  )
}
