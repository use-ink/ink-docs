"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2191],{23694:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/storage-mutating-14730d304ffc72570cc11642c582d8cf.svg"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(96540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}},44308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"basics/mutating-values","title":"Mutating Storage Values","description":"Storage Mutating Title Picture","source":"@site/docs/basics/mutating-values.md","sourceDirName":"basics","slug":"/basics/mutating-values","permalink":"/docs/v5/basics/mutating-values","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/docs/basics/mutating-values.md","tags":[],"version":"current","frontMatter":{"title":"Mutating Storage Values","slug":"/basics/mutating-values","hide_title":true},"sidebar":"reference","previous":{"title":"Reading Values from Storage","permalink":"/docs/v5/basics/reading-values"},"next":{"title":"Events","permalink":"/docs/v5/basics/events"}}');var a=n(74848),i=n(28453);const r={title:"Mutating Storage Values",slug:"/basics/mutating-values",hide_title:!0},c="Mutating Storage Values",o={},u=[{value:"Mutable and Immutable Functions",id:"mutable-and-immutable-functions",level:2}];function l(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Storage Mutating Title Picture",src:n(23694).A+"",width:"1600",height:"500"})}),"\n",(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"mutating-storage-values",children:"Mutating Storage Values"})}),"\n",(0,a.jsx)(t.p,{children:"It's time to modify some storage!"}),"\n",(0,a.jsx)(t.h2,{id:"mutable-and-immutable-functions",children:"Mutable and Immutable Functions"}),"\n",(0,a.jsxs)(t.p,{children:["You may have noticed that the function template included ",(0,a.jsx)(t.code,{children:"self"})," as the first parameter of the\ncontract functions. It is through ",(0,a.jsx)(t.code,{children:"self"})," that you gain access to all your contract functions and\nstorage items."]}),"\n",(0,a.jsxs)(t.p,{children:["If you are simply ",(0,a.jsx)(t.em,{children:"reading"})," from the contract storage, you only need to pass ",(0,a.jsx)(t.code,{children:"&self"}),". But\nif you want to ",(0,a.jsx)(t.em,{children:"modify"})," storage items, you will need to explicitly mark it as mutable,\n",(0,a.jsx)(t.code,{children:"&mut self"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"impl MyContract {\n    #[ink(message)]\n    pub fn my_getter(&self) -> u32 {\n        self.my_number\n    }\n\n    #[ink(message)]\n    pub fn my_setter(&mut self, new_value: u32) {\n        self.my_number = new_value;\n    }\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}}}]);