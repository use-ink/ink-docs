import React, { type ReactNode } from 'react'
import clsx from 'clsx'
import ErrorBoundary from '@docusaurus/ErrorBoundary'
import { PageMetadata, SkipToContentFallbackId, ThemeClassNames } from '@docusaurus/theme-common'
import { useKeyboardNavigation } from '@docusaurus/theme-common/internal'
import SkipToContent from '@theme/SkipToContent'
import AnnouncementBar from '@theme/AnnouncementBar'
import Navbar from '@theme/Navbar'
import Footer from '@theme/Footer'
import LayoutProvider from '@theme/Layout/Provider'
import ErrorPageContent from '@theme/ErrorPageContent'
import type { Props } from '@theme/Layout'
import styles from './styles.module.css'
import Head from '@docusaurus/Head'

export default function Layout(props: Props): ReactNode {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
  } = props

  useKeyboardNavigation()

  return (
    <LayoutProvider>
      <PageMetadata title={title} description={description} />
      <Head>
        <meta property="og:image" content="https://niklasp.github.io/ink-docs/img/opengraph/docs.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="ink! Documentation" />
        <meta property="og:image:type" content="image/png" />
      </Head>
      <div className="absolute inset-0 z-0 section-bg" />
      <SkipToContent />
      <AnnouncementBar />
      <Navbar />
      <div
        id={SkipToContentFallbackId}
        className={clsx('z-10', ThemeClassNames.wrapper.main, styles.mainWrapper, wrapperClassName)}
      >
        <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>{children}</ErrorBoundary>
      </div>
      {!noFooter && <Footer />}
    </LayoutProvider>
  )
}
