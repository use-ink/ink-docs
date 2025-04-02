"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8924],{25607:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"cargo-contract/instantiate","title":"Instantiate a Contract","description":"TODO","source":"@site/versioned_docs/version-v3/cargo-contract/instantiate.md","sourceDirName":"cargo-contract","slug":"/cargo-contract-cli/instantiate","permalink":"/docs/v3/cargo-contract-cli/instantiate","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v3/cargo-contract/instantiate.md","tags":[],"version":"v3","frontMatter":{"title":"Instantiate a Contract","slug":"/cargo-contract-cli/instantiate"}}');var a=n(74848),s=n(28453);const c={title:"Instantiate a Contract",slug:"/cargo-contract-cli/instantiate"},r=void 0,i={},d=[];function l(t){const e={a:"a",p:"p",...(0,s.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"TODO"}),"\n",(0,a.jsx)(e.p,{children:"I am trying to deploy and instantiate a contract using a custom-built cargo-contract with the extrinsics feature. The 'deploy' and 'instantiate' commands require a \"secret key uri\" and \"secret key password\" that I don't know how to find for my canvas devnet. Can somebody help me understand what these are and how to obtain them?"}),"\n",(0,a.jsxs)(e.p,{children:["You probably just need to the key for some account with enough funds to deploy and instantiate the contract...I don't think the key is specific to the node in any way\nIf you're running the Canvas node in dev mode, these are the accounts that are pre-funded ",(0,a.jsx)(e.a,{href:"https://github.com/paritytech/canvas-node/blob/master/node/src/chain_spec.rs#L76",children:"https://github.com/paritytech/canvas-node/blob/master/node/src/chain_spec.rs#L76"}),"\nPeople typically use Alice...her information is here ",(0,a.jsx)(e.a,{href:"https://docs.substrate.io/v3/tools/subkey/#well-known-keys",children:"https://docs.substrate.io/v3/tools/subkey/#well-known-keys"})," I guess you'd just leave the password blank\nSo the secret key URI will be bottom drive obey lake curtain smoke basket hold race lonely fit walk//Alice I think"]})]})}function u(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(l,{...t})}):l(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>c,x:()=>r});var o=n(96540);const a={},s=o.createContext(a);function c(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:c(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);