"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9783],{8280:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"basics/contract-template","title":"Contract Template","description":"On this page we\'ll go over how to create a basic contract and explain","source":"@site/docs/basics/contract-template.md","sourceDirName":"basics","slug":"/basics/contract-template","permalink":"/basics/contract-template","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/docs/basics/contract-template.md","tags":[],"version":"current","frontMatter":{"title":"Contract Template","hide_title":true,"slug":"/basics/contract-template"},"sidebar":"reference","previous":{"title":"Troubleshooting","permalink":"/getting-started/troubleshooting"},"next":{"title":"Storing Values","permalink":"/basics/storing-values"}}');var s=t(4848),i=t(8453);const o={title:"Contract Template",hide_title:!0,slug:"/basics/contract-template"},r="Contract Template",c={},l=[{value:"Creating a template",id:"creating-a-template",level:2},{value:"Template Content",id:"template-content",level:2},{value:"<code>Cargo.toml</code>",id:"cargotoml",level:3},{value:"<code>lib.rs</code>",id:"librs",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:"/img/title/macro.svg",className:"titlePic"}),"\n",(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"contract-template",children:"Contract Template"})}),"\n",(0,s.jsx)(n.p,{children:"On this page we'll go over how to create a basic contract and explain\nits elements."}),"\n",(0,s.jsx)(n.h2,{id:"creating-a-template",children:"Creating a template"}),"\n",(0,s.jsx)(n.p,{children:"Change into your working directory and run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cargo contract new foobar\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will create a new project folder named ",(0,s.jsx)(n.code,{children:"foobar"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd foobar/\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"lib.rs"})," file you find initial scaffolded code, which you can use as a starting point."]}),"\n",(0,s.jsx)(n.p,{children:"Quickly check that it compiles, and the trivial tests pass with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cargo test\n"})}),"\n",(0,s.jsx)(n.p,{children:"Also check that you can build the Wasm file by running:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cargo contract build\n"})}),"\n",(0,s.jsx)(n.p,{children:"If everything looks good, then we are ready to start programming!"}),"\n",(0,s.jsx)(n.h2,{id:"template-content",children:"Template Content"}),"\n",(0,s.jsx)(n.p,{children:"The template contains scaffolded code that provides a starting point\nfor writing an ink! contract. In the following we'll take a look\nat what the files contain.\nThe files you get locally will look similar, just that we added\nexplanatory comments here."}),"\n",(0,s.jsx)(n.h3,{id:"cargotoml",children:(0,s.jsx)(n.code,{children:"Cargo.toml"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'[package]\nname = "foobar"\nversion = "0.1.0"\nauthors = ["[your_name] <[your_email]>"]\nedition = "2021"\n\n[dependencies]\n# The `ink` crate contains the ink! eDSL and re-exports\n# a number of other ink! specific crates. For example,\n# `ink::env` is the `ink_env` crate that contains functions\n# to interact with a contract\'s environment (querying information\n# about a caller, the current block number, etc.).\nink = { version = "4.0.0-beta", default-features = false }\n\n# Substrate blockchains use the SCALE codec for anything to\n# do with data encoding/decoding. If an ink! contract is called\n# the passed values have to be SCALE-encoded and return values\n# have to be SCALE-decoded. All values that are put into a\n# contract\'s storage are SCALE-encoded as well.\nscale = { package = "parity-scale-codec", version = "3", default-features = false, features = ["derive"] }\n\n# This crate is used to write information about a contract\'s\n# types into the contract\'s metadata (i.e. its ABI). This is\n# needed so that a client knows that a contract message requires\n# e.g. an Array and that it has to SCALE-encode the value as an Array.\nscale-info = { version = "2.3", default-features = false, features = ["derive"], optional = true }\n\n[dev-dependencies]\n# This developer dependency is for the End-to-End testing framework.\nink_e2e = { path = "../../crates/e2e" }\n\n[lib]\nname = "foobar"\npath = "lib.rs"\n\n# This setting typically specifies that you\'d like the compiler to\n# create a dynamic system library. For WebAssembly though it specifies\n# that the compiler should create a `*.wasm` without a start function.\ncrate-type = [\n    "cdylib",\n]\n\n[features]\ndefault = ["std"]\nstd = [\n    "ink/std",\n    "scale/std",\n    "scale-info/std",\n]\nink-as-dependency = []\n\n# This feature is just a convention, so that the end-to-end tests\n# are only executed if `cargo test` is explicitly invoked with\n# `--features e2e-tests`.\ne2e-tests = []\n'})}),"\n",(0,s.jsx)(n.h3,{id:"librs",children:(0,s.jsx)(n.code,{children:"lib.rs"})}),"\n",(0,s.jsx)(n.p,{children:"Every ink! contract is required to contain:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Exactly one ",(0,s.jsx)(n.code,{children:"#[ink(storage)]"})," struct."]}),"\n",(0,s.jsxs)(n.li,{children:["At least one ",(0,s.jsx)(n.code,{children:"#[ink(constructor)]"})," function."]}),"\n",(0,s.jsxs)(n.li,{children:["At least one ",(0,s.jsx)(n.code,{children:"#[ink(message)]"})," function."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The scaffolded code will look similar to the following, we've\nchanged the comments though to explain what is going on there\non a high level."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'// If the `std` feature from the `Cargo.toml` is not enabled\n// we switch on `no_std`, this has the effect of Rusts standard\n// library not being included in our contract.\n//\n// The Rust standard library is OS-dependent and Wasm is\n// architecture independent.\n#![cfg_attr(not(feature = "std"), no_std)]\n\n// This is the ink! macro, the starting point for your contract.\n// Everything below it might look like Rust code, but it is actually\n// run through a parser in ink!.\n#[ink::contract]\npub mod flipper {\n    /// This is the contract\'s storage.\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        /// A constructor that the contract can be initialized with.\n        #[ink(constructor)]\n        pub fn new(init_value: bool) -> Self {\n            /* --snip-- */\n        }\n\n        /// An alternative constructor that the contract can be\n        /// initialized with.\n        #[ink(constructor)]\n        pub fn new_default() -> Self {\n            /* --snip-- */\n        }\n\n        /// A state-mutating function that the contract exposes to the\n        /// outside world.\n        ///\n        /// By default functions are private, they have to be annotated\n        /// with `#[ink(message)]` and `pub` to be available from the\n        /// outside.\n        #[ink(message)]\n        pub fn flip(&mut self) {\n            /* --snip-- */\n        }\n\n        /// A public contract function that has no side-effects.\n        ///\n        /// Note that while purely reading functions can be invoked\n        /// by submitting a transaction on-chain, this is usually\n        /// not done as they have no side-effects and the transaction\n        /// costs would be wasted.\n        /// Instead those functions are typically invoked via RPC to\n        /// return a contract\'s state.\n        #[ink(message)]\n        pub fn get(&self) -> bool {\n            /* --snip-- */\n        }\n    }\n\n    #[cfg(test)]\n    mod tests {\n        use super::*;\n\n        /// This attribute denotes that the test is executed in\n        /// a simulated, mocked blockchain environment. There are\n        /// functions available to influence how the test environment\n        /// is configured (e.g. setting an account to a specified balance).\n        #[ink::test]\n        fn default_works() {\n            /* --snip-- */\n        }\n\n        /* --snip-- */\n    }\n\n    #[cfg(all(test, feature = "e2e-tests"))]\n    mod e2e_tests {\n        use super::*;\n        use ink_e2e::build_message;\n\n        type E2EResult<T> = std::result::Result<T, Box<dyn std::error::Error>>;\n\n        /// With this attribute the contract will be compiled and deployed\n        /// to a Substrate node that is required to be running in the\n        /// background.\n        ///\n        /// We offer API functions that enable developers to then interact\n        /// with the contract. ink! will take care of putting contract calls\n        /// into transactions that will be submitted to the Substrate chain.\n        ///\n        /// Developers can define assertions on the outcome of their transactions,\n        /// such as checking for state mutations, transaction failures or\n        /// incurred gas costs.\n        #[ink_e2e::test]\n        async fn it_works(mut client: ink_e2e::Client<C, E>) -> E2EResult<()> {\n            /* --snip-- */\n        }\n\n        /* --snip-- */\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var a=t(6540);const s={},i=a.createContext(s);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);