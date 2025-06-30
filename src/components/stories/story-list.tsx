import React from 'react'
import { motion } from 'motion/react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { stories } from '../../data/stories'
import { cn } from '../../util'
import { ImageContainer } from '../image-container'
import { CTA } from '../cta'

export interface Story {
  logo: string
  image: string
  name: string
  link: string
  backstory: React.ReactNode
}

export function StoryList() {
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  const variantsImage = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <div className="flex flex-col max-w-[1200px] mx-auto mt-8">
      {stories.map((story, index) => (
        <div
          key={story.name}
          className={cn('flex flex-col gap-12 font-[500] pb-16', {
            'border-0 border-b border-solid border-[rgba(189,130,253,.15)]': index !== stories.length - 1,
          })}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variantsImage}
            transition={{ duration: 1, ease: 'easeInOut', delay: index === 0 ? 0.3 : 0 }}
            className="w-full aspect-video"
          >
            <a href={story.link} target="_blank" rel="noreferrer" className="block w-full h-full">
              <img
                src={story.image}
                alt={story.name}
                className="w-full rounded-[18px] border-[5px] border-solid border-[rgb(140,124,247)]"
              />
            </a>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="flex flex-col gap-8 lg:flex-row"
          >
            <ImageContainer className="w-full lg:!w-auto max-w-full min-w-[250px] lg:max-w-[250px] h-24">
              <img
                src={useBaseUrl(story.logo)}
                alt={`${story.name} logo`}
                className="object-contain h-auto mix-blend-lighten max-h-[40px] px-4"
              />
            </ImageContainer>
            <div className="flex flex-col gap-[10px]">
              <h4 className="text-xs text-gray-500 uppercase font-[600] pb-0 mb-0">BACKSTORY</h4>
              <div className="">{story.backstory}</div>
            </div>
          </motion.div>
          {index !== stories.length - 1 && <hr className="my-10" />}
        </div>
      ))}
      <hr className="" />
      <CTA
        text="Share your story with the ink! community"
        btnText="Join our Telegram"
        btnLink="https://t.me/inkathon"
      />
    </div>
  )
}
