import React, { useRef } from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'

import { cn } from '../../util'
import { motion } from 'framer-motion'
import { projects } from './projects'
import { ImageContainer } from '../image-container'
import Link from '@docusaurus/Link'
import { ArrowUpRight } from '@phosphor-icons/react'

export interface Project {
  logo: string
  title: string
  about: React.ReactNode
  image: string | React.ReactNode
  link: string
}

export default function ProjectGrid() {
  return (
    <div className="container px-4 pt-12 mx-auto md:px-6 !max-w-[1300px]">
      <div className="">
        {projects.map((project, index) => {
          const ref = useRef<HTMLDivElement>(null)

          return (
            <div
              key={project.title}
              className={cn('grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16', {
                'mb-16': index !== projects.length - 1,
                'border-0 border-b border-solid border-[rgba(189,130,253,.15)]': index !== projects.length - 1,
              })}
              style={{
                background: 'radial-gradient(50% 50% at 50% 50%,rgba(82,28,189,.3) 0%,rgba(19,14,33,0) 100%)',
              }}
            >
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeInOut', delay: index === 0 ? 0.5 : 0 }}
                className="order-1 lg:col-span-5 lg:sticky lg:top-24 lg:self-start lg:order-0"
              >
                <div className="flex items-center gap-3 mb-8">
                  <ImageContainer className="max-w-[250px]">
                    <img
                      src={useBaseUrl(project.logo)}
                      alt={`${project.title} logo`}
                      className="mix-blend-lighten max-w-[200px] max-h-[50px]"
                    />
                  </ImageContainer>
                </div>
                <div className="pb-2">
                  <div className="pb-6 mb-6 border-0 border-b-[3px] border-gray-700 border-dotted">
                    <h4 className="mb-2 text-xs text-gray-500 uppercase font-[600]">PROJECT DESCRIPTION</h4>
                    <h3 className="m-0 text-xl font-semibold text-white font-montserrat">{project.title}</h3>
                  </div>

                  <div>
                    <h4 className="mb-2 text-xs text-gray-500 uppercase font-[600]">ABOUT</h4>
                    <div className="font-[500]">{project.about}</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeInOut', delay: index === 0 ? 0.5 : 0 }}
                className="sticky z-20 shadow-lg lg:col-span-7 top-24 lg:self-start order-0 lg:order-1"
              >
                <div className="w-full overflow-hidden group border-[5px] border-solid border-[#b782fc] rounded-[18px]">
                  {typeof project.image === 'string' ? (
                    <img
                      src={useBaseUrl(project.image)}
                      alt={project.title}
                      className="block object-cover object-top w-full h-full backdrop-blur-md"
                    />
                  ) : (
                    project.image
                  )}
                  <div className="absolute rounded-[18px] border-[5px] inset-0 border-solid border-[#b782fc] transition-opacity duration-300 opacity-0 bg-black/90 group-hover:opacity-100 flex items-center justify-center">
                    <Link
                      to={project.link}
                      className="flex flex-col items-center justify-center text-center text-white !no-underline"
                    >
                      <ArrowUpRight size={48} weight="bold" />
                      <span className="text-[48px] font-freude !no-underline">Visit Website</span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
