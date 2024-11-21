"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[3875],{9171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var i=t(4848),s=t(8453);const a={title:"Chain Environment Types",slug:"/basics/chain-environment-types",hide_title:!0},r="Chain Environment Types",o={id:"basics/environment",title:"Chain Environment Types",description:"If you write a contract for a chain that deviates from the default",source:"@site/versioned_docs/version-4.x/basics/environment.md",sourceDirName:"basics",slug:"/basics/chain-environment-types",permalink:"/4.x/basics/chain-environment-types",draft:!1,unlisted:!1,editUrl:"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-4.x/basics/environment.md",tags:[],version:"4.x",frontMatter:{title:"Chain Environment Types",slug:"/basics/chain-environment-types",hide_title:!0},sidebar:"reference",previous:{title:"Environment Functions",permalink:"/4.x/basics/environment-functions"},next:{title:"Metadata",permalink:"/4.x/basics/metadata"}},c={},h=[];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{src:"/img/title/environment.svg",className:"titlePic"}),"\n",(0,i.jsx)(n.h1,{id:"chain-environment-types",children:"Chain Environment Types"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["If you write a contract for a chain that deviates from the default\nSubstrate types, you have to make sure to configure that chain's\n",(0,i.jsx)(n.code,{children:"Environment"})," for your contract!"]})}),"\n",(0,i.jsxs)(n.p,{children:["ink! defines a trait ",(0,i.jsx)(n.a,{href:"https://use-ink.github.io/ink/ink_env/trait.Environment.html",children:(0,i.jsx)(n.code,{children:"Environment"})}),"\nand also a default implementation of that trait \u2012 ",(0,i.jsx)(n.a,{href:"https://use-ink.github.io/ink/ink_env/enum.DefaultEnvironment.html",children:(0,i.jsx)(n.code,{children:"DefaultEnvironment"})}),"."]}),"\n",(0,i.jsx)(n.p,{children:"These are the types that ink! uses, if no explicit steps are taken:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'/// The fundamental types of the default configuration.\n#[derive(Debug, Clone, PartialEq, Eq)]\n#[cfg_attr(feature = "std", derive(TypeInfo))]\npub enum DefaultEnvironment {}\n\nimpl Environment for DefaultEnvironment {\n    const MAX_EVENT_TOPICS: usize = 4;\n\n    type AccountId = ink_primitives::AccountId;\n    type Balance = u128;\n    type Hash = ink_primitives::Hash;\n    type Timestamp = u64;\n    type BlockNumber = u32;\n    type ChainExtension = NoChainExtension;\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The context here is that you can use ink! on any blockchain that was built with\nthe ",(0,i.jsx)(n.a,{href:"https://substrate.io",children:"Substrate"})," framework and includes the\n",(0,i.jsx)(n.a,{href:"https://github.com/paritytech/substrate/tree/master/frame/contracts",children:(0,i.jsx)(n.code,{children:"pallet-contracts"})}),"\nmodule."]}),"\n",(0,i.jsxs)(n.p,{children:["Chains built on Substrate can decide on their own which types they want\nto use for e.g. the chain's block number or account id's. For example,\nchains that intend to be compatible to Ethereum typically use the same\ntype as Ethereum for their ",(0,i.jsx)(n.code,{children:"AccountId"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Most Substrate chains stay with the default Substrate types though and\nink! just uses those by default as well. It is possible to configure\na different environment in the contract macro (",(0,i.jsx)(n.a,{href:"https://use-ink.github.io/ink/ink/attr.contract.html#header-arguments",children:"documentation here"}),")\nthough:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink::contract(env = MyCustomTypes)]\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(6540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);