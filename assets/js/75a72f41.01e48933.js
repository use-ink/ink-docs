"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1102],{363:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"macros-attributes/topic","title":"#[ink(topic)]","description":"Applied on fields of ink! event types to indicate that they are topics.","source":"@site/docs/macros-attributes/topic.md","sourceDirName":"macros-attributes","slug":"/macros-attributes/topic","permalink":"/macros-attributes/topic","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/docs/macros-attributes/topic.md","tags":[],"version":"current","frontMatter":{"title":"#[ink(topic)]","slug":"/macros-attributes/topic","hide_title":true},"sidebar":"reference","previous":{"title":"#[ink(storage)]","permalink":"/macros-attributes/storage"},"next":{"title":"#[ink::chain_extension]","permalink":"/macros-attributes/chain-extension"}}');var o=n(74848),s=n(28453);const r={title:"#[ink(topic)]",slug:"/macros-attributes/topic",hide_title:!0},c=void 0,a={},l=[{value:"Example",id:"example",level:2}];function p(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("img",{src:"/img/title/text/topic.svg",className:"titlePic"}),"\n",(0,o.jsx)(e.p,{children:"Applied on fields of ink! event types to indicate that they are topics."}),"\n",(0,o.jsx)(e.p,{children:"Tells the ink! codegen to provide a topic hash for the given field. Every ink! event can only have a limited number of such topic field.\nThe semantics are similar to indexed event arguments in Solidity."}),"\n",(0,o.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-rust",children:"#[ink(event)]\npub struct Transferred {\n    #[ink(topic)]\n    from: Option<AccountId>,\n\n    #[ink(topic)]\n    to: Option<AccountId>,\n\n    amount: Balance\n}\n"})})]})}function d(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(p,{...t})}):p(t)}},28453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>c});var i=n(96540);const o={},s=i.createContext(o);function r(t){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);