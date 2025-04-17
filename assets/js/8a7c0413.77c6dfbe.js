"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1256],{6381:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/magnifying-glass-3ca6f9b0db517931b899b678a8543a81.svg"},27097:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>d,metadata:()=>s,toc:()=>r});const s=JSON.parse('{"id":"debugging/sandbox","title":"Sandbox","description":"Magnifying Glass Title Picture","source":"@site/versioned_docs/version-v6/debugging/sandbox.md","sourceDirName":"debugging","slug":"/contract-debugging/sandbox","permalink":"/docs/v6/contract-debugging/sandbox","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v6/debugging/sandbox.md","tags":[],"version":"v6","frontMatter":{"title":"Sandbox","slug":"/contract-debugging/sandbox","hide_title":true},"sidebar":"reference","previous":{"title":"Tracing API","permalink":"/docs/v6/contract-debugging/pallet-revive-tracing-api"},"next":{"title":"Decode raw transactions","permalink":"/docs/v6/contract-debugging/decoding-transactions"}}');var i=t(74848),o=t(28453);const d={title:"Sandbox",slug:"/contract-debugging/sandbox",hide_title:!0},a="Sandbox API",c={},r=[];function l(e){const n={a:"a",code:"code",h1:"h1",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Magnifying Glass Title Picture",src:t(6381).A+"",width:"1600",height:"500"})}),"\n",(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"sandbox-api",children:"Sandbox API"})}),"\n",(0,i.jsxs)(n.p,{children:["In the chapter on ",(0,i.jsx)(n.a,{href:"/docs/v6/contract-testing/drink",children:"Testing Strategies"}),", we explain that ink! supports\ntwo means of End-to-End testing:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"#[ink_e2e::test]"}),":\nThe End-to-End tests spawn a local node process in the backend\nand submit transactions against it, returning the output to you."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"#[ink_e2e::test(backend(runtime_only))]"}),"\nWith these settings, the End-to-End tests will be executed in\na sandbox. The sandbox contains the ",(0,i.jsx)(n.code,{children:"pallet-revive"}),", but anything\nthat the node would do is mocked and can be influenced (block numbers, etc.)."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can utilize the DRink! library that is described on\n",(0,i.jsx)(n.a,{href:"/docs/v6/contract-testing/drink",children:"Testing Strategies"})," to influence the state of the mocked\nsandbox. This is very useful for debugging, and we invite you to read the linked page."]})]})}function g(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var s=t(96540);const i={},o=s.createContext(i);function d(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);