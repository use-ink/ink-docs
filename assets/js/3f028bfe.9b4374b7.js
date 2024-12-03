"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9947],{10745:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"datastructures/overview","title":"Overview","description":"The ink_storage crate acts as the standard storage library for ink! smart contracts.","source":"@site/versioned_docs/version-6.x/datastructures/overview.md","sourceDirName":"datastructures","slug":"/datastructures/overview","permalink":"/6.x/datastructures/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-6.x/datastructures/overview.md","tags":[],"version":"6.x","frontMatter":{"title":"Overview","slug":"/datastructures/overview","hide_title":true},"sidebar":"reference","previous":{"title":"#[ink::chain_extension]","permalink":"/6.x/macros-attributes/chain-extension"},"next":{"title":"Working with StorageVec","permalink":"/6.x/datastructures/storagevec"}}');var a=r(74848),s=r(28453);const i={title:"Overview",slug:"/datastructures/overview",hide_title:!0},o="Overview",c={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{src:"/img/title/storage.svg",className:"titlePic"}),"\n",(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"overview",children:"Overview"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"ink_storage"})," crate acts as the standard storage library for ink! smart contracts.\nAt the moment it provides two primitives for interacting with storage,\n",(0,a.jsx)(t.a,{href:"https://docs.rs/ink_storage/5.0.0/ink_storage/struct.Mapping.html",children:(0,a.jsx)(t.code,{children:"Mapping"})}),"\nand ",(0,a.jsx)(t.a,{href:"https://docs.rs/ink_storage/5.0.0/ink_storage/struct.Lazy.html",children:(0,a.jsx)(t.code,{children:"Lazy"})}),"."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Mapping"})," is a mapping of key-value pairs directly to the contract storage. It is very\nsimilar to traditional hash tables and comparable to the ",(0,a.jsx)(t.code,{children:"mapping"})," type Solidity offers.\nAs a core ingredient to the ink! language, its main advantage is being simple and\nlightweight: It favors being efficient in terms of gas costs and code size\nover providing a lot of high-level functionality found in other implementations\nlike the ",(0,a.jsx)(t.code,{children:"ink::prelude::collections::HashMap"})," type.\nOverall, the ink! ",(0,a.jsx)(t.code,{children:"Mapping"})," will be a solid choice for most contracts. Moreover, smart\ncontracts developers can implement advanced features themselves."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Lazy"})," is a wrapper type that can be used over any other storage compatible type.\nThis allows smart contract developers fine-grained manual control over the layout of\nthe contract storage by assigning a separate storage cell for the field. For example,\nit can be used to prevent the contract from eagerly loading large storage fields\nduring each contract call.\nConceivably, it may be desirable to change certain aspects on how your contract deals with\nits storage variables. You can find out more about this in the section about the ink!\n",(0,a.jsx)(t.a,{href:"/6.x/datastructures/storage-layout",children:"Storage Layout"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(96540);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);