"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,k=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81015:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"Testing with Chain Snapshots",hide_title:!0,slug:"/basics/contract-testing/chain-snapshot"},i=void 0,s={unversionedId:"testing/testing-with-live-state",id:"version-5.x/testing/testing-with-live-state",title:"Testing with Chain Snapshots",description:"On this page we explain how to test ink! contracts with the",source:"@site/versioned_docs/version-5.x/testing/testing-with-live-state.md",sourceDirName:"testing",slug:"/basics/contract-testing/chain-snapshot",permalink:"/5.x/basics/contract-testing/chain-snapshot",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/testing/testing-with-live-state.md",tags:[],version:"5.x",frontMatter:{title:"Testing with Chain Snapshots",hide_title:!0,slug:"/basics/contract-testing/chain-snapshot"},sidebar:"reference",previous:{title:"End-to-End (E2E) Tests",permalink:"/5.x/basics/contract-testing/end-to-end-e2e-testing"},next:{title:"Debugging",permalink:"/5.x/basics/contract-debugging"}},l={},c=[{value:"General Concept",id:"general-concept",level:2},{value:"Setup Chopsticks",id:"setup-chopsticks",level:3},{value:"Run ink! e2e tests",id:"run-ink-e2e-tests",level:3},{value:"Testing a Contract Upgrade",id:"testing-a-contract-upgrade",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:"/img/title/blockchain-fork.svg",className:"titlePic"}),(0,o.kt)("h1",{id:"test-your-contract-with-a-chain-snapshot"},"Test your Contract with a Chain Snapshot"),(0,o.kt)("p",null,"On this page we explain how to test ink! contracts with the\nfork of an existing chain. We'll take a snapshot of an existing\nchain for this purpose. The snapshot contains the chains full state,\nbut can be modified locally without affecting the live chain.\nWe'll use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AcalaNetwork/chopsticks"},"Chopsticks"),"\ntool for this purpose."),(0,o.kt)("p",null,"This is a powerful workflow that you can use to e.g."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Test a contract upgrade or migration locally before running it in production."),(0,o.kt)("li",{parentName:"ul"},"Debug the behavior of an on-chain contract with on-chain state locally."),(0,o.kt)("li",{parentName:"ul"},"Get detailed debug info and replay blocks as you want."),(0,o.kt)("li",{parentName:"ul"},"\u2026and much more!")),(0,o.kt)("p",null,"In the first section of this page we explain the general concept, using a local\n",(0,o.kt)("inlineCode",{parentName:"p"},"substrate-contracts-node"),' that will play the role of our "live chain".'),(0,o.kt)("p",null,"In the second section we will walk you through testing a contract upgrade on a\nproduction chain, before actually applying it in production."),(0,o.kt)("h2",{id:"general-concept"},"General Concept"),(0,o.kt)("p",null,"First you need a node that has produced some blocks with state. We'll\nuse ",(0,o.kt)("inlineCode",{parentName:"p"},"substrate-contracts-node")," for this purpose.\n",(0,o.kt)("a",{parentName:"p",href:"/5.x/getting-started/running-substrate/"},"See here")," for how to run it."),(0,o.kt)("p",null,"You should get output similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ substrate-contracts-node\n2023-09-26 07:58:28.885  INFO main sc_cli::runner: Substrate Contracts Node    \n2023-09-26 07:58:28.887  INFO main sc_cli::runner: \u270c\ufe0f  version 0.30.0-124c159ba94    \n2023-09-26 07:58:28.887  INFO main sc_cli::runner: \u2764\ufe0f  by Parity Technologies <admin@parity.io>, 2021-2023    \n2023-09-26 07:58:28.887  INFO main sc_cli::runner: \ud83d\udccb Chain specification: Development    \n2023-09-26 07:58:28.887  INFO main sc_cli::runner: \ud83c\udff7  Node name: chilly-desire-6458    \n2023-09-26 07:58:28.887  INFO main sc_cli::runner: \ud83d\udc64 Role: AUTHORITY    \n2023-09-26 07:58:28.887  INFO main sc_cli::runner: \ud83d\udcbe Database: ParityDb at /tmp/substrateoKCAts/chains/dev/paritydb/full    \n2023-09-26 07:58:38.723  INFO main sc_rpc_server: Running JSON-RPC server: addr=127.0.0.1:9944, allowed origins=["*"]  \n')),(0,o.kt)("p",null,"Note that the node is running on port 9944."),(0,o.kt)("p",null,"Next, we'll create some state and produce a bunch of blocks. You can do this by deploying ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink-examples/tree/main/flipper"},"our\n",(0,o.kt)("inlineCode",{parentName:"a"},"flipper")," example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ink-examples/flipper/\ncargo contract build --release\ncargo contract instantiate --suri //Alice --args true -x\n")),(0,o.kt)("p",null,"You can check that the contract exists by querying its state via ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-contract"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"$ cargo contract storage --contract 5FgRdaReCLFtwbzYiVd2hoz9P3oERdNy2njnFmUBHu4FYg7s\nIndex | Root Key | Parent | Value                                                                                                            \n0     | 00000000 | root   | Flipper { value: true } \n")),(0,o.kt)("h3",{id:"setup-chopsticks"},"Setup Chopsticks"),(0,o.kt)("p",null,"We will now set up ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AcalaNetwork/chopsticks"},"Chopsticks"),",\na powerful tool in our ecosystem that allows us to create a parallel reality\nof an existing network."),(0,o.kt)("p",null,"We will run it and have it mirror the ",(0,o.kt)("inlineCode",{parentName:"p"},"substrate-contracts-node")," that is already running\non our machine from the previous step. "),(0,o.kt)("p",null,"Clone chopsticks:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/AcalaNetwork/chopsticks\n")),(0,o.kt)("p",null,"Modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"dev.yml")," config file in the cloned repository (or create one from scratch) :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"endpoint: ws://127.0.0.1:9944\nmock-signature-host: true\nblock: 1\ndb: ./db.sqlite\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In the example above chopsticks will be mirroring up until block 1 from the\n",(0,o.kt)("inlineCode",{parentName:"p"},"substrate-contracts-node"),". For real world use case you would want to use a\ndifferent block number and this is the place where you can configure other\nvariables such as a sudo key. Read the chopsticks docs for more info.")),(0,o.kt)("p",null,"You can either run chopsticks locally by following the instructions\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AcalaNetwork/chopsticks#install"},"here"),", or\nyou can run it using npx:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx @acala-network/chopsticks@latest --config=configs/dev.yml\n")),(0,o.kt)("p",null,"You should get output similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx @acala-network/chopsticks@latest --config=configs/dev.yml\n[08:22:31.231] INFO (rpc/3037748): Development RPC listening on port 8000\n")),(0,o.kt)("p",null,"The Chopsticks node is running on port 8000.\nIf you now execute the ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo-contract")," storage command against this node, you'll see\nthat the ",(0,o.kt)("inlineCode",{parentName:"p"},"flipper")," contract exists there as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo contract storage --contract 5FgRdaReCLFtwbzYiVd2hoz9P3oERdNy2njnFmUBHu4FYg7s --url=ws://localhost:9944\nIndex | Root Key | Parent | Value                                                                                                            \n0     | 00000000 | root   | Flipper { value: true }\n")),(0,o.kt)("p",null,"Chopsticks has branched off from the live chain.\nYou can now submit transactions to the Chopsticks node on port 8000,\nwithout affecting the node/chain on port 9944."),(0,o.kt)("h3",{id:"run-ink-e2e-tests"},"Run ink! e2e tests"),(0,o.kt)("p",null,'Recap: We have our "live" ',(0,o.kt)("inlineCode",{parentName:"p"},"substrate-contracts-node")," running on port 9944\nand our test node with the branched state running on port 8000."),(0,o.kt)("p",null,"Next we would like to run some tests against the contract on our forked chain.\nOur ",(0,o.kt)("inlineCode",{parentName:"p"},"flipper/lib.rs")," contains a test that illustrates how to do this.\nThe test reads an environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"CONTRACT_ADDR_HEX")," that refers to\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"flipper")," on-chain address."),(0,o.kt)("p",null,"Here's the code for it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[ink_e2e::test]\n#[ignore]\nasync fn e2e_test_deployed_contract<Client: E2EBackend>(\n    mut client: Client,\n) -> E2EResult<()> {\n    // given\n    let addr = std::env::var("CONTRACT_ADDR_HEX")\n        .unwrap()\n        .replace("0x", "");\n    let acc_id = hex::decode(addr).unwrap();\n    let acc_id = AccountId::try_from(&acc_id[..]).unwrap();\n\n    // when\n    // Invoke `Flipper::flip()` from Bob\'s account\n    let call_builder = ink_e2e::create_call_builder::<Flipper>(acc_id);\n    let flip = call_builder.flip();\n    let _flip_res = client.call(&ink_e2e::bob(), &flip).submit().await?;\n    \n    // then\n    let get = call_builder.get();\n    let get_res = client.call(&ink_e2e::bob(), &get).dry_run().await?;\n    assert!(matches!(get_res.return_value(), true));\n    Ok(())\n}\n')),(0,o.kt)("p",null,"The test is marked as ",(0,o.kt)("inlineCode",{parentName:"p"},"#[ignore]"),", as it requires the pre-conditions that we went through\nabove to succeed."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can convert SS58 addresses to hex using ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/subkey"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"subkey")," tool"),":"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"subkey inspect <YOUR-SS58>\n"))),(0,o.kt)("p",null,"Here's the process to execute the above test:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Address of your on-chain contract\nexport CONTRACT_HEX=0x2c75f0aa09dbfbfd49e6286a0f2edd3b4913f04a58b13391c79e96782f5713e3\n\n# This env variable needs to be set to reference the Chopsticks node.\n# If this env variable is not set, `ink_e2e` will spawn a new node\n# process (typically of `substrate-contracts-node`) for each test.\nexport CONTRACTS_NODE_URL=ws://127.0.0.1:8000\n\ncargo test --features e2e-tests e2e_test_deployed_contract -- --ignored\n")),(0,o.kt)("p",null,"You will get output similar to the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"running 1 tests\ntest flipper::e2e_tests::e2e_test_deployed_contract ... ok\n")),(0,o.kt)("p",null,"If you query the contract storage on our Chopsticks fork, you'll see that the E2E test\nflipped the boolean:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo contract storage --contract 5FgRdaReCLFtwbzYiVd2hoz9P3oERdNy2njnFmUBHu4FYg7s --url=ws://localhost:8000\nIndex | Root Key | Parent | Value                                                                                                            \n0     | 00000000 | root   | Flipper { value: false }\n")),(0,o.kt)("p",null,'On the "original" ',(0,o.kt)("inlineCode",{parentName:"p"},"substrate-contracts-node")," chain the boolean will be untouched."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cargo contract storage --contract 5FgRdaReCLFtwbzYiVd2hoz9P3oERdNy2njnFmUBHu4FYg7s --url=ws://localhost:9944\nIndex | Root Key | Parent | Value                                                                                                            \n0     | 00000000 | root   | Flipper { value: true }\n")),(0,o.kt)("p",null,"Success! We just ran an ink! end-to-end test against the snapshot of a chain!"),(0,o.kt)("h2",{id:"testing-a-contract-upgrade"},"Testing a Contract Upgrade"),(0,o.kt)("p",null,"TODO"))}h.isMDXComponent=!0}}]);