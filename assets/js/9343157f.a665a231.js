"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7761],{28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}},61444:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"basics/environment","title":"Chain Environment Types","description":"Environment Title Picture","source":"@site/versioned_docs/version-v4/basics/environment.md","sourceDirName":"basics","slug":"/basics/chain-environment-types","permalink":"/docs/v4/basics/chain-environment-types","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v4/basics/environment.md","tags":[],"version":"v4","frontMatter":{"title":"Chain Environment Types","slug":"/basics/chain-environment-types","hide_title":true},"sidebar":"reference","previous":{"title":"Environment Functions","permalink":"/docs/v4/basics/environment-functions"},"next":{"title":"Metadata","permalink":"/docs/v4/basics/metadata"}}');var s=t(74848),r=t(28453);const a={title:"Chain Environment Types",slug:"/basics/chain-environment-types",hide_title:!0},o="Chain Environment Types",c={},h=[];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Environment Title Picture",src:t(64848).A+"",width:"1600",height:"500"})}),"\n",(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"chain-environment-types",children:"Chain Environment Types"})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["If you write a contract for a chain that deviates from the default\nSubstrate types, you have to make sure to configure that chain's\n",(0,s.jsx)(n.code,{children:"Environment"})," for your contract!"]})}),"\n",(0,s.jsxs)(n.p,{children:["ink! defines a trait ",(0,s.jsx)(n.a,{href:"https://use-ink.github.io/ink/ink_env/trait.Environment.html",children:(0,s.jsx)(n.code,{children:"Environment"})}),"\nand also a default implementation of that trait \u2012 ",(0,s.jsx)(n.a,{href:"https://use-ink.github.io/ink/ink_env/enum.DefaultEnvironment.html",children:(0,s.jsx)(n.code,{children:"DefaultEnvironment"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:"These are the types that ink! uses, if no explicit steps are taken:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'/// The fundamental types of the default configuration.\n#[derive(Debug, Clone, PartialEq, Eq)]\n#[cfg_attr(feature = "std", derive(TypeInfo))]\npub enum DefaultEnvironment {}\n\nimpl Environment for DefaultEnvironment {\n    const MAX_EVENT_TOPICS: usize = 4;\n\n    type AccountId = ink_primitives::AccountId;\n    type Balance = u128;\n    type Hash = ink_primitives::Hash;\n    type Timestamp = u64;\n    type BlockNumber = u32;\n    type ChainExtension = NoChainExtension;\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The context here is that you can use ink! on any blockchain that was built with\nthe ",(0,s.jsx)(n.a,{href:"https://substrate.io",children:"Substrate"})," framework and includes the\n",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/substrate/tree/master/frame/contracts",children:(0,s.jsx)(n.code,{children:"pallet-contracts"})}),"\nmodule."]}),"\n",(0,s.jsxs)(n.p,{children:["Chains built on Substrate can decide on their own which types they want\nto use for e.g. the chain's block number or account id's. For example,\nchains that intend to be compatible to Ethereum typically use the same\ntype as Ethereum for their ",(0,s.jsx)(n.code,{children:"AccountId"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Most Substrate chains stay with the default Substrate types though and\nink! just uses those by default as well. It is possible to configure\na different environment in the contract macro (",(0,s.jsx)(n.a,{href:"https://use-ink.github.io/ink/ink/attr.contract.html#header-arguments",children:"documentation here"}),")\nthough:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink::contract(env = MyCustomTypes)]\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},64848:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/environment-3bec48881efd0599fa6196460aba48d2.svg"}}]);