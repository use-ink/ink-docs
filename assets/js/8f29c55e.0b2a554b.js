"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1468],{9930:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"getting-started/compiling","title":"Compile Your Contract","description":"Run the following command in your flipper directory to compile your smart contract:","source":"@site/docs/getting-started/compiling.md","sourceDirName":"getting-started","slug":"/getting-started/building-your-contract","permalink":"/getting-started/building-your-contract","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/docs/getting-started/compiling.md","tags":[],"version":"current","frontMatter":{"title":"Compile Your Contract","slug":"/getting-started/building-your-contract","hide_title":true},"sidebar":"reference","previous":{"title":"Creating an ink! Project","permalink":"/getting-started/creating-an-ink-project"},"next":{"title":"Run a Substrate Node","permalink":"/getting-started/running-substrate"}}');var o=n(4848),i=n(8453);const r={title:"Compile Your Contract",slug:"/getting-started/building-your-contract",hide_title:!0},c="Compile Your Contract",a={},l=[{value:"Debug vs. Release Build",id:"debug-vs-release-build",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{src:"/img/title/cargo-contract.svg",className:"titlePic"}),"\n",(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"compile-your-contract",children:"Compile Your Contract"})}),"\n",(0,o.jsxs)(t.p,{children:["Run the following command in your ",(0,o.jsx)(t.code,{children:"flipper"})," directory to compile your smart contract:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"cargo contract build\n"})}),"\n",(0,o.jsxs)(t.p,{children:["This command will build the following for your contract:\na Wasm binary, a metadata file (which contains the\ncontract's ABI) and a ",(0,o.jsx)(t.code,{children:".contract"})," file which bundles both."]}),"\n",(0,o.jsxs)(t.p,{children:["If all goes well, you should see a ",(0,o.jsx)(t.code,{children:"target"})," folder which contains these files:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"target\n  \u2514\u2500 ink\n    \u2514\u2500 flipper.contract\n    \u2514\u2500 flipper.wasm\n    \u2514\u2500 flipper.json\n"})}),"\n",(0,o.jsx)(t.p,{children:"You can think of it this way: the raw Wasm binary contains just\nthe bytecode of your contract. Without further information it's\nnot possible to know what this bytecode refers to. For example,\nwhich functions can be called in there and what their arguments\nare. This additional information that describes what the raw Wasm\nis about is called metadata \u2012 data that describes other data."}),"\n",(0,o.jsx)("p",{children:(0,o.jsx)("img",{src:"/img/metadata.svg"})}),"\n",(0,o.jsx)(t.p,{children:"The purpose of each file is:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"flipper.wasm"}),": This is the raw contract bytecode that will be deployed on-chain."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"flipper.json"}),": The isolated metadata, which is not stored on-chain.\nIt's big and would take up too much space and costs.\nThis file is used by e.g. a dApp user interface to know how to communicate with the on-chain contract."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"flipper.contract"}),": Combines both the contract's bytecode and the metadata. This file\nis used when you are using a Developer UI like ",(0,o.jsx)(t.a,{href:"https://ui.use.ink",children:"Contracts UI"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Let's take a look at the structure of the ",(0,o.jsx)(t.code,{children:"flipper.json"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "source": {...},\n  "contract": {...},\n  "spec": {\n    "constructors": [...],\n    "docs": [],\n    "events": [],\n    "messages": [...],\n  },\n  "storage": {...},\n  "types": [...],\n  "version": "4"\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"This file describes all the interfaces that can be used to interact with your contract:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"types"})," provides the custom ",(0,o.jsx)(t.strong,{children:"data types"})," used throughout the rest of the JSON."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"storage"})," defines all the ",(0,o.jsx)(t.strong,{children:"storage"})," items managed by your contract and how to ultimately access them."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"spec"})," stores information about the callable functions like ",(0,o.jsx)(t.strong,{children:"constructors"})," and ",(0,o.jsx)(t.strong,{children:"messages"})," a\nuser can call to interact with the contract. It also has helpful information like the ",(0,o.jsx)(t.strong,{children:"events"}),"\nthat are emitted by the contract or any ",(0,o.jsx)(t.strong,{children:"docs"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["If you look closely at the constructors and messages, you will also notice a ",(0,o.jsx)(t.code,{children:"selector"})," which\ncontains a 4-byte hash of the function name and is used to route your contract calls to the correct\nfunctions."]}),"\n",(0,o.jsxs)(t.p,{children:["You can also open up the ",(0,o.jsx)(t.code,{children:"flipper.contract"})," file in any text editor. You'll notice that it's\nnearly the same as the ",(0,o.jsx)(t.code,{children:"flipper.json"}),". The only different is that the ",(0,o.jsx)(t.code,{children:".contract"})," file contains\nan additional field with the hex-encoded Wasm bytecode of your contract:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'{\n    "source": {\n        \u2026\n        "wasm": "0x006173\u2026",\n    },\n    \u2026\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["In the next section we will start a ",(0,o.jsx)(t.a,{href:"https://github.com/paritytech/substrate-contracts-node",children:"Substrate Smart Contracts node"}),"\nand configure the ",(0,o.jsx)(t.a,{href:"https://github.com/use-ink/contracts-ui",children:"Contracts UI"})," to interact with it."]}),"\n",(0,o.jsx)(t.h2,{id:"debug-vs-release-build",children:"Debug vs. Release Build"}),"\n",(0,o.jsxs)(t.p,{children:["By default, ",(0,o.jsx)(t.code,{children:"cargo-contract"})," builds the contract in debug mode. This means\nthat the contract will e.g. print statements like"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",children:'ink::env::debug_println!("magic number: {}", value);\n'})}),"\n",(0,o.jsxs)(t.p,{children:["to the node's console if debugging was enabled on the node (",(0,o.jsx)(t.a,{href:"/faq#how-do-i-print-something-to-the-console-from-the-runtime",children:"instructions here"}),").\nTo support functionality like this the debug build of a contract includes some\nheavy-weight logic."]}),"\n",(0,o.jsxs)(t.p,{children:["For contracts that are supposed to run in production you should always build the\ncontract with ",(0,o.jsx)(t.code,{children:"--release"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"cargo contract build --release\n"})}),"\n",(0,o.jsx)(t.p,{children:"This will ensure that nothing unnecessary is compiled into the Wasm blob, making\nyour contract faster and cheaper to deploy and execute."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["With this behavior ",(0,o.jsx)(t.code,{children:"cargo-contract"})," mirrors how ",(0,o.jsx)(t.code,{children:"cargo"})," behaves for Rust programs:\nthe ",(0,o.jsx)(t.code,{children:"--release"})," flag has to be passed explicitly to ",(0,o.jsx)(t.code,{children:"cargo build"}),"."]})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(6540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);