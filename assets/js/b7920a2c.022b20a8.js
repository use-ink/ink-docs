"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6315],{18542:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"macros-attributes/anonymous","title":"#[ink(anonymous)]","description":"Applicable to ink! events.","source":"@site/versioned_docs/version-4.x/macros-attributes/anonymous.md","sourceDirName":"macros-attributes","slug":"/macros-attributes/anonymous","permalink":"/4.x/macros-attributes/anonymous","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-4.x/macros-attributes/anonymous.md","tags":[],"version":"4.x","frontMatter":{"title":"#[ink(anonymous)]","slug":"/macros-attributes/anonymous","hide_title":true},"sidebar":"reference","previous":{"title":"#[ink::contract]","permalink":"/4.x/macros-attributes/contract"},"next":{"title":"#[ink(constructor)]","permalink":"/4.x/macros-attributes/constructor"}}');var i=n(74848),o=n(28453);const r={title:"#[ink(anonymous)]",slug:"/macros-attributes/anonymous",hide_title:!0},a=void 0,c={},u=[{value:"Example",id:"example",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{src:"/img/title/text/anon.svg",className:"titlePic"}),"\n",(0,i.jsx)(t.p,{children:"Applicable to ink! events."}),"\n",(0,i.jsx)(t.p,{children:"Tells the ink! codegen to treat the ink! event as anonymous which omits the event signature as topic upon emitting. Very similar to anonymous events in Solidity."}),"\n",(0,i.jsx)(t.p,{children:"Anonymous events have similar semantics as in Solidity in that their\nevent signature won't be included in their event topics serialization\nto reduce event emitting overhead. This is especially useful for user\ndefined events."}),"\n",(0,i.jsxs)(t.p,{children:["The signature of the event is by default one of the topics of the event, except\nif you annotate the event with ",(0,i.jsx)(t.code,{children:"#[ink(anonymous)]"}),".\nThe attribute implies that it is not possible to filter for specific anonymous events by name."]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"#[ink(event)]\n#[ink(anonymous)]\npub struct MyEvent {\n    #[ink(topic)]\n    field_1: i32,\n    field_2: bool,\n}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);