"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[3724],{9034:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"intro/how-it-works","title":"How it Works \u2013 Substrate","description":"ink! is a programming language for smart contracts; blockchains built with the Substrate framework","source":"@site/docs/intro/how-it-works.md","sourceDirName":"intro","slug":"/how-it-works","permalink":"/how-it-works","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/docs/intro/how-it-works.md","tags":[],"version":"current","frontMatter":{"title":"How it Works \u2013 Substrate","hide_title":true,"slug":"/how-it-works"},"sidebar":"reference","previous":{"title":"Smart Contracts in Polkadot","permalink":"/smart-contracts-polkadot"},"next":{"title":"ink! vs. Solidity","permalink":"/ink-vs-solidity"}}');var n=a(4848),o=a(8453);const i={title:"How it Works \u2013 Substrate",hide_title:!0,slug:"/how-it-works"},r="How it Works \u2013 Substrate",c={},l=[{value:"How does ink! tie into Substrate?",id:"how-does-ink-tie-into-substrate",level:2},{value:"How does the <code>pallet-contracts</code> work?",id:"how-does-the-pallet-contracts-work",level:2},{value:"Why include <code>pallet-contracts</code> on a parachain?",id:"why-include-pallet-contracts-on-a-parachain",level:2},{value:"Use Case 1: Smart Contracts as &quot;first-class citizens&quot;",id:"use-case-1-smart-contracts-as-first-class-citizens",level:3},{value:"Use Case 2: Smart Contracts as &quot;second-class citizens&quot;",id:"use-case-2-smart-contracts-as-second-class-citizens",level:3},{value:"Use Case 3: Smart Contracts as a first step into Polkadot or Kusama",id:"use-case-3-smart-contracts-as-a-first-step-into-polkadot-or-kusama",level:3},{value:"Smart Contracts vs. Parachains",id:"smart-contracts-vs-parachains",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{src:"/img/title/substrate.svg",className:"titlePic"}),"\n",(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"how-it-works--substrate",children:"How it Works \u2013 Substrate"})}),"\n",(0,n.jsxs)(t.p,{children:["ink! is a programming language for smart contracts; blockchains built with ",(0,n.jsx)(t.a,{href:"http://substrate.io",children:"the Substrate framework"}),"\ncan choose from a number of smart contract languages which one(s) they want to support.\nink! is one of them. It is an opinionated language that we have built by extending the popular Rust programming language with functionality needed to make it smart contract compatible."]}),"\n",(0,n.jsx)(t.h2,{id:"how-does-ink-tie-into-substrate",children:"How does ink! tie into Substrate?"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://substrate.io",children:"Substrate"})," is a framework for building blockchains \u2013 those can be standalone blockchains or blockchains connected to ",(0,n.jsx)(t.a,{href:"http://kusama.network",children:"Kusama"})," or ",(0,n.jsx)(t.a,{href:"http://polkadot.network",children:"Polkadot"}),", so called ",(0,n.jsx)(t.em,{children:"parachains"}),". Substrate contains a number of modules, in Substrate terminology those are called ",(0,n.jsx)(t.em,{children:"pallets"}),". Substrate comes with a set of pallets for many requirements modern blockchains typically have \u2013 staking, fungible tokens, non-fungible tokens, governance, etc."]}),"\n",(0,n.jsxs)(t.p,{children:["Substrate also ships with a module for smart contracts, this module is called ",(0,n.jsx)(t.code,{children:"pallet-contracts"}),". If a parachain is developed in Substrate it can easily add smart contract functionality by including this pallet."]}),"\n",(0,n.jsxs)(t.p,{children:["How does ink! come into play here? ink! is a programming language, specifically it is an embedded domain-specific language for the popular Rust programming language. This means that you can use all the normal Rust syntax plus some specifics that we added to make the language suitable for the smart contract world. The ",(0,n.jsx)(t.code,{children:"pallet-contracts"})," takes these ink! contracts and executes them safely. So in short: ",(0,n.jsxs)(t.em,{children:["with ink! you can write smart contracts in Rust for blockchains built with Substrate that include ",(0,n.jsx)(t.code,{children:"pallet-contracts"})]}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(5806).A+"",width:"2400",height:"1200"})}),"\n",(0,n.jsxs)(t.h2,{id:"how-does-the-pallet-contracts-work",children:["How does the ",(0,n.jsx)(t.code,{children:"pallet-contracts"})," work?"]}),"\n",(0,n.jsxs)(t.p,{children:["We intentionally designed ",(0,n.jsx)(t.code,{children:"pallet-contracts"})," in a way that it is decoupled from the language that is used to write smart contracts. The pallet is only the execution environment and it takes WebAssembly files as input. Smart contracts for this pallet have to be compiled to the WebAssembly (Wasm) target architecture."]}),"\n",(0,n.jsx)(t.p,{children:"For contract developers this means they can use ink! for writing smart contracts, but can also decide on other languages. Right now three languages to choose from exist:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/use-ink/ink",children:"Parity's ink!"})," for Rust."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/patractlabs/ask",children:"ask!"})," for AssemblyScript."]}),"\n",(0,n.jsxs)(t.li,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/hyperledger-labs/solang",children:"Solang"})," compiler for Solidity."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["It's not hard to add new languages. There just needs to be a compiler for the language down to WebAssembly, then it's possible to implement the API of ",(0,n.jsx)(t.code,{children:"pallet-contracts"}),'. This API at the moment consists of about 50 functions for anything a smart contract may desire: storage access, cryptographic functionality, environmental information like block numbers, access to functions for getting random numbers or self-terminate the contract, etc. Not all of those have to be implemented in the language \u2012 the ink! "Hello, World!" requires just six API functions. The following schema depicts this relationship:']}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(6957).A+"",width:"1200",height:"967"})}),"\n",(0,n.jsxs)(t.p,{children:["We think this design is more future-proof than some architectures found in competing ecosystems. There is no tight coupling between language and execution environment. WebAssembly is an industry standard and a multitude of programming languages can nowadays be compiled down to WebAssembly. If in, say ten years time, researchers come up with an innovative language for writing smart contracts (or a subset of an existing language) then as long as there is a WebAssembly compiler it will be easy to make this language compatible with ",(0,n.jsx)(t.code,{children:"pallet-contracts"}),"."]}),"\n",(0,n.jsxs)(t.h2,{id:"why-include-pallet-contracts-on-a-parachain",children:["Why include ",(0,n.jsx)(t.code,{children:"pallet-contracts"})," on a parachain?"]}),"\n",(0,n.jsx)(t.p,{children:"There are a couple use cases for including smart contract functionality on a parachain. We distinguish three big ones."}),"\n",(0,n.jsx)(t.h3,{id:"use-case-1-smart-contracts-as-first-class-citizens",children:'Use Case 1: Smart Contracts as "first-class citizens"'}),"\n",(0,n.jsx)(t.p,{children:"The most obvious use case is a parachain which provides smart contracts as a \u201cfirst-class citizen\u201d, meaning smart contracts are the central value proposition of the chain."}),"\n",(0,n.jsxs)(t.p,{children:["Those chains typically take the off-the-shelf ",(0,n.jsx)(t.code,{children:"pallet-contracts"})," and create some additional innovation on top of it. Examples of this are:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://astar.network",children:"Astar"}),": a parachain team that has built a layer on top of ",(0,n.jsx)(t.code,{children:"pallet-contracts"})," so that contract developers can earn a passive income whenever their contracts are being used."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.phala.network",children:"Phala"}),": a parachain team that utilizes ",(0,n.jsx)(t.code,{children:"pallet-contracts"})," in a trusted execution environment, enabling confidential smart contract execution and interoperability."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://alephzero.org",children:"Aleph Zero"}),": uses the ",(0,n.jsx)(t.code,{children:"pallet-contracts"})," in a zero-knowledge context."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://www.t3rn.io",children:"t3rn"}),": uses ",(0,n.jsx)(t.code,{children:"pallet-contracts"})," as a building block to enable multi-chain execution for smart contracts."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"use-case-2-smart-contracts-as-second-class-citizens",children:'Use Case 2: Smart Contracts as "second-class citizens"'}),"\n",(0,n.jsxs)(t.p,{children:["There is another not so obvious use case for ",(0,n.jsx)(t.code,{children:"pallet-contracts"}),": smart contracts as \u201csecond-class citizens\u201d on an existing chain. By this we mean that the central value proposition of the chain has nothing to do with smart contracts, but it still includes them as an add-on."]}),"\n",(0,n.jsxs)(t.p,{children:["We provide an API (called ",(0,n.jsx)(t.a,{href:"/macros-attributes/chain-extension",children:"chain extensions"}),") with which a parachain can expose certain parts of its business logic to smart contract developers. Through this, smart contract developers can utilize the business logic primitives of the chain to build a new application on top of it. Think for example of a decentralized exchange blockchain. This chain would in its simplest form have an order book to place bids and asks \u2012 there is no need for taking untrusted, Turing-complete, programs from the outside. The parachain could decide to expose the order book into smart contracts though, giving external developers the option of building new applications that utilize the order book. For example, to upload trading algorithms as smart contracts to the chain."]}),"\n",(0,n.jsx)(t.p,{children:"Smart contracts here are an opportunity to up the user engagement and drive usage of the chain's native token. And the billing for utilizing the chain comes already built-in with the pallet \u2012 users have to pay gas fees for the execution of their smart contract."}),"\n",(0,n.jsx)(t.h3,{id:"use-case-3-smart-contracts-as-a-first-step-into-polkadot-or-kusama",children:"Use Case 3: Smart Contracts as a first step into Polkadot or Kusama"}),"\n",(0,n.jsxs)(t.p,{children:["A third big use case for ",(0,n.jsx)(t.code,{children:"pallet-contracts"})," is to prototype an idea as a proof-of-concept smart contract before leasing a dedicated parachain slot on Polkadot or Kusama."]}),"\n",(0,n.jsx)(t.p,{children:"The time to develop a smart contract and deploy it is shorter than the onboarding story for a parachain. One can deploy a proof-of-concept smart contract first, see if it gains traction and the idea holds up to the real world. Only subsequently, once there is a need for e.g. cheaper transaction fees, more efficient execution, or a governance mechanism for the community, the smart contract could be migrated to a dedicated parachain runtime with its own slot. ink! contracts and Substrate runtimes are both written in Rust and share similar primitives, this enables a clear path to graduate from a smart contract to its own runtime. Developers can reuse large parts of their code, their tests, as well as frontend and client code."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(7958).A+"",width:"2800",height:"1575"})}),"\n",(0,n.jsx)(t.h2,{id:"smart-contracts-vs-parachains",children:"Smart Contracts vs. Parachains"}),"\n",(0,n.jsx)(t.p,{children:"One of the first questions we typically get when somebody learns about Substrate, Polkadot, or Kusama is when to develop a parachain vs. when to develop a smart contract."}),"\n",(0,n.jsxs)(t.p,{children:["The distinction here is that in the context of Polkadot and Kusama a parachain leases a slot for a couple of months for up to two years. The deal with a lease is that the parachain gets a fixed slot for executing its business logic (typically referred to as its ",(0,n.jsx)(t.em,{children:"state transition function"}),") and can persist its modified state in a block. In Substrate terminology this state transition function is called the chain's ",(0,n.jsx)(t.em,{children:"runtime"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The distinction to other ecosystems here is that, in the context of Polkadot, parachains and smart contracts exist at different layers of the stack: ",(0,n.jsx)(t.em,{children:"smart contracts sit on top of parachains"}),". Parachains would usually be described as layer-1 blockchains \u2012 except for that they don't have to build their own security, are upgradable, and interoperable."]}),"\n",(0,n.jsx)(t.p,{children:"It's noteworthy that a parachain's state transition function doesn't get further validated \u2012 it's up to the parachain how it utilizes its slot time. The parachain already pre-paid for its slot when it won the slot auction on Polkadot or Kusama. This means the parachain can build its own (blockchain) world! For example, it can decide on how transaction fees are charged \u2012 or even if transaction fees are charged at all. These options are crucial when building new or more user-friendly business models. Other distinguishing factors between parachains that we observe in the wild are differences in how governance works or the crypto-economics. There are some constraints on how the parachain can build its world though. Like physics in the real world it has to adhere to certain ground rules. For Polkadot and Kusama that's for example the consensus algorithm for the Relay Chain to communicate with the parachain. From those ground rules the advantages of Polkadot and Kusama emerge. Advantages like the aforementioned shared security, cross-chain communication, or guaranteed execution slot time."}),"\n",(0,n.jsxs)(t.p,{children:["For smart contracts, on the other hand, an existing parachain has to include the ",(0,n.jsx)(t.code,{children:"pallet-contracts"})," for users to deploy smart contracts. The deployed smart contract is always untrusted code. Anyone (or any program) that has tokens of the chain can upload a smart contract without requiring permission. Smart contracts allow ",(0,n.jsx)(t.em,{children:"permissionless"})," deployment of ",(0,n.jsx)(t.em,{children:"untrusted"})," programs on a blockchain. The ",(0,n.jsx)(t.code,{children:"pallet-contracts"})," has to assume that these programs are adversarial, it has to put a number of safety pillars in place to ensure that the contract can not e.g. stall the chain or cause state corruption of other contracts. For ",(0,n.jsx)(t.code,{children:"pallet-contracts"})," those safety pillars include mechanisms like gas metering or deposits for storing data on-chain."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"To restate this important distinction: developing a parachain runtime is different from developing a smart contract \u2012 a smart contract sits on top of a parachain"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The trade-off is that with a parachain one has the freedom to decide on (nearly) all the rules that make up the parachain. With a smart contract one is constrained by what the chain allows and the safety pillars that necessarily have to be in place. A smart contract can never be as fast as a native pallet built in the parachain runtime \u2012 there is too much logic in between.\nA smart contract on the other hand has less friction for developing and deploying it. Developers don't have to take care of governance, crypto-economics, etc. One just needs a few tokens and can go on its merry way deploying a smart contract. It's as simple as that."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(7467).A+"",width:"2400",height:"1200"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},7958:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/ink-gateway-f45ef65bb203393f5fd975fd4c3e10f5.jpg"},5806:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/ink-pallet-contracts-9fb60b4f162b48bbc8cd59608383f638.png"},6957:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/ink-substrate-e79085d5e963e7efd3ce90f17a711ba1.png"},7467:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/smart-contract-vs-parachain-ebe1233980ba17f60e1f222b4f03966e.png"},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>r});var s=a(6540);const n={},o=s.createContext(n);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);