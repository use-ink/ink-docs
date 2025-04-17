"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1199],{28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}},33665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"testing/e2e","title":"E2E: Node Process","description":"Testing1 Title Picture","source":"@site/versioned_docs/version-v6/testing/e2e.md","sourceDirName":"testing","slug":"/contract-testing/end-to-end-e2e-testing","permalink":"/docs/v6/contract-testing/end-to-end-e2e-testing","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v6/testing/e2e.md","tags":[],"version":"v6","frontMatter":{"title":"E2E: Node Process","hide_title":true,"slug":"/contract-testing/end-to-end-e2e-testing"},"sidebar":"reference","previous":{"title":"Unit & Integration","permalink":"/docs/v6/contract-testing/unit-integration-tests"},"next":{"title":"E2E: Sandbox","permalink":"/docs/v6/contract-testing/drink"}}');var s=n(74848),o=n(28453);const a={title:"E2E: Node Process",hide_title:!0,slug:"/contract-testing/end-to-end-e2e-testing"},r="End-to-End (E2E) Tests",c={},l=[{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Testing1 Title Picture",src:n(48044).A+"",width:"1600",height:"500"})}),"\n",(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"end-to-end-e2e-tests",children:"End-to-End (E2E) Tests"})}),"\n",(0,s.jsxs)(t.p,{children:["E2E testing enables developers to write a test that will not only test the contract in an\nisolated manner; instead the contract will be tested ",(0,s.jsx)(t.em,{children:"together"})," with all components that\nwill be involved on-chain \u2013 so from end to end. This way of testing resembles closely\nhow the contract will actually behave in production."]}),"\n",(0,s.jsx)(t.p,{children:"As part of the test, the contract will be compiled and deployed to a Polkadot SDK node that\nis running in the background. ink! offers API functions that enable developers to then\ninteract with the contract via transactions that they create and submit to the blockchain."}),"\n",(0,s.jsx)(t.p,{children:"You as a developer can define assertions on the outcome of their transactions, such as checking\nfor state mutations, transaction failures or incurred gas costs."}),"\n",(0,s.jsx)(t.p,{children:"Your chain configuration will be tested together with the smart contract. And if your\nchain has pallets that are involved with the smart contract execution, those will be\npart of the test execution as well."}),"\n",(0,s.jsx)(t.p,{children:"ink! does not put any requirements on the Polkadot SDK node in the background \u2013 for example,\nyou can run a node that contains a snapshot of a live network."}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["The following code example illustrates a basic E2E test for the\n",(0,s.jsx)(t.a,{href:"https://github.com/use-ink/ink-examples/blob/main/flipper/lib.rs",children:"flipper example"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'#[ink_e2e::test]\nasync fn default_works<Client: E2EBackend>(mut client: Client) -> E2EResult<()> {\n    // When the function is entered, the contract was already\n    // built in the background via `cargo contract build`.\n    // The `client` object exposes an interface to interact\n    // with the Polkadot SDK node.\n    \n    // given\n    let mut constructor = FlipperRef::new_default();\n\n    // when\n    let contract = client\n        .instantiate("flipper", &ink_e2e::bob(), &mut constructor)\n        .submit()\n        .await\n        .expect("instantiate failed");\n    let call_builder = contract.call_builder::<Flipper>();\n\n    // then\n    let get = call_builder.get();\n    let get_res = client.call(&ink_e2e::bob(), &get).dry_run().await?;\n    assert!(matches!(get_res.return_value(), false));\n\n    Ok(())\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["You can run the above test by going to the ",(0,s.jsx)(t.code,{children:"flipper"})," folder in\n",(0,s.jsx)(t.a,{href:"https://github.com/use-ink/ink-examples/tree/main",children:"the ink! examples directory"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Before you can run the test, you have to install a Polkadot SDK\nnode with ",(0,s.jsx)(t.code,{children:"pallet-revive"}),". By default, e2e tests require that you install ",(0,s.jsx)(t.a,{href:"https://github.com/use-ink/ink-node",children:(0,s.jsx)(t.code,{children:"ink-node"})}),". You do not need to run it in the background since the node is started for each test independently.\nThe easiest way is to\n",(0,s.jsx)(t.a,{href:"https://github.com/use-ink/ink-node/releases",children:"download a binary from our releases page"}),"\n(Linux and Mac).\nAlternatively, you can build the node by yourself.\nThe build instructions and pre-requisites can be found\n",(0,s.jsx)(t.a,{href:"https://github.com/use-ink/ink-node?tab=readme-ov-file#build-locally",children:"here"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["If you want to run any other node with ",(0,s.jsx)(t.code,{children:"pallet-revive"})," you need to change ",(0,s.jsx)(t.code,{children:"CONTRACTS_NODE"})," environment variable:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'$ export CONTRACTS_NODE="YOUR_CONTRACTS_NODE_PATH"\n'})}),"\n",(0,s.jsx)(t.p,{children:"And finally execute the following command to start e2e test execution."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"$ cargo test --features e2e-tests\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},48044:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/testing1-d84c1e06aff43cd5541920ef31eee08f.svg"}}]);