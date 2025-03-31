import TentaclesAnimation from '../../../static/animations/tentacles.json'
import classNames from 'classnames'
import React from 'react'
import { Rock } from '../icons'
import { ScrollPlayer } from '../ScrollPlayer'
import useBaseUrl from '@docusaurus/useBaseUrl'

export const Overview: React.FC = () => {
  return (
    <section className="mx-auto max-w-biggest lg:overflow-x-visible overflow-x-clip">
      <div className="z-10 px-4">
        <hgroup className="my-10 md:my-16">
          <h2 className="w-full mx-auto text-5xl font-bold text-center dark:text-white font-freude">
            What is <b className="pr-2 text-brand-500">ink!ubator</b>?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-center text-[18px] font-[600]">
            ink!ubator is an initiative funded by the Polkadot Treasury&apos;s Bounty Program. It is designed to
            kickstart the ink! ecosystem on Polkadot, Kusama, and other Substrate chains in the following areas
          </p>
        </hgroup>

        <ul className="relative z-10 grid gap-4 px-0 list-none md:grid-cols-2 lg:grid-cols-3 max-w-biggest md:px-12">
          {[
            { title: 'Developer Growth', logo: '/img/Developer.svg' },
            { title: 'Full-Stack Tooling', logo: '/img/Tools.svg' },
            { title: 'High-Impact Product Launches', logo: '/img/Product.svg' },
          ].map(({ title, logo }) => (
            <li
              key={title}
              className={classNames(
                'rounded-xl md:p-6 p-4 border-solid border border-background-300 dark:border-background-700',
                'backdrop-blur-md flex flex-col justify-between min-h-[180px]',
              )}
            >
              <img src={useBaseUrl(logo)} alt={title} className="w-10 mb-6" />
              <h3 className="max-w-[180px] p-0 m-0">{title}</h3>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative left-0 w-[650px] md:mt-[-480px] mt-[-600px]">
        <ScrollPlayer animationData={TentaclesAnimation} />
        <Rock className="w-[350px] absolute mt-[-400px] ml-[-240px]" />
      </div>
    </section>
  )
}
