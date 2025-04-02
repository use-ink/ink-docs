"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8825],{13661:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"getting-started/calling","title":"Call Your Contract","description":"Frontend Title Picture","source":"@site/docs/getting-started/calling.md","sourceDirName":"getting-started","slug":"/getting-started/calling-your-contract","permalink":"/docs/v5/getting-started/calling-your-contract","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/docs/getting-started/calling.md","tags":[],"version":"current","frontMatter":{"title":"Call Your Contract","slug":"/getting-started/calling-your-contract","hide_title":true},"sidebar":"reference","previous":{"title":"Deploy Your Contract","permalink":"/docs/v5/getting-started/deploy-your-contract"},"next":{"title":"Troubleshooting","permalink":"/docs/v5/getting-started/troubleshooting"}}');var i=n(74848),c=n(28453);const s={title:"Call Your Contract",slug:"/getting-started/calling-your-contract",hide_title:!0},o="Call Your Contract",r={},l=[{value:"RPC calls vs. Transactions",id:"rpc-calls-vs-transactions",level:2},{value:"Dry-run via RPC",id:"dry-run-via-rpc",level:3},{value:"State mutating via submitting a Transaction",id:"state-mutating-via-submitting-a-transaction",level:3},{value:"Using the Contracts UI",id:"using-the-contracts-ui",level:2},{value:"1. <code>get()</code> function",id:"1-get-function",level:3},{value:"2. <code>flip()</code> function",id:"2-flip-function",level:3},{value:"Using <code>cargo-contract</code>",id:"using-cargo-contract",level:2},{value:"1. <code>get()</code> function",id:"1-get-function-1",level:3},{value:"2. <code>flip()</code> function",id:"2-flip-function-1",level:3}];function d(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Frontend Title Picture",src:n(26457).A+"",width:"1600",height:"500"})}),"\n",(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"call-your-contract",children:"Call Your Contract"})}),"\n",(0,i.jsxs)(e.p,{children:["Now that your contract has been fully deployed, we can start interacting with it! Flipper only has\ntwo functions: ",(0,i.jsx)(e.code,{children:"flip()"})," and ",(0,i.jsx)(e.code,{children:"get()"}),". We will show you what it's like to play with both of them."]}),"\n",(0,i.jsx)(e.h2,{id:"rpc-calls-vs-transactions",children:"RPC calls vs. Transactions"}),"\n",(0,i.jsx)(e.p,{children:"There are two ways of calling a contract:"}),"\n",(0,i.jsx)(e.h3,{id:"dry-run-via-rpc",children:"Dry-run via RPC"}),"\n",(0,i.jsx)(e.p,{children:"Remote procedure calls, or RPC methods, are a way for an external program \u2013 for example, a browser\nor front-end application \u2013 to communicate with a Substrate node.\nFor example, you might use an RPC method to read a stored value, submit a transaction, or request\ninformation about the chain a node is connected to."}),"\n",(0,i.jsx)(e.p,{children:"If a user interface displays the value of a contract (e.g. the balance of an account in\nan ERC-20 contract), then this is typically done via RPC. Specifically it is done by\nexecuting a synchronous dry-run of the contract method and returning its result.\nThe following schema depicts this."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Contract dry-run via RPC",src:n(56877).A+"",width:"1780",height:"1000"})}),"\n",(0,i.jsx)(e.p,{children:"RPC calls don't require any tokens, they just require a connection to a node in the\nnetwork. It's important to note that the execution won't result in any state mutations\non the blockchain, it really just is a dry-run."}),"\n",(0,i.jsx)(e.h3,{id:"state-mutating-via-submitting-a-transaction",children:"State mutating via submitting a Transaction"}),"\n",(0,i.jsx)(e.p,{children:"The other method of executing a call to a contract is by submitting a transaction\non-chain. This requires tokens of the network to pay for the cost of the transaction.\nThe transaction will be put in a transaction pool and asynchronously processed.\nThe important implication here is that during submission of the transaction no result\nis available. This is different from an RPC call."}),"\n",(0,i.jsxs)(e.p,{children:["The typical pattern for how a client can recognize the result of the contract call is\nto have the contract emit an event and have the client actively listen for such an\nevent. Typically libraries (like ",(0,i.jsx)(e.code,{children:"polkadot-js/api"}),") provide API functions to do just that.\nThe important take-away is that contract developers have to make sure that events\nare emitted if they want clients to be able to pick up on them."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Contract execution via transaction",src:n(98183).A+"",width:"1780",height:"1000"})}),"\n",(0,i.jsx)(e.h2,{id:"using-the-contracts-ui",children:"Using the Contracts UI"}),"\n",(0,i.jsxs)(e.h3,{id:"1-get-function",children:["1. ",(0,i.jsx)(e.code,{children:"get()"})," function"]}),"\n",(0,i.jsxs)(e.p,{children:["We set the initial value of the Flipper contract\n",(0,i.jsx)(e.code,{children:"value"})," to ",(0,i.jsx)(e.code,{children:"false"})," when we instantiated the contract. Let's check that this is the case."]}),"\n",(0,i.jsxs)(e.p,{children:["In the ",(0,i.jsx)(e.strong,{children:"Message to Send"}),' section, select the "',(0,i.jsx)(e.strong,{children:"get(): bool"}),'" message and accept the default\nvalues for the other options.']}),"\n",(0,i.jsxs)(e.p,{children:["Press ",(0,i.jsx)(e.strong,{children:'"Read"'})," and confirm that it returns the value ",(0,i.jsx)(e.code,{children:"false"}),":"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"An image of Flipper RPC call with false",src:n(70827).A+"",width:"2750",height:"1952"})}),"\n",(0,i.jsxs)(e.h3,{id:"2-flip-function",children:["2. ",(0,i.jsx)(e.code,{children:"flip()"})," function"]}),"\n",(0,i.jsxs)(e.p,{children:["So let's make the value turn ",(0,i.jsx)(e.code,{children:"true"})," now!"]}),"\n",(0,i.jsxs)(e.p,{children:["The alternative message to send with the UI is ",(0,i.jsx)(e.code,{children:"flip()"}),". Again, accept the default values for the other options and click ",(0,i.jsx)(e.strong,{children:"Call contract"})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"An image of a Flipper transaction",src:n(37047).A+"",width:"2750",height:"1952"})}),"\n",(0,i.jsxs)(e.p,{children:["If the transaction was successful, we should then be able to go back to the ",(0,i.jsx)(e.code,{children:"get()"})," function and see our updated storage:"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"An image of Flipper RPC call with true",src:n(8700).A+"",width:"2750",height:"1952"})}),"\n",(0,i.jsxs)(e.h2,{id:"using-cargo-contract",children:["Using ",(0,i.jsx)(e.code,{children:"cargo-contract"})]}),"\n",(0,i.jsx)(e.p,{children:"Calling a contract can also be done via the command-line!"}),"\n",(0,i.jsxs)(e.h3,{id:"1-get-function-1",children:["1. ",(0,i.jsx)(e.code,{children:"get()"})," function"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"cargo contract build\ncargo contract upload --suri //Alice\n\ncargo contract instantiate --execute --suri //Alice --args true\n# The output of this command will contain the contract address,\n# insert it in the command below.\n# e.g  Contract 5DXR2MxThkyZvG3s4ubu9yRdNiifchZ9eNV8i6ErGx6u1sea\n\n\ncargo contract call --contract <insert-contract-address> --message get --suri //Alice\n"})}),"\n",(0,i.jsxs)(e.h3,{id:"2-flip-function-1",children:["2. ",(0,i.jsx)(e.code,{children:"flip()"})," function"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"cargo contract call --contract <insert-contract-address> --message flip --execute --suri //Alice\n"})})]})}function h(t={}){const{wrapper:e}={...(0,c.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},98183:(t,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/events-a50c7787c51ef0290b65675711fd9f2c.svg"},70827:(t,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/flipper-false-e8506dfd800a64c0d39ebc50ba2813e5.png"},8700:(t,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/flipper-true-5647327602f44a9e51b710f7ece60c77.png"},56877:(t,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/rpc-ccec58e60565046371859aaacd6475bd.svg"},37047:(t,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/send-as-transaction-f551eeeeb6eee601202582d3405efc37.png"},26457:(t,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/frontend-0b8f265f639b050d9e9a516ad52faa60.svg"},28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>o});var a=n(96540);const i={},c=a.createContext(i);function s(t){const e=a.useContext(c);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),a.createElement(c.Provider,{value:e},t.children)}}}]);