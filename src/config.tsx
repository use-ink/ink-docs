import React from 'react'
import {
  BookOpen,
  ChatCircleDots,
  Code,
  CoinVertical,
  FileText,
  Hammer,
  Images,
  Info,
  Lego,
  Link,
  PaintBrush,
  Question,
  Target,
  YoutubeLogo,
} from '@phosphor-icons/react'

export const navLinks = [
  {
    title: 'Build',
    links: [
      {
        label: 'Docs',
        href: '/docs',
        icon: <FileText size={20} weight="fill" />,
      },
      {
        label: 'Tutorials',
        href: '/tutorials',
        icon: <Lego size={20} weight="fill" />,
      },
      {
        label: 'Projects',
        href: '/projects',
        icon: <PaintBrush size={20} weight="fill" />,
      },
      // {
      //   label: 'Tooling',
      //   href: '/tooling',
      //   icon: <Hammer size={20} weight="fill" />,
      // },
      {
        label: 'Chains',
        href: '/chains',
        icon: <Link size={20} />,
      },
    ],
  },
  {
    title: 'Community',
    links: [
      {
        label: 'About',
        href: '/about',
        icon: <Info size={20} weight="fill" />,
      },
      {
        label: 'Bounties',
        href: '/bounties',
        icon: <Target size={20} weight="fill" />,
      },
      {
        label: 'Stories',
        href: '/stories',
        icon: <BookOpen size={20} weight="fill" />,
      },
      {
        label: 'YouTube',
        href: 'https://www.youtube.com/@ink_lang',
        icon: <YoutubeLogo size={20} weight="fill" />,
      },
    ],
  },
  {
    title: 'ink!ubator',
    href: '/inkubator',
  },
]

export const footerLinks = [
  {
    title: 'Build with ink!',
    links: [
      {
        label: 'Docs',
        href: '/docs',
        icon: <FileText size={20} weight="fill" />,
      },
      {
        label: 'Tutorials',
        href: '/tutorials',
        icon: <Lego size={20} weight="fill" />,
      },
      {
        label: 'Tooling',
        href: '/tooling',
        icon: <Hammer size={20} weight="fill" />,
      },
      {
        label: 'Chains',
        href: '/chains',
        icon: <Link size={20} />,
      },
    ],
  },
  {
    title: 'Join our community',
    links: [
      {
        label: 'About',
        href: '/about',
        icon: <Info size={20} weight="fill" />,
      },
      {
        label: 'Bounties',
        href: '/bounties',
        icon: <Target size={20} weight="fill" />,
      },
      // {
      //   label: 'Hackathons',
      //   href: 'https://discord.gg/ink',
      //   icon: <Info size={20} />,
      // },
      // {
      //   label: 'Stories',
      //   href: 'https://discord.gg/ink',
      //   icon: <Info size={20} />,
      // },
      {
        label: 'Support',
        href: '/support',
        icon: <ChatCircleDots size={20} weight="fill" />,
      },
      {
        label: 'YouTube',
        href: 'https://www.youtube.com/@ink_lang',
        icon: <YoutubeLogo size={20} weight="fill" />,
      },
    ],
  },
  {
    title: 'Helpful Links',
    links: [
      // {
      //   label: 'ink!ubator',
      //   href: 'https://discord.gg/ink',
      //   icon: <Info size={20} />,
      // },
      {
        label: 'ink! examples',
        href: 'https://github.com/use-ink/ink-examples',
        icon: <Code size={20} weight="fill" />,
      },
      {
        label: 'Funding Program',
        href: 'https://use.ink/inkubator',
        icon: <CoinVertical size={20} weight="fill" />,
      },
      {
        label: 'Brand Assets',
        href: '/brand-assets',
        icon: <Images size={20} weight="fill" />,
      },
      {
        label: 'FAQ',
        href: 'https://github.com/use-ink/ink-docs',
        icon: <Question size={20} weight="fill" />,
      },
    ],
  },
]

export const tutorials = [
  {
    image: 'img/title/balloons-1.svg',
    title: 'Creating an ink! Project',
    description: 'Learn how to get started with ink! and build your first contract',
    link: '',
  },
  {
    image: 'img/title/balloons-2.svg',
    title: 'Compiling Your Contract',
    description: 'Learn how to compile your contract',
    link: '',
  },
  {
    image: 'img/title/blockchain-fork.svg',
    title: 'Running a Substrate Node',
    description: 'Learn how to run a Substrate node',
    link: '',
  },
  {
    image: 'img/title/cargo-contract.svg',
    title: 'Deploying Your Contract',
    description: 'Learn how to deploy your contract',
    link: '',
  },
  {
    image: 'img/title/blockchain-fork.svg',
    title: 'How to Call Your Contract',
    description: 'Learn how to call your contract',
    link: '',
  },
  {
    image: 'img/title/gas.svg',
    title: 'How to Troubleshoot',
    description: 'Learn how to troubleshoot your contract',
    link: '',
  },
]
