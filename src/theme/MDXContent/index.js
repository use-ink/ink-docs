import Head from '@docusaurus/Head'
import { useAlternatePageUtils } from '@docusaurus/theme-common/internal'
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import MDXContent from '@theme-original/MDXContent'
import useFrontMatter from '@theme/useFrontMatter'
import { default as React } from 'react'

// Adapted version from ejected SiteMetadata.js to allow for custom local slugs
// https://github.com/paritytech/ink-docs/issues/211
function AlternateLangHeaders() {
  const alternatePageUtils = useAlternatePageUtils()
  const {
    siteConfig: { url },
    i18n: { defaultLocale, localeConfigs, currentLocale },
  } = useDocusaurusContext()
  const { withBaseUrl } = useBaseUrlUtils()

  const frontMatter = useFrontMatter()
  const availableSlugs = React.useMemo(
    () =>
      Object.entries(frontMatter)
        .filter(([key]) => key.startsWith('slug'))
        .map(([key, value]) => {
          const locale = key.split('.')[1]
          if (locale) return [locale, value]
          return [currentLocale, value]
        })
        .reduce((acc, [locale, value]) => {
          acc[locale] = value
          return acc
        }, {}),
    [frontMatter],
  )

  const defaultLocaleUrl = availableSlugs[defaultLocale]
    ? url + availableSlugs[defaultLocale]
    : alternatePageUtils.createUrl({
        locale: defaultLocale,
        fullyQualified: true,
      })
  return (
    <Head>
      {Object.entries(localeConfigs).map(([locale, { htmlLang }]) => {
        let href = alternatePageUtils.createUrl({
          locale,
          fullyQualified: true,
        })

        const translatedSlug = availableSlugs[locale]
        if (translatedSlug) {
          if (locale === defaultLocale) {
            href = url + translatedSlug
          } else {
            href = href.replace(new RegExp(`(.*${locale})(.*)`), `$1${translatedSlug}`)
          }
        }
        return <link key={locale} rel="alternate" href={href} hrefLang={htmlLang} />
      })}
      <link rel="alternate" href={defaultLocaleUrl} hrefLang="x-default" />
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
