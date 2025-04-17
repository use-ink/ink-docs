"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8585],{28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var s=t(96540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}},51995:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"background/ink-vs-solidity","title":"ink! vs. Solidity","description":"Solidity Title Picture","source":"@site/versioned_docs/version-v6/background/ink-vs-solidity.md","sourceDirName":"background","slug":"/background/ink-vs-solidity","permalink":"/docs/v6/background/ink-vs-solidity","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v6/background/ink-vs-solidity.md","tags":[],"version":"v6","frontMatter":{"title":"ink! vs. Solidity","hide_title":true,"slug":"/background/ink-vs-solidity"},"sidebar":"reference","previous":{"title":"Polkadot SDK","permalink":"/docs/v6/background/polkadot-sdk"},"next":{"title":"ink! vs. CosmWasm","permalink":"/docs/v6/background/ink-vs-cosmwasm"}}');var i=t(74848),r=t(28453);const l={title:"ink! vs. Solidity",hide_title:!0,slug:"/background/ink-vs-solidity"},c="ink! vs. Solidity",o={},a=[{value:"Converting a Solidity Contract to ink!",id:"converting-a-solidity-contract-to-ink",level:2},{value:"1. Generate a new ink! contract",id:"1-generate-a-new-ink-contract",level:3},{value:"2. Build the contract",id:"2-build-the-contract",level:3},{value:"3. Convert Solidity class fields to Rust struct",id:"3-convert-solidity-class-fields-to-rust-struct",level:3},{value:"4. Convert each function",id:"4-convert-each-function",level:3},{value:"Best Practices + Tips",id:"best-practices--tips",level:2},{value:"Syntax Equivalencies",id:"syntax-equivalencies",level:2},{value:"<code>public function</code>",id:"public-function",level:3},{value:"<code>mapping declaration</code>",id:"mapping-declaration",level:3},{value:"<code>mapping usage</code>",id:"mapping-usage",level:3},{value:"<code>struct</code>",id:"struct",level:3},{value:"<code>assertions / requires</code>",id:"assertions--requires",level:3},{value:"<code>timestamp</code>",id:"timestamp",level:3},{value:"<code>contract caller</code>",id:"contract-caller",level:3},{value:"<code>contract&#39;s address</code>",id:"contracts-address",level:3},{value:"<code>bytes</code>",id:"bytes",level:3},{value:"<code>uint256</code>",id:"uint256",level:3},{value:"<code>payable</code>",id:"payable",level:3},{value:"<code>received deposit / payment</code>",id:"received-deposit--payment",level:3},{value:"<code>contract balance</code>",id:"contract-balance",level:3},{value:"<code>transfer tokens from contract</code>",id:"transfer-tokens-from-contract",level:3},{value:"<code>events &amp; indexed</code>",id:"events--indexed",level:3},{value:"<code>errors and returning</code>",id:"errors-and-returning",level:3},{value:"<code>throw</code>",id:"throw",level:4},{value:"<code>assert</code>",id:"assert",level:4},{value:"<code>require and revert</code>",id:"require-and-revert",level:4},{value:"<code>cross-contract calling</code>",id:"cross-contract-calling",level:3},{value:"<code>submit generic transaction / dynamic cross-contract calling</code>",id:"submit-generic-transaction--dynamic-cross-contract-calling",level:3},{value:"Troubleshooting Errors",id:"troubleshooting-errors",level:2},{value:"unit testing (off-chain)",id:"unit-testing-off-chain",level:2}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components},{Head:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s,{children:[(0,i.jsx)("meta",{name:"title",content:"Polkadot's ink! vs. Solidity"}),(0,i.jsx)("meta",{name:"description",content:"Comparison of Polkadot's ink! vs. Solidity."}),(0,i.jsx)("meta",{name:"keywords",content:"Polkadot, Solidity, Ethereum, ink!, Smart Contracts"}),(0,i.jsx)("meta",{property:"og:title",content:"Polkadot's ink! vs. Solidity"}),(0,i.jsx)("meta",{property:"og:description",content:"Comparison of Polkadot's ink! vs. Solidity."})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Solidity Title Picture",src:t(94094).A+"",width:"1600",height:"500"})}),"\n",(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"ink-vs-solidity",children:"ink! vs. Solidity"})}),"\n",(0,i.jsx)(n.p,{children:"The following table gives a brief comparison of features between ink! and Solidity:"}),"\n",(0,i.jsx)("div",{class:"comparison",children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"}}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"ink!"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Solidity"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Virtual Machine"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"PolkaVM"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"EVM"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Encoding"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"SCALE or Solidity ABI"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Solidity ABI"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Language"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Rust"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Standalone"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Overflow Protection"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Enabled by default"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Constructor Functions"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Multiple"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Single"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Tooling"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Most tools that support Rust"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Custom"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Versioning"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Semantic"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Semantic"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Has Metadata?"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Multi-File Project"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Storage Entries"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Variable"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"256 bits"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Supported Types"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Docs"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Docs"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Has Interfaces?"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Yes (Rust Traits)"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Yes"})]})]})]})}),"\n",(0,i.jsx)(n.h2,{id:"converting-a-solidity-contract-to-ink",children:"Converting a Solidity Contract to ink!"}),"\n",(0,i.jsx)(n.p,{children:"In the following, we'll explain how to convert a Solidity contract to ink!."}),"\n",(0,i.jsx)(n.h3,{id:"1-generate-a-new-ink-contract",children:"1. Generate a new ink! contract"}),"\n",(0,i.jsxs)(n.p,{children:['Run the following command to generate the skeleton for an ink! contract.\nThe command will set up the boilerplate code for ink!\'s "Hello, World!"\n(the ',(0,i.jsx)(n.a,{href:"https://github.com/use-ink/ink-examples/tree/main/flipper",children:(0,i.jsx)(n.code,{children:"flipper"})})," contract))."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cargo contract new <contract-name>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"2-build-the-contract",children:"2. Build the contract"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cargo contract build\n"})}),"\n",(0,i.jsx)(n.h3,{id:"3-convert-solidity-class-fields-to-rust-struct",children:"3. Convert Solidity class fields to Rust struct"}),"\n",(0,i.jsx)(n.p,{children:"Solidity is an object-oriented language, and uses classes. ink! (Rust) does not use classes."}),"\n",(0,i.jsx)(n.p,{children:"An example Solidity class looks like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-C++",children:'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.1;\n\ncontract MyContract {\n    bool private _theBool;\n    event UpdatedBool(bool indexed _theBool);\n\n    constructor(bool theBool) {\n        require(theBool == true, "theBool must start as true");\n\n        _theBool = theBool;\n    }\n\n    function setBool(bool newBool) public returns (bool boolChanged) {\n        if (_theBool == newBool) {\n            boolChanged = false;\n        } else {\n            boolChanged = true;\n        }\n\n        _theBool = newBool;\n\n        // emit event\n        emit UpdatedBool(newBool);\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"And the equivalent contract in ink! looks like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'#![cfg_attr(not(feature = "std"), no_std, no_main)]\n\n#[ink::contract]\nmod mycontract {\n    #[ink(storage)]\n    pub struct MyContract {\n        the_bool: bool, // class members become struct fields\n    }\n\n    #[ink(event)]\n    pub struct UpdatedBool {\n        #[ink(topic)] // -> indexed\n        the_bool: bool,\n    }\n\n    impl MyContract {\n        #[ink(constructor)]\n        pub fn new(the_bool: bool) -> Self {\n            assert!(the_bool == true, "the_bool must start as true");\n            Self { the_bool }\n        }\n\n        #[ink(message)] // functions become struct implementations\n        pub fn set_bool(&mut self, new_bool: bool) -> bool {\n            let bool_changed: bool;\n\n            if self.the_bool == new_bool{\n                bool_changed = false;\n            }else{\n                bool_changed = true;\n            }\n\n            self.the_bool = new_bool;\n\n            self.env().emit_event(UpdatedBool {\n                the_bool: new_bool\n            });\n\n            // return\n            bool_changed\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"A few key differences are:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Solidity class variables / members will be placed in the contract struct in ink!"}),"\n",(0,i.jsxs)(n.li,{children:["All class methods in Solidity are ",(0,i.jsx)(n.code,{children:"impl"}),"emented for the contract struct in ink!"]}),"\n",(0,i.jsxs)(n.li,{children:["Solidity frequently prefixes variables with an underscore (",(0,i.jsx)(n.code,{children:"_name"}),"). ink! / Rust only prefixes with an underscore for ",(0,i.jsx)(n.em,{children:"unused"})," variables."]}),"\n",(0,i.jsx)(n.li,{children:"Solidity uses camelCase. ink! uses snake_case."}),"\n",(0,i.jsx)(n.li,{children:"In Solidity, the variable type comes before the variable name (e.g. bool myVar). While ink! specifies var type after the var name (e.g. my_var: bool)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"4-convert-each-function",children:"4. Convert each function"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Start converting each function one by one.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A recommended approach is to, if possible, skip cross-contract calls at first and use mock data instead"}),"\n",(0,i.jsxs)(n.li,{children:["This way off-chain unit tests can be written to test the core functionality","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"unit tests are off-chain and do not work with cross-contract calls"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Once fully tested, start adding in cross-contract calls and perform on-chain manual + integration tests"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Ensure that function's visibility (public, private) are matched in ink!"}),"\n",(0,i.jsxs)(n.li,{children:["In Solidity, if a function returns a ",(0,i.jsx)(n.code,{children:"bool success"}),", ink! will use a ",(0,i.jsx)(n.code,{children:"Result<()>"})," instead (",(0,i.jsx)(n.code,{children:"Result::Ok"})," or ",(0,i.jsx)(n.code,{children:"Result::Err"}),")."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Solidity return example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.1;\n\ncontract Example {\n    uint128 public data;\n\n    constructor(){}\n\n    function setData(uint128 newData) public returns (\n        bool success,\n        string memory reason\n        ) {\n\n        if (newData == 0) {\n            return (false, "Data should not be zero");\n        }\n\n        data = newData;\n        return (true, "");\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"The equivalent contract in ink!:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'#![cfg_attr(not(feature = "std"), no_std, no_main)]\n\n#[ink::contract]\nmod example {\n    #[ink(storage)]\n    pub struct Example {\n        data: u128,\n    }\n\n    #[ink::scale_derive(Encode, Decode, TypeInfo)]\n    #[derive(Debug, PartialEq, Eq)]\n    pub enum Error {\n        DataShouldNotBeZero,\n    }\n\n    pub type Result<T> = core::result::Result<T, Error>;\n\n    impl Example {\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            Self { data: 0 }\n        }\n\n        #[ink(message)]\n        pub fn set_data(&mut self, new_data: u128) -> Result<()> {\n            if new_data == 0 {\n                return Err(Error::DataShouldNotBeZero);\n            }\n\n            self.data = new_data;\n            Ok(())\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"best-practices--tips",children:"Best Practices + Tips"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If the Solidity contract uses a ",(0,i.jsx)(n.code,{children:"string"}),", it is recommended to use a ",(0,i.jsx)(n.code,{children:"Vec<u8>"})," to avoid the overhead of a ",(0,i.jsx)(n.code,{children:"String"}),". See ",(0,i.jsx)(n.a,{href:"https://substrate.stackexchange.com/questions/1174/why-is-it-a-bad-idea-to-use-string-in-an-ink-smart-contract",children:"here"})," for more details on why. The smart contract should only contain the information that strictly needs to be placed on the blockchain and go through consensus. The UI should be used for displaying strings."]}),"\n",(0,i.jsxs)(n.li,{children:["Double check all ",(0,i.jsx)(n.code,{children:".unwrap()"}),"s performed. Solidity does not have as strict checking as ink! does. For example, a mapping field can be accessed as simple as ",(0,i.jsx)(n.code,{children:"myMapping[someKey]"}),". ink!, however, requires ",(0,i.jsx)(n.code,{children:"self.my_mapping.get(some_key).unwrap()"}),". A useful way to handle ",(0,i.jsx)(n.code,{children:"None"})," cases is to use ",(0,i.jsx)(n.code,{children:".unwrap_or(some_val)"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Run the contracts node with ",(0,i.jsx)(n.code,{children:"ink-node -lerror,runtime::contracts=debug"})," for debug prints, and errors to be displayed in the nodes console."]}),"\n",(0,i.jsx)(n.li,{children:"Just as in Solidity, ink! does not have floating point numbers due to the non-deterministic nature. Instead, the frontend should add decimal points as needed."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"syntax-equivalencies",children:"Syntax Equivalencies"}),"\n",(0,i.jsx)(n.h3,{id:"public-function",children:(0,i.jsx)(n.code,{children:"public function"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:"// solidity\nfunction fnName() public {}\n// or\n// by default, functions are public\nfunction fnName() {}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"// ink!\n#[ink(message)]\npub fn fn_name(&self) {}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"mapping-declaration",children:(0,i.jsx)(n.code,{children:"mapping declaration"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:"// solidity\nmapping(address => uint128) private mapName;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"//ink!\nuse ink::storage::Mapping;\n\n#[ink(storage)]\npub struct ContractName {\n    map_name: Mapping<AccountId, u128>,\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"mapping-usage",children:(0,i.jsx)(n.code,{children:"mapping usage"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:"// solidity\n\n// insert / update\naMap[aKey] = aValue;\n\n// get\naMap[aKey]\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"// ink!\n\n//insert / update\nself.a_map.insert(&a_key, &a_value);\n\n// get\nself.a_map.get(a_key).unwrap()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"struct",children:(0,i.jsx)(n.code,{children:"struct"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:"// solidity\nstruct MyPerson{\n    address person;\n    u64 favNum;\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"// ink!\nstruct MyPerson {\n    person: AccountId,\n    fav_num: u64,\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"assertions--requires",children:(0,i.jsx)(n.code,{children:"assertions / requires"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:'// solidity\nrequire(someValue < 10, "someValue is not less than 10");\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'// ink!\nassert!(some_value < 10, "some_value is not less than 10");\n'})}),"\n",(0,i.jsx)(n.h3,{id:"timestamp",children:(0,i.jsx)(n.code,{children:"timestamp"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:"// solidity\nblock.timestamp\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"// ink!\nself.env().block_timestamp()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"contract-caller",children:(0,i.jsx)(n.code,{children:"contract caller"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:"// solidity\naddress caller = msg.sender;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"// ink!\nlet caller: AccountId = self.env().caller();\n"})}),"\n",(0,i.jsx)(n.h3,{id:"contracts-address",children:(0,i.jsx)(n.code,{children:"contract's address"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:"// solidity\naddress(this)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"// ink!\nself.env().account_id()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"bytes",children:(0,i.jsx)(n.code,{children:"bytes"})}),"\n",(0,i.jsxs)(n.p,{children:["Solidity has a type ",(0,i.jsx)(n.code,{children:"bytes"}),". ",(0,i.jsx)(n.code,{children:"bytes"})," is (essentially) equivalent to an array of uint8. So, ",(0,i.jsx)(n.code,{children:"bytes"})," in Solidity => ",(0,i.jsx)(n.code,{children:"Vec<u8>"})," or ",(0,i.jsx)(n.code,{children:"[u8; ...]"})," in ink!. See ",(0,i.jsx)(n.a,{href:"https://ethereum.stackexchange.com/questions/91119/difference-between-byte-and-uint8-datatypes-in-solidity",children:"here"})," for more details. If desired, a ",(0,i.jsx)(n.code,{children:"bytes"})," struct can be created in ink! to replicate the ",(0,i.jsx)(n.code,{children:"bytes"})," type in Solidity."]}),"\n",(0,i.jsx)(n.h3,{id:"uint256",children:(0,i.jsx)(n.code,{children:"uint256"})}),"\n",(0,i.jsxs)(n.p,{children:["Solidity uses ",(0,i.jsx)(n.code,{children:"uint256"})," and ",(0,i.jsx)(n.code,{children:"uint"})," to represent a 256-bit type."]}),"\n",(0,i.jsxs)(n.p,{children:["Solidity is 256-bit / 32-byte word optimized. Meaning, using ",(0,i.jsx)(n.code,{children:"uint256"})," in Solidity contracts will reduce gas usage -- but increase storage usage. The largest size ink! has built in is a ",(0,i.jsx)(n.code,{children:"u128"}),". ink! compiles to Wasm. The largest primitive Wasm has is 64bit (due to most computers using 64bit). So, there is no benefit to using any larger primitive over a collection."]}),"\n",(0,i.jsxs)(n.p,{children:["When porting a ",(0,i.jsx)(n.code,{children:"uint256"})," from Solidity to ink!, it is recommended to, with discretion, determine the range of the value, and choose the appropriate size (u8, u16, u32, u64, u128). If a 256-bit hash value is required, ink! has a ",(0,i.jsx)(n.code,{children:"Hash"})," primitive available. In the event a value needs to be 256-bit, it is recommended to use an array (e.g. ",(0,i.jsx)(n.code,{children:"[u64; 4]"}),")."]}),"\n",(0,i.jsx)(n.h3,{id:"payable",children:(0,i.jsx)(n.code,{children:"payable"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:"// solidity\nfunction myFunction() payable returns (uint64) {}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink(message, payable)]\npub fn my_function(&self) -> u64 {}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"received-deposit--payment",children:(0,i.jsx)(n.code,{children:"received deposit / payment"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-C++",children:"// solidity\nmsg.value\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"// ink!\nself.env().transferred_value()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"contract-balance",children:(0,i.jsx)(n.code,{children:"contract balance"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:"// solidity\naddress(this).balance\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"// ink!\nself.env().balance()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"transfer-tokens-from-contract",children:(0,i.jsx)(n.code,{children:"transfer tokens from contract"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:"// solidity\nrecipient.send(amount)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'// ink!\nif self.env().transfer(recipient, amount).is_err() {\n    panic!("error transferring")\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"events--indexed",children:(0,i.jsx)(n.code,{children:"events & indexed"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:"// solidity\n\nevent MyCoolEvent(\n    u128 indexed indexedValue,\n    u128 notIndexedValue,\n);\n\n// emit event\nemit MyCoolEvent(someValue, someOtherValue);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"// ink!\n\n#[ink(event)]\npub struct MyCoolEvent {\n    #[ink(topic)]\n    indexed_value: u128,\n\n    not_indexed_value: u128,\n}\n\n// emit event\nself.env().emit_event(MyCoolEvent {\n    indexed_value: some_value,\n    not_indexed_value: some_other_value\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"errors-and-returning",children:(0,i.jsx)(n.code,{children:"errors and returning"})}),"\n",(0,i.jsxs)(n.p,{children:["Solidity has several error handling mechanisms: ",(0,i.jsx)(n.code,{children:"assert"}),", ",(0,i.jsx)(n.code,{children:"require"}),", ",(0,i.jsx)(n.code,{children:"revert"}),", and ",(0,i.jsx)(n.code,{children:"throw"}),". Each of these will revert the changed state when called. See ",(0,i.jsx)(n.a,{href:"https://medium.com/blockchannel/the-use-of-revert-assert-and-require-in-solidity-and-the-new-revert-opcode-in-the-evm-1a3a7990e06e",children:"this article"})," for details on these."]}),"\n",(0,i.jsxs)(n.p,{children:["ink! uses a ",(0,i.jsx)(n.code,{children:"Result"})," enum (",(0,i.jsx)(n.code,{children:"Ok(T)"}),", ",(0,i.jsx)(n.code,{children:"Err(E)"}),"), ",(0,i.jsx)(n.code,{children:"assert!"})," and ",(0,i.jsx)(n.code,{children:"panic!"}),". ",(0,i.jsx)(n.a,{href:"https://substrate.stackexchange.com/questions/2391/panic-in-ink-smart-contracts",children:"This Stack Exchange"})," answer and ",(0,i.jsx)(n.a,{href:"https://github.com/use-ink/ink/issues/641",children:"GitHub discussion"})," provide more details on these."]}),"\n",(0,i.jsx)(n.h4,{id:"throw",children:(0,i.jsx)(n.code,{children:"throw"})}),"\n",(0,i.jsxs)(n.p,{children:["Throw is deprecated in Solidity and would throw an invalid opcode error (no details) and revert the state. As an alternative to the ",(0,i.jsx)(n.code,{children:"if...{throw;}"})," pattern in Solidity, a ",(0,i.jsx)(n.code,{children:"Result::Err"})," should be returned for expected errors, and an ",(0,i.jsx)(n.code,{children:"assert!"})," should be used for errors that should not occur."]}),"\n",(0,i.jsx)(n.h4,{id:"assert",children:(0,i.jsx)(n.code,{children:"assert"})}),"\n",(0,i.jsxs)(n.p,{children:["In Solidity, ",(0,i.jsx)(n.code,{children:"assert"})," is used as internal guards against errors in the ",(0,i.jsx)(n.em,{children:"code"}),". In general, properly functioning code should never hit a failing assert. ",(0,i.jsx)(n.code,{children:"assert"})," in Solidity does not have error strings. In ink!, use ",(0,i.jsx)(n.code,{children:"assert!"}),". ",(0,i.jsx)(n.code,{children:"assert!"})," will ",(0,i.jsx)(n.code,{children:"panic!"})," if it evaluates to ",(0,i.jsx)(n.em,{children:"false"}),". The state will be reverted, and a ",(0,i.jsx)(n.code,{children:"CalleeTrapped"})," will be returned. The (optional) error string will be printed to the debug buffer."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'// ink!\nassert!(caller == owner, "caller is not owner")\n'})}),"\n",(0,i.jsx)(n.h4,{id:"require-and-revert",children:(0,i.jsx)(n.code,{children:"require and revert"})}),"\n",(0,i.jsxs)(n.p,{children:["In Solidity, ",(0,i.jsx)(n.code,{children:"require"})," is used for general (normal) errors -- such as errors that occur based on user input. ",(0,i.jsx)(n.code,{children:"require"})," does have the option for an error string. ",(0,i.jsx)(n.code,{children:"revert"})," is very similar to ",(0,i.jsx)(n.code,{children:"require"})," except that ",(0,i.jsx)(n.code,{children:"revert"})," will be called in ",(0,i.jsx)(n.code,{children:"if ... else"})," chains. Both ",(0,i.jsx)(n.code,{children:"require"})," and ",(0,i.jsx)(n.code,{children:"revert"})," will revert the chain state. In ink!, ",(0,i.jsx)(n.code,{children:"if ... { return Err(Error::SomeError) }"})," should be used for ",(0,i.jsx)(n.code,{children:"require"})," or ",(0,i.jsx)(n.code,{children:"revert"}),". When a ",(0,i.jsx)(n.code,{children:"Result::Err"})," is returned in ink!, then all state is reverted."]}),"\n",(0,i.jsxs)(n.p,{children:["In general, ",(0,i.jsx)(n.code,{children:"Result::Err"})," should be used when a ",(0,i.jsx)(n.em,{children:"calling contract"})," needs to know ",(0,i.jsx)(n.em,{children:"why"})," a function failed. Otherwise, ",(0,i.jsx)(n.code,{children:"assert!"})," should be used as it has less overhead than a ",(0,i.jsx)(n.code,{children:"Result"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:'// Solidity\nfunction myFunction(bool returnError) public pure {\n    require(!returnError, "my error here");\n\n    // or\n\n    if returnError {\n        revert("my error here");\n    }\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"// ink!\n\n#[derive(Debug, PartialEq, Eq)]\n#[ink::scale_derive(Encode, Decode, TypeInfo)]\npub enum Error {\n    /// Provide a detailed comment on the error\n    MyError,\n}\n\n// result type\npub type Result<T> = core::result::Result<T, Error>;\n\n// ...\n\n#[ink(message)]\npub fn my_function(&self, return_error: bool) -> Result<()> {\n    if return_error{\n        return Err(Error::MyError)\n    }\n    Ok(())\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"cross-contract-calling",children:(0,i.jsx)(n.code,{children:"cross-contract calling"})}),"\n",(0,i.jsxs)(n.p,{children:["See here to learn the different ways to do ",(0,i.jsx)(n.a,{href:"/docs/v6/basics/cross-contract-calling",children:"cross-contract calling"})]}),"\n",(0,i.jsx)(n.h3,{id:"submit-generic-transaction--dynamic-cross-contract-calling",children:(0,i.jsx)(n.code,{children:"submit generic transaction / dynamic cross-contract calling"})}),"\n",(0,i.jsxs)(n.p,{children:["invokes function found at ",(0,i.jsx)(n.code,{children:"callee"})," contract address, sends the ",(0,i.jsx)(n.code,{children:"transferAmount"})," to the ",(0,i.jsx)(n.code,{children:"callee"}),", and the ",(0,i.jsx)(n.code,{children:"transactionData"})," payload."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c++",children:"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.1;\n\ncontract CallContract {\n\n    constructor() {}\n\n    function invokeTransaction(\n        address payable callee,\n        uint transferAmount,\n        bytes4 functionSelector,\n        string memory transactionData\n    ) public returns(bool success, bytes memory message) {\n\n        bytes memory _data = abi\n            .encodePacked(functionSelector, transactionData);\n\n        (success, message) = callee\n            .call{value: transferAmount}(_data);\n\n        return (success, message);\n    }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"The equivalant in Ink!:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'#![cfg_attr(not(feature = "std"), no_std, no_main)]\n\n#[ink::contract]\nmod call_contract {\n    use ink::{\n        env::call::{\n            build_call,\n            Call,\n            ExecutionInput,\n            Selector\n        },\n        prelude::vec::Vec,\n    };\n\n    #[ink(storage)]\n    #[derive(Default)]\n    pub struct CallContract {}\n\n    #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]\n    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]\n    pub enum Error {\n        TransactionFailed,\n    }\n    type Result<T> = core::result::Result<T, Error>;\n\n\n    impl CallContract{\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            Default::default()\n        }\n\n        #[ink(message, payable)]\n        pub fn invoke_transaction(\n            &mut self,\n            callee: AccountId,\n            transfer_amount: u128,\n            function_selector: [u8; 4],\n            transaction_data: Vec<u8>,\n            gas_limit: Option<u64>,\n        ) -> Result<()> {\n\n            let transaction_result = build_call::<<Self as ::ink::env::ContractEnv>::Env>()\n                .call_type(\n                    Call::new(callee) // contract to call\n                        .gas_limit(gas_limit.unwrap_or_default())\n                        .transferred_value(transfer_amount), // value to transfer with call\n                )\n                .exec_input(\n                    ExecutionInput::new(Selector::new(function_selector))\n                        .push_arg(transaction_data), // SCALE-encoded parameters\n                )\n                .returns::<()>()\n                .try_invoke();\n\n            match transaction_result {\n                Ok(Ok(_)) => Ok(()),\n                _ => Err(Error::TransactionFailed),\n            }\n        }\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Note: the ",(0,i.jsx)(n.code,{children:"function_selector"})," bytes can be found in the generated ",(0,i.jsx)(n.code,{children:"target/ink/<contract-name>.json"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"troubleshooting-errors",children:"Troubleshooting Errors"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"\"failed to load bitcode of module '...' \""})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This happens when trying to import a contract for cross-contract calling."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Solution"}),(0,i.jsx)(n.br,{}),"\n","Ensure that the following is added to Cargo.toml contract import:`"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'features = ["ink-as-dependency"]\n'})}),"\n",(0,i.jsx)(n.p,{children:"so the import would look like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'mycontract = { path = "mycontract/", default-features = false, features = ["ink-as-dependency"]}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"unit-testing-off-chain",children:"unit testing (off-chain)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Unit tests are an integral part of smart-contract development and ensuring your code works off-chain before testing on-chain."}),"\n",(0,i.jsxs)(n.li,{children:["To run ink! tests, use the command ",(0,i.jsx)(n.code,{children:"cargo test"}),". Add the ",(0,i.jsx)(n.code,{children:"--nocapture"})," flag for debug prints to show."]}),"\n",(0,i.jsx)(n.li,{children:"From the contract module, make sure to make the contract struct and anything else that is going to be used in the unit tests public. For example:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:'// top of file\n#![cfg_attr(not(feature = "std"), no_std, no_main)]\n\n\npub use self::mycontract::{\n    MyContract\n};\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For more complex testing that requires a running node, such as cross-contract calls,please refer to ",(0,i.jsx)(n.a,{href:"https://github.com/use-ink/ink-examples/tree/main/multi-contract-caller",children:"the showcased example here"})]}),"\n",(0,i.jsx)(n.li,{children:"useful code to interact and modify the contract environment for testing"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://docs.rs/ink_env/latest/ink_env/index.html",children:"ink_env docs"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"// get the default accounts (alice, bob, ...)\nlet accounts = ink::env::test::default_accounts::<ink::env::DefaultEnvironment>();\naccounts.alice //usage example\n\n// set which account calls the contract\nink::env::test::set_caller::<ink::env::DefaultEnvironment>(accounts.bob);\n\n// get the contract's address\nlet callee = ink::env::account_id::<ink::env::DefaultEnvironment>();\n\n// set the contracts address.\n// by default, this is alice's account\nink::env::test::set_callee::<ink::env::DefaultEnvironment>(callee);\n\n// transfer native currency to the contract\nink::env::test::set_value_transferred::<ink::env::DefaultEnvironment>(2);\n\n// increase block number (and block timestamp).\n// this can be placed in a loop to advance the block many times\nink::env::test::advance_block::<ink::env::DefaultEnvironment>();\n\n// generate arbitrary AccountId\nAccountId::from([0x01; 32]);\n\n// generate arbitrary Hash\nHash::from([0x01; 32])\n\n// macro for tests that are expected to panic.\n#[should_panic]\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},94094:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/solidity-c214fe3b4dd74e70b39bbb135b78c5db.svg"}}]);