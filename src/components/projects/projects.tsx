import React from 'react'
import { Project } from './project-grid'
import Drink from '@site/static/img/projects/drink.svg'

export const projects: Project[] = [
  {
    logo: 'img/projects/inkathon-logo.avif',
    title: 'Full-stack DApp boilerplate for ink! smart contracts',
    about: (
      <>
        <p>
          <a href="https://inkathon.xyz/" target="_blank" rel="noopener noreferrer">
            ink!athon
          </a>{' '}
          is an actively developed full-stack dApp boilerplate for ink! smart contracts with an integrated frontend. It
          can be used to quickly start developing your hackathon idea or to scaffold a production-ready Web3
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
        <div>
          <h4 className="mb-2 text-xs text-gray-500 uppercase font-[600]">RELATED PROJECTS</h4>
          <div className="text-[14px]">
            <ul className="p-0 m-0 space-y-2 list-none">
              <li className="flex items-center gap-2">
                <code className="h-auto !py-0">create-ink-app</code> CLI{' '}
                <em className="text-[14px] text-gray-500">(Coming soon)</em>
              </li>
              <li className="flex items-center gap-2">
                <code className="h-auto !py-0">
                  <a href="https://github.com/scio-labs/inkathon" target="_blank" rel="noopener noreferrer">
                    ink!athon
                  </a>
                </code>
                Boilerplate
              </li>
              <li className="flex items-center gap-2">
                <code className="h-auto !py-0">
                  <a href="https://github.com/scio-labs/use-inkathon" target="_blank" rel="noopener noreferrer">
                    useInkathon
                  </a>
                </code>
                Hooks & Utility Library
              </li>
              <li className="flex items-center gap-2">
                <code className="h-auto !py-0">
                  <a href="https://github.com/scio-labs/zink" target="_blank" rel="noopener noreferrer">
                    zink!
                  </a>
                </code>
                Smart Contract Macros
              </li>
            </ul>
          </div>
        </div>
      </>
    ),
    image: 'img/projects/inkathon.png',
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
            <em>Quick Fixes:</em> It displays warnings, errors, and gives you suggestions about what might be wrong with
            your code.
          </li>
          <li>
            <em>Completions:</em> Inline info about which attributes and arguments are available for further configuring
            your smart contract&apos;s storage, events, messages, and more.
          </li>
          <li>
            <em>Inline Documentation:</em> just hover over an ink! attribute or argument to read the documentation for
            it.
          </li>
        </ul>

        <p>
          {' '}
          Under the hood, ink! Analyzer is a collection of modular libraries and tools for the semantic analysis of ink!
          smart contract code. This means the individual components can be reused to create things beyond a VSCode
          extension! 🙌
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
  {
    logo: 'img/projects/drink-logo.png',
    title:
      'DRink! is a toolbox for ink! developers that allows for a fully functional ink! contract development without any running node.',
    about: (
      <>
        <p>
          Apart from the core ink! testing framework, Aleph Zero developed the{' '}
          <a href="https://github.com/use-ink/drink" target="_blank" rel="noopener noreferrer">
            DRink! library and cli tool
          </a>
          . It provides you with a powerful environment for interacting with contracts:
        </p>
        <ul className="pl-4 space-y-4 list-disc">
          <li>
            Deploy and call your contracts synchronously, without{' '}
            <b>
              <i>any delays</i>
            </b>{' '}
            related to block production or networking.
          </li>
          <li>
            Gain access to{' '}
            <b>
              <i>powerful features</i>
            </b>{' '}
            that are not available with standard methods like{' '}
            <b>
              <i>contract mocking, enhanced debugging and call tracing.</i>
            </b>
          </li>
          <li>
            Work with{' '}
            <b>
              <i>multiple contracts</i>
            </b>{' '}
            at the same time.
          </li>
          <li>
            Work with{' '}
            <b>
              <i>arbitrary</i>
            </b>{' '}
            runtime configurations, including custom chain extensions and runtime calls.
          </li>
          <li>
            Have{' '}
            <b>
              <i>full control over runtime state</i>
            </b>
            , including block number, timestamp, etc.
          </li>
        </ul>
        <p>
          Check out the{' '}
          <a href="https://github.com/use-ink/drink" target="_blank" rel="noopener noreferrer">
            DRink! repository
          </a>{' '}
          for more info.
        </p>
      </>
    ),
    image: (
      <div className="p-[20%] bg-gradient-to-br from-[#8c7cf7] to-[rgb(189,130,253)] w-full rounded-[18px] border-[5px] border-solid border-[rgb(140,124,247)]">
        <Drink />
      </div>
    ),
  },
]
