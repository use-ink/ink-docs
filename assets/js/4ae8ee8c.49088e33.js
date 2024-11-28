"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7300],{2060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"faq/faq","title":"Frequently Asked Questions","description":"Is it \\"ink\\" or \\"ink!\\"? What does the \\"!\\" stand for?","source":"@site/versioned_docs/version-3.x/faq/faq.md","sourceDirName":"faq","slug":"/faq","permalink":"/3.x/faq","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-3.x/faq/faq.md","tags":[],"version":"3.x","frontMatter":{"title":"Frequently Asked Questions","slug":"/faq","hide_table_of_contents":true},"sidebar":"reference","previous":{"title":"OpenBrush","permalink":"/3.x/getting-started/openbrush"},"next":{"title":"ink!","permalink":"/3.x/brand-assets/ink"}}');var o=n(4848),i=n(8453);const r={title:"Frequently Asked Questions",slug:"/faq",hide_table_of_contents:!0},a=void 0,c={},l=[{value:"Is it &quot;ink&quot; or &quot;ink!&quot;? What does the &quot;!&quot; stand for?",id:"is-it-ink-or-ink-what-does-the--stand-for",level:3},{value:"Who is &quot;Squink&quot;?",id:"who-is-squink",level:3},{value:"What&#39;s ink!&#39;s relationship to Substrate/Polkadot?",id:"whats-inks-relationship-to-substratepolkadot",level:3},{value:"How to call other smart contracts on the same blockchain?",id:"how-to-call-other-smart-contracts-on-the-same-blockchain",level:3},{value:"How to call other smart contracts on another parachain?",id:"how-to-call-other-smart-contracts-on-another-parachain",level:3},{value:"What is a contract&#39;s ABI or Metadata?",id:"what-is-a-contracts-abi-or-metadata",level:3},{value:"Can a re-entrancy bug occur in ink! contracts?",id:"can-a-re-entrancy-bug-occur-in-ink-contracts",level:3},{value:"How can my smart contract interact with the runtime?",id:"how-can-my-smart-contract-interact-with-the-runtime",level:3},{value:"How can I use ink! with a Substrate chain with a custom chain config?",id:"how-can-i-use-ink-with-a-substrate-chain-with-a-custom-chain-config",level:3},{value:"What does the <code>#![cfg_attr(not(feature = &quot;std&quot;), no_std)]</code> at the beginning of each contract mean?",id:"what-does-the-cfg_attrnotfeature--std-no_std-at-the-beginning-of-each-contract-mean",level:3},{value:"Overflow Safety?",id:"overflow-safety",level:3},{value:"What is the difference between memory and storage?",id:"what-is-the-difference-between-memory-and-storage",level:3},{value:"How do I print something to the console from the runtime?",id:"how-do-i-print-something-to-the-console-from-the-runtime",level:3},{value:"Why is Rust&#39;s standard library (stdlib) not available in ink!?",id:"why-is-rusts-standard-library-stdlib-not-available-in-ink",level:3},{value:"Why is <code>nightly</code> required for ink!?",id:"why-is-nightly-required-for-ink",level:3},{value:"How do I hash a value?",id:"how-do-i-hash-a-value",level:3},{value:"Why is it not possible to use floating point data types in ink!? How do I implement returning a decimal number?",id:"why-is-it-not-possible-to-use-floating-point-data-types-in-ink-how-do-i-implement-returning-a-decimal-number",level:3},{value:"Why can&#39;t I just use the standard Rust data collections in ink!?",id:"why-cant-i-just-use-the-standard-rust-data-collections-in-ink",level:3},{value:"Why am I getting a <code>ContractTrapped</code> error when interacting with a contract?",id:"why-am-i-getting-a-contracttrapped-error-when-interacting-with-a-contract",level:3},{value:"What are the <code>scale::Encode</code> and <code>scale::Decode</code> traits?",id:"what-are-the-scaleencode-and-scaledecode-traits",level:3},{value:"How do I use <code>String</code> in my contract?",id:"how-do-i-use-string-in-my-contract",level:3}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h3,{id:"is-it-ink-or-ink-what-does-the--stand-for",children:'Is it "ink" or "ink!"? What does the "!" stand for?'}),"\n",(0,o.jsxs)(t.p,{children:["The correct spelling is ",(0,o.jsx)(t.em,{children:"ink!"}),' \u2012 with a lowercase "i" and an exclamation mark at the end.\nThe history here is that:']}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\u2026in the very first iteration ink! was originally a ",(0,o.jsx)(t.a,{href:"https://doc.rust-lang.org/book/ch19-06-macros.html#declarative-macros-with-macro_rules-for-general-metaprogramming",children:"declarative Rust macro"}),". A contract was invoked by writing ",(0,o.jsx)(t.code,{children:"ink!{ \u2026 }"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"\u2026there is a real-world analogy here of writing a paper contract using ink."}),"\n",(0,o.jsx)(t.li,{children:"\u2026we wanted to have as many DOTs as possible in the name \ud83d\ude09."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"So please don't make poor Squink cry having to read !ink, ink, Ink!, or Ink."}),"\n",(0,o.jsx)(t.h3,{id:"who-is-squink",children:'Who is "Squink"?'}),"\n",(0,o.jsxs)("div",{class:"squid-container",children:[(0,o.jsx)("img",{src:"/img/ink-squink.svg",alt:"Squink \u2012 the ink! mascot",height:"90",className:"squid"}),(0,o.jsx)(t.p,{children:"This little cute purple squid is Squink."}),(0,o.jsx)(t.p,{children:"Squink is the mascot of ink! and guides new users and adventurers through our presentations\nworkshops and tutorials. It also has a romance with Rust's mascot, Ferris."}),(0,o.jsx)(t.p,{children:"Generally it is very friendly and open to learning new Rustaceans but be aware to never upset\nit by taking away dots from the word ink! by spelling it incorrectly!\nIt really is into dots. Stories tell that it demanded the spelling of ink! with as many dots as possible."})]}),"\n",(0,o.jsx)(t.h3,{id:"whats-inks-relationship-to-substratepolkadot",children:"What's ink!'s relationship to Substrate/Polkadot?"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Substrate is a modular framework to build decentralized applications on top of blockchain technology."}),"\n",(0,o.jsx)(t.li,{children:"Polkadot is a layer-0 blockchain built using Substrate that allows to orchestrate an entire\nfleet of other blockchains to join forces and communicate with each other."}),"\n",(0,o.jsxs)(t.li,{children:["Blockchains built with Substrate can include the so-called ",(0,o.jsx)(t.code,{children:"contracts-pallet"})," module in order to\nallow instantiating and executing smart contracts."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["ink! was built to allow users to write smart contracts in Rust targeting blockchains built by\nSubstrate that have the aforementioned ",(0,o.jsx)(t.code,{children:"contracts-pallet"})," included."]}),"\n",(0,o.jsx)(t.p,{children:"While ink! is currently the most advanced smart contract language targeting Substrate blockchains it is\nnot the only possible choice for users. There is also a Solidity to Wasm compiler called Solang that also\nallows to target Substrate chains and there are other languages in plan and discovery phase for the same\npurpose."}),"\n",(0,o.jsxs)(t.p,{children:["On the Substrate side the same is true for the ",(0,o.jsx)(t.code,{children:"contracts-pallet"}),". It is just a module that defines\nthe basic set of features required for executing smart contracts on the blockchain that includes it.\nHowever, it is not necessarily the only solution to do exactly that. There is also the ",(0,o.jsx)(t.code,{children:"evm-pallet"}),"\nto run smart contracts targeting the EVM as well as the experimental ",(0,o.jsx)(t.code,{children:"actors-pallet"})," that allows to\nexecute smart contracts written in the actor style programming model.\nOver time the Substrate community might come up with yet other pallets for smart contracts execution."]}),"\n",(0,o.jsx)(t.h3,{id:"how-to-call-other-smart-contracts-on-the-same-blockchain",children:"How to call other smart contracts on the same blockchain?"}),"\n",(0,o.jsxs)(t.p,{children:["See the ",(0,o.jsx)(t.a,{href:"/3.x/basics/cross-contract-calling",children:"Cross-contract calling"})," section."]}),"\n",(0,o.jsx)(t.h3,{id:"how-to-call-other-smart-contracts-on-another-parachain",children:"How to call other smart contracts on another parachain?"}),"\n",(0,o.jsx)(t.p,{children:"This feature has not yet been implemented by the Substrate side."}),"\n",(0,o.jsx)(t.h3,{id:"what-is-a-contracts-abi-or-metadata",children:"What is a contract's ABI or Metadata?"}),"\n",(0,o.jsxs)(t.p,{children:["In ink! a smart contract's metadata is retrieved by using the ",(0,o.jsx)(t.code,{children:"cargo-contract"})," CLI tool and\ninvoking ",(0,o.jsx)(t.code,{children:"cargo contract build"})," which outputs a ",(0,o.jsx)(t.code,{children:".contract"})," file that includes both the compiled\n",(0,o.jsx)(t.code,{children:".wasm"})," of the ink! smart contract as well as the so-called metadata information of the same\nsmart contract.\nThe metadata is especially important for third party tools such as Polkadot JS Apps or the Contracts UI\nand provides useful information about the contract's constructors, messages, events, function selectors,\ndocumentation and comments of the aforementioned structures as well as how inputs and outputs shall\nbe encoded and decoded respectively etc."]}),"\n",(0,o.jsx)(t.h3,{id:"can-a-re-entrancy-bug-occur-in-ink-contracts",children:"Can a re-entrancy bug occur in ink! contracts?"}),"\n",(0,o.jsx)(t.p,{children:"Yes. However, the Substrate team is well aware of the associated problems and already through about\npossible future additions to eliminate re-entrancy attacks."}),"\n",(0,o.jsx)(t.h3,{id:"how-can-my-smart-contract-interact-with-the-runtime",children:"How can my smart contract interact with the runtime?"}),"\n",(0,o.jsxs)(t.p,{children:["See the ",(0,o.jsx)(t.a,{href:"/3.x/macros-attributes/chain-extension",children:"Chain Extensions"})," section for more information."]}),"\n",(0,o.jsx)(t.h3,{id:"how-can-i-use-ink-with-a-substrate-chain-with-a-custom-chain-config",children:"How can I use ink! with a Substrate chain with a custom chain config?"}),"\n",(0,o.jsxs)(t.p,{children:["Please see ",(0,o.jsxs)(t.a,{href:"https://docs.rs/ink_lang_macro/3.3.1/ink_lang_macro/attr.contract.html#header-arguments",children:["the ",(0,o.jsx)(t.code,{children:"env_types"})," argument"]}),"\nfor the contract macro. It allows you to specify your environment a la\n",(0,o.jsx)(t.code,{children:"#[ink::contract(env = MyEnvironment)]"}),"."]}),"\n",(0,o.jsxs)(t.h3,{id:"what-does-the-cfg_attrnotfeature--std-no_std-at-the-beginning-of-each-contract-mean",children:["What does the ",(0,o.jsx)(t.code,{children:'#![cfg_attr(not(feature = "std"), no_std)]'})," at the beginning of each contract mean?"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"#[cfg(..)]"})," or ",(0,o.jsx)(t.code,{children:"#[cfg_attr(..)]"})," annotations are how Rust does conditional compilation."]}),"\n",(0,o.jsx)(t.p,{children:"ink! smart contracts can be compiled in two different modes."}),"\n",(0,o.jsxs)(t.p,{children:["Through ",(0,o.jsx)(t.code,{children:'#![cfg_attr(not(feature = "std"), no_std)]'})," an ink! smart contract tells the Rust compiler\nin which mode they are being compiled. This also plays a significant role in how ink! generates\nthe smart contract code."]}),"\n",(0,o.jsx)(t.p,{children:"The two modes are as follows:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Wasm mode: This is the mode chosen when compiling an ink! smart contract for deployment on a blockchain.\nThe resulting binary is a ",(0,o.jsx)(t.code,{children:".wasm"})," file and as such it is not possible to use certain parts of Rust's standard\nlibrary."]}),"\n",(0,o.jsx)(t.li,{children:"Off-chain mode: This is the mode chosen when trying to test an ink! smart contract using the off-chain\nenvironment. Off-chain environment testing is very useful to check if certain ink! constructors or messages\nare well behaving and allow for better debuggability than when trying to debug the same smart contract deployed\non a chain."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"overflow-safety",children:"Overflow Safety?"}),"\n",(0,o.jsxs)(t.p,{children:['Being written in Rust, ink! can provide compile-time overflow/underflow safety. Using a Rust compiler configuration, you can specify whether you want to support overflowing math, or if you want contract execution to panic when overflows occur. No need to continually import "Safe Math" libraries, although Rust also provides ',(0,o.jsx)(t.a,{href:"https://doc.rust-lang.org/std/primitive.u32.html",children:"integrated checked, wrapped, and saturated math functions"}),"."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Note: There are some known issues regarding functionality of compiler level overflow checks and the resulting size of the Wasm blob. This feature may change or be iterated on in the future."}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"what-is-the-difference-between-memory-and-storage",children:"What is the difference between memory and storage?"}),"\n",(0,o.jsx)(t.p,{children:"In ink!, memory refers to computer memory, while storage refers to the on-chain storage\nused by a contract instance. Memory is temporary and only lasts until the contract\nexecution is done, while storage is persistent and lasts over many contract executions.\nThe contract storage is built on top of the runtime storage, and access is considered to be slow."}),"\n",(0,o.jsx)(t.h3,{id:"how-do-i-print-something-to-the-console-from-the-runtime",children:"How do I print something to the console from the runtime?"}),"\n",(0,o.jsx)(t.p,{children:"You can use those two macros:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://docs.rs/ink_env/3.3.1/ink_env/macro.debug_println.html",children:(0,o.jsx)(t.code,{children:"ink_env::debug_println!"})})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://docs.rs/ink_env/3.3.1/ink_env/macro.debug_print.html",children:(0,o.jsx)(t.code,{children:"ink_env::debug_print!"})})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"There are three things you have to do for the debug messages to show up on the console:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsxs)(t.strong,{children:["Enable the feature ",(0,o.jsx)(t.code,{children:"pallet-contracts/unstable-interface"})," in the target runtime."]}),(0,o.jsx)("br",{}),"\nFor ",(0,o.jsx)(t.code,{children:"substrate-contracts-node"})," this is done by default ",(0,o.jsx)(t.a,{href:"https://github.com/paritytech/substrate-contracts-node/blob/master/runtime/Cargo.toml",children:"here"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsxs)(t.strong,{children:["Enable the feature ",(0,o.jsx)(t.code,{children:"ink-debug"})," for the ",(0,o.jsx)(t.code,{children:"ink_env"})," crate."]}),(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.code,{children:"cargo-contract"})," does this automatically for you (for versions ",(0,o.jsx)(t.code,{children:">= 0.13.0"}),"), except if\nyou compile a contract in ",(0,o.jsx)(t.code,{children:"--release"})," mode."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsxs)(t.strong,{children:["Set the log level of your node to ",(0,o.jsx)(t.code,{children:"runtime::contracts=debug"}),"."]}),(0,o.jsx)("br",{}),"\nFor example, to have only errors and debug output show up for the ",(0,o.jsx)(t.code,{children:"substrate-contracts-node"}),":"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"substrate-contracts-node --dev -lerror,runtime::contracts=debug\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Important: Debug output is only printed for RPC calls or off-chain tests \u2012 not for transactions!"})}),"\n",(0,o.jsx)(t.p,{children:"In your ink! message or constructor you can write the following:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",children:'#[ink(constructor)]\nfn new() -> Self {\n    ink_env::debug_println!("created new instance at {}", Self::env().block_number());\n    Self { }\n}\n\n#[ink(message)]\nfn print(&self) {\n   let caller = self.env().caller();\n   let message = ink_prelude::format!("got a call from {:?}", caller);\n   ink_env::debug_println!(&message);\n}\n'})}),"\n",(0,o.jsx)(t.h3,{id:"why-is-rusts-standard-library-stdlib-not-available-in-ink",children:"Why is Rust's standard library (stdlib) not available in ink!?"}),"\n",(0,o.jsx)(t.p,{children:"Rust's standard library consists of three different layers:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"core"})," library which defines everything that has no dependencies outside of Rust itself.\nIncluded are types such as ",(0,o.jsx)(t.code,{children:"Option"}),", ",(0,o.jsx)(t.code,{children:"Result"})," as well as a whole variety of modules,\nfunctions and macro."]}),"\n",(0,o.jsxs)(t.p,{children:["ink! smart contracts allow authors to use Rust's ",(0,o.jsx)(t.code,{children:"core"})," crate."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"alloc"})," library which is depending on a global allocator and mainly defines collections\nthat spill their elements on to the execution's heap memory.\nExamples for collections are ",(0,o.jsx)(t.code,{children:"Box"}),", ",(0,o.jsx)(t.code,{children:"String"}),", ",(0,o.jsx)(t.code,{children:"Vec"}),", ",(0,o.jsx)(t.code,{children:"HashMap"}),", ",(0,o.jsx)(t.code,{children:"LinkedList"})," and modules\nsuch as ",(0,o.jsx)(t.code,{children:"fmt"}),", ",(0,o.jsx)(t.code,{children:"rc"})," (ref-counted pointers) or borrows."]}),"\n",(0,o.jsxs)(t.p,{children:["ink! smart contracts allow authors to use Rust's ",(0,o.jsx)(t.code,{children:"alloc"})," crate.\nBy default ink! authors use definitions from the ",(0,o.jsx)(t.code,{children:"alloc"})," crate through ",(0,o.jsx)(t.code,{children:"ink_prelude"})," crate."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"std"})," library is what people generally call Rust's standard library."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"The Rust Standard Library is the foundation of portable Rust software, a set of minimal and battle-tested shared abstractions for the broader Rust ecosystem."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"It requires several operating system capabilities in order to work correctly such as input and\noutput systems for files, networking etc."}),"\n",(0,o.jsxs)(t.p,{children:["Since the Wasm (a.k.a. ",(0,o.jsx)(t.code,{children:"wasm32-unknown-unknown"}),") compilation target does not support Rust's\nstandard library ink! authors cannot use it either for their own purposes. Instead the ",(0,o.jsx)(t.code,{children:"contracts-pallet"}),"\ntries to provide some common functionality that would otherwise be missing for common smart contract\noperations."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.h3,{id:"why-is-nightly-required-for-ink",children:["Why is ",(0,o.jsx)(t.code,{children:"nightly"})," required for ink!?"]}),"\n",(0,o.jsxs)(t.p,{children:["ink! requires a ",(0,o.jsx)(t.code,{children:"nightly"})," Rust compiler as of 2021-01 since it relies on a few unstable nightly features\naround allocation handlers for ",(0,o.jsx)(t.code,{children:"no_std"})," (no standard library) code."]}),"\n",(0,o.jsx)(t.p,{children:"As soon as the Rust team decides to stabilize these features ink! will be available for stable Rust."}),"\n",(0,o.jsx)(t.h3,{id:"how-do-i-hash-a-value",children:"How do I hash a value?"}),"\n",(0,o.jsxs)(t.p,{children:["A number of crypto hashes are built into the ",(0,o.jsx)(t.a,{href:"/3.x/how-it-works",children:"contracts-pallet"})," and\ntherefore very efficient to use. We currently support a handful of those, you\ncan view the complete list ",(0,o.jsx)(t.a,{href:"https://docs.rs/ink_env/3.3.1/ink_env/hash/trait.CryptoHash.html",children:"here"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["If you have the urgent need for another crypto hash you could introduce it through\n",(0,o.jsx)(t.a,{href:"/3.x/macros-attributes/chain-extension",children:"Chain Extensions"}),"\nor make a proposal to include it into the default set of the ",(0,o.jsx)(t.code,{children:"contracts-pallet"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Using one of the built-in crypto hashes can be done as explained here:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://docs.rs/ink_env/3.3.1/ink_env/fn.hash_bytes.html",children:(0,o.jsx)(t.code,{children:"self.env().hash_bytes()"})})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://docs.rs/ink_env/3.3.1/ink_env/fn.hash_encoded.html",children:(0,o.jsx)(t.code,{children:"self.env().hash_encoded()"})})}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"why-is-it-not-possible-to-use-floating-point-data-types-in-ink-how-do-i-implement-returning-a-decimal-number",children:"Why is it not possible to use floating point data types in ink!? How do I implement returning a decimal number?"}),"\n",(0,o.jsx)(t.p,{children:"Floats are cool for all kinds of reasons, but they also have one important\ndrawback. Floating point arithmetic is non-deterministic which means that\ndifferent processors compute (slightly) different results for the same\noperation. Although there is an IEEE spec, non-determinism can come from specific\nlibraries used, or even hardware. In order for the nodes in a blockchain network\nto reach agreement on the state of the chain, all operations must be completely\ndeterministic. Hence we don't allow floating point data types in ink!."}),"\n",(0,o.jsx)(t.p,{children:"Consequently it's not possible to return a decimal number from an ink! message.\nWhat you should do instead is to have your user interface denominate the returned\nnumber to decimals."}),"\n",(0,o.jsx)(t.p,{children:"Note, that it's typical for blockchains to have the number of available tokens\ndefined as a non-floating number and determine the denomination in the user\ninterface. For example, 1 Bitcoin is equivalent to the smallest unit of 100,000,000\nSatoshi and all Bitcoin implementations internally persist account balances in\nSatoshi, not as a decimal number of Bitcoin."}),"\n",(0,o.jsx)(t.h3,{id:"why-cant-i-just-use-the-standard-rust-data-collections-in-ink",children:"Why can't I just use the standard Rust data collections in ink!?"}),"\n",(0,o.jsxs)(t.p,{children:["You can use them! They are exposed via the ",(0,o.jsx)(t.code,{children:"ink_prelude"})," crate (e.g. ",(0,o.jsx)(t.code,{children:"ink_prelude::vec::Vec"}),")\nand you can return them from ink! messages and also persist them to storage."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"However, the Rust stdlib collections are not optimized for smart contract usage!"})," So for example,\nif you use them to persist your data on the chain they will always occupy a single storage cell\nand thus always be loaded eagerly, in their entirety. This can be very costly! Just think about\na ",(0,o.jsx)(t.code,{children:"Vec"})," or a ",(0,o.jsx)(t.code,{children:"HashMap"})," where the smart contract might only need access to a few elements, rather\nthan the entire data collection."]}),"\n",(0,o.jsxs)(t.h3,{id:"why-am-i-getting-a-contracttrapped-error-when-interacting-with-a-contract",children:["Why am I getting a ",(0,o.jsx)(t.code,{children:"ContractTrapped"})," error when interacting with a contract?"]}),"\n",(0,o.jsx)(t.p,{children:"When it does not constitute a deliberate assertion, like for example a permission check,\nit is most likely a bug in your contract or in ink!."}),"\n",(0,o.jsxs)(t.p,{children:["A common source of ",(0,o.jsx)(t.code,{children:"ContractTrapped"})," are Integer overflows, those can cause\nyour contract to trap as well.\nThere is a ",(0,o.jsx)(t.a,{href:"https://github.com/rust-lang/rust/issues/78744",children:"known bug in the Rust compiler"}),"\nwith respect to safe math operations. As a workaround for this particular bug\ntry to insert ",(0,o.jsx)(t.code,{children:"overflow-checks = false"})," into your ",(0,o.jsx)(t.code,{children:"Cargo.toml"}),".\nThis will disable safe math operations altogether, but unfortunately we are currently\nnot aware of a better workaround until the bug in the compiler is fixed."]}),"\n",(0,o.jsxs)(t.p,{children:["If you don't find the issue you can also ask for help in our public\n",(0,o.jsx)(t.a,{href:"https://riot.im/app/#/room/#ink:matrix.parity.io",children:"Element"})," or\n",(0,o.jsx)(t.a,{href:"https://discord.gg/j2DKRRbSJr",children:"Discord"})," channel."]}),"\n",(0,o.jsxs)(t.h3,{id:"what-are-the-scaleencode-and-scaledecode-traits",children:["What are the ",(0,o.jsx)(t.code,{children:"scale::Encode"})," and ",(0,o.jsx)(t.code,{children:"scale::Decode"})," traits?"]}),"\n",(0,o.jsxs)(t.p,{children:["Substrate-based blockchains use the ",(0,o.jsx)(t.a,{href:"https://github.com/paritytech/parity-scale-codec",children:"SCALE codec"}),"\nto encode data.\nAs a consequence the data for every interaction with Substrate needs to\nbe SCALE-encodable \u2012 i.e. it needs to implement either ",(0,o.jsx)(t.code,{children:"scale::Encode"}),",\n",(0,o.jsx)(t.code,{children:"scale::Decode"}),", or both. This affects e.g. data you want to return to a caller,\ndata that you want to take as input, or data you want to store on-chain."]}),"\n",(0,o.jsxs)(t.p,{children:["A common error you might get when a necessary SCALE trait is not implemented\nfor a data structure could be along the lines of ",(0,o.jsx)(t.code,{children:'the trait "WrapperTypeEncode" is not implemented for "Foo"'}),".\nFor example, you might encounter this error if you try to store a custom data\nstructure in the contract's storage. Or e.g. when attempting to return\na custom error from an ink! message."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Note: The error ",(0,o.jsx)(t.code,{children:'the trait "WrapperTypeEncode" is not implemented for \u2026'})," is also\na common error when a mismatching version of ",(0,o.jsx)(t.code,{children:"parity-scale-codec"})," is used\nin the contract opposed to the version used by ink!."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The solution typically is to add a fitting implementation of the trait\nfor your data structure:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Encode"})," is used for encoding a data structure when it is e.g. returned\nto a caller or when it is persisted to the contracts storage."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Decode"})," is used for the inverse, e.g. when reading from storage or\ntaking an input from a user (or another contract)."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"It's possible to derive those traits and oftentimes the simplest way\nis to just derive the missing trait for the object for which its implementation\nis missing:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",children:"#[derive(scale::Encode, scale::Decode)]\nstruct MyCustomDataStructure { \u2026 }\n"})}),"\n",(0,o.jsxs)(t.h3,{id:"how-do-i-use-string-in-my-contract",children:["How do I use ",(0,o.jsx)(t.code,{children:"String"})," in my contract?"]}),"\n",(0,o.jsxs)(t.p,{children:["In general, you should think twice if you really need ",(0,o.jsx)(t.code,{children:"String"}),".\nSmart contracts usually don't use strings; those are typically\nused for user interactions and should live in your UI and not on the chain."]}),"\n",(0,o.jsx)(t.p,{children:"Minimizing storage usage of your contract is a best practice\nand you should only persist items which you need to derive state transitions\nin your contract."}),"\n",(0,o.jsxs)(t.p,{children:["If you still, for some reason, need to use ",(0,o.jsx)(t.code,{children:"String"}),", then you should use\nthe ",(0,o.jsx)(t.code,{children:"String"})," ",(0,o.jsx)(t.a,{href:"https://docs.rs/ink_prelude/3.4.0/ink_prelude/string/struct.String.html",children:"from the ink! prelude"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(6540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);