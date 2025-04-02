"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4951],{67309:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"background/polkadot-sdk","title":"Polkadot SDK","description":"Polkadot SDK Title Picture","source":"@site/versioned_docs/version-v6/background/polkadot-sdk.md","sourceDirName":"background","slug":"/background/polkadot-sdk","permalink":"/docs/v6/background/polkadot-sdk","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v6/background/polkadot-sdk.md","tags":[],"version":"v6","frontMatter":{"title":"Polkadot SDK","hide_title":true,"slug":"/background/polkadot-sdk"},"sidebar":"reference","previous":{"title":"Smart Contracts vs. Rollups","permalink":"/docs/v6/background/smart-contracts-vs-polkadot-rollups"},"next":{"title":"ink! vs. Solidity","permalink":"/docs/v6/background/ink-vs-solidity"}}');var s=a(74848),n=a(28453);const i={title:"Polkadot SDK",hide_title:!0,slug:"/background/polkadot-sdk"},r="Polkadot SDK",c={},l=[{value:"How does ink! tie into Polkadot SDK?",id:"how-does-ink-tie-into-polkadot-sdk",level:2},{value:"How does the <code>pallet-revive</code> work?",id:"how-does-the-pallet-revive-work",level:2},{value:"Why include <code>pallet-revive</code> on a parachain?",id:"why-include-pallet-revive-on-a-parachain",level:2},{value:"Use Case 1: Smart Contracts as &quot;first-class citizens&quot;",id:"use-case-1-smart-contracts-as-first-class-citizens",level:3},{value:"Use Case 2: Smart Contracts as &quot;second-class citizens&quot;",id:"use-case-2-smart-contracts-as-second-class-citizens",level:3},{value:"Use Case 3: Smart Contracts as a first step into Polkadot or Kusama",id:"use-case-3-smart-contracts-as-a-first-step-into-polkadot-or-kusama",level:3},{value:"Smart Contracts vs. Parachains",id:"smart-contracts-vs-parachains",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",...(0,n.R)(),...e.components},{Head:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o,{children:[(0,s.jsx)("meta",{name:"description",content:"Explanation of how ink! ties into Polkadot SDK and `pallet-revive`."}),(0,s.jsx)("meta",{name:"keywords",content:"Polkadot SDK, ink!, pallet-revive, Smart Contracts"}),(0,s.jsx)("meta",{property:"og:title",content:"How does ink! tie into Polkadot SDK?"}),(0,s.jsx)("meta",{property:"og:description",content:"Explanation of how ink! ties into Polkadot SDK and `pallet-revive`."})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Polkadot SDK Title Picture",src:a(86227).A+"",width:"1600",height:"500"})}),"\n",(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"polkadot-sdk",children:"Polkadot SDK"})}),"\n",(0,s.jsxs)(t.p,{children:["ink! is a programming language for smart contracts; blockchains built with ",(0,s.jsx)(t.a,{href:"https://polkadot.com/platform/sdk",children:"the Polkadot SDK"}),"\ncan choose from a number of smart contract languages which one(s) they want to support.\nink! is one of them. It is an opinionated language that we have built by extending the popular Rust programming language with functionality needed to make it smart contract compatible."]}),"\n",(0,s.jsx)(t.h2,{id:"how-does-ink-tie-into-polkadot-sdk",children:"How does ink! tie into Polkadot SDK?"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://polkadot.com/platform/sdk",children:"Polkadot SDK"})," is a framework for building blockchains \u2013 those can be standalone blockchains or blockchains connected to ",(0,s.jsx)(t.a,{href:"http://kusama.network",children:"Kusama"})," or ",(0,s.jsx)(t.a,{href:"http://polkadot.network",children:"Polkadot"}),", so called ",(0,s.jsx)(t.em,{children:"parachains"}),". The Polkadot SDK contains a number of modules, in Polkadot SDK terminology those are called ",(0,s.jsx)(t.em,{children:"pallets"}),". Polkadot SDK comes with a set of pallets for many requirements modern blockchains typically have \u2013 staking, fungible tokens, non-fungible tokens, governance, etc."]}),"\n",(0,s.jsxs)(t.p,{children:["Polkadot SDK also ships with a module for smart contracts, this module is called ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/revive",children:(0,s.jsx)(t.code,{children:"pallet-revive"})}),".\nIf a parachain is developed in the Polkadot SDK it can easily add smart contract functionality by including this pallet."]}),"\n",(0,s.jsxs)(t.p,{children:["How does ink! come into play here? ink! is a programming language, specifically it is an embedded domain-specific language for the popular Rust programming language. This means that you can use all the normal Rust syntax plus some specifics that we added to make the language suitable for the smart contract world. The ",(0,s.jsx)(t.code,{children:"pallet-revive"})," takes these ink! contracts and executes them safely. So in short: ",(0,s.jsxs)(t.em,{children:["with ink! you can write smart contracts in Rust for blockchains built with the Polkadot SDK that include ",(0,s.jsx)(t.code,{children:"pallet-revive"})]}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:a(15806).A+"",width:"2400",height:"1200"})}),"\n",(0,s.jsxs)(t.h2,{id:"how-does-the-pallet-revive-work",children:["How does the ",(0,s.jsx)(t.code,{children:"pallet-revive"})," work?"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"pallet-revive"})," was intentionally designed in a way that it is decoupled from the language that is used to write smart contracts. The pallet is only the execution environment and it takes RISC-V binary files as input. Smart contracts for this pallet have to be compiled to the RISC-V target architecture."]}),"\n",(0,s.jsxs)(t.p,{children:["For contract developers this means they can use ink! for writing smart contracts, but can also decide on other languages.\nRight now the pallet supports ink! (Rust) and Solidity (via ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/revive",children:"Parity's revive compiler"}),")."]}),"\n",(0,s.jsxs)(t.p,{children:["It's not hard to add new languages. There just needs to be a compiler for the language down to RISC-V bytecode, then it's possible to implement the API of ",(0,s.jsx)(t.code,{children:"pallet-revive"}),'. This API at the moment consists of about 50 functions for anything a smart contract may desire: storage access, cryptographic functionality, environmental information like block numbers, access to functions for getting random numbers or self-terminate the contract, etc. Not all of those have to be implemented in the language \u2012 the ink! "Hello, World!" requires just six API functions. The following schema depicts this relationship:']}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:a(85891).A+"",width:"605",height:"488"})}),"\n",(0,s.jsxs)(t.p,{children:["We think this design is more future-proof than some architectures found in competing ecosystems. There is no tight coupling between language and execution environment. RISC-V is an industry standard and a multitude of programming languages can nowadays be compiled down to it. If in, say ten years time, researchers come up with an innovative language for writing smart contracts (or a subset of an existing language) then as long as there is a compiler that supports RISC-V it will be easy to make this language compatible with ",(0,s.jsx)(t.code,{children:"pallet-revive"}),"."]}),"\n",(0,s.jsxs)(t.h2,{id:"why-include-pallet-revive-on-a-parachain",children:["Why include ",(0,s.jsx)(t.code,{children:"pallet-revive"})," on a parachain?"]}),"\n",(0,s.jsx)(t.p,{children:"There are a couple use cases for including smart contract functionality on a parachain. We distinguish three big ones."}),"\n",(0,s.jsx)(t.h3,{id:"use-case-1-smart-contracts-as-first-class-citizens",children:'Use Case 1: Smart Contracts as "first-class citizens"'}),"\n",(0,s.jsx)(t.p,{children:"The most obvious use case is a parachain which provides smart contracts as a \u201cfirst-class citizen\u201d, meaning smart contracts are the central value proposition of the chain."}),"\n",(0,s.jsxs)(t.p,{children:["Those chains typically take the off-the-shelf ",(0,s.jsx)(t.code,{children:"pallet-revive"})," and create additional innovation on top of it.\nAn example for this is ",(0,s.jsx)(t.a,{href:"https://onpop.io/",children:"Pop Network"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"use-case-2-smart-contracts-as-second-class-citizens",children:'Use Case 2: Smart Contracts as "second-class citizens"'}),"\n",(0,s.jsxs)(t.p,{children:["There is another not so obvious use case for ",(0,s.jsx)(t.code,{children:"pallet-revive"}),": smart contracts as \u201csecond-class citizens\u201d on an existing chain. By this we mean that the central value proposition of the chain has nothing to do with smart contracts, but it still includes them as an add-on."]}),"\n",(0,s.jsxs)(t.p,{children:["We provide an API (called ",(0,s.jsx)(t.a,{href:"/docs/v6/macros-attributes/chain-extension",children:"chain extensions"}),") with which a parachain can expose certain parts of its business logic to smart contract developers. Through this, smart contract developers can utilize the business logic primitives of the chain to build a new application on top of it. Think for example of a decentralized exchange blockchain. This chain would in its simplest form have an order book to place bids and asks \u2012 there is no need for taking untrusted, Turing-complete, programs from the outside. The parachain could decide to expose the order book into smart contracts though, giving external developers the option of building new applications that utilize the order book. For example, to upload trading algorithms as smart contracts to the chain."]}),"\n",(0,s.jsx)(t.p,{children:"Smart contracts here are an opportunity to up the user engagement and drive usage of the chain's native token. And the billing for utilizing the chain comes already built-in with the pallet \u2012 users have to pay gas fees for the execution of their smart contract."}),"\n",(0,s.jsx)(t.h3,{id:"use-case-3-smart-contracts-as-a-first-step-into-polkadot-or-kusama",children:"Use Case 3: Smart Contracts as a first step into Polkadot or Kusama"}),"\n",(0,s.jsxs)(t.p,{children:["A third big use case for ",(0,s.jsx)(t.code,{children:"pallet-revive"})," is to prototype an idea as a proof-of-concept smart contract before leasing a dedicated parachain slot on Polkadot or Kusama."]}),"\n",(0,s.jsx)(t.p,{children:"The time to develop a smart contract and deploy it is shorter than the onboarding story for a parachain. One can deploy a proof-of-concept smart contract first, see if it gains traction and the idea holds up to the real world. Only subsequently, once there is a need for e.g. cheaper transaction fees, more efficient execution, or a governance mechanism for the community, the smart contract could be migrated to a dedicated parachain runtime with its own slot. ink! contracts and Polkadot SDK runtimes are both written in Rust and share similar primitives, this enables a clear path to graduate from a smart contract to its own runtime. Developers can reuse large parts of their code, their tests, as well as frontend and client code."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:a(27958).A+"",width:"2800",height:"1575"})}),"\n",(0,s.jsx)(t.h2,{id:"smart-contracts-vs-parachains",children:"Smart Contracts vs. Parachains"}),"\n",(0,s.jsx)(t.p,{children:"One of the first questions we typically get when somebody learns about Polkadot SDK, Polkadot, or Kusama is when to develop a parachain vs. when to develop a smart contract."}),"\n",(0,s.jsxs)(t.p,{children:["The distinction here is that in the context of Polkadot and Kusama a parachain leases a slot for a couple of months for up to two years. The deal with a lease is that the parachain gets a fixed slot for executing its business logic (typically referred to as its ",(0,s.jsx)(t.em,{children:"state transition function"}),") and can persist its modified state in a block. In the Polkadot SDK terminology this state transition function is called the chain's ",(0,s.jsx)(t.em,{children:"runtime"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The distinction to other ecosystems here is that, in the context of Polkadot, parachains and smart contracts exist at different layers of the stack: ",(0,s.jsx)(t.em,{children:"smart contracts sit on top of parachains"}),". Parachains would usually be described as layer-1 blockchains \u2012 except for that they don't have to build their own security, are upgradable, and interoperable."]}),"\n",(0,s.jsx)(t.p,{children:"It's noteworthy that a parachain's state transition function doesn't get further validated \u2012 it's up to the parachain how it utilizes its slot time. The parachain already pre-paid for its slot when it won the slot auction on Polkadot or Kusama. This means the parachain can build its own (blockchain) world! For example, it can decide on how transaction fees are charged \u2012 or even if transaction fees are charged at all. These options are crucial when building new or more user-friendly business models. Other distinguishing factors between parachains that we observe in the wild are differences in how governance works or the crypto-economics. There are some constraints on how the parachain can build its world though. Like physics in the real world it has to adhere to certain ground rules. For Polkadot and Kusama that's for example the consensus algorithm for the Relay Chain to communicate with the parachain. From those ground rules the advantages of Polkadot and Kusama emerge. Advantages like the aforementioned shared security, cross-chain communication, or guaranteed execution slot time."}),"\n",(0,s.jsxs)(t.p,{children:["For smart contracts, on the other hand, an existing parachain has to include ",(0,s.jsx)(t.code,{children:"pallet-revive"})," for users to deploy smart contracts. The deployed smart contract is always untrusted code. Anyone (or any program) that has tokens of the chain can upload a smart contract without requiring permission. Smart contracts allow ",(0,s.jsx)(t.em,{children:"permissionless"})," deployment of ",(0,s.jsx)(t.em,{children:"untrusted"})," programs on a blockchain. The ",(0,s.jsx)(t.code,{children:"pallet-revive"})," has to assume that these programs are adversarial, it has to put a number of safety pillars in place to ensure that the contract can not e.g. stall the chain or cause state corruption of other contracts. For ",(0,s.jsx)(t.code,{children:"pallet-revive"})," those safety pillars include mechanisms like gas metering or deposits for storing data on-chain."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"To restate this important distinction: developing a parachain runtime is different from developing a smart contract \u2012 a smart contract sits on top of a parachain"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"The trade-off is that with a parachain one has the freedom to decide on (nearly) all the rules that make up the parachain. With a smart contract one is constrained by what the chain allows and the safety pillars that necessarily have to be in place. A smart contract can never be as fast as a native pallet built in the parachain runtime \u2012 there is too much logic in between.\nA smart contract on the other hand has less friction for developing and deploying it. Developers don't have to take care of governance, crypto-economics, etc. One just needs a few tokens and can go on its merry way deploying a smart contract. It's as simple as that."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:a(77467).A+"",width:"2400",height:"1200"})})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},27958:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/ink-gateway-f45ef65bb203393f5fd975fd4c3e10f5.jpg"},15806:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/ink-pallet-contracts-9fb60b4f162b48bbc8cd59608383f638.png"},85891:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/ink-polkavm-riscv-solidity-9111ff16c678ce95ec5cb477aed942e5.svg"},77467:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/smart-contract-vs-parachain-ebe1233980ba17f60e1f222b4f03966e.png"},86227:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/polkadot-4d618a57553d9ebe03bf295b18e1be40.svg"},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>r});var o=a(96540);const s={},n=o.createContext(s);function i(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);