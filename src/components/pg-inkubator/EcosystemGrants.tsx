import React from 'react'
import Canary from '../../../static/animations/ecosystem-canary.json'
import CuttingEdge from '../../../static/animations/ecosystem-cutting-edge.json'
import Infrastructure from '../../../static/animations/ecosystem-infra.json'
import { BigCTA } from '../BigCTA'
import { PillList } from '../PillList'
import { ScrollPlayer } from '../ScrollPlayer'
import { Config } from './config'

const CANARY_EXAMPLES = [
  { icon: '/img/DEX.svg', title: 'DEX' },
  { icon: '/img/lending.svg', title: 'Lending Platform' },
  { icon: '/img/NFT.svg', title: 'NFT Marketplace' },
  { icon: '/img/multi-sig.svg', title: 'Multi-Sig Digital Vault' },
  { icon: '/img/idea.svg', title: 'Your Awesome New Idea' },
]

const CUTTING_EDGE_EXAMPLES = [
  { icon: '/img/aggregator.svg', title: 'Decreased Contract Size' },
  { icon: '/img/puzzle-piece.svg', title: 'Innovative Collectibles' },
  { icon: '/img/game.svg', title: 'An Innovative Game' },
  { icon: '/img/idea.svg', title: 'Your Awesome New Idea' },
]

const INFRASTRUCTURE_EXAMPLES = [
  { icon: '/img/library.svg', title: 'Libraries' },
  { icon: '/img/analysis.svg', title: 'Static Analysis' },
  { icon: '/img/on-chain-contract.svg', title: 'On-Chain Contract Verification' },
  { icon: '/img/Developer.svg', title: 'Improved Developer Experience' },
  { icon: '/img/code.svg', title: 'Improved Debugging Experience' },
  { icon: '/img/idea.svg', title: 'Your Awesome New Idea' },
]

export const EcosystemGrants: React.FC = () => {
  return (
    <section className="mt-16 md:mt-28">
      <div className="px-4">
        <div className="mx-auto max-w-[1000px]">
          <div className="w-full text-center">
            <h2 className="w-full text-5xl font-semibold font-freude text-brand-500">
              <i className="font-bold text-black dark:text-white ">Ecosystem</i> Grants
            </h2>
            <p className="max-w-3xl p-0 m-0 mx-auto mt-8 text-[18px] font-[600]">
              Ecosystem Grants are available for ink! projects that fall into one of the following categories:
            </p>
          </div>

          <div className="max-w-[1000px]">
            <div className="flex flex-col items-start justify-between md:flex-row lg:mt-32 md:mt-16">
              <div className="md:w-[40%] flex items-end max-w-2xl pt-8">
                <ScrollPlayer animationData={Canary} />
              </div>

              <div className="md:max-w-2xl md:w-[55%]">
                <h3 className="text-base opacity-[50%] uppercase font-montserrat w-full">Category 1</h3>
                <h2 className="w-full text-4xl font-semibold opacity-90 font-montserrat">Canary DApp</h2>
                <p className="mt-8 dark:text-white/70 text-black/70">
                  A Canary dApp is one that could be deployed on to a value bearing network, but may not necessarily be
                  battle hardened enough for serious use cases. They are meant to be a step beyond simple tutorials
                  while still being self-contained enough to provide a useful reference for developers building
                  production grade dapps.
                </p>

                <PillList pills={CANARY_EXAMPLES} />
              </div>
            </div>

            <div className="flex flex-col items-start justify-between md:flex-row lg:mt-32 md:mt-16">
              <div className="md:w-[40%] flex items-end max-w-2xl pt-8">
                <ScrollPlayer animationData={CuttingEdge} />
              </div>

              <div className="md:max-w-2xl md:w-[55%]">
                <h3 className="text-base opacity-[50%] uppercase font-montserrat w-full">Category 2</h3>
                <h2 className="w-full text-4xl font-semibold opacity-90 font-montserrat">Technical Showcase</h2>
                <p className="mt-8 dark:text-white/70 text-black/70">
                  This category implies developing a full-stack application that clearly demonstrates the advantages of
                  ink! over other smart contract languages (e.g. Solidity). In this category you should focus on opening
                  the full potential of ink!. The case doesn&apos;t necessarily needs to be business oriented. However
                  it should clearly and visually demostrate superiority of the ink! language.
                </p>

                <PillList pills={CUTTING_EDGE_EXAMPLES} />
              </div>
            </div>

            <div className="flex flex-col items-start justify-between md:flex-row lg:mt-32 md:mt-16">
              <div className="md:w-[40%] flex items-end max-w-2xl pt-8">
                <ScrollPlayer animationData={Infrastructure} />
              </div>

              <div className="md:max-w-2xl md:w-[55%]">
                <h3 className="text-base opacity-[50%] uppercase font-montserrat w-full">Category 3</h3>
                <h2 className="w-full text-5xl font-semibold opacity-90 font-montserrat">Infrastructure</h2>
                <p className="mt-8 dark:text-white/70 text-black/70">
                  The goal of this track is to improve the ink! ecosystem&apos;s infrastructure and tooling. We welcome
                  you to be innovative and submit your ideas. We will prefer ideas that add differentiation to the
                  Polkadot/ink! ecosystem, rather then tools that simply duplicate EVM.
                </p>

                <PillList pills={INFRASTRUCTURE_EXAMPLES} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
