"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2757],{8901:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/wasm-48af17b90533dbff2c51b498cd364348.svg"},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>o});var t=n(96540);const i={},a=t.createContext(i);function r(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:s},e.children)}},86484:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"intro/why-webassembly","title":"Why WebAssembly for Smart Contracts?","description":"Wasm Title Picture","source":"@site/versioned_docs/version-v4/intro/why-webassembly.md","sourceDirName":"intro","slug":"/why-webassembly-for-smart-contracts","permalink":"/docs/v4/why-webassembly-for-smart-contracts","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v4/intro/why-webassembly.md","tags":[],"version":"v4","frontMatter":{"title":"Why WebAssembly for Smart Contracts?","hide_title":true,"slug":"/why-webassembly-for-smart-contracts"},"sidebar":"reference","previous":{"title":"Why Rust for Smart Contracts?","permalink":"/docs/v4/why-rust-for-smart-contracts"},"next":{"title":"Smart Contracts in Polkadot","permalink":"/docs/v4/smart-contracts-polkadot"}}');var i=n(74848),a=n(28453);const r={title:"Why WebAssembly for Smart Contracts?",hide_title:!0,slug:"/why-webassembly-for-smart-contracts"},o="Why WebAssembly for Smart Contracts?",l={},c=[];function h(e){const s={h1:"h1",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Wasm Title Picture",src:n(8901).A+"",width:"1600",height:"500"})}),"\n",(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"why-webassembly-for-smart-contracts",children:"Why WebAssembly for Smart Contracts?"})}),"\n",(0,i.jsx)(s.p,{children:"We made a conscious decision for WebAssembly as the target architecture of ink!.\nOur decision was made up by these reasons:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)("span",{class:"highlight",children:"High performance: "}),"Wasm is high performance \u2014 it\u2019s built to be as close to native machine code as possible while still being platform independent."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)("span",{class:"highlight",children:"Small size: "}),"It facilitates small binaries to ship over the internet to devices with potentially slow internet connection.\nThis is a great fit for the space-constrained blockchain world."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)("span",{class:"highlight",children:"General VM & bytecode: "}),"\nIt was developed so that code can be deployed in any browser with the same result.\nContrary to the EVM it was not developed towards a very specific use case,\nthis has the benefit of a lot of tooling being available and large\ncompanies putting a lot of resources into furthering Wasm development."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)("span",{class:"highlight",children:"Efficient JIT execution: "}),"\n64 and 32-bit integer operation support that maps one-to-one with CPU instructions."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)("span",{class:"highlight",children:"Minimalistic: "})," Formal spec that fits on a single page."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)("span",{class:"highlight",children:"Deterministic execution: "}),"\nWasm is easily made deterministic by removing floating point operations, which is necessary for consensus algorithms."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)("span",{class:"highlight",children:"Open Standards > Custom Solutions: "}),"\nWasm is a standard for web browsers developed by W3C workgroup that includes Google, Mozilla, and others.\nThere\u2019s been many years of work put into Wasm, both by compiler and standardization teams."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)("span",{class:"highlight",children:"Many languages available: "})," Wasm expands the family of languages available to smart contract developers to include Rust, C/C++, C#, Typescript, Haxe, and Kotlin. This means you can write smart contracts in whichever language you\u2019re familiar with, though we\u2019re partial to Rust due to its lack of runtime overhead and inherent security properties."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)("span",{class:"highlight",children:"Memory-safe, sandboxed, and platform-independent."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)("span",{class:"highlight",children:"LLVM support: "}),"\nSupported by the LLVM compiler infrastructure project, meaning that Wasm benefits from over a decade of LLVM\u2019s compiler optimization."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)("span",{class:"highlight",children:"Large companies involved: "})," Continually developed by major companies such as Google, Apple, Microsoft, Mozilla, and Facebook."]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);