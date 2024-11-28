"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2222],{1173:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"basics/gas","title":"Gas","description":"What is \\"Gas\\" in ink!?","source":"@site/docs/basics/gas.md","sourceDirName":"basics","slug":"/basics/gas","permalink":"/basics/gas","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/docs/basics/gas.md","tags":[],"version":"current","frontMatter":{"title":"Gas","slug":"/basics/gas","hide_title":true},"sidebar":"reference","previous":{"title":"Trait Definitions","permalink":"/basics/trait-definitions"},"next":{"title":"Cross-Contract Calling","permalink":"/basics/cross-contract-calling"}}');var o=s(4848),i=s(8453);const r={title:"Gas",slug:"/basics/gas",hide_title:!0},a=void 0,c={},h=[{value:"What is &quot;Gas&quot; in ink!?",id:"what-is-gas-in-ink",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{src:"/img/title/gas.svg",className:"titlePic"}),"\n",(0,o.jsx)(t.h2,{id:"what-is-gas-in-ink",children:'What is "Gas" in ink!?'}),"\n",(0,o.jsx)(t.p,{children:"For ink!, the term Gas refers to the resources used by a contract call.\nIt's important for smart contracts that the caller has to pay for any utilized resource."}),"\n",(0,o.jsxs)(t.p,{children:["Those resources can be either storage space (for storing data in the contract's storage)\nor computational time (for executing the contract and its logic). The term Gas encompasses both\nof these resources: ",(0,o.jsx)(t.code,{children:"Gas = (refTime, proofSize)"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"The terms hereby refer to:"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"refTime"}),": The amount of computational time that can be used for execution, in picoseconds."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"proofSize"}),": The amount of storage in bytes that a transaction is allowed to read."]}),"\n",(0,o.jsxs)(t.p,{children:["The term ",(0,o.jsx)(t.code,{children:"refTime"}),' comes from "reference time", referring to Substrate\'s Weights system, where\ncomputation time is benchmarked on reference hardware. You can read more details\n',(0,o.jsx)(t.a,{href:"https://docs.substrate.io/reference/how-to-guides/weights/",children:"here"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["The term ",(0,o.jsx)(t.code,{children:"proofSize"})," is only relevant for parachains on the ",(0,o.jsx)(t.a,{href:"https://polkadot.network/",children:"Polkadot"}),"\nor ",(0,o.jsx)(t.a,{href:"https://kusama.network/",children:"Kusama"})," networks.\n",(0,o.jsxs)(t.em,{children:["It can be ignored for standalone chains (like ",(0,o.jsx)(t.a,{href:"https://alephzero.org/",children:"Aleph Zero"}),")."]}),"\nOn a high level, ",(0,o.jsx)(t.code,{children:"proofSize"})," is the size of the proof that individual parachains send to\nthe Polkadot or Kusama relay chain to allow re-executing their block for validation\n(this is called Proof of Validity).\nPhrased differently: Layer-1 chains send a proof of validity to a Layer-0 chain to validate the block.\nThis Proof of Validity contains everything necessary to execute the block -- the code of each contract\nthat is executed plus the storage each contract reads and writes."]}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsxs)(t.p,{children:['The terms above come from Substrate\'s "Weights V2" system.\nFor ink!, Gas is a synonym to the concept called "Weight" in the Substrate framework.\nBlockchains that support ink! are built using Substrate which uses the concept of Weight\nto describe the usage of resources.\nThe Weights concept is similar to what smart contract developers might know from other\necosystems, but is more fine grained. It also tracks the utilized bandwidth, not just\nexecution. For ink! smart contracts the utilized bandwidth is the ',(0,o.jsx)(t.code,{children:"proofSize"})," explained above."]}),(0,o.jsxs)(t.p,{children:['We decided on using the term "Gas" to make onboarding easier for developers from other\nsmart contract ecosystems. So: ',(0,o.jsx)(t.code,{children:"Gas = Weight = (refTime, proofSize)"}),"."]})]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(6540);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);