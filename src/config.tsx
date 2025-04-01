import React from 'react'
import {
  BookOpen,
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
  Shapes,
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
        icon: <Shapes size={20} weight="fill" />,
      },
      {
        label: 'Chains',
        href: '/chains',
        icon: <Link size={20} />,
      },
      {
        label: 'Projects',
        href: '/projects',
        icon: <PaintBrush size={20} weight="fill" />,
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
        href: 'https://www.youtube.com/@ink-lang',
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
        icon: <Shapes size={20} weight="fill" />,
      },
      {
        label: 'Chains',
        href: '/chains',
        icon: <Link size={20} />,
      },
      {
        label: 'Projects',
        href: '/projects',
        icon: <PaintBrush size={20} weight="fill" />,
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
      {
        label: 'Stories',
        href: '/stories',
        icon: <BookOpen size={20} weight="fill" />,
      },
      {
        label: 'YouTube',
        href: 'https://www.youtube.com/@ink-lang',
        icon: <YoutubeLogo size={20} weight="fill" />,
      },
    ],
  },
  {
    title: 'Helpful Links',
    links: [
      {
        label: 'ink!ubator',
        href: '/inkubator/',
        icon: <CoinVertical size={20} weight="fill" />,
      },
      {
        label: 'ink! examples',
        href: 'https://github.com/use-ink/ink-examples',
        icon: <Code size={20} weight="fill" />,
      },
      {
        label: 'Brand Assets',
        href: '/brand-assets/',
        icon: <Images size={20} weight="fill" />,
      },
      {
        label: 'FAQ',
        href: '/docs/faq',
        icon: <Question size={20} weight="fill" />,
      },
    ],
  },
]

export const tutorials = [
  {
    image: 'img/title/heart.svg',
    title: 'Creating an ink! Project',
    description: 'Learn how to get started with ink! and build your first contract',
    link: 'docs/getting-started/creating-an-ink-project',
  },
  {
    image: 'img/title/cargo-contract.svg',
    title: 'Compiling Your Contract',
    description: 'Learn how to compile your contract',
    link: 'docs/getting-started/building-your-contract',
  },
  {
    image: 'img/title/substrate.svg',
    title: 'Running a Substrate Node with a very long title that will be longer than two lines and be truncated',
    description: 'Learn how to run a Substrate node',
    link: 'docs/getting-started/running-substrate',
  },
  {
    image: 'img/title/rocket.svg',
    title: 'Deploying Your Contract',
    description: 'Learn how to deploy your contract',
    link: 'docs/getting-started/deploy-your-contract',
  },
  {
    image: 'img/title/frontend.svg',
    title: 'How to Call Your Contract',
    description: 'Learn how to call your contract',
    link: 'docs/getting-started/calling-your-contract',
  },
  {
    image: 'img/title/magnifying-glass.svg',
    title: 'How to Troubleshoot',
    description: 'Learn how to troubleshoot your contract',
    link: 'docs/getting-started/troubleshooting',
  },
]
