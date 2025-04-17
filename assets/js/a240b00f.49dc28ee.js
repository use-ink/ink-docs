"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7026],{28453:(t,e,a)=>{a.d(e,{R:()=>r,x:()=>i});var o=a(96540);const s={},n=o.createContext(s);function r(t){const e=o.useContext(n);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),o.createElement(n.Provider,{value:e},t.children)}},58758:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"background/contracts-vs-rollups","title":"Smart Contracts vs. Rollups","description":"Polkadot Title Picture","source":"@site/versioned_docs/version-v6/background/contracts-vs-rollups.md","sourceDirName":"background","slug":"/background/smart-contracts-vs-polkadot-rollups","permalink":"/docs/v6/background/smart-contracts-vs-polkadot-rollups","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v6/background/contracts-vs-rollups.md","tags":[],"version":"v6","frontMatter":{"title":"Smart Contracts vs. Rollups","hide_title":true,"slug":"/background/smart-contracts-vs-polkadot-rollups"},"sidebar":"reference","previous":{"title":"Why Rust for Smart Contracts?","permalink":"/docs/v6/background/why-rust-for-smart-contracts"},"next":{"title":"Polkadot SDK","permalink":"/docs/v6/background/polkadot-sdk"}}');var s=a(74848),n=a(28453);const r={title:"Smart Contracts vs. Rollups",hide_title:!0,slug:"/background/smart-contracts-vs-polkadot-rollups"},i="Smart Contracts vs. Polkadot Rollups",c={},l=[{value:"The Difference",id:"the-difference",level:2},{value:"Polkadot Rollups",id:"polkadot-rollups",level:2},{value:"Smart Contracts",id:"smart-contracts",level:2},{value:"The Trade-off",id:"the-trade-off",level:2}];function d(t){const e={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,n.R)(),...t.components},{Head:o}=e;return o||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o,{children:[(0,s.jsx)("meta",{name:"description",content:"Comparison of Polkadot Rollups/Parachains and Smart Contracts."}),(0,s.jsx)("meta",{name:"keywords",content:"Polkadot, Rollups, Parachain, Smart Contracts"}),(0,s.jsx)("meta",{property:"og:title",content:"Smart Contracts vs. Polkadot Rollups"}),(0,s.jsx)("meta",{property:"og:description",content:"Comparison of Polkadot Rollups/Parachains and Smart Contracts."})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Polkadot Title Picture",src:a(86227).A+"",width:"1600",height:"500"})}),"\n",(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"smart-contracts-vs-polkadot-rollups",children:"Smart Contracts vs. Polkadot Rollups"})}),"\n",(0,s.jsx)(e.p,{children:"One of the first questions we typically get when somebody learns about the Polkadot SDK SDK is when to develop a\nrollup (i.e. a parachain) vs. when to develop a smart contract."}),"\n",(0,s.jsx)(e.h2,{id:"the-difference",children:"The Difference"}),"\n",(0,s.jsxs)(e.p,{children:["The distinction here is that in the context of Polkadot and Kusama a parachain leases a slot for a couple of months for up to two years. The deal with a lease is that the parachain gets a fixed slot for executing its business logic (typically referred to as its ",(0,s.jsx)(e.em,{children:"state transition function"}),") and can persist its modified state in a block. In Polkadot SDK terminology this state transition function is called the chain's ",(0,s.jsx)(e.em,{children:"runtime"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:["The distinction to other ecosystems here is that, in the context of Polkadot, parachains and smart contracts exist at different layers of the stack: ",(0,s.jsx)(e.em,{children:"smart contracts sit on top of parachains"}),". Parachains would usually be described as layer-1 blockchains \u2014 except for that they don't have to build their own security, are upgradable, and interoperable."]}),"\n",(0,s.jsx)(e.h2,{id:"polkadot-rollups",children:"Polkadot Rollups"}),"\n",(0,s.jsx)(e.p,{children:"It's noteworthy that a parachain's state transition function doesn't get further validated \u2014 it's up to the parachain how it utilizes its slot time. The parachain already pre-paid for its slot when it won the slot auction on Polkadot or Kusama. This means the parachain can build its own (blockchain) world! For example, it can decide on how transaction fees are charged \u2012 or even if transaction fees are charged at all. These options are crucial when building new or more user-friendly business models."}),"\n",(0,s.jsx)(e.p,{children:"Other distinguishing factors between parachains that we observe in the wild are differences in how governance works or the crypto-economics. There are some constraints on how the parachain can build its world though. Like physics in the real world it has to adhere to certain ground rules. For Polkadot and Kusama that's for example the consensus algorithm for the Relay Chain to communicate with the parachain. From those ground rules the advantages of Polkadot and Kusama emerge. Advantages like the aforementioned shared security, cross-chain communication, or guaranteed execution slot time."}),"\n",(0,s.jsx)(e.h2,{id:"smart-contracts",children:"Smart Contracts"}),"\n",(0,s.jsxs)(e.p,{children:["For smart contracts, on the other hand, an existing parachain has to include the ",(0,s.jsx)(e.code,{children:"pallet-revive"})," for users to deploy smart contracts. The deployed smart contract is always untrusted code. Anyone (or any program) that has tokens of the chain can upload a smart contract without requiring permission. Smart contracts allow ",(0,s.jsx)(e.em,{children:"permissionless"})," deployment of ",(0,s.jsx)(e.em,{children:"untrusted"})," programs on a blockchain. The ",(0,s.jsx)(e.code,{children:"pallet-revive"})," has to assume that these programs are adversarial, it has to put a number of safety pillars in place to ensure that the contract can not e.g. stall the chain or cause state corruption of other contracts. For ",(0,s.jsx)(e.code,{children:"pallet-revive"})," those safety pillars include mechanisms like gas metering or deposits for storing data on-chain."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.em,{children:"To restate this important distinction: developing a parachain runtime is different from developing a smart contract \u2014 a smart contract sits on top of a parachain"}),"."]}),"\n",(0,s.jsx)(e.h2,{id:"the-trade-off",children:"The Trade-off"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Smart Contract vs. Rollup",src:a(87373).A+"",width:"1780",height:"604"})}),"\n",(0,s.jsx)(e.p,{children:"The trade-off is that with a parachain one has the freedom to decide on (nearly) all the rules that make up the parachain. With a smart contract one is constrained by what the chain allows and the safety pillars that necessarily have to be in place. A smart contract can never be as fast as a native pallet built in the parachain runtime \u2012 there is too much logic in between.\nA smart contract on the other hand has less friction for developing and deploying it. Developers don't have to take care of governance, crypto-economics, etc. One just needs a few tokens and can go on its merry way deploying a smart contract. It's as simple as that."})]})}function h(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},86227:(t,e,a)=>{a.d(e,{A:()=>o});const o=a.p+"assets/images/polkadot-4d618a57553d9ebe03bf295b18e1be40.svg"},87373:(t,e,a)=>{a.d(e,{A:()=>o});const o=a.p+"assets/images/smart-contract-vs-rollup-913f65922dd0f2276e64673f3e9723bd.svg"}}]);