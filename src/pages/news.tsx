import React from 'react'
import Layout from './layout'
import { ArrowCircleDown } from '@phosphor-icons/react/dist/ssr'
import { news } from '../data/news'
import { motion } from 'motion/react'

import Rocket from '@site/static/img/rocket.svg'
import Zeppelin from '@site/static/img/home/Zeppelin.svg'
import { Button } from '../components/ui/button'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { StarryBackground } from '../components/starry-background'
import { useCurrentVersion } from '../hooks/use-current-version'
import { NewsCard } from '../components/news-card'
const head = (
  <>
    <title>News | ink!</title>
    <meta name="description" content="Stay updated with the latest news and updates from the ink! community." />
    <meta name="keywords" content="news, updates, ink!, community" />
    <meta name="author" content="ink! Alliance" />
    <meta property="og:title" content="News | ink!" />
    <meta property="og:description" content="Stay updated with the latest news and updates from the ink! community." />
    <meta property="og:image" content="https://use-ink.com/img/opengraph-home.png" />
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

export default function PageNews() {
  const currentVersion = useCurrentVersion()
  const versionedNews = news.map((news) => {
    return {
      ...news,
      link: news.link,
    }
  })

  return (
    <Layout className="container overflow-hidden pb-40 lg:pb-0" head={head}>
      <div
        style={{
          width: '100vw',
          height: '200vh',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          overflow: 'hidden',
        }}
      >
        <StarryBackground />
      </div>
      <div className="flex flex-col items-center justify-center mx-auto text-center mt-[10vh]">
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="font-bold text-[64px]">ink! News</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          <p className="text-[18px] font-semibold">
            Stay updated with the latest news and updates from the ink! community.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          <a href="#tutorials" className="scroll-m-60">
            <ArrowCircleDown size={32} weight="duotone" fill="rgb(140, 124, 247)" />
          </a>
        </motion.div>
      </div>
      <section id="tutorials" className="flex flex-col justify-center items-center pt-20">
        <div className="grid grid-cols-1 gap-[36px] w-full">
          {versionedNews.map((news) => (
            <NewsCard key={news.title} {...news} />
          ))}
        </div>
        <div className="flex flex-col gap-4 justify-center items-center my-16 md:flex-row">
          <p className="m-0">
            Share news with the ink! community
          </p>
          <Link href="https://t.me/inkathon" className="text-blue-500" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="secondary">
              Get in touch
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
