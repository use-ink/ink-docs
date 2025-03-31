import React from 'react'
import Link from '@docusaurus/Link'
import { CaretDoubleLeft } from '@phosphor-icons/react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { RiveAnimation } from '../rive-animation'
import { CTA } from '../cta'
import TitleImage from '@site/static/img/title/heart.svg'
import { NumberedHeadline } from './numbered-headline'
import { TutorialBox } from './tutorial-box'

export function SingleTutorial() {
  return (
    <div className="single-tutorial">
      <section className="max-w-[1000px] mx-auto flex flex-col lg:flex-row gap-[36px] items-center">
        <div className="gap-[120px] flex flex-col">
          <Link
            to="/tutorials"
            className="text-[13px] font-[500] !text-[rgb(220,215,224)] flex items-center gap-1 !no-underline !hover:underline"
          >
            <CaretDoubleLeft size={13} color="rgb(189, 130, 253)" />
            Back to tutorials
          </Link>
          <div className="flex flex-col gap-[12px]">
            <span className="text-[rgb(189,130,253)] text-[21px] font-[500]">ink! Tutorial:</span>
            <h1 className="text-[30px] font-[700] !text-white my-0">Creating an ink! Project</h1>
          </div>
        </div>
        <div className="relative w-[280px] h-[280px] lg:w-[420px] lg:h-[372px] scale-110">
          <RiveAnimation src={useBaseUrl('animations/Squink-educator.riv')} autoplay={true} />
        </div>
      </section>
      <div className="max-w-[1000px] mx-auto rounded-[24px] border-[rgba(140,124,247,.15)] border border-solid bg-[#bd82fd1a] w-full">
        <TitleImage />
        <div className="p-[30px]">
          <section className="">
            <NumberedHeadline number={1} level={2}>
              Start, build and test your smart contract!
            </NumberedHeadline>
            <p>
              ink! is an Embedded Domain Specific Language (EDSL) that you can use to write WebAssembly based smart
              contracts in the Rust programming language.
            </p>
            <p>
              ink! is just standard Rust in a well defined contract format with specialized #[ink(…)] attribute macros.
              These attribute macros tell ink! what the different parts of your Rust smart contract represent, and
              ultimately allow ink! to do all the magic needed to create Substrate compatible Wasm bytecode! Use the
              ink! CLI to generate an initial smart contract with some scaffolding code. Make sure you are in your
              working directory, and then run:
            </p>
          </section>
          <hr className="" />
          <section className="">
            <NumberedHeadline number={2} level={2}>
              Deploy and interact with your smart contract!
            </NumberedHeadline>
          </section>
          <hr className="" />
          <section className="">
            <NumberedHeadline number={3} level={2}>
              Frontend development 101
            </NumberedHeadline>
            <h3>Overview</h3>
            <p>
              Now after you wrote, compiled and deployed your smart contract, it is time to craft a user experience
              around it. While this can take many forms, web apps dominate Web3 today.
            </p>
            <p>
              JavaScript, as the web&apos;s native language, offers the best tools for building these experiences,
              especially for smart contract interaction. Here, we focus on TypeScript-powered tools that provide both
              JavaScript flexibility and type safety.
            </p>
            <hr className="my-10" />
            <h3>JavaScript and TypeScript Tools</h3>
            <p>
              There are several levels of abstraction where you can start your journey creating a web frontend for your
              contracts. Each levels offers different advantages and disadvantages. The following list is of tools. They
              are sorted from the most generic no third party library way to interact with Polkadot&apos;s smart
              contracts to the most opinionated template using libraries and proven frontend frameworks.
            </p>
            <TutorialBox>
              <h4>React</h4>
              <hr />
              <p>
                <a href="https://use-ink.com/docs/frontend/react" target="_blank" rel="noopener noreferrer">
                  useInkathon
                </a>{' '}
                is recommended ✅ — a hooks library for the popular frontend javascript framework React with focus on
                smart-contract interactions. Built using <code>@polkadot/api</code> &{' '}
                <code>@polkadot/api-contract</code>.
              </p>
            </TutorialBox>
            <TutorialBox>
              <h4>React and Next.js</h4>
              <hr />
              <p>
                <a href="https://github.com/novasamatech/inkathon" target="_blank" rel="noopener noreferrer">
                  inkathon
                </a>{' '}
                is recommended ✅ — a full stack web app template using the popular full stack template{' '}
                <code>Next.js</code>. Itself is using <code>useInkathon</code>. The fastest way to get up and running
                with a smart contract and a corresponding web app.
              </p>
            </TutorialBox>
            <hr />
            <h3>Other Languages</h3>
            <p>
              Of course the browser and JavaScript should not be the one and only platform for smart contract frontends.
              It&apos;s just the most mature for smart contract frontend tooling.
            </p>
            <p>
              The following is a list of libraries which could be used to craft smart-contract dApps on other platforms
              than the web.
            </p>
            <ul>
              <li>
                <a href="https://github.com/novasamatech/substrate-sdk-ios" target="_blank" rel="noopener noreferrer">
                  novasamatech/substrate-sdk-ios
                </a>
                : low level generic iOS SDK for substrate.
              </li>
              <li>
                <a
                  href="https://github.com/novasamatech/substrate-sdk-android"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  novasamatech/substrate-sdk-android
                </a>
                : low level Android SDK for substrate.
              </li>
              <li>
                <a href="https://github.com/paritytech/subxt" target="_blank" rel="noopener noreferrer">
                  paritytech/subxt
                </a>
                : Rust library to submit extrinsics (transactions) to a substrate node via RPC.
              </li>
              <li>
                <a
                  href="https://github.com/polkascan/py-substrate-interface/blob/master/docs/usage/ink-contract-interfacing.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  polkascan/py-substrate-interface
                </a>
                : Python library to interface with Substrate nodes.
              </li>
            </ul>
          </section>
        </div>
      </div>
      <CTA text="Have questions not covered here?" btnText="Read full docs" btnLink="/docs" btnVariant="secondary" />
    </div>
  )
}
