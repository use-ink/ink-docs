import React, { useRef } from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { cn } from '../../util'
import { motion, useInView } from 'framer-motion'

interface Project {
  logo: string
  title: string
  about: React.ReactNode
  relatedProjects?: React.ReactNode[]
  image: string
}

export default function ProjectGrid() {
  const projects: Project[] = [
    {
      logo: 'img/projects/inkathon-logo.avif',
      title: 'Full-stack DApp boilerplate for ink! smart contracts',
      about: (
        <>
          <p>
            <a href="https://inkathon.xyz/" target="_blank" rel="noopener noreferrer">
              ink!athon
            </a>{' '}
            is an actively developed full-stack dApp boilerplate for ink! smart contracts with an integrated frontend.
            It can be used to quickly start developing your hackathon idea or to scaffold a production-ready Web3
            application.
          </p>
          <p>
            The project is part of a{' '}
            <a href="https://scio.xyz/" target="_blank" rel="noopener noreferrer">
              Scio Labs
            </a>{' '}
            initiative to improve the developer experience in the ink! ecosystem. Scio Labs is a company from Potsdam,
            Germany that has also given many talks at Polkadot conferences and hosted ink! meetups in person.
          </p>
        </>
      ),
      image: 'img/projects/inkathon.png',
      relatedProjects: [],
    },
    {
      logo: 'img/projects/inkanalyzer-logo.avif',
      title: 'VSCode extension designed to help you develop smart contracts in ink!',
      about: (
        <>
          <p>
            Created by{' '}
            <a href="https://x.com/davidsemakula" target="_blank" rel="noopener noreferrer">
              David Semakula
            </a>
            , this VS extension comes with many nifty features, including but not limited to:
          </p>
          <ul className="pl-4 space-y-4 list-disc">
            <li>
              <em>Diagnostics:</em> The extension analyzes if your code follows the semantic rules of ink!.
            </li>
            <li>
              <em>Quick Fixes:</em> It displays warnings, errors, and gives you suggestions about what might be wrong
              with your code.
            </li>
            <li>
              <em>Completions:</em> Inline info about which attributes and arguments are available for further
              configuring your smart contract&apos;s storage, events, messages, and more.
            </li>
            <li>
              <em>Inline Documentation:</em> just hover over an ink! attribute or argument to read the documentation for
              it.
            </li>
          </ul>

          <p>
            {' '}
            Under the hood, ink! Analyzer is a collection of modular libraries and tools for the semantic analysis of
            ink! smart contract code. This means the individual components can be reused to create things beyond a
            VSCode extension! 🙌
          </p>

          <p>
            David maintains a blog about the extension at{' '}
            <a href="https://analyze.ink" target="_blank" rel="noopener noreferrer">
              https://analyze.ink
            </a>
            .
          </p>
        </>
      ),
      image: 'img/projects/inkanalyzer.avif',
    },
  ]

  return (
    <div className="container px-4 py-12 mx-auto md:px-6">
      <div className="">
        {projects.map((project, index) => {
          const ref = useRef<HTMLDivElement>(null)
          const isInView = useInView(ref, { once: true })

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
            >
              <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={variants}
                transition={{ duration: 1, ease: 'easeInOut', delay: index === 0 ? 0.5 : 0 }}
                className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex items-center justify-center overflow-hidden rounded-lg border-[rgba(140,124,247,.15)] border border-solid bg-[#241a38] mix-blend-lighten p-4">
                    <img
                      src={useBaseUrl(project.logo)}
                      alt={`${project.title} logo`}
                      className="mix-blend-lighten max-w-[200px]"
                    />
                  </div>
                </div>
                <div>
                  <div className="pb-6 mb-6 border-0 border-b-[3px] border-gray-700 border-dotted">
                    <h4 className="mb-2 text-xs text-gray-500 uppercase">PROJECT DESCRIPTION</h4>
                    <h3 className="m-0 text-xl font-semibold text-white font-montserrat">{project.title}</h3>
                  </div>

                  <div>
                    <h4 className="mb-2 text-xs text-gray-500 uppercase">ABOUT</h4>
                    <div className="">{project.about}</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={variantsImage}
                transition={{ duration: 1, ease: 'easeInOut', delay: index === 0 ? 0.5 : 0 }}
                className="relative lg:col-span-8 lg:sticky lg:top-24 lg:self-start"
              >
                <div className="w-full overflow-hidden rounded-lg">
                  <img
                    src={useBaseUrl(project.image)}
                    alt={project.title}
                    className="w-full rounded-[18px] border-[5px] border-solid border-[rgb(140,124,247)]"
                  />
                </div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
