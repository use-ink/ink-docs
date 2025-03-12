import React, { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import Logo from '@theme/Logo'
import Squink from '@site/static/img/ink-squink.svg'
import useBaseUrl from '@docusaurus/useBaseUrl'

export default function NavbarLogo(): ReactNode {
  const baseUrl = useBaseUrl('/')

  return (
    <div className="flex items-center gap-2 overflow-hidden group h-[calc(100%+1rem)]">
      <div className="relative logo-wrap">
        <Link to={baseUrl} className="absolute top-0 left-0 z-10 w-full h-full cursor-pointer" />
        <Logo
          className="transition-all will-change-transform duration-700 origin-left navbar__brand group-hover:translate-y-[-150%]"
          imageClassName="navbar__logo"
          titleClassName="navbar__title text--truncate"
        />
        <div className="absolute top-[150%] will-change-transform rotate-45 group-hover:-rotate-6 left-0 group-hover:translate-y-[-50%] transition-all duration-700 origin-left">
          <Squink title="ink squink" className="w-[95px] h-[95px]" />
        </div>
      </div>
      <Link to={`${baseUrl}docs`} className="no-underline hover:no-underline">
        <code className="text-[14px] rounded-full px-[5.8px] py-[1.6px] bg-[#8c7cf726] border-[#8c7cf71a] text-[#cac2ff]">
          /docs
        </code>
      </Link>
    </div>
  )
}
