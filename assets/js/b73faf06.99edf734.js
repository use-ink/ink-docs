"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5182],{85438:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"macros-attributes/topic","title":"#[ink(topic)]","description":"Applied on fields of ink! event types to indicate that they are topics.","source":"@site/versioned_docs/version-3.x/macros-attributes/topic.md","sourceDirName":"macros-attributes","slug":"/macros-attributes/topic","permalink":"/3.x/macros-attributes/topic","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-3.x/macros-attributes/topic.md","tags":[],"version":"3.x","frontMatter":{"title":"#[ink(topic)]","slug":"/macros-attributes/topic"},"sidebar":"reference","previous":{"title":"#[ink(storage)]","permalink":"/3.x/macros-attributes/storage"},"next":{"title":"#[ink::chain_extension]","permalink":"/3.x/macros-attributes/chain-extension"}}');var o=n(74848),s=n(28453);const r={title:"#[ink(topic)]",slug:"/macros-attributes/topic"},c=void 0,a={},p=[{value:"Example",id:"example",level:2}];function d(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Applied on fields of ink! event types to indicate that they are topics."}),"\n",(0,o.jsx)(t.p,{children:"Tells the ink! codegen to provide a topic hash for the given field. Every ink! event can only have a limited number of such topic field.\nThe semantics are similar to indexed event arguments in Solidity."}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",children:"#[ink(event)]\npub struct Transferred {\n    #[ink(topic)]\n    from: Option<AccountId>,\n\n    #[ink(topic)]\n    to: Option<AccountId>,\n\n    amount: Balance\n}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(96540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);