import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Layout from './layout'
import { motion } from 'framer-motion'
import { Card, CardContent } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Copy } from 'lucide-react'
import { cn } from '../util'

const head = (
  <>
    <title>Brand Assets | ink!</title>
    <meta name="description" content="Explore the brand assets for ink!, including logos and guidelines." />
    <meta name="keywords" content="brand, assets, logos, corporate identity, design" />
    <meta name="author" content="ink! Alliance" />
    <meta property="og:title" content="Brand Assets | ink!" />
    <meta property="og:description" content="Explore the brand assets for ink!, including logos and guidelines." />
    <meta property="og:image" content="https://use-ink.com/img/og-image.png" />
    <meta property="og:url" content="https://use-ink.com" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="ink!" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="ink! logo" />
    <meta property="og:image:type" content="image/png" />
  </>
)

const badges = [
  {
    name: 'Built with ink!',
    markdown:
      '[![Built with ink!](https://raw.githubusercontent.com/use-ink/ink/master/.images/badge.svg)](https://github.com/use-ink/ink)',
    flatMarkdown:
      '[![Built with ink!](https://raw.githubusercontent.com/use-ink/ink/master/.images/badge_flat.svg)](https://github.com/use-ink/ink)',
  },
  {
    name: 'Built for ink!',
    markdown:
      '[![Built for ink!](https://raw.githubusercontent.com/use-ink/ink/master/.images/built-for-ink.svg)](https://github.com/use-ink/ink)',
    flatMarkdown:
      '[![Built for ink!](https://raw.githubusercontent.com/use-ink/ink/master/.images/built-for-ink-flat.svg)](https://github.com/use-ink/ink)',
  },
]

