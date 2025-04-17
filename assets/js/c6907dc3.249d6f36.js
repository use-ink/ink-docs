"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7684],{28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>i});var n=o(96540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}},41478:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"getting-started/troubleshooting","title":"Troubleshooting","description":"Here are solutions to some of the common problems you may come across:","source":"@site/versioned_docs/version-v3/getting-started/troubleshooting.md","sourceDirName":"getting-started","slug":"/getting-started/troubleshooting","permalink":"/docs/v3/getting-started/troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v3/getting-started/troubleshooting.md","tags":[],"version":"v3","frontMatter":{"title":"Troubleshooting","slug":"/getting-started/troubleshooting"},"sidebar":"reference","previous":{"title":"Call Your Contract","permalink":"/docs/v3/getting-started/calling-your-contract"},"next":{"title":"Contract Template","permalink":"/docs/v3/basics/contract-template"}}');var s=o(74848),r=o(28453);const a={title:"Troubleshooting",slug:"/getting-started/troubleshooting"},i=void 0,c={},l=[{value:"Unexpected Epoch Change",id:"unexpected-epoch-change",level:3},{value:"Old Contracts in Local Storage",id:"old-contracts-in-local-storage",level:3},{value:"Other Issues",id:"other-issues",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Here are solutions to some of the common problems you may come across:"}),"\n",(0,s.jsx)(t.h3,{id:"unexpected-epoch-change",children:"Unexpected Epoch Change"}),"\n",(0,s.jsx)(t.p,{children:"There is a known issue with the Substrate block production (BABE) on a running chain. If you stop your node for too long (closing the terminal, putting your computer to sleep, etc.), you will get the following error:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'ClientImport("Unexpected epoch change")\n'})}),"\n",(0,s.jsxs)(t.p,{children:["To solve this you will need to restart your node with: ",(0,s.jsx)(t.code,{children:"substrate-contracts-node --dev"}),". At that point, you will\nneed to re-deploy any contracts and re-do any steps that you may have done before on your node. As\nlong as you keep your node running, you should face no issues."]}),"\n",(0,s.jsx)(t.h3,{id:"old-contracts-in-local-storage",children:"Old Contracts in Local Storage"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Contracts UI"})," uses its own local storage to track the contracts that you have deployed. This means\nthat if you deploy a contract using the UI, and then purge your Substrate node, you will be prompted to\nreset your local storage and please do so. And then re-deploy any contracts and re-do any steps that\nyou may have done before on your node."]}),"\n",(0,s.jsx)(t.h3,{id:"other-issues",children:"Other Issues"}),"\n",(0,s.jsxs)(t.p,{children:["If you run into any other issues during this tutorial, please ",(0,s.jsx)(t.a,{href:"https://github.com/substrate-developer-hub/substrate-docs/issues",children:"report an issue"}),"!"]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);