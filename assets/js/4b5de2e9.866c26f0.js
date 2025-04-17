"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7121],{28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(96540);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}},34187:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"faq/faq","title":"Frequently Asked Questions","description":"Faq Title Picture","source":"@site/versioned_docs/version-v6/faq/faq.md","sourceDirName":"faq","slug":"/faq","permalink":"/docs/v6/faq","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v6/faq/faq.md","tags":[],"version":"v6","frontMatter":{"title":"Frequently Asked Questions","hide":true,"slug":"/faq","hide_table_of_contents":true},"sidebar":"reference","previous":{"title":"Migrate an ink! contract to a Rollup","permalink":"/docs/v6/background/migrate-ink-contracts-to-polkadot-frame-parachain-rollup"},"next":{"title":"Migration: ink! v5 \u2192 v6","permalink":"/docs/v6/faq/migrating-from-ink-5-to-6"}}');var i=t(74848),a=t(28453),s=t(29030);const r={title:"Frequently Asked Questions",hide:!0,slug:"/faq",hide_table_of_contents:!0},c="Frequently Asked Questions",d={},h=[{value:"Who is &quot;Squink&quot;?",id:"who-is-squink",level:3},{value:"What&#39;s ink!&#39;s relationship to the Polkadot SDK/Substrate?",id:"whats-inks-relationship-to-the-polkadot-sdksubstrate",level:3},{value:"How to call other smart contracts on the same blockchain?",id:"how-to-call-other-smart-contracts-on-the-same-blockchain",level:3},{value:"How to call other smart contracts on another rollup/parachain?",id:"how-to-call-other-smart-contracts-on-another-rollupparachain",level:3},{value:"What is a contract&#39;s ABI or Metadata?",id:"what-is-a-contracts-abi-or-metadata",level:3},{value:"Can a re-entrancy bug occur in ink! contracts?",id:"can-a-re-entrancy-bug-occur-in-ink-contracts",level:3},{value:"How can my smart contract interact with the runtime?",id:"how-can-my-smart-contract-interact-with-the-runtime",level:3},{value:"How can I use ink! with a Polkadot SDK chain with a custom chain config?",id:"how-can-i-use-ink-with-a-polkadot-sdk-chain-with-a-custom-chain-config",level:3},{value:"What does the <code>#![cfg_attr(not(feature = &quot;std&quot;), no_std, no_main)]</code> at the beginning of each contract mean?",id:"what-does-the-cfg_attrnotfeature--std-no_std-no_main-at-the-beginning-of-each-contract-mean",level:3},{value:"Overflow Safety?",id:"overflow-safety",level:3},{value:"What is the difference between memory and storage?",id:"what-is-the-difference-between-memory-and-storage",level:3},{value:"How do I hash a value?",id:"how-do-i-hash-a-value",level:3},{value:"Why is it not possible to use floating point data types in ink!? How do I implement returning a decimal number?",id:"why-is-it-not-possible-to-use-floating-point-data-types-in-ink-how-do-i-implement-returning-a-decimal-number",level:3},{value:"Why can&#39;t I just use the standard Rust data collections in ink!?",id:"why-cant-i-just-use-the-standard-rust-data-collections-in-ink",level:3},{value:"Why am I getting a <code>ContractTrapped</code> error when interacting with a contract?",id:"why-am-i-getting-a-contracttrapped-error-when-interacting-with-a-contract",level:3},{value:"What are the <code>Encode</code>, <code>Decode</code> and <code>TypeInfo</code> arguments in <code>#[ink::scale_derive(Encode, Decode, TypeInfo)]</code> ?",id:"what-are-the-encode-decode-and-typeinfo-arguments-in-inkscale_deriveencode-decode-typeinfo-",level:3},{value:"How do I use <code>String</code> in my contract?",id:"how-do-i-use-string-in-my-contract",level:3}];function l(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Faq Title Picture",src:t(38063).A+"",width:"1600",height:"500"})}),"\n",(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"})}),"\n",(0,i.jsx)(n.h3,{id:"who-is-squink",children:'Who is "Squink"?'}),"\n",(0,i.jsx)("img",{src:(0,s.Ay)("/img/ink-squink.svg"),alt:"Squink \u2012 the ink! mascot",className:"squid"}),"\n",(0,i.jsxs)(n.p,{children:["This little cute purple squid is Squink.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(n.p,{children:"Squink is the mascot of ink! and guides new users and adventurers through our presentations\nworkshops and tutorials. It also has a romance with Rust's mascot, Ferris."}),"\n",(0,i.jsx)(n.p,{children:"Generally it is very friendly and open to learning new Rustaceans but be aware to never upset\nit by taking away dots from the word ink! by spelling it incorrectly!\nIt really is into dots. Stories tell that it demanded the spelling of ink! with as many dots as possible."}),"\n",(0,i.jsx)("h3",{id:"correct-spelling",children:'Is it "ink" or "ink!"? What does the "!" stand for?'}),"\n",(0,i.jsxs)(n.p,{children:["The correct spelling is ",(0,i.jsx)(n.em,{children:"ink!"}),' \u2012 with a lowercase "i" and an exclamation mark at the end.\nThe history here is that:']}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u2026in the very first iteration ink! was originally a ",(0,i.jsx)(n.a,{href:"https://doc.rust-lang.org/book/ch19-06-macros.html#declarative-macros-with-macro_rules-for-general-metaprogramming",children:"declarative Rust macro"}),". A contract was invoked by writing ",(0,i.jsx)(n.code,{children:"ink!{ \u2026 }"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"\u2026there is a real-world analogy here of writing a paper contract using ink."}),"\n",(0,i.jsx)(n.li,{children:"\u2026we wanted to have as many DOTs as possible in the name \ud83d\ude09."}),"\n",(0,i.jsx)(n.li,{children:"\u2026the symmetry of the top and bottom dot of i and ! is aesthetically pleasing \ud83c\udf3b."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"So please don't make poor Squink cry having to read !ink, ink, Ink!, or Ink."}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("img",{src:(0,s.Ay)("/img/sad-squid.svg"),alt:"Squink \u2012 the ink! mascot",width:"300"})}),"\n",(0,i.jsx)(n.h3,{id:"whats-inks-relationship-to-the-polkadot-sdksubstrate",children:"What's ink!'s relationship to the Polkadot SDK/Substrate?"}),"\n",(0,i.jsxs)(n.p,{children:["Please see our page ",(0,i.jsx)(n.a,{href:"/docs/v6/background/polkadot-sdk",children:"Polkadot SDK"})," for more information."]}),"\n",(0,i.jsx)(n.h3,{id:"how-to-call-other-smart-contracts-on-the-same-blockchain",children:"How to call other smart contracts on the same blockchain?"}),"\n",(0,i.jsxs)(n.p,{children:["See our ",(0,i.jsx)(n.a,{href:"/docs/v6/basics/cross-contract-calling",children:"Cross-contract calling"})," page."]}),"\n",(0,i.jsx)(n.h3,{id:"how-to-call-other-smart-contracts-on-another-rollupparachain",children:"How to call other smart contracts on another rollup/parachain?"}),"\n",(0,i.jsxs)(n.p,{children:["See our page on ",(0,i.jsx)(n.a,{href:"/docs/v6/basics/xcm",children:"XCM"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"what-is-a-contracts-abi-or-metadata",children:"What is a contract's ABI or Metadata?"}),"\n",(0,i.jsxs)(n.p,{children:["In ink! a smart contract's metadata is retrieved by using the ",(0,i.jsx)(n.code,{children:"cargo-contract"})," CLI tool and\ninvoking ",(0,i.jsx)(n.code,{children:"cargo contract build"})," which outputs a ",(0,i.jsx)(n.code,{children:".contract"})," file that includes both the compiled\n",(0,i.jsx)(n.code,{children:".polkavm"})," of the ink! smart contract as well as the so-called metadata information of the same\nsmart contract.\nThe metadata is especially important for third party tools such as Polkadot JS Apps or the Contracts UI\nand provides useful information about the contract's constructors, messages, events, function selectors,\ndocumentation and comments of the aforementioned structures as well as how inputs and outputs shall\nbe encoded and decoded respectively etc."]}),"\n",(0,i.jsx)(n.h3,{id:"can-a-re-entrancy-bug-occur-in-ink-contracts",children:"Can a re-entrancy bug occur in ink! contracts?"}),"\n",(0,i.jsxs)(n.admonition,{type:"caution",children:[(0,i.jsx)(n.p,{children:"This page has to be reviewed in light of our ABI changes."}),(0,i.jsx)(n.p,{children:"TODO There are some reentrancy features in ink!,\nthose should be explained here or on another page."})]}),"\n",(0,i.jsx)(n.h1,{id:"cross-contract-calls",children:"Cross-Contract Calls"}),"\n",(0,i.jsx)(n.h3,{id:"how-can-my-smart-contract-interact-with-the-runtime",children:"How can my smart contract interact with the runtime?"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"TODO review"})}),"\n",(0,i.jsxs)(n.p,{children:["See the ",(0,i.jsx)(n.a,{href:"/docs/v6/macros-attributes/chain-extension",children:"Chain Extensions"})," section for more information."]}),"\n",(0,i.jsx)(n.h3,{id:"how-can-i-use-ink-with-a-polkadot-sdk-chain-with-a-custom-chain-config",children:"How can I use ink! with a Polkadot SDK chain with a custom chain config?"}),"\n",(0,i.jsxs)(n.p,{children:["Please see ",(0,i.jsx)(n.a,{href:"/docs/v6/macros-attributes/contract#env-impl-environment",children:"this section"})," in our documentation."]}),"\n",(0,i.jsxs)(n.p,{children:["Detailed documentation is found in ",(0,i.jsx)(n.a,{href:"https://docs.rs/ink_macro/6.0.0/ink_macro/attr.contract.html#header-arguments",children:"the Rust docs"}),"\nfor the ",(0,i.jsx)(n.code,{children:"#[ink(contract)]"})," macro. It allows you to specify your environment a la\n",(0,i.jsx)(n.code,{children:"#[ink::contract(env = MyEnvironment)]"}),"."]}),"\n",(0,i.jsxs)(n.h3,{id:"what-does-the-cfg_attrnotfeature--std-no_std-no_main-at-the-beginning-of-each-contract-mean",children:["What does the ",(0,i.jsx)(n.code,{children:'#![cfg_attr(not(feature = "std"), no_std, no_main)]'})," at the beginning of each contract mean?"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"#[cfg(..)]"})," or ",(0,i.jsx)(n.code,{children:"#[cfg_attr(..)]"})," annotations are how Rust does conditional compilation."]}),"\n",(0,i.jsx)(n.p,{children:"ink! smart contracts can be compiled in two different modes."}),"\n",(0,i.jsxs)(n.p,{children:["Through ",(0,i.jsx)(n.code,{children:'#![cfg_attr(not(feature = "std"), no_std, no_main)]'})," an ink! smart contract tells the Rust compiler\nin which mode they are being compiled. This also plays a significant role in how ink! generates\nthe smart contract code."]}),"\n",(0,i.jsx)(n.p,{children:"The two modes are as follows:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["On-chain mode: This is the mode chosen when compiling an ink! smart contract for deployment on a blockchain.\nThe resulting binary is a ",(0,i.jsx)(n.code,{children:".polkavm"})," file and as such it is not possible to use certain parts of Rust's standard\nlibrary."]}),"\n",(0,i.jsx)(n.li,{children:"Off-chain mode: This is the mode chosen when trying to test an ink! smart contract using the off-chain\nenvironment. Off-chain environment testing is very useful to check if certain ink! constructors or messages\nare well behaving and allow for better debuggability than when trying to debug the same smart contract deployed\non a chain."}),"\n"]}),"\n",(0,i.jsx)("h3",{id:"why-no_std",children:"Why is Rust's standard library (stdlib) not available in ink!?"}),"\n",(0,i.jsx)(n.p,{children:"Rust's standard library consists of three different layers:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"core"})," library which defines everything that has no dependencies outside of Rust itself.\nIncluded are types such as ",(0,i.jsx)(n.code,{children:"Option"}),", ",(0,i.jsx)(n.code,{children:"Result"})," as well as a whole variety of modules,\nfunctions and macro."]}),"\n",(0,i.jsxs)(n.p,{children:["ink! smart contracts allow authors to use Rust's ",(0,i.jsx)(n.code,{children:"core"})," crate."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"alloc"})," library which is depending on a global allocator and mainly defines collections\nthat spill their elements on to the execution's heap memory.\nExamples for collections are ",(0,i.jsx)(n.code,{children:"Box"}),", ",(0,i.jsx)(n.code,{children:"String"}),", ",(0,i.jsx)(n.code,{children:"Vec"}),", ",(0,i.jsx)(n.code,{children:"HashMap"}),", ",(0,i.jsx)(n.code,{children:"LinkedList"})," and modules\nsuch as ",(0,i.jsx)(n.code,{children:"fmt"}),", ",(0,i.jsx)(n.code,{children:"rc"})," (ref-counted pointers) or borrows."]}),"\n",(0,i.jsxs)(n.p,{children:["ink! smart contracts allow authors to use Rust's ",(0,i.jsx)(n.code,{children:"alloc"})," crate.\nBy default ink! authors use definitions from the ",(0,i.jsx)(n.code,{children:"alloc"})," crate through ",(0,i.jsx)(n.code,{children:"ink::prelude"})," crate."]}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"std"})," library is what people generally call Rust's standard library."]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"The Rust Standard Library is the foundation of portable Rust software, a set of minimal and battle-tested shared abstractions for the broader Rust ecosystem."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"It requires several operating system capabilities in order to work correctly such as input and\noutput systems for files, networking etc."}),"\n",(0,i.jsxs)(n.p,{children:["Since our RISC-V compilation target does not support Rust's\nstandard library ink! authors cannot use it either for their own purposes. Instead the ",(0,i.jsx)(n.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/revive",children:(0,i.jsx)(n.code,{children:"pallet-revive"})}),"\ntries to provide some common functionality that would otherwise be missing for common smart contract\noperations."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"overflow-safety",children:"Overflow Safety?"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"TODO @davidsemakula Please review if still up to date."})}),"\n",(0,i.jsxs)(n.p,{children:['Being written in Rust, ink! can provide compile-time overflow/underflow safety. Using a Rust compiler configuration, you can specify whether you want to support overflowing math, or if you want contract execution to panic when overflows occur. No need to continually import "Safe Math" libraries, although Rust also provides ',(0,i.jsx)(n.a,{href:"https://doc.rust-lang.org/std/primitive.u32.html",children:"integrated checked, wrapped, and saturated math functions"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"There are some known issues regarding functionality of compiler level overflow checks and the resulting size of the binary blob. This feature may change or be iterated on in the future."})}),"\n",(0,i.jsx)(n.h3,{id:"what-is-the-difference-between-memory-and-storage",children:"What is the difference between memory and storage?"}),"\n",(0,i.jsx)(n.p,{children:"In ink!, memory refers to computer memory, while storage refers to the on-chain storage\nused by a contract instance. Memory is temporary and only lasts until the contract\nexecution is done, while storage is persistent and lasts over many contract executions.\nThe contract storage is built on top of the runtime storage, and access is considered to be slow."}),"\n",(0,i.jsx)(n.h3,{id:"how-do-i-hash-a-value",children:"How do I hash a value?"}),"\n",(0,i.jsxs)(n.p,{children:["A number of crypto hashes are built into ",(0,i.jsx)(n.a,{href:"/docs/v6/background/polkadot-sdk",children:(0,i.jsx)(n.code,{children:"pallet-revive"})})," and\ntherefore very efficient to use. We currently support a handful of those, you\ncan view the complete list ",(0,i.jsx)(n.a,{href:"https://docs.rs/ink_env/6.0.0/ink_env/hash/trait.CryptoHash.html",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If you have the urgent need for another crypto hash you could introduce it through\n",(0,i.jsx)(n.a,{href:"/docs/v6/macros-attributes/chain-extension",children:"Chain Extensions"}),"\nor make a proposal to include it into the default set of the ",(0,i.jsx)(n.code,{children:"pallet-revive"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Using one of the built-in crypto hashes can be done as explained here:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.rs/ink_env/6.0.0/ink_env/fn.hash_bytes.html",children:(0,i.jsx)(n.code,{children:"self.env().hash_bytes()"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.rs/ink_env/6.0.0/ink_env/fn.hash_encoded.html",children:(0,i.jsx)(n.code,{children:"self.env().hash_encoded()"})})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"why-is-it-not-possible-to-use-floating-point-data-types-in-ink-how-do-i-implement-returning-a-decimal-number",children:"Why is it not possible to use floating point data types in ink!? How do I implement returning a decimal number?"}),"\n",(0,i.jsx)(n.p,{children:"Floats are cool for all kinds of reasons, but they also have one important\ndrawback. Floating point arithmetic is non-deterministic which means that\ndifferent processors compute (slightly) different results for the same\noperation. Although there is an IEEE spec, non-determinism can come from specific\nlibraries used, or even hardware. In order for the nodes in a blockchain network\nto reach agreement on the state of the chain, all operations must be completely\ndeterministic. Hence, we don't allow floating point data types in ink!."}),"\n",(0,i.jsx)(n.p,{children:"Consequently, it's not possible to return a decimal number from an ink! message.\nWhat you should do instead is to have your user interface denominate the returned\nnumber to decimals."}),"\n",(0,i.jsx)(n.p,{children:"Note, that it's typical for blockchains to have the number of available tokens\ndefined as a non-floating number and determine the denomination in the user\ninterface. For example, 1 Bitcoin is equivalent to the smallest unit of 100,000,000\nSatoshi and all Bitcoin implementations internally persist account balances in\nSatoshi, not as a decimal number of Bitcoin."}),"\n",(0,i.jsx)(n.h3,{id:"why-cant-i-just-use-the-standard-rust-data-collections-in-ink",children:"Why can't I just use the standard Rust data collections in ink!?"}),"\n",(0,i.jsxs)(n.p,{children:["You can use them! They are exposed via the ",(0,i.jsx)(n.code,{children:"ink_prelude"})," crate (e.g. ",(0,i.jsx)(n.code,{children:"ink::prelude::vec::Vec"}),")\nand you can return them from ink! messages and also persist them to storage."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"However, the Rust stdlib collections are not optimized for smart contract usage!"})," So for example,\nif you use them to persist your data on the chain they will always occupy a single storage cell\nand thus always be loaded eagerly, in their entirety. This can be very costly! Just think about\na ",(0,i.jsx)(n.code,{children:"Vec"})," or a ",(0,i.jsx)(n.code,{children:"HashMap"})," where the smart contract might only need access to a few elements, rather\nthan the entire data collection."]}),"\n",(0,i.jsxs)(n.h3,{id:"why-am-i-getting-a-contracttrapped-error-when-interacting-with-a-contract",children:["Why am I getting a ",(0,i.jsx)(n.code,{children:"ContractTrapped"})," error when interacting with a contract?"]}),"\n",(0,i.jsx)(n.p,{children:"When it does not constitute a deliberate assertion, like for example a permission check,\nit is most likely a bug in your contract or in ink!."}),"\n",(0,i.jsxs)(n.p,{children:["A common source of ",(0,i.jsx)(n.code,{children:"ContractTrapped"})," are Integer overflows, those can cause\nyour contract to trap as well."]}),"\n",(0,i.jsxs)(n.h3,{id:"what-are-the-encode-decode-and-typeinfo-arguments-in-inkscale_deriveencode-decode-typeinfo-",children:["What are the ",(0,i.jsx)(n.code,{children:"Encode"}),", ",(0,i.jsx)(n.code,{children:"Decode"})," and ",(0,i.jsx)(n.code,{children:"TypeInfo"})," arguments in ",(0,i.jsx)(n.code,{children:"#[ink::scale_derive(Encode, Decode, TypeInfo)]"})," ?"]}),"\n",(0,i.jsxs)(n.p,{children:["Polkadot SDK-based blockchains use the ",(0,i.jsx)(n.a,{href:"https://github.com/paritytech/parity-scale-codec",children:"SCALE codec"}),"\nto encode data.\nAs a consequence the data for every interaction with Polkadot SDK needs to\nbe SCALE-encodable \u2012 i.e. it needs to implement either ",(0,i.jsx)(n.code,{children:"scale::Encode"}),",\n",(0,i.jsx)(n.code,{children:"scale::Decode"}),", or both. This affects e.g. data you want to return to a caller,\ndata that you want to take as input, or data you want to store on-chain."]}),"\n",(0,i.jsxs)(n.p,{children:["ink! re-exports these traits and provides a useful macro ",(0,i.jsx)(n.code,{children:"#[ink::scale_derive(Encode, Decode, TypeInfo)]"})," that allows to derive them\nin a concise way."]}),"\n",(0,i.jsxs)(n.p,{children:["A common error you might get when a necessary SCALE trait is not implemented\nfor a data structure could be along the lines of ",(0,i.jsx)(n.code,{children:'the trait "WrapperTypeEncode" is not implemented for "Foo"'}),".\nFor example, you might encounter this error if you try to store a custom data\nstructure in the contract's storage. Or e.g. when attempting to return\na custom error from an ink! message."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The error ",(0,i.jsx)(n.code,{children:'the trait "WrapperTypeEncode" is not implemented for \u2026'})," is also\na common error when a mismatching version of ",(0,i.jsx)(n.code,{children:"parity-scale-codec"})," is used\nin the contract opposed to the version used by ink!."]})}),"\n",(0,i.jsx)(n.p,{children:"The solution typically is to add a fitting implementation of the trait\nfor your data structure:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Encode"})," is used for encoding a data structure when it is e.g. returned\nto a caller or when it is persisted to the contracts storage."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Decode"})," is used for the inverse, e.g. when reading from storage or\ntaking an input from a user (or another contract)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"TypeInfo"})," is used to encode the information about the type that is\noften used for the generation of metadata."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"It's possible to derive those traits and oftentimes the simplest way\nis to just derive the missing trait for the object for which its implementation\nis missing using the ink! macro:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink::scale_derive(Encode, Decode)]\nstruct MyCustomDataStructure { \u2026 }\n"})}),"\n",(0,i.jsxs)(n.h3,{id:"how-do-i-use-string-in-my-contract",children:["How do I use ",(0,i.jsx)(n.code,{children:"String"})," in my contract?"]}),"\n",(0,i.jsxs)(n.p,{children:["In general, you should think twice if you really need ",(0,i.jsx)(n.code,{children:"String"}),".\nSmart contracts usually don't use strings; those are typically\nused for user interactions and should live in your UI and not on the chain."]}),"\n",(0,i.jsx)(n.p,{children:"Minimizing storage usage of your contract is a best practice\nand you should only persist items which you need to derive state transitions\nin your contract."}),"\n",(0,i.jsxs)(n.p,{children:["If you still, for some reason, need to use ",(0,i.jsx)(n.code,{children:"String"}),", then you should use\nthe ",(0,i.jsx)(n.code,{children:"String"})," ",(0,i.jsx)(n.a,{href:"https://docs.rs/ink_prelude/6.0.0/ink_prelude/string/struct.String.html",children:"from the ink! prelude"}),"."]}),"\n",(0,i.jsxs)("h3",{id:"type-comparison",children:["Getting a warning in ",(0,i.jsx)("code",{children:"cargo-contract"})," about type compatibility?"]}),"\n",(0,i.jsxs)(n.p,{children:["ink! and Polkadot SDK both support the possibility of deciding to deviate\nfrom the default types for ",(0,i.jsx)(n.code,{children:"Balance"}),", ",(0,i.jsx)(n.code,{children:"BlockNumber"}),", etc.\nThese types are called environment types."]}),"\n",(0,i.jsx)(n.p,{children:"If a chain decides on custom environment types, contract authors need\nto specify these types that deviate from the ink! default environment in their\ncontracts. Otherwise, undefined behavior can occur when uploading a contract\nwith deviating types to a chain."}),"\n",(0,i.jsxs)(n.p,{children:["Custom environment types can be specified in ink! via the ",(0,i.jsx)(n.code,{children:"#[contract(env = MyCustomEnvironment)]"}),"\nattribute. You can read more are about this ",(0,i.jsx)(n.a,{href:"/docs/v6/macros-attributes/contract#env-impl-environment",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["When using ",(0,i.jsx)(n.code,{children:"cargo-contract"})," to interact with a chain you might get a warning along those lines:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Warning: This chain does not yet support checking for compatibility of your contract types.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This warning appears when the chain that you are targeting (via the ",(0,i.jsx)(n.code,{children:"--url"})," cli flag)\ndoes not contain a version of ",(0,i.jsx)(n.code,{children:"pallet-revive"})," that does support type comparison.\nType comparison is a feature that we introduced, it means we check that the environmental\ntypes of your contract are equivalent to the environmental types of the chain that you are\ntargeting.\nIt's a safety feature to make sure that you are not accidentally deploying a contract with\ne.g. ",(0,i.jsx)(n.code,{children:"type Balance = u128"})," to a chain with a different ",(0,i.jsx)(n.code,{children:"Balance"})," type."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"cargo-contract"})," warning means this check for compatible types cannot be performed."]}),"\n",(0,i.jsx)(n.p,{children:"If a chain indeed requires that contract developers have to use custom environment types,\nthis should be communicated prominently by them."})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},38063:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/faq-f5e11a21758f710dee37e9f0dd5c2f9f.svg"}}]);