export default function PageAssets() {
  const copyToClipboard = async (markdown: string) => {
    try {
      await navigator.clipboard.writeText(markdown)
    } catch (err) {
      /* eslint-disable-next-line no-console */
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <Layout className="container" head={head}>
      <section>
        <div className="flex flex-col items-center justify-center my-12 text-center">
          <motion.h1
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            Brand Assets
          </motion.h1>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center max-w-xl pb-48 mx-auto my-12 lg:pb-0">
        <Card>
          <CardContent className="p-2 md:p-4">
            <p>
              Our primary logo is our squid mascot (named &quot;Squink&quot;) plus our text logo. Please use this
              combined logo if possible!
            </p>
            <hr className="dotted" />
            <h2 className="!text-[21px] font-montserrat !font-[600] text-[rgb(189,130,253)]">Black Version</h2>
            <div className="flex items-center justify-center h-40 p-4 mb-4 overflow-hidden bg-white rounded-xl">
              <img
                src={useBaseUrl('img/logo/ink-logo-with-squid-black.svg')}
                alt="ink! logo black"
                className="w-full h-full"
              />
            </div>
            <p>
              Download here:{' '}
              <a href={useBaseUrl('img/logo/ink-logo-with-squid-black.svg')} download>
                <code>ink-logo-with-squid-black.svg</code>
              </a>
              .
            </p>
            <hr className="dotted" />
            <h2 className="!text-[21px] font-montserrat !font-[600] text-[rgb(189,130,253)]">White Version</h2>
            <div className="flex items-center justify-center h-40 p-4 mb-4 overflow-hidden bg-black rounded-xl">
              <img
                src={useBaseUrl('img/logo/ink-logo-with-squid-white.svg')}
                alt="ink! logo"
                className="w-full h-full"
              />
            </div>
            <p>
              Download here:{' '}
              <a href={useBaseUrl('img/logo/ink-logo-with-squid-white.svg')} download>
                <code>ink-logo-with-squid-white.svg</code>
              </a>
              .
            </p>
            <hr className="dotted" />
            <h2 className="!text-[21px] font-montserrat !font-[600] text-[rgb(189,130,253)]">Squink Mascot</h2>
            <div className="flex items-center justify-center p-8 mb-4 rounded-xl bg-gradient-to-br from-purple-500/50 to-purple-300/50">
              <img src={useBaseUrl('img/ink-squink.svg')} alt="ink! squink" className="w-auto h-[300px] rounded-xl" />
            </div>
            <p>
              Download here:{' '}
              <a href={useBaseUrl('img/ink-squink.svg')} download>
                <code>ink-squink.svg</code>
              </a>
              .
            </p>
            <hr className="dotted" />
            <h2 className="!text-[21px] font-montserrat !font-[600] text-[rgb(189,130,253)]">ink! Stickers</h2>
            <div className="rounded-xl">
              <img
                src={useBaseUrl('img/stickers/ink-stickers.svg')}
                alt="ink! stickers"
                className="w-full h-full rounded-xl"
              />
            </div>
            <p>
              Download here:{' '}
              <a href={useBaseUrl('img/stickers/ink-stickers.svg')} download>
                <code>ink-stickers.svg</code>
              </a>
              .
            </p>
            <hr className="dotted" />
            <h2 className="!text-[21px] font-montserrat !font-[600] text-[rgb(189,130,253)]">
              Built <i>with</i> ink! Badges
            </h2>
            <div className="flex flex-col items-center justify-center gap-3">
              <img
                src="https://raw.githubusercontent.com/use-ink/ink/master/.images/badge.svg"
                alt="Built with ink! badge"
                className="w-[160px] ml-0 sm:-ml-12"
              />
              <div className="flex flex-col items-center justify-center gap-3 mb-8 sm:flex-row">
                <div
                  className={cn(
                    'p-2 md:p-3 font-mono rounded-[12px] bg-[rgba(19,17,28,0.33)] text-[12px] overflow-scroll w-full border-[rgb(57,40,83)] border shadow-[rgba(0,0,0,0.33)_2px_2px_6px_0px_inset]',
                    'transition-all duration-300 cursor-pointer',
                    'hover:bg-[rgba(19,17,28,0.66)]',
                  )}
                  onClick={() => copyToClipboard(badges[0].markdown)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      copyToClipboard(badges[0].markdown)
                    }
                  }}
                >
                  {badges[0].markdown}
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="p-0 text-[rgb(189,130,253)]"
                  onClick={() => copyToClipboard(badges[0].markdown)}
                >
                  copy
                </Button>
              </div>
              <img
                src="https://raw.githubusercontent.com/use-ink/ink/master/.images/badge_flat.svg"
                alt="Built with ink! badge"
                className="w-[160px] ml-0 sm:-ml-12"
              />
              <div className="flex flex-col items-center justify-center gap-3 mb-8 sm:flex-row">
                <div
                  className={cn(
                    'p-3 font-mono rounded-[12px] bg-[rgba(19,17,28,0.33)] text-[12px] overflow-scroll w-full border-[rgb(57,40,83)] border shadow-[rgba(0,0,0,0.33)_2px_2px_6px_0px_inset]',
                    'transition-all duration-300 cursor-pointer',
                    'hover:bg-[rgba(19,17,28,0.66)]',
                  )}
                  onClick={() => copyToClipboard(badges[0].flatMarkdown)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      copyToClipboard(badges[0].flatMarkdown)
                    }
                  }}
                >
                  {badges[0].flatMarkdown}
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="p-0 text-[rgb(189,130,253)]"
                  onClick={() => copyToClipboard(badges[0].flatMarkdown)}
                >
                  copy
                </Button>
              </div>
            </div>
            <hr className="dotted" />
            <h2 className="!text-[21px] font-montserrat !font-[600] text-[rgb(189,130,253)]">
              Built <i>for</i> ink! Badges
            </h2>
            <div className="flex flex-col items-center justify-center gap-3">
              <img
                src="https://raw.githubusercontent.com/use-ink/ink/master/.images/built-for-ink.svg"
                alt="Built for ink! badge"
                className="w-[160px] ml-0 sm:-ml-12"
              />
              <div className="flex flex-col items-center justify-center gap-3 mb-8 sm:flex-row">
                <div
                  className={cn(
                    'p-3 font-mono rounded-[12px] bg-[rgba(19,17,28,0.33)] text-[12px] overflow-scroll w-full border-[rgb(57,40,83)] border shadow-[rgba(0,0,0,0.33)_2px_2px_6px_0px_inset]',
                    'transition-all duration-300 cursor-pointer',
                    'hover:bg-[rgba(19,17,28,0.66)]',
                  )}
                  onClick={() => copyToClipboard(badges[1].markdown)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      copyToClipboard(badges[1].markdown)
                    }
                  }}
                >
                  {badges[1].markdown}
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="p-0 text-[rgb(189,130,253)]"
                  onClick={() => copyToClipboard(badges[1].markdown)}
                >
                  copy
                </Button>
              </div>
              <img
                src="https://raw.githubusercontent.com/use-ink/ink/master/.images/built-for-ink-flat.svg"
                alt="Built for ink! badge"
                className="w-[160px] ml-0 sm:-ml-12"
              />
              <div className="flex flex-col items-center justify-center gap-3 mb-8 sm:flex-row">
                <div
                  className={cn(
                    'p-3 font-mono rounded-[12px] bg-[rgba(19,17,28,0.33)] text-[12px] overflow-scroll w-full border-[rgb(57,40,83)] border shadow-[rgba(0,0,0,0.33)_2px_2px_6px_0px_inset]',
                    'transition-all duration-300 cursor-pointer',
                    'hover:bg-[rgba(19,17,28,0.66)]',
                  )}
                  onClick={() => copyToClipboard(badges[1].flatMarkdown)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      copyToClipboard(badges[1].flatMarkdown)
                    }
                  }}
                >
                  {badges[1].flatMarkdown}
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="p-0 text-[rgb(189,130,253)]"
                  onClick={() => copyToClipboard(badges[1].flatMarkdown)}
                >
                  copy
                </Button>
              </div>
            </div>
            <hr className="dotted" />
            <a href={useBaseUrl('img/logo/ink-brand-assets.zip')} download>
              <Button size="lg" variant="secondary" className="w-full">
                <span className="hidden lg:block">Download all ink! brand assets</span>
                <span className="block lg:hidden">Download assets</span>
              </Button>
            </a>
          </CardContent>
        </Card>
      </section>
    </Layout>
  )
}
