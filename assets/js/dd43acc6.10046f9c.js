"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[3335],{54933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"macros-attributes/namespace","title":"#[ink(namespace = \\"\u2026\\")]","description":"Applicable to ink! trait implementation blocks.","source":"@site/versioned_docs/version-3.x/macros-attributes/namespace.md","sourceDirName":"macros-attributes","slug":"/macros-attributes/namespace","permalink":"/3.x/macros-attributes/namespace","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-3.x/macros-attributes/namespace.md","tags":[],"version":"3.x","frontMatter":{"title":"#[ink(namespace = \\"\u2026\\")]","slug":"/macros-attributes/namespace"},"sidebar":"reference","previous":{"title":"#[ink(message)]","permalink":"/3.x/macros-attributes/message"},"next":{"title":"#[ink(payable)]","permalink":"/3.x/macros-attributes/payable"}}');var a=n(74848),i=n(28453);const r={title:'#[ink(namespace = "\u2026")]',slug:"/macros-attributes/namespace"},o=void 0,c={},m=[{value:"Example",id:"example",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Applicable to ink! trait implementation blocks."}),"\n",(0,a.jsx)(t.p,{children:"Applied on ink! trait implementation blocks to disambiguate other trait\nimplementation blocks with equal names."}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:'#[ink(namespace = "my_namespace")]\nimpl MyTrait for MyStorage {\n    #[ink(message)]\n    fn my_message(&self) {}\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"This changes the resulting selectors of all the ink! messages and ink! constructors within the trait implementation.\nThus allowing disambiguation between trait implementations with overlapping message or constructor names."})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(96540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);