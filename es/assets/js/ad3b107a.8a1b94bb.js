"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5372],{53655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var i=n(74848),r=n(28453);const s={title:"Overview",hide_title:!0,description:"An overview of ink! linter"},l="Overview",o={id:"linter/overview",title:"Overview",description:"An overview of ink! linter",source:"@site/versioned_docs/version-5.x/linter/overview.md",sourceDirName:"linter",slug:"/linter/overview",permalink:"/es/5.x/linter/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/linter/overview.md",tags:[],version:"5.x",frontMatter:{title:"Overview",hide_title:!0,description:"An overview of ink! linter"},sidebar:"reference",previous:{title:"Formato de la Metadata",permalink:"/es/5.x/datastructures/storage-in-metadata"},next:{title:"no_main",permalink:"/es/5.x/linter/rules/no_main"}},c={},a=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Suppressing linter warnings",id:"suppressing-linter-warnings",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{src:"/img/title/text/linter.svg",className:"titlePic"}),"\n",(0,i.jsx)(t.h1,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"ink! includes the linter - a security tool designed to identify typical security issues in smart contracts. The linter is meant to seamlessly fit into the smart contracts development process, ensuring that contracts are thoroughly checked during the build phase before they are deployed to the blockchain."}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(t.p,{children:["The linter is integrated to the contracts build process, therefore you should already have it installed if you are using ",(0,i.jsx)(t.a,{href:"https://github.com/paritytech/cargo-contract",children:(0,i.jsx)(t.code,{children:"cargo-contract"})})," of version ",(0,i.jsx)(t.code,{children:"4.0.0"})," or later."]}),"\n",(0,i.jsx)(t.p,{children:"The linter requires two crates and a fixed Rust toolchain version. You can use\nthese commands to install the required dependencies:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"rustup install nightly-2023-12-28\ncargo install cargo-dylint dylint-link\n"})}),"\n",(0,i.jsx)(t.p,{children:"Note that the linter requires this specific version of the toolchain, since it uses the internal compiler API."}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(t.p,{children:["The linter operates via ",(0,i.jsx)(t.code,{children:"cargo-contract"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"By default, the linter is executed only for the RISC-V target, while for the WASM target, it is not executed unless specifically requested by the user."}),"\n",(0,i.jsx)(t.p,{children:"To perform a build with extra code analysis, run the following command within the contract directory:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"cargo contract build --lint\n"})}),"\n",(0,i.jsx)(t.p,{children:"This command compiles the contract and applies all linting checks. You can find the complete list of lints along with their descriptions in this documentation."}),"\n",(0,i.jsx)(t.h2,{id:"suppressing-linter-warnings",children:"Suppressing linter warnings"}),"\n",(0,i.jsxs)(t.p,{children:["To suppress linter warnings in your ink! smart-contract, you can use ",(0,i.jsx)(t.code,{children:"allow"})," attributes. You can apply these attributes either to a particular piece of code or globally."]}),"\n",(0,i.jsx)(t.p,{children:"Here's how to suppress the specific linter warnings:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:'// Suppressing the `primitive_topic` lint globally\n#[cfg_attr(dylint_lib = "ink_linting", allow(primitive_topic))]\n\n#[ink(message)]\npub fn test(&mut self) {\n    // Suppressing the `strict_balance_equality` lint in a specific place\n    #[cfg_attr(dylint_lib = "ink_linting", allow(strict_balance_equality))]\n    if self.env().balance() == 10 { /* ... */ }\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var i=n(96540);const r={},s=i.createContext(r);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);