import React, { type ReactNode } from 'react'
import Link from '@docusaurus/Link'
import Logo from '@theme/Logo'
import Squink from '@site/static/img/ink-squink.svg'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { motion } from 'motion/react'
import PolkadotLogo from '@site/static/img/Polkadot_Logo_White.svg'
import { useCurrentVersion } from '@site/src/hooks/use-current-version'

export default function NavbarLogo(): ReactNode {
  const baseUrl = useBaseUrl('/')
  const currentVersion = useCurrentVersion()

  return (
    <div className="flex ml-0 items-center justify-center gap-2 overflow-hidden group h-[calc(100%+1rem)]">
      <div className="relative logo-wrap">
        <Link href={baseUrl} className="absolute top-0 left-0 z-10 w-full h-full cursor-pointer" />
        <Logo
          className="transition-all will-change-transform duration-700 origin-left navbar__brand group-hover:translate-y-[-160%] !m-0"
          imageClassName="navbar__logo"
          titleClassName="navbar__title text--truncate"
        />
        <div className="absolute top-[150%] will-change-transform rotate-45 group-hover:-rotate-6 left-0 group-hover:translate-y-[-50%] transition-all duration-700 origin-left">
          <Squink title="ink squink" className="w-[120px] h-[120px]" />
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <Link
          href={`${baseUrl}docs/${currentVersion?.label ?? 'v5'}`}
          className="hidden no-underline hover:no-underline sm:block"
        >
          <code className="text-[14px] rounded-full px-[5.8px] py-[1.6px] bg-[#8c7cf726] border-[#8c7cf71a] text-[#cac2ff]">
            /docs
          </code>
        </Link>
        <a
          href="https://polkadot.com"
          className="hidden no-underline hover:no-underline sm:block"
          target="_blank"
          rel="noreferrer"
        >
          <motion.div
            className="z-10 flex-row gap-2 items-center mt-1 ml-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
          >
            <span className="block text-xs text-[#cac2ff]">Powered by</span>
            <PolkadotLogo className="w-auto h-[20px]" />
          </motion.div>
        </a>
      </div>
    </div>
  )
}
