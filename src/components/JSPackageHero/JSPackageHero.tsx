import React from 'react'
const toGithubLabel = (label: string): string => `colorA=BC83FB&colorB=8747CC&style=flat&label=${label}`

interface JSPackageHeroProps {
  title: string
  subtitle: string
  orgNameAndRepo: string // e.g. 'paritytech/useink'
  packageName?: string // e.g. 'useink'
  logo?: string
  chatUrl?: string
  chatLogo?: string
}

export function JSPackageHero({ title, subtitle, packageName, orgNameAndRepo, logo, chatUrl, chatLogo }: JSPackageHeroProps) {
  return (
    <header className="mb-4 flex flex-col items-center" id={title}>
      <a href={`https://github.com/${orgNameAndRepo}`} target="_blank" rel="noreferrer" className="flex flex-col items-center !text-current hover:no-underline">
      <div className="mt-12">
        <h1 className="sr-only">{title}</h1>
        {logo && <img src={logo} alt={title} className="w-28" />}
      </div>

      <h2 className="text-center text-lg mb-6 mt-0 md:!text-xl">{subtitle}</h2>
      </a>

      <div className="flex flex-wrap gap-2 justify-center min-h-[3rem]">
        {!!packageName && <a aria-label="Version" href={`https://www.npmjs.com/package/${packageName}`} className="h-5">
          <img
            alt={`${packageName} version`}
            src={`https://img.shields.io/npm/v/${packageName}?${toGithubLabel('Version')}`}
          />
        </a>}

        {!!packageName && <a aria-label="Downloads" href={`https://www.npmjs.com/package/${packageName}`} className="h-5">
          <img
            alt={`${packageName} downloads`}
            src={`https://img.shields.io/npm/dm/${packageName}?${toGithubLabel('Downloads')}`}
          />
        </a>}

        <a aria-label="License" href={`https://github.com/${orgNameAndRepo}`} className="h-5">
          <img
            alt={`${orgNameAndRepo} license`}
            src={`https://img.shields.io/github/license/${orgNameAndRepo}?${toGithubLabel('License')}`}
          />
        </a>

        <a aria-label="Stars" href={`https://github.com/${orgNameAndRepo}`} className="h-5">
          <img
            alt={`${orgNameAndRepo} stars`}
            src={`https://img.shields.io/github/stars/${orgNameAndRepo}?${toGithubLabel('Stars')}`}
          />
        </a>

        {!!chatUrl &&         <a aria-label="Chat" href={chatUrl} className="h-5">
          <img
            alt="Join the conversation"
            src={`https://img.shields.io/badge/Join_the_conversation-_?color=e3e3e3&label=Chat${chatLogo ? `&logo=${chatLogo}&logoColor=e3e3e3` : ''}`}
          />
        </a>}
      </div>
    </header>
  )
}
