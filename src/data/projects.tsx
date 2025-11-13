import React from 'react'
import type { Project } from '../components/projects/project-grid'
import Drink from '@site/static/img/projects/drink.svg'

export const projects: Project[] = [
  {
    link: 'https://inkathon.xyz/',
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
    link: 'https://analyze.ink/',
    logo: 'img/projects/ink-analyzer-logo.svg',
    title: 'A collection of modular and reusable libraries and tools for improving of ink! language support in IDEs/editors.',
    about: (
      <>
        <p>
          For VS Code users, ink! analyzer ships a
          {' '}
          <a href="https://marketplace.visualstudio.com/items?itemName=ink-analyzer.ink-analyzer"
             target="_blank"
             rel="noopener noreferrer">
            VS Code extension
          </a>.
        </p>
        <p>
          For other IDEs/editors with
          {' '}
          <a href="https://microsoft.github.io/language-server-protocol/"
             target="_blank"
             rel="noopener noreferrer">
            LSP (Language Server Protocol)
          </a>
          {' '}support, ink! analyzer provides
          {' '}
          <a href="https://github.com/ink-analyzer/ink-analyzer/releases"
             target="_blank"
             rel="noopener noreferrer">
            prebuilt language server binaries for Windows, Linux and macOS
          </a>.
        </p>
        <p>
          <a href="https://analyze.ink/" target="_blank" rel="noopener noreferrer">ink! analyzer</a> provides many nifty
          features, including but not limited to:
        </p>
        <ul className="pl-4 space-y-4 list-disc">
          <li>
            <em>Diagnostics and quickfixes :</em> errors and warnings based on ink! semantic rules,
            and suggested edits/code actions for fixing these errors and warnings.
          </li>
          <li>
            <em>Completions:</em> inline code suggestions for ink! attribute macros, arguments and items
            for defining and configuring your ink! smart contract's storage, constructors, messages,
            events, errors, tests and much more!
          </li>
          <li>
            <em>Code/intent actions:</em> contextual assists for:
            adding relevant ink! attribute macros, arguments and items;
            migrating ink! projects to newer versions of ink!;
            extracting ink! items (e.g. ink! events) into standalone packages, and much more!
          </li>
          <li>
            <em>Inlay hints:</em> inline type and format information for ink! attribute arguments value
            (e.g. `u32 | _ | @` for ink! message selectors).
          </li>
          <li>
            <em>Signature help:</em> popup information for valid ink! attribute arguments for the current context/cursor
            position.
          </li>
          <li>
            <em>Hover docs:</em> just hover over an ink! attribute or argument to read the documentation for it.
          </li>
        </ul>
        <p>
          Because of ink! analyzer's modular architecture and LSP support, its individual components
          (i.e. the
          {' '}
          <a href="https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/analyzer"
             target="_blank"
             rel="noopener noreferrer">
            semantic analyzer
          </a>
          {' '}and
          {' '}
          <a href="https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/lsp-server"
             target="_blank"
             rel="noopener noreferrer">
            language server
          </a>
          ) can be reused to create other tools beyond a VS Code extension! 🙌
        </p>
        <p>
          <a href="https://github.com/davidsemakula"
             target="_blank"
             rel="noopener noreferrer">
            David Semakula
          </a> (the creator of ink! analyzer) maintains a blog about the project at
          {' '}
          <a href="https://analyze.ink" target="_blank" rel="noopener noreferrer">
            https://analyze.ink
          </a>
          .
        </p>
      </>
    ),
    image: 'img/projects/ink-analyzer-poster.svg',
  },
  {
    link: 'https://github.com/use-ink/drink',
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
      <div className="p-[20%] bg-gradient-to-br from-[#8c7cf7] to-[rgb(189,130,253)] w-full">
        <Drink />
      </div>
    ),
  },
]
