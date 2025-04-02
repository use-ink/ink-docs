"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[671],{45796:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"getting-started/creating","title":"Create an ink! Project","description":"Heart Title Picture","source":"@site/versioned_docs/version-v6/getting-started/creating.md","sourceDirName":"getting-started","slug":"/getting-started/creating-an-ink-project","permalink":"/docs/v6/getting-started/creating-an-ink-project","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v6/getting-started/creating.md","tags":[],"version":"v6","frontMatter":{"title":"Create an ink! Project","slug":"/getting-started/creating-an-ink-project","hide_title":true},"sidebar":"reference","previous":{"title":"Setup","permalink":"/docs/v6/getting-started/setup"},"next":{"title":"Compile your contract","permalink":"/docs/v6/getting-started/building-your-contract"}}');var i=n(74848),a=n(28453);const s={title:"Create an ink! Project",slug:"/getting-started/creating-an-ink-project",hide_title:!0},o="Creating an ink! Project",c={},l=[{value:"Create a new project",id:"create-a-new-project",level:2},{value:"Contract Source Code",id:"contract-source-code",level:2},{value:"Testing Your Contract",id:"testing-your-contract",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Heart Title Picture",src:n(59687).A+"",width:"1600",height:"500"})}),"\n",(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"creating-an-ink-project",children:"Creating an ink! Project"})}),"\n",(0,i.jsxs)(t.p,{children:["ink! is an ",(0,i.jsx)(t.a,{href:"https://wiki.haskell.org/Embedded_domain_specific_language",children:"Embedded Domain Specific Language"})," (eDSL):\na domain-specific language of the Rust programming language.\nThat means:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"we allow only a subset of the Rust programming language features to be used\nfor writing smart contracts. For example, it is not possible do any\nmulti-threading operations or access the web."}),"\n",(0,i.jsx)(t.li,{children:"we provide annotations, macros, and primitives that are needed when writing\nsmart contracts. For example, annotations on what the smart contract's storage\nstruct is or what an event is."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:['ink! is just standard Rust in a well-defined "contract format" with specialized ',(0,i.jsx)(t.code,{children:"#[ink(\u2026)]"})," attribute macros. These attribute macros tell ink! what the different parts of your Rust smart contract represent, and ultimately allow ink! to do all the magic needed to create Polkadot SDK compatible RISC-V bytecode!"]}),"\n",(0,i.jsx)(t.h2,{id:"create-a-new-project",children:"Create a new project"}),"\n",(0,i.jsx)(t.p,{children:"Use the ink! CLI to generate an initial smart contract with some scaffolding code."}),"\n",(0,i.jsx)(t.p,{children:"Make sure you are in your working directory, and then run:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"$ cargo contract new flipper\n"})}),"\n",(0,i.jsxs)(t.p,{children:["This command will create a new project folder named ",(0,i.jsx)(t.code,{children:"flipper"})," with this content:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"flipper\n  \u2514\u2500 lib.rs         <-- Contract Source Code\n  \u2514\u2500 Cargo.toml     <-- Rust Dependencies and ink! Configuration\n  \u2514\u2500 .gitignore\n"})}),"\n",(0,i.jsx)(t.h2,{id:"contract-source-code",children:"Contract Source Code"}),"\n",(0,i.jsxs)(t.p,{children:["For the ",(0,i.jsx)(t.code,{children:"lib.rs"})," file, ",(0,i.jsx)(t.code,{children:"cargo-contract"}),' automatically generates the source code for the "Flipper" contract, which is about the simplest "smart" contract you can build. You can take a sneak peak as to what will come by looking at the source code here:\n',(0,i.jsx)(t.a,{href:"https://github.com/use-ink/ink-examples/blob/main/flipper/lib.rs",children:"Flipper Example Source Code"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The Flipper contract is nothing more than a ",(0,i.jsx)(t.code,{children:"bool"})," which gets flipped from ",(0,i.jsx)(t.code,{children:"true"})," to ",(0,i.jsx)(t.code,{children:"false"})," through the ",(0,i.jsx)(t.code,{children:"flip()"})," function."]}),"\n",(0,i.jsx)(t.h2,{id:"testing-your-contract",children:"Testing Your Contract"}),"\n",(0,i.jsxs)(t.p,{children:["At the bottom of the ",(0,i.jsx)(t.code,{children:"lib.rs"})," you'll see some simple test cases which verify the functionality of the contract.\nWe can quickly test this code is functioning as expected:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"$ cargo test\n"})}),"\n",(0,i.jsx)(t.p,{children:"To which you should see a successful test completion:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"$ cargo test\nrunning 2 tests\ntest flipper::tests::it_works ... ok\ntest flipper::tests::default_works ... ok\n\ntest result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out\n"})}),"\n",(0,i.jsx)(t.p,{children:"Now that we are feeling confident things are working, we can actually compile this contract to a RISC-V binary in the next step."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},59687:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/heart-66539810b61bdb22e326415be7dd34aa.svg"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(96540);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);