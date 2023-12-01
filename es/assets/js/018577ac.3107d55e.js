"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5949],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var r=a(7294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,r,i=function(t,e){if(null==t)return{};var a,r,i={},s=Object.keys(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var l=r.createContext({}),o=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):n(n({},e),t)),a},m=function(t){var e=o(t.components);return r.createElement(l.Provider,{value:e},t.children)},h="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,i=t.mdxType,s=t.originalType,l=t.parentName,m=c(t,["components","mdxType","originalType","parentName"]),h=o(a),k=i,u=h["".concat(l,".").concat(k)]||h[k]||p[k]||s;return a?r.createElement(u,n(n({ref:e},m),{},{components:a})):r.createElement(u,n({ref:e},m))}));function u(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var s=a.length,n=new Array(s);n[0]=k;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c[h]="string"==typeof t?t:i,n[1]=c;for(var o=2;o<s;o++)n[o]=a[o];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1750:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var r=a(7462),i=(a(7294),a(3905));const s={title:"Introducci\xf3n",hide_title:!0,slug:"/",hide_table_of_contents:!0},n=void 0,c={unversionedId:"intro/intro",id:"intro/intro",title:"Introducci\xf3n",description:"&nbsp;",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/intro/intro.mdx",sourceDirName:"intro",slug:"/",permalink:"/es/",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/intro/intro.mdx",tags:[],version:"current",frontMatter:{title:"Introducci\xf3n",hide_title:!0,slug:"/",hide_table_of_contents:!0},sidebar:"reference",next:{title:"Por qu\xe9 Rust para Smart Contracts?",permalink:"/es/por-que-rust-para-smart-contracts"}},l={},o=[{value:"Aprende m\xe1s",id:"aprende-m\xe1s",level:2},{value:"Our Pitch",id:"our-pitch",level:2},{value:"Where can I deploy ink! contracts?",id:"where-can-i-deploy-ink-contracts",level:2},{value:"Ejemplos de Smart Contract",id:"ejemplos-de-smart-contract",level:2}],m={toc:o},h="wrapper";function p(t){let{components:e,...a}=t;return(0,i.kt)(h,(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("br",null),(0,i.kt)("img",{src:"/img/title/ink!-4.0.svg",width:"800",style:{marginBottom:10}}),(0,i.kt)("center",null,(0,i.kt)("a",{href:"https://github.com/paritytech/ink"},(0,i.kt)("img",{style:{height:25},src:"https://img.shields.io/github/v/release/paritytech/ink?label=ink!%20on%20GitHub&labelColor=white&color=blue&include_prereleases"})),"\xa0",(0,i.kt)("a",{href:"https://substrate.stackexchange.com/questions/tagged/ink?tab=Votes"},(0,i.kt)("img",{style:{height:25},src:"https://img.shields.io/badge/click-white.svg?logo=StackExchange&label=ink!%20Support%20on%20StackExchange&labelColor=white&color=blue"})),"\xa0",(0,i.kt)("a",{href:"https://twitter.com/ink_lang"},(0,i.kt)("img",{style:{height:25},src:"https://img.shields.io/twitter/follow/ink_lang?label=Follow"})),"\xa0",(0,i.kt)("a",{href:"http://youtube.com/@ink-lang"},(0,i.kt)("img",{style:{height:25},src:"https://img.shields.io/badge/click-white.svg?logo=YouTube&logoColor=eb3f25&label=ink!%20YouTube&labelColor=white&color=blue"}))),(0,i.kt)("h3",{style:{lineHeight:"1.4em",marginTop:"0.5em"}},(0,i.kt)("center",null,(0,i.kt)("em",null,"ink! es un lenguaje de programaci\xf3n para smart contracts.",(0,i.kt)("br",null),"Puedes utilizarlo en Blockchains desarrollados con el framework de ",(0,i.kt)("a",{href:"https://github.com/paritytech/substrate"},"Substrate"),"."))),(0,i.kt)("h2",{id:"aprende-m\xe1s"},"Aprende m\xe1s"),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("a",{href:"https://www.parity.io/blog/what-is-paritys-ink"},(0,i.kt)("img",{src:"/img/what-is-ink.png",width:"250",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,i.kt)("p",null,"\xbfQu\xe9 es ink! de Parity?",(0,i.kt)("br",null),(0,i.kt)("a",{href:"https://www.parity.io/blog/what-is-paritys-ink"},"\xbb Ver p\xe1gina"))),(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("a",{href:"https://docs.substrate.io/tutorials/smart-contracts/"},(0,i.kt)("img",{src:"/img/tutorial.png",width:"250",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,i.kt)("p",null,"Tutorial guiado para principiantes",(0,i.kt)("br",null),(0,i.kt)("a",{href:"https://docs.substrate.io/tutorials/smart-contracts/"},"\xbb ver tutorial")))),(0,i.kt)("h2",{id:"our-pitch"},"Our Pitch"),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("img",{src:"/img/icons/rust.svg",width:"100"}),(0,i.kt)("p",null,"Garant\xedas de seguridad inherentes con el lenguaje de programaci\xf3n Rust.")),(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("img",{src:"/img/icons/ecosystem.svg",width:"100"}),(0,i.kt)("p",null,"Capacidad para usar todas las herramientas normales de Rust \u2012 clippy, crates.io, IDE\u2019s, etc.")),(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("img",{src:"/img/icons/interop.svg",width:"100"}),(0,i.kt)("p",null,"Interoperabilidad con contratos en Solidity."))),(0,i.kt)("br",null),"\xa0",(0,i.kt)("br",null),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("img",{src:"/img/icons/migration-path.svg",width:"100"}),(0,i.kt)("p",null,"Ruta de migraci\xf3n clara para graduarse a un parachain.")),(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("img",{src:"/img/icons/wasm.svg",width:"100"}),(0,i.kt)("p",null,"Est\xe1ndar industrial establecido para el compilador objetivo.")),(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("img",{src:"/img/icons/polkadot.svg",width:"100"}),(0,i.kt)("p",null,"Nativo a Polkadot. Complementa perfectamente tu Substrate runtime."))),(0,i.kt)("h2",{id:"where-can-i-deploy-ink-contracts"},"Where can I deploy ink! contracts?"),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col text--left"},(0,i.kt)("h3",null,(0,i.kt)("img",{src:"/img/chains/production.svg",className:"chainHeader"})))),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("a",{href:"https://alephzero.org"},(0,i.kt)("img",{src:"/img/chains/aleph-zero.svg",className:"chain"}))),(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("a",{href:"https://astar.network"},(0,i.kt)("img",{src:"/img/chains/astar.svg",className:"chain"}))),(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("a",{href:"https://shiden.astar.network"},(0,i.kt)("img",{src:"/img/chains/shiden.svg",className:"chain"})))),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("a",{href:"http://phala.network"},(0,i.kt)("img",{src:"/img/chains/phala.svg",className:"chain"}))),(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("a",{href:"https://pendulumchain.org"},(0,i.kt)("img",{src:"/img/chains/pendulum.svg",className:"chain"}))),(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("a",{href:"https://pendulumchain.org/amplitude"},(0,i.kt)("img",{src:"/img/chains/amplitude.svg",className:"chain"})))),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col text--left"},(0,i.kt)("h3",null,(0,i.kt)("img",{src:"/img/chains/mainnet-soon.svg",className:"chainHeader mainnetSoon"})))),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("a",{href:"https://t3rn.io"},(0,i.kt)("img",{src:"/img/chains/t3rn.svg",className:"chain"}))),(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("a",{href:"https://enjin.io"},(0,i.kt)("img",{src:"/img/chains/enjin.svg",className:"chain"}))),(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("a",{href:"https://zeitgeist.pm"},(0,i.kt)("img",{src:"/img/chains/zeitgeist.svg",className:"chain"})))),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("a",{href:"https://www.peaq.network"},(0,i.kt)("img",{src:"/img/chains/peaq.svg",className:"chain"}))),(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("a",{href:"https://bit.country"},(0,i.kt)("img",{src:"/img/chains/bitcountry.svg",className:"chain"}))),(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("a",{href:"https://github.com/yerbatech"},(0,i.kt)("img",{src:"/img/chains/yerba.svg",className:"chain"})))),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col text--left"},(0,i.kt)("h3",null,(0,i.kt)("img",{src:"/img/chains/on-testnet.svg",className:"chainHeader"})),(0,i.kt)("a",{href:"/testnet"},(0,i.kt)("img",{src:"/img/chains/testnet.svg",className:"chain"}))),(0,i.kt)("div",{className:"col"},"\xa0")),(0,i.kt)("h2",{id:"ejemplos-de-smart-contract"},"Ejemplos de Smart Contract"),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/flipper"},(0,i.kt)("img",{src:"/img/icons/flipper.svg",width:"100"})),(0,i.kt)("p",null,'Nuestro "Hello, World!".',(0,i.kt)("br",null),(0,i.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/flipper"},"\xbb ver ejemplo"))),(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/erc20"},(0,i.kt)("img",{src:"/img/icons/erc20.svg",width:"100"})),(0,i.kt)("p",null,"Una implementaci\xf3n ERC-20.",(0,i.kt)("br",null),(0,i.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/erc20"},"\xbb ver ejemplo"))),(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/erc721"},(0,i.kt)("img",{src:"/img/icons/nft.svg",width:"100"})),(0,i.kt)("p",null,(0,i.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/erc721"},"\xbb ver ERC-721"),(0,i.kt)("br",null),(0,i.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/erc1155"},"\xbb ver ERC-1155")))),(0,i.kt)("br",null),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/upgradeable-contracts"},(0,i.kt)("img",{src:"/img/icons/upgradable.svg",width:"100"})),(0,i.kt)("p",null,"Un contrato actualizable.",(0,i.kt)("br",null),(0,i.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/upgradeable-contracts"},"\xbb ver ejemplo"))),(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/multisig"},(0,i.kt)("img",{src:"/img/icons/multisig.svg",width:"100"})),(0,i.kt)("p",null,"Un wallet multi-firma.",(0,i.kt)("br",null),(0,i.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/multisig"},"\xbb ver ejemplo"))),(0,i.kt)("div",{className:"col text--center"},(0,i.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/rand-extension"},(0,i.kt)("img",{src:"/img/icons/rand-extension.svg",width:"100"})),(0,i.kt)("p",null,"Permite acceso al runtime.",(0,i.kt)("br",null),(0,i.kt)("a",{href:"https://github.com/paritytech/ink-examples/tree/main/rand-extension"},"\xbb ver ejemplo")))))}p.isMDXComponent=!0}}]);