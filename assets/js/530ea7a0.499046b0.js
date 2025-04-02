"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8689],{95437:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"getting-started/setup","title":"Setup","description":"Setup Title Picture","source":"@site/docs/getting-started/setup.md","sourceDirName":"getting-started","slug":"/getting-started/setup","permalink":"/docs/v5/getting-started/setup","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/docs/getting-started/setup.md","tags":[],"version":"current","frontMatter":{"title":"Setup","slug":"/getting-started/setup","hide_title":true},"sidebar":"reference","previous":{"title":"Migrating an ink! contract to a Parachain Runtime","permalink":"/docs/v5/migrate-ink-contracts-to-polkadot-frame-parachain"},"next":{"title":"Creating an ink! Project","permalink":"/docs/v5/getting-started/creating-an-ink-project"}}');var s=n(74848),i=n(28453);const r={title:"Setup",slug:"/getting-started/setup",hide_title:!0},o="Setup",c={},l=[{value:"Rust &amp; Cargo",id:"rust--cargo",level:2},{value:"ink! CLI",id:"ink-cli",level:2},{value:"Installation",id:"installation",level:3},{value:"Installing <code>substrate-contracts-node</code>",id:"installing-substrate-contracts-node",level:2},{value:"(1) Download the Binary",id:"1-download-the-binary",level:3},{value:"(2) Build it yourself",id:"2-build-it-yourself",level:3}];function d(t){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,i.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Setup Title Picture",src:n(35592).A+"",width:"1600",height:"500"})}),"\n",(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"setup",children:"Setup"})}),"\n",(0,s.jsxs)(e.p,{children:["In case you are looking for a guided tutorial directed\ntowards beginners please check out our ",(0,s.jsx)(e.a,{href:"https://docs.substrate.io/tutorials/smart-contracts/",children:"Guided Tutorial"}),"."]}),"\n",(0,s.jsx)(e.h2,{id:"rust--cargo",children:"Rust & Cargo"}),"\n",(0,s.jsxs)(e.p,{children:["A pre-requisite for compiling smart contracts is to have a stable Rust version and Cargo installed. Here's ",(0,s.jsx)(e.a,{href:"https://doc.rust-lang.org/cargo/getting-started/installation.html",children:"an installation guide"}),"."]}),"\n",(0,s.jsx)(e.h2,{id:"ink-cli",children:"ink! CLI"}),"\n",(0,s.jsxs)(e.p,{children:["The first tool we will be installing is ",(0,s.jsx)(e.a,{href:"https://github.com/use-ink/cargo-contract",children:(0,s.jsx)(e.code,{children:"cargo-contract"})}),",\na CLI tool for helping setting up and managing WebAssembly smart contracts written with ink!."]}),"\n",(0,s.jsxs)(e.p,{children:["You can find it ",(0,s.jsx)(e.a,{href:"https://github.com/use-ink/cargo-contract",children:"here on GitHub"}),"\nand ",(0,s.jsx)(e.a,{href:"https://crates.io/crates/cargo-contract",children:"here on crates.io"}),"."]}),"\n",(0,s.jsx)(e.p,{children:"The tool has a number of handy capabilities:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"$ cargo contract       \nUtilities to develop Wasm smart contracts\n\nUsage: cargo contract <COMMAND>\n\nCommands:\n  new          Setup and create a new smart contract project\n  build        Compiles the contract, generates metadata, bundles both together in a `<name>.contract` file\n  check        Check that the code builds as Wasm; does not output any `<name>.contract` artifact to the `target/` directory\n  test         Test the smart contract off-chain\n  upload       Upload contract code\n  instantiate  Instantiate a contract\n  call         Call a contract\n  decode       Decodes a contracts input or output data (supplied in hex-encoding)\n  help         Print this message or the help of the given subcommand(s)\n\nOptions:\n  -h, --help     Print help information\n  -V, --version  Print version information\n"})}),"\n",(0,s.jsx)(e.h3,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(e.p,{children:["Please see the installation instructions in the ",(0,s.jsx)(e.code,{children:"cargo-contract"})," repository ",(0,s.jsx)(e.a,{href:"https://github.com/use-ink/cargo-contract#installation",children:"here"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:["If everything worked, ",(0,s.jsx)(e.code,{children:"cargo contract --help"})," should show you the above list of available commands."]}),"\n",(0,s.jsxs)(e.h2,{id:"installing-substrate-contracts-node",children:["Installing ",(0,s.jsx)(e.code,{children:"substrate-contracts-node"})]}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.a,{href:"https://github.com/paritytech/substrate-contracts-node",children:"substrate-contracts-node"})," is\na simple Substrate blockchain which is configured to include the Substrate module for\nsmart contract functionality \u2013 the ",(0,s.jsx)(e.code,{children:"contracts"})," pallet (see ",(0,s.jsx)(e.a,{href:"/docs/v5/how-it-works",children:"How it Works"})," for more).\nIt's a comfortable option if you want to get a quickstart."]}),"\n",(0,s.jsx)(e.p,{children:"There are two ways of installing the node:"}),"\n",(0,s.jsx)(e.h3,{id:"1-download-the-binary",children:"(1) Download the Binary"}),"\n",(0,s.jsxs)(e.p,{children:["This is the recommended method, you can\n",(0,s.jsx)(e.a,{href:"https://github.com/paritytech/substrate-contracts-node/releases",children:"download a binary from our releases page"}),"\n(Linux and Mac)."]}),"\n",(0,s.jsx)(e.h3,{id:"2-build-it-yourself",children:"(2) Build it yourself"}),"\n",(0,s.jsx)(e.p,{children:"Alternatively you can build the node by yourself.\nThis can take quite a while though!"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"cargo install contracts-node\n"})})]})}function h(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},35592:(t,e,n)=>{n.d(e,{A:()=>a});const a=n.p+"assets/images/setup-28da3f7b188a23ce21d2f72be77f3434.svg"},28453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>o});var a=n(96540);const s={},i=a.createContext(s);function r(t){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),a.createElement(i.Provider,{value:e},t.children)}}}]);