import React from 'react'
import Layout from '../layout'
import { SingleTutorial } from '@site/src/components/tutorials/single-tutorial'
import { NumberedHeadline } from '@site/src/components/tutorials/numbered-headline'
import { TutorialBox } from '@site/src/components/tutorials/tutorial-box'

const head = (
  <>
    <title>Tutorial: Creating an ink! Project | ink!</title>
    <meta
      name="description"
      content="Access tutorials to help you get started with ink! smart contracts and deploy them on Polkadot and beyond."
    />
    <meta name="keywords" content="tutorials, learning, ink!, guides, Polkadot" />
    <meta name="author" content="ink! Alliance" />
    <meta property="og:title" content="Tutorial: Creating an ink! Project | ink!" />
    <meta
      property="og:description"
      content="Access tutorials to help you get started with ink! smart contracts and deploy them on Polkadot and beyond."
    />
    <meta property="og:image" content="https://use-ink.com/img/opengraph-home.png" />
    <meta property="og:url" content="https://use-ink.com" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="ink!" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="ink! logo" />
    <meta property="og:image:type" content="image/png" />
  </>
)

export default function PageTutorialDemo() {
  return (
    <Layout className="container" head={head} hasBackground={false}>
      <div
        className="absolute top-0 left-0 w-full h-[420px] bg-gradient-to-b from-[#241A38] to-[#1A122A] -z-10"
        style={{
          background:
            'linear-gradient(180deg,var(--token-70e94412-5c00-40af-8b3d-721e6d69726c, #5344b8) 0%,rgba(171,171,171,0) 100%)',
        }}
      />
      <SingleTutorial title="Creating an ink! Project">
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
            ultimately allow ink! to do all the magic needed to create Substrate compatible Wasm bytecode! Use the ink!
            CLI to generate an initial smart contract with some scaffolding code. Make sure you are in your working
            directory, and then run:
          </p>
        </section>
        <hr className="" />
        <section className="">
          <NumberedHeadline number={2} level={2}>
            Deploy and interact with your smart contract!
          </NumberedHeadline>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </section>
        <hr className="" />
        <section className="">
          <NumberedHeadline number={3} level={2}>
            Frontend development 101
          </NumberedHeadline>
          <h3>Overview</h3>
          <p>
            Now after you wrote, compiled and deployed your smart contract, it is time to craft a user experience around
            it. While this can take many forms, web apps dominate Web3 today.
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
            are sorted from the most generic no third party library way to interact with Polkadot&apos;s smart contracts
            to the most opinionated template using libraries and proven frontend frameworks.
          </p>
          <TutorialBox>
            <h4>React</h4>
            <hr />
            <p>
              <a href="https://use-ink.com/docs/frontend/react" target="_blank" rel="noopener noreferrer">
                useInkathon
              </a>{' '}
              is recommended ✅ — a hooks library for the popular frontend javascript framework React with focus on
              smart-contract interactions. Built using <code>@polkadot/api</code> & <code>@polkadot/api-contract</code>.
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
              <code>Next.js</code>. Itself is using <code>useInkathon</code>. The fastest way to get up and running with
              a smart contract and a corresponding web app.
            </p>
          </TutorialBox>
          <TutorialBox>
            <h4>Using no third party libraries</h4>
            <hr />
            <p>
              RPC Interface is not recommended ❌— nodes participating in the blockchain network offer an JSON RPC
              interface to interact with the blockchains state and capabilities.
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
              <a href="https://github.com/novasamatech/substrate-sdk-android" target="_blank" rel="noopener noreferrer">
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
      </SingleTutorial>
    </Layout>
  )
}
