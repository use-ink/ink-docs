"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9596],{41101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"frontend/overview","title":"Overview","description":"Frontend Title Picture","source":"@site/versioned_docs/version-v6/frontend/overview.md","sourceDirName":"frontend","slug":"/frontend/overview","permalink":"/docs/v6/frontend/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v6/frontend/overview.md","tags":[],"version":"v6","frontMatter":{"title":"Overview","slug":"/frontend/overview","hide_title":true},"sidebar":"reference","previous":{"title":"non_fallible_api","permalink":"/docs/v6/linter/rules/non_fallible_api"},"next":{"title":"Overview","permalink":"/docs/v6/standards/overview"}}');var s=n(74848),i=n(28453);const o={title:"Overview",slug:"/frontend/overview",hide_title:!0},a="Overview",c={},l=[{value:"JavaScript/TypeScript Tools",id:"javascripttypescript-tools",level:2},{value:"Using no libraries",id:"using-no-libraries",level:3},{value:"Low level libraries",id:"low-level-libraries",level:3},{value:"React",id:"react",level:3},{value:"React and Next.js",id:"react-and-nextjs",level:3},{value:"Other Languages",id:"other-languages",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Frontend Title Picture",src:n(26457).A+"",width:"1600",height:"500"})}),"\n",(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"overview",children:"Overview"})}),"\n",(0,s.jsxs)(t.admonition,{type:"caution",children:[(0,s.jsx)(t.p,{children:"This page has not yet been updated to ink! v6."}),(0,s.jsx)(t.p,{children:"TODO @peterwht Please read this page and see what's still up to date.\nThe idea was to no longer have tutorials on frontends here, but I would still keep\nsome pointers around because it's such an obviously important topic."})]}),"\n",(0,s.jsxs)(t.p,{children:["Now after you ",(0,s.jsx)(t.a,{href:"/docs/v6/getting-started/creating-an-ink-project",children:"wrote"}),", ",(0,s.jsx)(t.a,{href:"/docs/v6/getting-started/building-your-contract",children:"compiled"})," and ",(0,s.jsx)(t.a,{href:"/docs/v6/getting-started/deploy-your-contract",children:"deployed your smart contract"}),", it is time to craft a user experience around it."]}),"\n",(0,s.jsx)(t.p,{children:"This experience can take many shapes from mobile app to interactive terminal applications. In this section we are focusing on the most prominent shape in web3 right now, web apps."}),"\n",(0,s.jsx)(t.p,{children:"Although we love Rust, the native language of the web is JavaScript. Thereby naturally the best tools for creating web experiences are available for JavaScript. Hence, the tools for smart contract interaction with JavaScript are the most advanced as well. To be precise all JavaScript tools mentioned here, actually leverage TypeScript to offer a JavaScript and a typesafe TypeScript experience."}),"\n",(0,s.jsx)(t.h2,{id:"javascripttypescript-tools",children:"JavaScript/TypeScript Tools"}),"\n",(0,s.jsx)(t.p,{children:"There are several levels of abstraction where you can start your journey creating a web frontend for your contracts. Each levels offers different advantages and disadvantages. The following list is of tools. They are sorted from the most generic no third party library way to interact with Polkadot's smart contracts to the most opinionated template using libraries and proven frontend frameworks."}),"\n",(0,s.jsx)(t.h3,{id:"using-no-libraries",children:"Using no libraries"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/build-node-interaction",children:"RPC Interface"})," ",(0,s.jsx)(t.strong,{children:"(not recommended)"}),": nodes participating in the blockchain network offer an ",(0,s.jsx)(t.a,{href:"https://www.jsonrpc.org/",children:"JSON RPC interface"})," to interact with the blockchains state and capabilities."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"low-level-libraries",children:"Low level libraries"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://polkadot.js.org/docs/api",children:(0,s.jsx)(t.code,{children:"@polkadot/api"})})," ",(0,s.jsx)(t.strong,{children:"(not recommended)"}),": allows for most general interaction with Polkadot-SDK based blockchains from JavaScript. In order to talk to smart-contracts, one would use the ",(0,s.jsx)(t.code,{children:"pallet-contracts"})," runtime calls."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://polkadot.js.org/docs/api-contract",children:(0,s.jsx)(t.code,{children:"@polkadot/api-contract"})})," ",(0,s.jsx)(t.strong,{children:"(recommended)"}),": abstraction on top of ",(0,s.jsx)(t.code,{children:"@polkadot/api"})," for the ",(0,s.jsx)(t.code,{children:"pallet-contracts"}),". Makes interaction with smart contracts more comfortable and type safe."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"react",children:"React"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/scio-labs/use-inkathon",children:(0,s.jsx)(t.code,{children:"useInkathon"})})," ",(0,s.jsx)(t.strong,{children:"(recommended)"}),": A hooks library for the popular frontend javascript framework React with focus on smart-contract interactions. Built using ",(0,s.jsx)(t.code,{children:"@polkadot/api"})," & ",(0,s.jsx)(t.code,{children:"@polkadot/api-contract"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"react-and-nextjs",children:"React and Next.js"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/scio-labs/inkathon",children:(0,s.jsx)(t.code,{children:"inkathon"})})," ",(0,s.jsx)(t.strong,{children:"(recommended)"}),": Full Stack web app template using the popular full stack template ",(0,s.jsx)(t.code,{children:"Nextjs"}),". Itself is using ",(0,s.jsx)(t.code,{children:"useInkathon"}),". The fastest way to get up and running with a smart contract and a corresponding web app."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"other-languages",children:"Other Languages"}),"\n",(0,s.jsx)(t.p,{children:"Of course the browser and JavaScript should not be the one and only platform for smart contract frontends. It's just the most mature for smart contract frontend tooling."}),"\n",(0,s.jsx)(t.p,{children:"The following is a list of libraries which could be used to craft smart-contract dApps on other platforms than the web."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/novasamatech/substrate-sdk-ios",children:"novasamatech/substrate-sdk-ios"}),": low level generic iOS SDK for substrate."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/novasamatech/substrate-sdk-android",children:"novasamatech/substrate-sdk-android"}),": low level Android SDK for substrate."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/paritytech/subxt",children:"paritytech/subxt"}),": Rust library to submit extrinsics (transactions) to a substrate node via RPC."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/polkascan/py-substrate-interface/blob/master/docs/usage/ink-contract-interfacing.md",children:"polkascan/py-substrate-interface"}),": Python library to interface with Substrate nodes."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},26457:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/frontend-0b8f265f639b050d9e9a516ad52faa60.svg"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(96540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);