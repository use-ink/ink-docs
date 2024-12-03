"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7513],{25580:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"testnet/overview","title":"Contracts on Rococo","description":"Rococo is a testnet for","source":"@site/versioned_docs/version-4.x/testnet/overview.md","sourceDirName":"testnet","slug":"/testnet","permalink":"/4.x/testnet","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-4.x/testnet/overview.md","tags":[],"version":"4.x","frontMatter":{"title":"Contracts on Rococo","hide_title":true,"slug":"/testnet"},"sidebar":"reference","previous":{"title":"Kickstart your project!","permalink":"/4.x/inkubator-overview"},"next":{"title":"Faucet","permalink":"/4.x/faucet"}}');var c=o(74848),s=o(28453);const r={title:"Contracts on Rococo",hide_title:!0,slug:"/testnet"},a="Contracts on Rococo",i={},d=[{value:"What is the Contracts parachain?",id:"what-is-the-contracts-parachain",level:2},{value:"How can I use it?",id:"how-can-i-use-it",level:2},{value:"(1) Create an Account",id:"1-create-an-account",level:3},{value:"(2) Get Testnet Tokens",id:"2-get-testnet-tokens",level:3},{value:"(3) Deploy Your Contract",id:"3-deploy-your-contract",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("img",{src:"/img/title/testnet.svg",className:"titlePic"}),"\n",(0,c.jsx)(t.header,{children:(0,c.jsx)(t.h1,{id:"contracts-on-rococo",children:"Contracts on Rococo"})}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/build-pdk#rococo-testnet",children:"Rococo"})," is a testnet for\nPolkadot and Kusama parachains.\nWe have a live testnet named Contracts as a parachain online there."]}),"\n",(0,c.jsx)("img",{src:"/img/contracts-on-polkadot-js.png",alt:"Smart contracts parachain on Rococo"}),"\n",(0,c.jsx)(t.h2,{id:"what-is-the-contracts-parachain",children:"What is the Contracts parachain?"}),"\n",(0,c.jsxs)(t.p,{children:["It's a ",(0,c.jsx)(t.a,{href:"https://github.com/paritytech/substrate",children:"Substrate"})," parachain for smart\ncontracts. We configured it to use Substrate's smart contracts module \u2013 the\n",(0,c.jsx)(t.a,{href:"https://github.com/paritytech/substrate/tree/master/frame/contracts",children:(0,c.jsx)(t.code,{children:"contracts"})}),"\npallet \u2013 in a default configuration."]}),"\n",(0,c.jsxs)(t.p,{children:["The code for this parachain can be found ",(0,c.jsxs)(t.a,{href:"https://github.com/paritytech/cumulus/tree/master/parachains/runtimes/contracts/contracts-rococo",children:["in the ",(0,c.jsx)(t.code,{children:"cumulus"})," repository"]}),".\nOur parachain uses the Rococo relay chain's native token (",(0,c.jsx)(t.code,{children:"ROC"}),") instead of having its own token.\nDue to this you'll need ",(0,c.jsx)(t.code,{children:"ROC"})," in order to deploy contracts on our testnet."]}),"\n",(0,c.jsx)(t.h2,{id:"how-can-i-use-it",children:"How can I use it?"}),"\n",(0,c.jsx)(t.h3,{id:"1-create-an-account",children:"(1) Create an Account"}),"\n",(0,c.jsxs)(t.p,{children:["As a first step, you should create an account. This can be done via command-line\ntools (e.g. ",(0,c.jsx)(t.code,{children:"subxt"}),") or via a wallet (e.g. with the ",(0,c.jsx)(t.code,{children:"polkadot-js"})," browser extension).\nSee ",(0,c.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/learn-account-generation",children:"here"})," for a detailed guide."]}),"\n",(0,c.jsx)(t.h3,{id:"2-get-testnet-tokens",children:"(2) Get Testnet Tokens"}),"\n",(0,c.jsx)("img",{src:"/img/chest.svg",alt:"image of a treasure chest",className:"faucetHeroImage"}),"\n",(0,c.jsxs)(t.p,{children:["As a second step, you have to get ",(0,c.jsx)(t.code,{children:"ROC"})," testnet tokens through the ",(0,c.jsx)(t.a,{href:"/4.x/faucet",children:"Rococo Faucet"}),"."]}),"\n",(0,c.jsxs)(t.p,{children:["Alternatively, you can use the ",(0,c.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/learn-DOT#getting-tokens-on-the-rococo-testnet",children:"Element chat room"}),".\nYou must send a message like this (Note the ",(0,c.jsx)(t.code,{children:":1002"})," after the wallet address):"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{children:"!drip YOUR_SS_58_ADDRESS:1002\n"})}),"\n",(0,c.jsxs)(t.p,{children:["The number ",(0,c.jsx)(t.code,{children:"1002"})," is the parachain ID of Contracts on Rococo, by supplying it you instruct the\nfaucet to teleport ",(0,c.jsx)(t.code,{children:"ROC"})," tokens directly to your account on the parachain.\nIf you have some tokens on the Rococo relay chain, you can teleport them to the Contracts parachain on your own. Read more on teleporting assets ",(0,c.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/learn-teleport",children:"here"}),"."]}),"\n",(0,c.jsxs)(t.p,{children:["If everything worked out, the teleported ",(0,c.jsx)(t.code,{children:"ROC"})," tokens will show up in your account.\nIn case you are using the ",(0,c.jsx)(t.code,{children:"polkadot-js"})," frontend, you can see them under\n",(0,c.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/accounts",children:'the "Accounts" tab for Contracts'}),"."]}),"\n",(0,c.jsx)("img",{src:"/img/roc-in-wallet.png",alt:"Rococo testnet tokens in wallet"}),"\n",(0,c.jsx)(t.h3,{id:"3-deploy-your-contract",children:"(3) Deploy Your Contract"}),"\n",(0,c.jsxs)(t.p,{children:["Once you have ",(0,c.jsx)(t.code,{children:"ROC"})," on Contracts you can deploy a contract ",(0,c.jsx)(t.em,{children:"nearly"})," as you would with\na local developer node.\nThe only difference is that you can't use pre-endowed accounts like ",(0,c.jsx)(t.code,{children:"Alice"})," or ",(0,c.jsx)(t.code,{children:"Bob"}),",\nyou have to use the one you generated instead."]}),"\n",(0,c.jsx)("img",{src:"/img/deployment-acc.png",alt:"Deploy a smart contract on Rococo/Polkadot"}),"\n",(0,c.jsxs)(t.p,{children:["You can also deploy your contract from the command-line via ",(0,c.jsx)(t.code,{children:"cargo-contract"}),".\nMake sure you are in the folder of your contract and that it has been\nbuilt recently. Then execute:"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:'cargo contract upload --suri "your twelve or twenty-four words"\ncargo contract instantiate --suri \u2026 --constructor new --args true\n'})}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:"new"})," in this case would be a constructor method exposed by the contract,\n",(0,c.jsx)(t.code,{children:"--args"})," would be any arguments the constructor expects."]}),"\n",(0,c.jsxs)(t.p,{children:["See ",(0,c.jsxs)(t.a,{href:"https://github.com/use-ink/cargo-contract/blob/master/crates/extrinsics/README.md#commands",children:["the ",(0,c.jsx)(t.code,{children:"cargo-contract"})," docs"]}),"\nfor a more detailed documentation."]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>a});var n=o(96540);const c={},s=n.createContext(c);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);