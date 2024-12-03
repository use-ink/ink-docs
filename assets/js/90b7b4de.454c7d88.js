"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8154],{16889:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"getting-started/deploying","title":"Deploy Your Contract","description":"Now that we have generated the Wasm binary from our source code and connected to a local node, we want","source":"@site/versioned_docs/version-3.x/getting-started/deploying.md","sourceDirName":"getting-started","slug":"/getting-started/deploy-your-contract","permalink":"/3.x/getting-started/deploy-your-contract","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-3.x/getting-started/deploying.md","tags":[],"version":"3.x","frontMatter":{"title":"Deploy Your Contract","slug":"/getting-started/deploy-your-contract"},"sidebar":"reference","previous":{"title":"Run a Substrate Node","permalink":"/3.x/getting-started/running-substrate"},"next":{"title":"Call Your Contract","permalink":"/3.x/getting-started/calling-your-contract"}}');var a=n(74848),c=n(28453);const i={title:"Deploy Your Contract",slug:"/getting-started/deploy-your-contract"},s=void 0,r={},l=[{value:"1. Upload Contract Code",id:"1-upload-contract-code",level:3},{value:"2. Instantiate a Contract on the Blockchain",id:"2-instantiate-a-contract-on-the-blockchain",level:3}];function d(t){const e={code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"Now that we have generated the Wasm binary from our source code and connected to a local node, we want\nto deploy this contract onto our Substrate blockchain."}),"\n",(0,a.jsx)(e.p,{children:"Smart contract deployment on Substrate is a little different than on traditional smart contract\nblockchains."}),"\n",(0,a.jsxs)(e.p,{children:["Whereas a completely new blob of smart contract source code is deployed each time you push a\ncontract on other platforms, Substrate opts to optimize this behavior. For example, the standard\nERC20 token has been deployed to Ethereum thousands of times, sometimes only with changes to the\ninitial configuration (through the Solidity ",(0,a.jsx)(e.code,{children:"constructor"})," function). Each of these instances take\nup space on the blockchain equivalent to the contract source code size, even though no code was\nactually changed."]}),"\n",(0,a.jsx)(e.p,{children:"In Substrate, the contract deployment process is split into two steps:"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:"Putting your contract code on the blockchain"}),"\n",(0,a.jsx)(e.li,{children:"Creating an instance of your contract"}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"With this pattern, contract code like the ERC20 standard can be put on the blockchain one single\ntime, but instantiated any number of times. No need to continually upload the same source code over\nand waste space on the blockchain."}),"\n",(0,a.jsx)(e.h3,{id:"1-upload-contract-code",children:"1. Upload Contract Code"}),"\n",(0,a.jsx)(e.p,{children:"Here we will upload the contract code and instantiate one copy of the contract on the blockchain\n(which is usually why we upload the contract code in the first place):"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Click the ",(0,a.jsx)(e.strong,{children:"Add New Contract"})," button in the sidebar."]}),"\n",(0,a.jsxs)(e.li,{children:["Click the ",(0,a.jsx)(e.strong,{children:"Upload New Contract Code"})," button in the Add New Contract page."]}),"\n",(0,a.jsxs)(e.li,{children:["Choose an ",(0,a.jsx)(e.strong,{children:"Instantiation account"})," (e.g. ALICE)."]}),"\n",(0,a.jsxs)(e.li,{children:["Give the contract a descriptive ",(0,a.jsx)(e.strong,{children:"Name"})," (e.g. Flipper Contract)."]}),"\n",(0,a.jsxs)(e.li,{children:["Drag the ",(0,a.jsx)(e.code,{children:"flipper.contract"})," file that contains the bundled Wasm blob and metadata into the drag\n& drop area. You will see the UI parse the metadata and enabling the button that takes you to the next step."]}),"\n",(0,a.jsxs)(e.li,{children:["Click the ",(0,a.jsx)(e.strong,{children:"Next"})," button"]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Flipper Instantiate Contract 01",src:n(36061).A+"",width:"2192",height:"1446"})}),"\n",(0,a.jsx)(e.h3,{id:"2-instantiate-a-contract-on-the-blockchain",children:"2. Instantiate a Contract on the Blockchain"}),"\n",(0,a.jsxs)(e.p,{children:["Smart contracts exist as an extension of the account system on the blockchain. Thus creating an\ninstance of this contract will create a new ",(0,a.jsx)(e.code,{children:"AccountId"})," which will store any balance managed by the\nsmart contract and allow us to interact with the contract."]}),"\n",(0,a.jsx)(e.p,{children:"Now a screen displays the information that represents our smart contract. We are going to\ninstantiate a copy of the smart contract:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Accept the default options for the contract ",(0,a.jsx)(e.strong,{children:"Deployment Constructor"}),"."]}),"\n",(0,a.jsxs)(e.li,{children:["Accept the default options ",(0,a.jsx)(e.strong,{children:"Max Gas Allowed"})," of ",(0,a.jsx)(e.code,{children:"200000"}),"."]}),"\n",(0,a.jsxs)(e.li,{children:["Click on ",(0,a.jsx)(e.code,{children:"Next"})]}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Flipper Instantiate Contract 02",src:n(54854).A+"",width:"2187",height:"1441"})}),"\n",(0,a.jsxs)(e.p,{children:["The transaction is now queued, review your data and click ",(0,a.jsx)(e.strong,{children:"Upload and Instantiate"})," or go back and modify your inputs."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Flipper Instantiate Contract 03",src:n(20047).A+"",width:"2192",height:"1447"})}),"\n",(0,a.jsxs)(e.p,{children:["When you click ",(0,a.jsx)(e.strong,{children:"Upload and Instantiate"})," you should see\nthe extrinsic ",(0,a.jsx)(e.code,{children:"instantiateWithCode"})," is processing, and a flurry of events appear including the\ncreation of a new account (",(0,a.jsx)(e.code,{children:"system.NewAccount"}),") and the instantiation of the contract\n(",(0,a.jsx)(e.code,{children:"contracts.Instantiated"}),").\nYou will be redirected to a new page, where you can interact with the newly created contract instance."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Flipper Instantiate Success",src:n(51024).A+"",width:"2198",height:"1442"})})]})}function h(t={}){const{wrapper:e}={...(0,c.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(d,{...t})}):d(t)}},36061:(t,e,n)=>{n.d(e,{A:()=>o});const o=n.p+"assets/images/flipper-instantiate-01-51d92de88119204b1628b1926ddd2f4e.png"},54854:(t,e,n)=>{n.d(e,{A:()=>o});const o=n.p+"assets/images/flipper-instantiate-02-df44c72c8917af09a398fa0ea5f176bc.png"},20047:(t,e,n)=>{n.d(e,{A:()=>o});const o=n.p+"assets/images/flipper-instantiate-03-1eec585921b302f0f52c1c1093f88f21.png"},51024:(t,e,n)=>{n.d(e,{A:()=>o});const o=n.p+"assets/images/flipper-instantiate-04-4523e6f61c0404357b6200f2df820e28.png"},28453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>s});var o=n(96540);const a={},c=o.createContext(a);function i(t){const e=o.useContext(c);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:i(t.components),o.createElement(c.Provider,{value:e},t.children)}}}]);