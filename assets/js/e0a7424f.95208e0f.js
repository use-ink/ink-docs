"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7320],{1346:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(4848),o=n(8453);const s={title:"#[ink(constructor)]",slug:"/macros-attributes/constructor",hide_title:!0},c=void 0,i={id:"macros-attributes/constructor",title:"#[ink(constructor)]",description:"Applicable to a method.",source:"@site/versioned_docs/version-4.x/macros-attributes/constructor.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/constructor",permalink:"/4.x/macros-attributes/constructor",draft:!1,unlisted:!1,editUrl:"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-4.x/macros-attributes/constructor.md",tags:[],version:"4.x",frontMatter:{title:"#[ink(constructor)]",slug:"/macros-attributes/constructor",hide_title:!0},sidebar:"reference",previous:{title:"#[ink(anonymous)]",permalink:"/4.x/macros-attributes/anonymous"},next:{title:"#[ink(default)]",permalink:"/4.x/macros-attributes/default"}},a={},l=[{value:"Example",id:"example",level:2}];function u(t){const e={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{src:"/img/title/text/constructor.svg",className:"titlePic"}),"\n",(0,r.jsx)(e.p,{children:"Applicable to a method."}),"\n",(0,r.jsx)(e.p,{children:"Flags a method (or multiple methods) for the ink! storage struct as constructor making it available to the API for instantiating the contract."}),"\n",(0,r.jsxs)(e.p,{children:["There must be at least one ",(0,r.jsx)(e.code,{children:"#[ink(constructor)]"})," defined method."]}),"\n",(0,r.jsxs)(e.p,{children:["Methods flagged with ",(0,r.jsx)(e.code,{children:"#[ink(constructor)]"})," are special in that they are dispatchable\nupon contract instantiation. A contract may define multiple such constructors which\nallow users of the contract to instantiate a contract in multiple different ways."]}),"\n",(0,r.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-rust",children:"#[ink::contract]\nmod erc20 {\n    #[ink(storage)]\n    pub struct Erc20 { ... }\n\n    impl Erc20 {\n        #[ink(constructor)]\n        pub fn new(initial_supply: Balance) -> Self { .. }\n\n        #[ink(constructor)]\n        pub fn total_supply(&self) -> Balance { .. }\n\n        // etc.\n    }\n}\n"})})]})}function d(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(u,{...t})}):u(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>c,x:()=>i});var r=n(6540);const o={},s=r.createContext(o);function c(t){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:c(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);