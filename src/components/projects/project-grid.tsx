import React, { useRef } from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'

import { cn } from '../../util'
import { motion } from 'framer-motion'
import { projects } from './projects'
import { ImageContainer } from '../image-container'

export interface Project {
  logo: string
  title: string
  about: React.ReactNode
  image: string | React.ReactNode
}

export default function ProjectGrid() {
  return (
    <div className="container px-4 py-12 mx-auto md:px-6">
      <div className="">
        {projects.map((project, index) => {
          const ref = useRef<HTMLDivElement>(null)

          const variants = {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }

          const variantsImage = {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }

          return (
            <div
              key={project.title}
              className={cn('grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[60vh] mb-16 pb-16', {
                'border-0 border-b border-solid border-[rgba(189,130,253,.15)]': index !== projects.length - 1,
              })}
              style={{
                background: 'radial-gradient(50% 50% at 50% 50%,rgba(82,28,189,.3) 0%,rgba(19,14,33,0) 100%)',
              }}
            >
              <motion.div
                ref={ref}
                initial="hidden"
                whileInView="visible"
                variants={variants}
                transition={{ duration: 1, ease: 'easeInOut', delay: index === 0 ? 0.5 : 0 }}
                className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start"
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
                <div>
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
                initial="hidden"
                whileInView="visible"
                variants={variantsImage}
                transition={{ duration: 1, ease: 'easeInOut', delay: index === 0 ? 0.5 : 0 }}
                className="relative lg:col-span-8 lg:sticky lg:top-24 lg:self-start"
              >
                <div className="w-full overflow-hidden rounded-lg">
                  {typeof project.image === 'string' ? (
                    <img
                      src={useBaseUrl(project.image)}
                      alt={project.title}
                      className="w-full rounded-[18px] border-[5px] border-solid border-[rgb(140,124,247)]"
                    />
                  ) : (
                    project.image
                  )}
                </div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
