"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7008],{5190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=n(4848),i=n(8453);const a={title:"Contract Testing",hide_title:!0,slug:"/basics/contract-testing"},o="Contract Testing",r={id:"basics/testing",title:"Contract Testing",description:"ink! supports three different stages of testing: unit, integration",source:"@site/versioned_docs/version-4.x/basics/testing.md",sourceDirName:"basics",slug:"/basics/contract-testing",permalink:"/4.x/basics/contract-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-4.x/basics/testing.md",tags:[],version:"4.x",frontMatter:{title:"Contract Testing",hide_title:!0,slug:"/basics/contract-testing"},sidebar:"reference",previous:{title:"Metadata",permalink:"/4.x/basics/metadata"},next:{title:"Contract Debugging",permalink:"/4.x/basics/contract-debugging"}},c={},l=[{value:"Unit Tests",id:"unit-tests",level:2},{value:"Off-chain Tests",id:"off-chain-tests",level:2},{value:"How do you find out if your test requires the off-chain environment?",id:"how-do-you-find-out-if-your-test-requires-the-off-chain-environment",level:3},{value:"Example",id:"example",level:3},{value:"End-to-End (E2E) Tests",id:"end-to-end-e2e-tests",level:2},{value:"Example",id:"example-1",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:"/img/title/testing1.svg",className:"titlePic"}),"\n",(0,s.jsx)(t.h1,{id:"contract-testing",children:"Contract Testing"}),"\n",(0,s.jsx)(t.p,{children:"ink! supports three different stages of testing: unit, integration\nand end-to-end tests. On this page we'll explain what the purpose\nof each stage is about and how to use it."}),"\n",(0,s.jsx)("img",{src:"/img/testing.png"}),"\n",(0,s.jsx)(t.p,{children:"Generally you can think of those three types of testing as a pyramid\nwith the top being the most elaborate test. The End-to-End (E2E)\ntests at the top will test the lower layers of the pyramid as part\nof them."}),"\n",(0,s.jsx)(t.h2,{id:"unit-tests",children:"Unit Tests"}),"\n",(0,s.jsxs)(t.p,{children:["Testing contracts off-chain is done by ",(0,s.jsx)(t.code,{children:"cargo test"})," and users can simply use the standard Rust\nroutines of creating unit test modules within the ink! project:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"#[cfg(test)]\nmod tests {\n    use super::*;\n\n    #[test]\n    fn my_test() { ... }\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Test instances of contracts can be created with something like:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"let contract = MyContract::my_constructor(a, b);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Messages can simply be called on the returned instance as if ",(0,s.jsx)(t.code,{children:"MyContract::my_constructor"})," returns a\n",(0,s.jsx)(t.code,{children:"Self"})," instance."]}),"\n",(0,s.jsxs)(t.p,{children:["See the ",(0,s.jsx)(t.a,{href:"https://github.com/use-ink/ink-examples/blob/main/flipper/lib.rs",children:"flipper example"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"off-chain-tests",children:"Off-chain Tests"}),"\n",(0,s.jsxs)(t.p,{children:["For integration tests, the test is annotated with our ",(0,s.jsx)(t.code,{children:"#[ink::test]"}),"\nattribute instead of ",(0,s.jsx)(t.code,{children:"#[test]"}),". Our attribute denotes that\nthe test is then executed in a simulated, mocked blockchain environment.\nhere are functions available to influence how the test environment\nis configured (e.g. setting a specified balance of an account to\nsimulate how a contract would behave when interacting with it)."]}),"\n",(0,s.jsxs)(t.p,{children:["If you annotate a test with the ",(0,s.jsx)(t.code,{children:"#[ink::test]"})," attribute it\nwill be executed in a simulated environment, similar to as it\nwould be run on-chain.\nYou then have fine-grained control over how a contract is called;\nfor example you can influence the block advancement, the value transferred to it,\nby which account it is called, which storage it is run with, etc.."]}),"\n",(0,s.jsxs)(t.p,{children:["See the ",(0,s.jsx)(t.a,{href:"https://github.com/use-ink/ink-examples/blob/main/erc20/lib.rs",children:(0,s.jsx)(t.code,{children:"examples/erc20"})})," contract on how to utilize those or ",(0,s.jsx)(t.a,{href:"https://docs.rs/ink/4.0.0/ink/attr.test.html",children:"the documentation"})," for details."]}),"\n",(0,s.jsx)(t.p,{children:"At the moment there are some known limitations to our off-chain environment,\nand we are working on making it behave as close to the real chain environment\nas possible."}),"\n",(0,s.jsxs)(t.admonition,{type:"note",children:[(0,s.jsxs)(t.p,{children:["One limitation of the off-chain testing framework is that it\ncurrently only supports a ",(0,s.jsx)(t.code,{children:"DefaultEnvironment"}),"."]}),(0,s.jsxs)(t.p,{children:["See ",(0,s.jsx)(t.a,{href:"/4.x/basics/chain-environment-types",children:"here"})," for an explanation of what an environment is."]})]}),"\n",(0,s.jsx)(t.h3,{id:"how-do-you-find-out-if-your-test-requires-the-off-chain-environment",children:"How do you find out if your test requires the off-chain environment?"}),"\n",(0,s.jsxs)(t.p,{children:["Normally if the test recursively uses or invokes some contract methods that\ncall a method defined in ",(0,s.jsx)(t.code,{children:"self.env()"})," or ",(0,s.jsx)(t.code,{children:"Self::env()"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"An example is the following:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"let caller: AccountId = self.env().caller();\n"})}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"#[cfg(test)]\nmod tests {\n    // Conventional unit test that works with assertions.\n    #[ink::test]\n    fn test1() {\n        // test code comes here as usual\n    }\n\n    // Conventional unit test that returns some Result.\n    // The test code can make use of operator-`?`.\n    #[ink::test]\n    fn test2() -> Result<(), ink::env::Error> {\n        // test code that returns a Rust Result type\n    }\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"end-to-end-e2e-tests",children:"End-to-End (E2E) Tests"}),"\n",(0,s.jsxs)(t.p,{children:["E2E testing enables developers to write a test that will not only test the contract in an\nisolated manner; instead the contract will be tested ",(0,s.jsx)(t.em,{children:"together"})," with all components that\nwill be involved on-chain \u2013 so from end to end. This way of testing resembles closely\nhow the contract will actually behave in production."]}),"\n",(0,s.jsx)(t.p,{children:"As part of the test, the contract will be compiled and deployed to a Substrate node that\nis running in the background. ink! offers API functions that enable developers to then\ninteract with the contract via transactions that they create and submit to the blockchain."}),"\n",(0,s.jsx)(t.p,{children:"You as a developer can define assertions on the outcome of their transactions, such as checking\nfor state mutations, transaction failures or incurred gas costs."}),"\n",(0,s.jsx)(t.p,{children:"Your chain configuration will be tested together with the smart contract. And if your\nchain has pallets that are involved with the smart contract execution, those will be\npart of the test execution as well."}),"\n",(0,s.jsx)(t.p,{children:"ink! does not put any requirements on the Substrate node in the background \u2013 for example,\nyou can run a node that contains a snapshot of a live network."}),"\n",(0,s.jsx)(t.h3,{id:"example-1",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["The following code example illustrates a basic E2E test for the\n",(0,s.jsx)(t.a,{href:"https://github.com/use-ink/ink-examples/blob/main/flipper/lib.rs",children:"flipper example"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'#[ink_e2e::test]\nasync fn default_works(mut client: ink_e2e::Client<C, E>) -> E2EResult<()> {\n    // When the function is entered, the contract was already\n    // built in the background via `cargo contract build`.\n    // The `client` object exposes an interface to interact\n    // with the Substrate node.\n    \n    // given\n    let constructor = FlipperRef::new_default();\n\n    // when\n    let contract_acc_id = client\n        .instantiate("flipper", &ink_e2e::bob(), constructor, 0, None)\n        .await\n        .expect("instantiate failed")\n        .account_id;\n\n    // then\n    let get = build_message::<FlipperRef>(contract_acc_id.clone())\n        .call(|flipper| flipper.get());\n    let get_res = client\n        .call(&ink_e2e::bob(), get, 0, None)\n        .await\n        .expect("get failed");\n    assert!(matches!(get_res.return_value(), false));\n\n    Ok(())\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["You can run the above test by going to the ",(0,s.jsx)(t.code,{children:"flipper"})," folder in\n",(0,s.jsx)(t.a,{href:"https://github.com/use-ink/ink-examples/tree/main",children:"the ink! examples directory"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Before you can run the test, you have to install a Substrate\nnode with ",(0,s.jsx)(t.code,{children:"pallet-contracts"}),". By default e2e tests require that you install ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/substrate-contracts-node",children:(0,s.jsx)(t.code,{children:"substrate-contracts-node"})}),". You do not need to run it in the background since the node is started for each test independently.\nTo install the latest version:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"cargo install contracts-node --git https://github.com/paritytech/substrate-contracts-node.git\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If you want to run any other node with ",(0,s.jsx)(t.code,{children:"pallet-contracts"})," you need to change ",(0,s.jsx)(t.code,{children:"CONTRACTS_NODE"})," environment variable:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:'export CONTRACTS_NODE="YOUR_CONTRACTS_NODE_PATH"\n'})}),"\n",(0,s.jsx)(t.p,{children:"And finally execute the following command to start e2e test execution."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sh",children:"cargo test --features e2e-tests\n"})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(6540);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);