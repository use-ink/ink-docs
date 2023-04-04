import TentaclesAnimation from '../../../static/animations/tentacles.json'
import classNames from 'classnames'
import React from 'react'
import { Rock } from '../icons'
import { ScrollPlayer } from '../ScrollPlayer'

export const Overview: React.FC = () => {
  return (
    <section className="max-w-biggest mx-auto lg:overflow-x-visible overflow-x-clip">
      <div className="px-4 z-10">
        <hgroup className="md:my-16 my-10">
          <h2 className="text-5xl font-bold font-montserrat dark:text-white w-full text-center mx-auto">
            What is <b className="text-brand-500 pr-2">ink!ubator</b>?
          </h2>
          <p className="text-lg dark:text-white/70 text-center mx-auto max-w-2xl">
            ink!ubator is an initiative funded by the Polkadot Treasury&apos;s Bounty Program. It is designed to kickstart
            the ink! ecosystem on Polkadot, Kusama, and other Substrate chains in the following areas
          </p>
        </hgroup>

        <ul className="list-none relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-biggest md:px-12 px-0">
          {[
            { title: 'Developer Growth', logo: '/img/Developer.svg' },
            { title: 'Security Audits', logo: '/img/Security.svg' },
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
              <img src={logo} alt={title} className="w-10 mb-6" />
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
