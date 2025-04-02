"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1168],{86159:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"debugging/decoding","title":"Decode raw transactions","description":"Magnifying Glass Title Picture","source":"@site/versioned_docs/version-v6/debugging/decoding.md","sourceDirName":"debugging","slug":"/contract-debugging/decoding-transactions","permalink":"/docs/v6/contract-debugging/decoding-transactions","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v6/debugging/decoding.md","tags":[],"version":"v6","frontMatter":{"title":"Decode raw transactions","slug":"/contract-debugging/decoding-transactions","hide_title":true},"sidebar":"reference","previous":{"title":"Sandbox","permalink":"/docs/v6/contract-debugging/sandbox"},"next":{"title":"Replays","permalink":"/docs/v6/contract-debugging/transaction-extrinsic-replays"}}');var c=n(74848),o=n(28453);const s={title:"Decode raw transactions",slug:"/contract-debugging/decoding-transactions",hide_title:!0},i="Decode Data Payload",r={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{alt:"Magnifying Glass Title Picture",src:n(6381).A+"",width:"1600",height:"500"})}),"\n",(0,c.jsx)(t.header,{children:(0,c.jsx)(t.h1,{id:"decode-data-payload",children:"Decode Data Payload"})}),"\n",(0,c.jsxs)(t.p,{children:["You can use a block explorer (or an app like Polkadot.js) to retrieve the data\npayload of a contract transaction. ",(0,c.jsx)(t.a,{href:"https://github.com/use-ink/cargo-contract",children:"cargo-contract"})," supports decoding\nthis data."]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:"# From your contract directory\n$ cargo contract decode message -d fe5bd8ea01000000\n"})}),"\n",(0,c.jsx)(t.p,{children:"This command will output the method name and parameters encoded in the data payload:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:"Decoded data: inc_by { n: 1 }\n"})}),"\n",(0,c.jsx)(t.p,{children:"If the contract was called through a cross-contract interaction, the payload will not be available in the transaction. In such cases, you can use the approach described in the next section to access it."})]})}function g(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},6381:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/magnifying-glass-3ca6f9b0db517931b899b678a8543a81.svg"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var a=n(96540);const c={},o=a.createContext(c);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);