import React from 'react'
import Layout from './layout'
import { ArrowCircleDown } from '@phosphor-icons/react/dist/ssr'
import { tutorials } from '../config'
import { TutorialCard } from '../components/tutorial-card'

export default function PageTutorials() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center max-w-[540px] min-h-[50vh] mx-auto text-center">
        <h1 className="font-bold text-[64px]">Tutorials</h1>
        <p className="text-[18px] font-semibold">
          Explore step-by-step tutorials to help developers build and deploy ink! smart contracts on Polkadot and
          beyond.
        </p>
        <a href="#tutorials" className="scroll-m-60">
          <ArrowCircleDown size={32} weight="duotone" fill="rgb(140, 124, 247)" />
        </a>
      </div>
      <section id="tutorials" className="flex flex-col items-center justify-center max-w-[900px] mx-auto pt-20">
        <div className="grid grid-cols-1 gap-[36px] md:grid-cols-2">
          {tutorials.map((tutorial) => (
            <TutorialCard key={tutorial.title} {...tutorial} />
          ))}
        </div>
      </section>
    </Layout>
  )
}
