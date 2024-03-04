"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9280],{56028:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var c=n(17624),a=n(4552);const o={title:"Install cargo-contract",slug:"/cargo-contract-cli"},r=void 0,i={id:"getting-started/cargo-contract",title:"Install cargo-contract",description:"cargo-contract is a command-line (CLI) tool which helps you set up and manage",source:"@site/versioned_docs/version-5.x/getting-started/cargo-contract.md",sourceDirName:"getting-started",slug:"/cargo-contract-cli",permalink:"/5.x/cargo-contract-cli",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/getting-started/cargo-contract.md",tags:[],version:"5.x",frontMatter:{title:"Install cargo-contract",slug:"/cargo-contract-cli"}},s={},l=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}];function d(t){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.M)(),...t.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"cargo-contract"})," is a command-line (CLI) tool which helps you set up and manage\nWebAssembly smart contracts written with ink!.\nYou can find it ",(0,c.jsx)(e.a,{href:"https://github.com/paritytech/cargo-contract",children:"here on GitHub"}),"\nand ",(0,c.jsx)(e.a,{href:"https://crates.io/crates/cargo-contract",children:"here on crates.io"}),"."]}),"\n",(0,c.jsx)(e.p,{children:"The tool has a number of handy capabilities:"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"$ cargo contract       \nUtilities to develop Wasm smart contracts\n\nUsage: cargo contract <COMMAND>\n\nCommands:\n  new          Setup and create a new smart contract project\n  build        Compiles the contract, generates metadata, bundles both together in a `<name>.contract` file\n  check        Check that the code builds as Wasm; does not output any `<name>.contract` artifact to the `target/` directory\n  test         Test the smart contract off-chain\n  upload       Upload contract code\n  instantiate  Instantiate a contract\n  call         Call a contract\n  decode       Decodes a contracts input or output data (supplied in hex-encoding)\n  help         Print this message or the help of the given subcommand(s)\n\nOptions:\n  -h, --help     Print help information\n  -V, --version  Print version information\n"})}),"\n",(0,c.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,c.jsxs)(e.p,{children:["Please see the installation instructions in the ",(0,c.jsx)(e.code,{children:"cargo-contract"})," repository ",(0,c.jsx)(e.a,{href:"https://github.com/paritytech/cargo-contract#installation",children:"here"}),"."]}),"\n",(0,c.jsxs)(e.p,{children:["You can then use ",(0,c.jsx)(e.code,{children:"cargo contract --help"})," to start exploring the commands made available to you."]}),"\n",(0,c.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,c.jsx)(e.p,{children:"In order to initialize a new ink! project you can use:"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"cargo contract new flipper\n"})}),"\n",(0,c.jsxs)(e.p,{children:["This will create a folder ",(0,c.jsx)(e.code,{children:"flipper"})," in your work directory.\nThe folder contains a scaffold ",(0,c.jsx)(e.code,{children:"Cargo.toml"})," and a ",(0,c.jsx)(e.code,{children:"lib.rs"}),", which both contain the necessary building blocks for using ink!."]}),"\n",(0,c.jsxs)(e.p,{children:["The ",(0,c.jsx)(e.code,{children:"lib.rs"})," contains our hello world contract \u2012 the ",(0,c.jsx)(e.code,{children:"Flipper"}),", which we explain in the next section."]}),"\n",(0,c.jsxs)(e.p,{children:["In order to build the contract just execute these commands in the ",(0,c.jsx)(e.code,{children:"flipper"})," folder:"]}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{className:"language-bash",children:"cargo contract build\n"})}),"\n",(0,c.jsxs)(e.p,{children:["As a result you'll get the file ",(0,c.jsx)(e.code,{children:"target/flipper.contract"}),". It's a JSON which bundles the contract's\nmetadata and its Wasm blob. This file needs to be used when deploying the contract.\nYou additionally get the individual ",(0,c.jsx)(e.code,{children:"target/flipper.wasm"})," and ",(0,c.jsx)(e.code,{children:"target/flipper.json"})," in the folder as well."]})]})}function h(t={}){const{wrapper:e}={...(0,a.M)(),...t.components};return e?(0,c.jsx)(e,{...t,children:(0,c.jsx)(d,{...t})}):d(t)}},4552:(t,e,n)=>{n.d(e,{I:()=>i,M:()=>r});var c=n(11504);const a={},o=c.createContext(a);function r(t){const e=c.useContext(o);return c.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:r(t.components),c.createElement(o.Provider,{value:e},t.children)}}}]);