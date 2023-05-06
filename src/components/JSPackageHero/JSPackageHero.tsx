import React from 'react'
const toGithubLabel = (label: string): string => `colorA=BC83FB&colorB=8747CC&style=flat&label=${label}`

interface JSPackageHeroProps {
  title: string
  subtitle: string
  orgNameAndRepo: string // e.g. 'paritytech/useink'
  packageName: string // e.g. 'useink'
  logo?: string
}

export function JSPackageHero({ title, subtitle, packageName, orgNameAndRepo, logo }: JSPackageHeroProps) {
  return (
    <header className="mb-10 flex flex-col items-center">
      <div className="mt-8">
        <h1 className="sr-only">{title}</h1>
        {logo && <img src={logo} alt={title} className="w-28" />}
      </div>

      <h2 className="text-center text-lg mb-6 mt-0 md:!text-xl">{subtitle}</h2>

      <div className="flex flex-wrap gap-2 justify-center min-h-[3rem]">
        <a aria-label="Version" href={`https://www.npmjs.com/package/${packageName}`} className="h-5">
          <img
            alt={`${packageName} version`}
            src={`https://img.shields.io/npm/v/${packageName}?${toGithubLabel('Version')}`}
          />
        </a>

        <a aria-label="License" href={`https://www.npmjs.com/package/${packageName}`} className="h-5">
          <img
            alt={`${packageName} license`}
            src={`https://img.shields.io/github/license/${orgNameAndRepo}?${toGithubLabel('License')}`}
          />
        </a>

        <a aria-label="Downloads" href={`https://www.npmjs.com/package/${packageName}`} className="h-5">
          <img
            alt={`${packageName} downloads`}
            src={`https://img.shields.io/npm/dm/${packageName}?${toGithubLabel('Downloads')}`}
          />
        </a>

        <a aria-label="Stars" href={`https://github.com/${orgNameAndRepo}`} className="h-5">
          <img
            alt={`${packageName} stars`}
            src={`https://img.shields.io/github/stars/${orgNameAndRepo}?${toGithubLabel('Stars')}`}
          />
        </a>
      </div>
    </header>
  )
}
