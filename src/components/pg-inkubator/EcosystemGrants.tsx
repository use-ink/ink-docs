import React from 'react'
import { BigCTA } from '../BigCTA'
import { PillList } from '../PillList'
import { ScrollPlayer } from '../ScrollPlayer'
import CuttingEdge from '../../../static/animations/ecosystem-cutting-edge.json'
import Canary from '../../../static/animations/ecosystem-canary.json'
import Infrastructure from '../../../static/animations/ecosystem-infra.json'
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
  { icon: '/img/developer.svg', title: 'Improved Developer Experience' },
  { icon: '/img/code.svg', title: 'Improved Debugging Experience' },
  { icon: '/img/idea.svg', title: 'Your Awesome New Idea' },
]

export const EcosystemGrants: React.FC = () => {
  return (
    <section className="md:mt-28 mt-16">
      <div className="px-4">
        <div className="max-w-biggest mx-auto">
          <div className="text-center">
            <h3 className="text-base uppercase font-bold font-montserrat w-full">Track 3</h3>
            <h2 className="text-5xl font-semibold font-montserrat w-full text-brand-500">
              <i className="font-bold text-black dark:text-white">Ecosystem</i> Grants
            </h2>
            <h3 className="p-0 m-0 mt-8 mx-auto max-w-3xl text-3xl dark:text-white/70 text-black/70">
              Ecosystem Grants are available for ink! projects that fall into one of the following categories:
            </h3>
          </div>

          <div className="max-w-biggest">
            <div className="flex flex-col md:flex-row items-start justify-between lg:mt-32 md:mt-16">
              <div className="md:w-[40%] flex items-end max-w-2xl pt-8">
                <ScrollPlayer animationData={Canary} />
              </div>

              <div className="md:max-w-2xl md:w-[55%]">
                <h3 className="text-base opacity-[50%] uppercase font-montserrat w-full">Category 1</h3>
                <h2 className="text-4xl opacity-90 font-semibold font-montserrat w-full">Canary Dapp</h2>
                <p className="mt-8 dark:text-white/70 text-black/70">
                  A Canary dapp is one that could be deployed on to a value bearing network, but may not necessarily be
                  battle hardened enough for serious use cases. They are meant to be a step beyond simple tutorials
                  while still being self-contained enough to provide a useful reference for developers building
                  production grade dapps.
                </p>

                <PillList pills={CANARY_EXAMPLES} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start justify-between lg:mt-32 md:mt-16">
              <div className="md:w-[40%] flex items-end max-w-2xl pt-8">
                <ScrollPlayer animationData={CuttingEdge} />
              </div>

              <div className="md:max-w-2xl md:w-[55%]">
                <h3 className="text-base opacity-[50%] uppercase font-montserrat w-full">Category 2</h3>
                <h2 className="text-4xl opacity-90 font-semibold font-montserrat w-full">Technical Showcase</h2>
                <p className="mt-8 dark:text-white/70 text-black/70">
                  This category implies developing a full-stack application that clearly demonstrates the advantages of
                  ink! over other smart contract languages (e.g. Solidity). In this category you should focus on opening
                  the full potential of ink!. The case doesn&apos;t necessarily needs to be business oriented. However
                  it should clearly and visually demostrate superiority of the ink! language.
                </p>

                <PillList pills={CUTTING_EDGE_EXAMPLES} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start justify-between lg:mt-32 md:mt-16">
              <div className="md:w-[40%] flex items-end max-w-2xl pt-8">
                <ScrollPlayer animationData={Infrastructure} />
              </div>

              <div className="md:max-w-2xl md:w-[55%]">
                <h3 className="text-base opacity-[50%] uppercase font-montserrat w-full">Category 3</h3>
                <h2 className="text-5xl opacity-90 font-semibold font-montserrat w-full">Infrastructure</h2>
                <p className="mt-8 dark:text-white/70 text-black/70">
                  The goal of this track is to improve the ink! ecosystem&apos;s infrastructure and tooling. We welcome
                  you to be innovative and submit your ideas. We will prefer ideas that add differentiation to the
                  Polkadot/ink! ecosystem, rather then tools that simply duplicate EVM.
                </p>

                <PillList pills={INFRASTRUCTURE_EXAMPLES} />
              </div>
            </div>
          </div>

          <BigCTA
            className="min-h-[300px] lg:mt-32 md:mt-16 mt-12"
            title="Interested?"
            emphasized="Apply"
            cta="for an Ecosystem Grant"
            url={Config.grantsApplicationURL}
            tabIndex={0}
          />
        </div>
      </div>
    </section>
  )
}
