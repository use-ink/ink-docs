"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2222],{2378:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"basics/gas","title":"Gas","description":"Gas Title Picture","source":"@site/docs/basics/gas.md","sourceDirName":"basics","slug":"/basics/gas","permalink":"/docs/v5/basics/gas","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/docs/basics/gas.md","tags":[],"version":"current","frontMatter":{"title":"Gas","slug":"/basics/gas","hide_title":true},"sidebar":"reference","previous":{"title":"Trait Definitions","permalink":"/docs/v5/basics/trait-definitions"},"next":{"title":"Cross-Contract Calling","permalink":"/docs/v5/basics/cross-contract-calling"}}');var n=s(74848),i=s(28453);const r={title:"Gas",slug:"/basics/gas",hide_title:!0},a=void 0,c={},h=[{value:"What is &quot;Gas&quot; in ink!?",id:"what-is-gas-in-ink",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Gas Title Picture",src:s(42512).A+"",width:"1600",height:"500"})}),"\n",(0,n.jsx)(t.h2,{id:"what-is-gas-in-ink",children:'What is "Gas" in ink!?'}),"\n",(0,n.jsx)(t.p,{children:"For ink!, the term Gas refers to the resources used by a contract call.\nIt's important for smart contracts that the caller has to pay for any utilized resource."}),"\n",(0,n.jsxs)(t.p,{children:["Those resources can be either storage space (for storing data in the contract's storage)\nor computational time (for executing the contract and its logic). The term Gas encompasses both\nof these resources: ",(0,n.jsx)(t.code,{children:"Gas = (refTime, proofSize)"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The terms hereby refer to:"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"refTime"}),": The amount of computational time that can be used for execution, in picoseconds."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"proofSize"}),": The amount of storage in bytes that a transaction is allowed to read."]}),"\n",(0,n.jsxs)(t.p,{children:["The term ",(0,n.jsx)(t.code,{children:"refTime"}),' comes from "reference time", referring to Substrate\'s Weights system, where\ncomputation time is benchmarked on reference hardware. You can read more details\n',(0,n.jsx)(t.a,{href:"https://docs.polkadot.com/polkadot-protocol/glossary/#weight",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The term ",(0,n.jsx)(t.code,{children:"proofSize"})," is only relevant for parachains on the ",(0,n.jsx)(t.a,{href:"https://polkadot.network/",children:"Polkadot"}),"\nor ",(0,n.jsx)(t.a,{href:"https://kusama.network/",children:"Kusama"})," networks.\n",(0,n.jsxs)(t.em,{children:["It can be ignored for standalone chains (like ",(0,n.jsx)(t.a,{href:"https://alephzero.org/",children:"Aleph Zero"}),")."]}),"\nOn a high level, ",(0,n.jsx)(t.code,{children:"proofSize"})," is the size of the proof that individual parachains send to\nthe Polkadot or Kusama relay chain to allow re-executing their block for validation\n(this is called Proof of Validity).\nPhrased differently: Layer-1 chains send a proof of validity to a Layer-0 chain to validate the block.\nThis Proof of Validity contains everything necessary to execute the block -- the code of each contract\nthat is executed plus the storage each contract reads and writes."]}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.p,{children:['The terms above come from Substrate\'s "Weights V2" system.\nFor ink!, Gas is a synonym to the concept called "Weight" in the Substrate framework.\nBlockchains that support ink! are built using Substrate which uses the concept of Weight\nto describe the usage of resources.\nThe Weights concept is similar to what smart contract developers might know from other\necosystems, but is more fine grained. It also tracks the utilized bandwidth, not just\nexecution. For ink! smart contracts the utilized bandwidth is the ',(0,n.jsx)(t.code,{children:"proofSize"})," explained above."]}),(0,n.jsxs)(t.p,{children:['We decided on using the term "Gas" to make onboarding easier for developers from other\nsmart contract ecosystems. So: ',(0,n.jsx)(t.code,{children:"Gas = Weight = (refTime, proofSize)"}),"."]})]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},42512:(e,t,s)=>{s.d(t,{A:()=>o});const o=s.p+"assets/images/gas-d83e30aa300b0cf3396bb5e632f28038.svg"},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var o=s(96540);const n={},i=o.createContext(n);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);