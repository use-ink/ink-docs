import Head from '@docusaurus/Head'
import { useAlternatePageUtils, useDoc } from '@docusaurus/theme-common/internal'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import MDXContent from '@theme-original/MDXContent'
import React from 'react'

// Adapted version from ejected SiteMetadata.js to allow for custom local slugs
// https://github.com/paritytech/ink-docs/issues/211
function AlternateLangHeaders() {
  const alternatePageUtils = useAlternatePageUtils()
  const {
    i18n: { defaultLocale, localeConfigs },
  } = useDocusaurusContext()
  const { frontMatter } = useDoc()

  const availableSlugs = React.useMemo(
    () =>
      Object.entries(frontMatter)
        .filter(([key]) => key.startsWith('slug'))
        .map(([key, value]) => {
          const locale = key.split('.')[1]
          if (locale) return [locale, value]
          return [defaultLocale, value]
        })
        .reduce((acc, [locale, value]) => {
          acc[locale] = value
          return acc
        }, {}),
    [frontMatter],
  )

  return (
    <Head>
      {Object.entries(localeConfigs).map(([locale, { htmlLang }]) => {
        let href = alternatePageUtils.createUrl({
          locale,
          fullyQualified: true,
        })

        const customSlug = availableSlugs[locale] || availableSlugs[htmlLang]

        if (customSlug) href = href.replace(new RegExp(`(.*${locale})(.*)`), `$1${customSlug}`)

        return <link key={locale} rel="alternate" href={href} hrefLang={htmlLang} />
      })}
      <link
        rel="alternate"
        href={alternatePageUtils.createUrl({
          locale: defaultLocale,
          fullyQualified: true,
        })}
        hrefLang="x-default"
      />
    </Head>
  )
}

export default function MDXContentWrapper(props) {
  return (
    <>
      <AlternateLangHeaders />
      <MDXContent {...props} />
    </>
  )
}
