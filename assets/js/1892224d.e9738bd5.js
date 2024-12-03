"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7701],{35950:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>o});const a=JSON.parse('{"id":"macros-attributes/payable","title":"#[ink(payable)]","description":"Applicable to ink! messages.","source":"@site/versioned_docs/version-3.x/macros-attributes/payable.md","sourceDirName":"macros-attributes","slug":"/macros-attributes/payable","permalink":"/3.x/macros-attributes/payable","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-3.x/macros-attributes/payable.md","tags":[],"version":"3.x","frontMatter":{"title":"#[ink(payable)]","slug":"/macros-attributes/payable"},"sidebar":"reference","previous":{"title":"#[ink(namespace = \\"\u2026\\")]","permalink":"/3.x/macros-attributes/namespace"},"next":{"title":"#[ink(selector = S:u32)]","permalink":"/3.x/macros-attributes/selector"}}');var s=t(74848),r=t(28453);const l={title:"#[ink(payable)]",slug:"/macros-attributes/payable"},i=void 0,c={},o=[{value:"Example",id:"example",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Applicable to ink! messages."}),"\n",(0,s.jsx)(n.p,{children:"Allows receiving value as part of the call of the ink! message.\nink! constructors are implicitly payable, due to the initial endowment which a contract requires."}),"\n",(0,s.jsxs)(n.p,{children:["An ink! message by default will reject calls that additional fund the smart contract.\nAuthors of ink! smart contracts can make an ink! message payable by adding the ",(0,s.jsx)(n.code,{children:"payable"}),"\nflag to it. An example below:"]}),"\n",(0,s.jsx)(n.p,{children:"Note that ink! constructors are always implicitly payable and thus cannot be flagged\nas such."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"use ink_lang as ink;\n\n#[ink::contract]\nmod flipper {\n\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        /// Flips the current value.\n        #[ink(message)]\n        #[ink(payable)] // You can either specify payable out-of-line.\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Returns the current value.\n        #[ink(message, payable)] // or specify payable inline.\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink(message, payable)]\npub fn pay_me(&self) {\n    let _transferred = self.env().transferred_balance();\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink-examples/blob/main/contract-transfer/lib.rs",children:(0,s.jsx)(n.code,{children:"examples/contract-transfer"})})," contract for a more extensive example."]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var a=t(96540);const s={},r=a.createContext(s);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);