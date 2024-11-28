"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8762],{1393:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"third-party-tools/swanky/node","title":"Swanky Node","description":"Swanky Node is a Substrate based blockchain configured to enable pallet-contracts (a smart contract module), and other features that assist local development of Wasm smart contracts.","source":"@site/docs/third-party-tools/swanky/node.md","sourceDirName":"third-party-tools/swanky","slug":"/getting-started/swanky/node","permalink":"/getting-started/swanky/node","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/docs/third-party-tools/swanky/node.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"slug":"/getting-started/swanky/node"},"sidebar":"reference","previous":{"title":"Swanky CLI","permalink":"/getting-started/swanky/cli"},"next":{"title":"ink! Analyzer","permalink":"/getting-started/ink-analyzer"}}');var t=s(4848),l=s(8453);const o={sidebar_position:2,slug:"/getting-started/swanky/node"},i="Swanky Node",r={},c=[{value:"Features",id:"features",level:3},{value:"Compatible ink! version",id:"compatible-ink-version",level:3},{value:"Installation",id:"installation",level:3},{value:"Download Binary",id:"download-binary",level:4},{value:"Build Locally",id:"build-locally",level:4},{value:"Embedded Docs :book:",id:"embedded-docs-book",level:3},{value:"Usage",id:"usage",level:3},{value:"Development Accounts",id:"development-accounts",level:3},{value:"Show only Errors and Contract Debug Output",id:"show-only-errors-and-contract-debug-output",level:3},{value:"Connect with Polkadot.js Apps Portal",id:"connect-with-polkadotjs-apps-portal",level:3},{value:"Run in Docker",id:"run-in-docker",level:3},{value:"Consensus (Manual Seal &amp; Instant Seal)",id:"consensus-manual-seal--instant-seal",level:3},{value:"Manual Sealing via RPC call",id:"manual-sealing-via-rpc-call",level:4},{value:"Params",id:"params",level:4},{value:"Finalizing Blocks Manually",id:"finalizing-blocks-manually",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"swanky-node",children:"Swanky Node"})}),"\n",(0,t.jsxs)(n.p,{children:["Swanky Node is a Substrate based blockchain configured to enable ",(0,t.jsx)(n.code,{children:"pallet-contracts"})," (a smart contract module), and other features that assist local development of Wasm smart contracts."]}),"\n",(0,t.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/paritytech/substrate/tree/master/frame/contracts",children:"pallet-contracts"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"grandpa"})," & ",(0,t.jsx)(n.code,{children:"aura"})," consensus were removed. Instead, ",(0,t.jsx)(n.code,{children:"instant-seal"})," & ",(0,t.jsx)(n.code,{children:"manual-seal"})," are used.\nBlocks are authored & finalized (1) as soon as a transaction get in the pool (2) when ",(0,t.jsx)(n.code,{children:"engine_createBlock"})," ",(0,t.jsx)(n.code,{children:"engine_finalizeBlock"})," RPC called respectively."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"pallet-dapps-staking"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"pallet-assets"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"pallet-assets"})," chain extension"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"pallet-dapps-staking"})," chain extension"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Swanky Node is optimized for local development, while removing unnecessary components such as P2P.\nAdditional features and pallets, such as to interact between (Contract \u2194 Runtime), will be added in the future."}),"\n",(0,t.jsx)(n.h3,{id:"compatible-ink-version",children:"Compatible ink! version"}),"\n",(0,t.jsxs)(n.p,{children:["ink! ",(0,t.jsx)(n.code,{children:"v4.0.0"})," or lower is supported."]}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.h4,{id:"download-binary",children:"Download Binary"}),"\n",(0,t.jsxs)(n.p,{children:["The easiest method of installation is by downloading and executing a precompiled binary from the ",(0,t.jsx)(n.a,{href:"https://github.com/AstarNetwork/swanky-node/releases",children:"Release Page"})]}),"\n",(0,t.jsx)(n.h4,{id:"build-locally",children:"Build Locally"}),"\n",(0,t.jsxs)(n.p,{children:["If you would like to build the source locally, you should first complete the ",(0,t.jsx)(n.a,{href:"https://docs.astar.network/docs/build/environment/ink_environment#rust-and-cargo",children:"basic Rust setup instructions"}),".\nOnce Rust is installed and configured, you will be able to build the node with:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cargo build --release\n"})}),"\n",(0,t.jsx)(n.h3,{id:"embedded-docs-book",children:"Embedded Docs :book:"}),"\n",(0,t.jsx)(n.p,{children:"Once the project has been built, the following command can be used to explore all parameters and\nsubcommands:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./target/release/swanky-node -h\n"})}),"\n",(0,t.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.p,{children:"This command will start the single-node development chain with a persistent state."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./target/release/swanky-node\n"})}),"\n",(0,t.jsx)(n.p,{children:"If you would prefer to run the node in non-persistent mode, use tmp option."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"./target/release/swanky-node --tmp\n# or\n./target/release/swanky-node --dev\n"})}),"\n",(0,t.jsx)(n.p,{children:"Purge the development chain's state."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./target/release/swanky-node purge-chain\n"})}),"\n",(0,t.jsx)(n.h3,{id:"development-accounts",children:"Development Accounts"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"alice"})," development account will be the authority and sudo account as declared in the\n",(0,t.jsx)(n.a,{href:"https://github.com/AstarNetwork/swanky-node/blob/main/node/src/chain_spec.rs#L44",children:"genesis state"}),".\nWhile at the same time, the following accounts will be pre-funded:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Alice"}),"\n",(0,t.jsx)(n.li,{children:"Bob"}),"\n",(0,t.jsx)(n.li,{children:"Charlie"}),"\n",(0,t.jsx)(n.li,{children:"Dave"}),"\n",(0,t.jsx)(n.li,{children:"Eve"}),"\n",(0,t.jsx)(n.li,{children:"Ferdie"}),"\n",(0,t.jsx)(n.li,{children:"Alice//stash"}),"\n",(0,t.jsx)(n.li,{children:"Bob//stash"}),"\n",(0,t.jsx)(n.li,{children:"Charlie//stash"}),"\n",(0,t.jsx)(n.li,{children:"Dave//stash"}),"\n",(0,t.jsx)(n.li,{children:"Eve//stash"}),"\n",(0,t.jsx)(n.li,{children:"Ferdie//stash"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"show-only-errors-and-contract-debug-output",children:"Show only Errors and Contract Debug Output"}),"\n",(0,t.jsxs)(n.p,{children:["To print errors and contract debug output to the console log, supply ",(0,t.jsx)(n.code,{children:"-lerror,runtime::contracts=debug"})," when starting the node."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"./target/release/swanky-node -lerror,runtime::contracts=debug\n"})}),"\n",(0,t.jsx)(n.p,{children:"Important: Debug output is only printed for RPC calls or off-chain tests \u2012 not for transactions."}),"\n",(0,t.jsxs)(n.p,{children:["See the ink! ",(0,t.jsx)(n.a,{href:"/faq#how-do-i-print-something-to-the-console-from-the-runtime",children:"FAQ"})," for more details: How do I print something to the console from the runtime?."]}),"\n",(0,t.jsx)(n.h3,{id:"connect-with-polkadotjs-apps-portal",children:"Connect with Polkadot.js Apps Portal"}),"\n",(0,t.jsxs)(n.p,{children:["Once the Swanky Node is running locally, you will be able to connect to it from the ",(0,t.jsx)(n.strong,{children:"Polkadot-JS Apps"})," front-end,\nin order to interact with your chain. ",(0,t.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/explorer?rpc=ws://localhost:9944",children:"Click\nhere"})," connecting the Apps to your\nlocal Swanky Node."]}),"\n",(0,t.jsx)(n.h3,{id:"run-in-docker",children:"Run in Docker"}),"\n",(0,t.jsxs)(n.p,{children:["First, install ",(0,t.jsx)(n.a,{href:"https://docs.docker.com/get-docker/",children:"Docker"})," and\n",(0,t.jsx)(n.a,{href:"https://docs.docker.com/compose/install/",children:"Docker Compose"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Then run the following command to start a single node development chain."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir .local # this is mounted by container\n./scripts/docker_run.sh\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This command will compile the code, and then start a local development network. You can\nalso replace the default command\n(",(0,t.jsx)(n.code,{children:"cargo build --release && ./target/release/swanky-node --dev --ws-external"}),")\nby appending your own. A few useful commands are shown below:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Run Substrate node without re-compiling\n./scripts/docker_run.sh ./target/release/swanky-node --ws-external\n\n# Purge the local dev chain\n./scripts/docker_run.sh ./target/release/swanky-node purge-chain\n\n# Check whether the code is compilable\n./scripts/docker_run.sh cargo check\n"})}),"\n",(0,t.jsx)(n.h3,{id:"consensus-manual-seal--instant-seal",children:"Consensus (Manual Seal & Instant Seal)"}),"\n",(0,t.jsx)(n.p,{children:"Unlike other blockchains, Swanky Node adopts block authoring and finality gadgets referred to as Manual Seal and Instant Seal, consensus mechanisms suitable for contract development and testing."}),"\n",(0,t.jsx)(n.p,{children:"Manual seal - Blocks are authored whenever RPC is called.\nInstant seal - Blocks are authored as soon as transactions enter the pool, most often resulting in one transaction per block."}),"\n",(0,t.jsx)(n.p,{children:"Swanky Node enables both Manual seal and Instant seal."}),"\n",(0,t.jsx)(n.h4,{id:"manual-sealing-via-rpc-call",children:"Manual Sealing via RPC call"}),"\n",(0,t.jsxs)(n.p,{children:["We can tell the node to author a block by calling the ",(0,t.jsx)(n.code,{children:"engine_createBlock"})," RPC."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'$ curl http://localhost:9933 -H "Content-Type:application/json;charset=utf-8" -d   \'{\n     "jsonrpc":"2.0",\n      "id":1,\n      "method":"engine_createBlock",\n      "params": [true, false, null]\n    }\'\n'})}),"\n",(0,t.jsx)(n.h4,{id:"params",children:"Params"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Create Empty"}),"\n",(0,t.jsx)(n.code,{children:"create_empty"})," is a Boolean value indicating whether empty blocks may be created. Setting ",(0,t.jsx)(n.code,{children:"create-empty"})," to true does not mean that an empty block will necessarily be created. Rather, it means that the engine should go ahead creating a block even if no transactions are present. If transactions are present in the queue, they will be included regardless of the value of ",(0,t.jsx)(n.code,{children:"create_empty"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Finalize"}),"\n",(0,t.jsx)(n.code,{children:"finalize"})," is a Boolean value indicating whether the block (and its ancestors, recursively) should be finalized after creation."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Parent Hash"}),"\n",(0,t.jsx)(n.code,{children:"parent_hash"})," is an optional hash of a block to use as a parent. To set the parent, use the format ",(0,t.jsx)(n.code,{children:'"0x0e0626477621754200486f323e3858cd5f28fcbe52c69b2581aecb622e384764"'}),". To omit the parent, use ",(0,t.jsx)(n.code,{children:"null"}),". When the parent is omitted the block will be built on the current best block. Manually specifying the parent is useful for constructing fork scenarios, and demonstrating chain reorganizations."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"finalizing-blocks-manually",children:"Finalizing Blocks Manually"}),"\n",(0,t.jsxs)(n.p,{children:["In addition to finalizing blocks at the time of creating them, they may also be finalized later by using the RPC call ",(0,t.jsx)(n.code,{children:"engine_finalizeBlock"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'$ curl http://localhost:9933 -H "Content-Type:application/json;charset=utf-8" -d   \'{\n     "jsonrpc":"2.0",\n      "id":1,\n      "method":"engine_finalizeBlock",\n      "params": ["0x0e0626477621754200486f323e3858cd5f28fcbe52c69b2581aecb622e384764", null]\n    }\'\n'})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>i});var a=s(6540);const t={},l=a.createContext(t);function o(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);