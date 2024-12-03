"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8775],{63597:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"datastructures/storage-in-metadata","title":"Storage Metadata Format","description":"The storage layout of a contract is reflected inside the metadata. It allows third-party","source":"@site/docs/datastructures/storage-in-metadata.md","sourceDirName":"datastructures","slug":"/datastructures/storage-in-metadata","permalink":"/datastructures/storage-in-metadata","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/docs/datastructures/storage-in-metadata.md","tags":[],"version":"current","frontMatter":{"title":"Storage Metadata Format","slug":"/datastructures/storage-in-metadata","hide_title":true},"sidebar":"reference","previous":{"title":"Custom Data Structures","permalink":"/datastructures/custom-datastructure"},"next":{"title":"Overview","permalink":"/linter/overview"}}');var s=n(74848),c=n(28453);const r={title:"Storage Metadata Format",slug:"/datastructures/storage-in-metadata",hide_title:!0},o="Storage Metadata Format",i={},d=[{value:"Storage key calculation for ink! <code>Mapping</code> values",id:"storage-key-calculation-for-ink-mapping-values",level:2},{value:"Accessing storage items with the <code>contractsApi</code> runtime call API",id:"accessing-storage-items-with-the-contractsapi-runtime-call-api",level:2},{value:"Accessing storage items with the <code>childState</code> RPC call API",id:"accessing-storage-items-with-the-childstate-rpc-call-api",level:2},{value:"Finding the contracts child trie ID",id:"finding-the-contracts-child-trie-id",level:3},{value:"Calculate the <code>PrefixedStorageKey</code> from the child trie ID",id:"calculate-the-prefixedstoragekey-from-the-child-trie-id",level:3},{value:"Calculate the storage key using transparent hashing",id:"calculate-the-storage-key-using-transparent-hashing",level:3},{value:"A full example",id:"a-full-example",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:"/img/title/storage.svg",className:"titlePic"}),"\n",(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"storage-metadata-format",children:"Storage Metadata Format"})}),"\n",(0,s.jsx)(t.p,{children:"The storage layout of a contract is reflected inside the metadata. It allows third-party\ntooling to work with contract storage and can also help to better understand the storage\nlayout of any given contract."}),"\n",(0,s.jsx)(t.p,{children:"Given a contract with the following storage:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"#[ink(storage)]\npub struct MyContract {\n    balance: Balance,\n    block: BlockNumber,\n    lazy: Lazy<bool>,\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"The storage will be reflected inside the metadata as like follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'"root": {\n  "layout": {\n    "struct": {\n      "fields": [\n        {\n          "layout": {\n            "leaf": {\n              "key": "0x00000000",\n              "ty": 0\n            }\n          },\n          "name": "balance"\n        },\n        {\n          "layout": {\n            "leaf": {\n              "key": "0x00000000",\n              "ty": 1\n            }\n          },\n          "name": "block"\n        },\n        {\n          "layout": {\n            "root": {\n              "layout": {\n                "leaf": {\n                  "key": "0xb1f4904e",\n                  "ty": 2\n                }\n              },\n              "root_key": "0xb1f4904e"\n            }\n          },\n          "name": "lazy"\n        }\n      ],\n      "name": "MyContract"\n    }\n  },\n  "root_key": "0x00000000"\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["We observe that the storage layout is represented as a tree, where tangible storage values\nend up inside a ",(0,s.jsx)(t.code,{children:"leaf"}),". Because of\n",(0,s.jsx)(t.a,{href:"https://docs.rs/ink_storage_traits/5.0.0/ink_storage_traits/trait.Packed.html",children:(0,s.jsx)(t.code,{children:"Packed"})}),"\nencoding, leafs can share the same storage key, and\nin order to reach them you'd need to fetch and decode the whole storage cell under this key."]}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.code,{children:"root_key"})," is meant to either be used to directly access a ",(0,s.jsx)(t.code,{children:"Packed"})," storage field\nor to serve as the base key for calculating the actual keys needed to access values in\nnon-",(0,s.jsx)(t.code,{children:"Packed"})," fields (such as ",(0,s.jsx)(t.code,{children:"Mapping"}),"s)."]}),"\n",(0,s.jsxs)(t.h2,{id:"storage-key-calculation-for-ink-mapping-values",children:["Storage key calculation for ink! ",(0,s.jsx)(t.code,{children:"Mapping"})," values"]}),"\n",(0,s.jsx)(t.p,{children:"Base storage keys are always 4 bytes in size. However, the storage API of the contracts\npallet supports keys of arbitrary length. In order to reach a mapping value, the storage\nkey of said value is calculated at runtime."}),"\n",(0,s.jsxs)(t.p,{children:["The formula to calculate the base storage key ",(0,s.jsx)(t.code,{children:"S"})," used to access a mapping value under the\nkey ",(0,s.jsx)(t.code,{children:"K"})," for a mapping with base key ",(0,s.jsx)(t.code,{children:"B"})," can be expressed as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"S = scale::encode(B) + scale::encode(K)\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Where the base key ",(0,s.jsx)(t.code,{children:"B"})," is the ",(0,s.jsx)(t.code,{children:"root_key"})," (of type ",(0,s.jsx)(t.code,{children:"u32"}),") found in the contract metadata."]}),"\n",(0,s.jsx)(t.p,{children:"In words, SCALE encode the base (root) key of the mapping and concatenate it with the\nSCALE encoded key of the mapped value to obtain the actual storage key used to\naccess the mapped value."}),"\n",(0,s.jsx)(t.p,{children:"Given the following contract storage, which maps accounts to a balance:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"#[ink(storage)]\npub struct Contract {\n    roles: Mapping<AccountId, Balance, ManualKey<0x12345678>>,\n}\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Now let's suppose we are interested in finding the balance for the account\n",(0,s.jsx)(t.code,{children:"5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY"}),". The storage key is calculated as follows:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["SCALE encode the base key of the mapping (",(0,s.jsx)(t.code,{children:"0x12345678u32"}),"), resulting in ",(0,s.jsx)(t.code,{children:"0x78563412"})]}),"\n",(0,s.jsxs)(t.li,{children:["SCALE encode the ",(0,s.jsx)(t.code,{children:"AccountId"}),", which will be\n",(0,s.jsx)(t.code,{children:"0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d"}),".\nNote that you'll need to convert the SS58 into a ",(0,s.jsx)(t.code,{children:"AccountId32"})," first."]}),"\n",(0,s.jsxs)(t.li,{children:["Concatenating those two will result in the key\n",(0,s.jsx)(t.code,{children:"0x78563412d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'let account_id = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";\nlet account: AccountId32 = Ss58Codec::from_string(account_id).unwrap();\nlet storage_key = &(0x12345678u32, account).encode();\nprintln!("0x{}", hex::encode(storage_key));\n// 0x78563412d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d\n'})}),"\n",(0,s.jsxs)(t.h2,{id:"accessing-storage-items-with-the-contractsapi-runtime-call-api",children:["Accessing storage items with the ",(0,s.jsx)(t.code,{children:"contractsApi"})," runtime call API"]}),"\n",(0,s.jsxs)(t.p,{children:["There are two ways to query for storage fields of smart contracts from outside a contract.\nBoth methods are accessible via the ",(0,s.jsx)(t.a,{href:"https://polkadot.js.org/apps/",children:(0,s.jsx)(t.code,{children:"polkadot-js"})})," web UI."]}),"\n",(0,s.jsxs)(t.p,{children:["The straight forward way to query a contracts storage is via a\n",(0,s.jsx)(t.a,{href:"https://polkadot.js.org/apps/#/runtime",children:(0,s.jsx)(t.code,{children:"runtime API"})})," call, using the ",(0,s.jsx)(t.code,{children:"contractsApi"}),"\nendpoint provided by the contracts pallet. The endpoint provides a ",(0,s.jsx)(t.code,{children:"getStorage"})," method,\nwhich just expects a contract address and a storage key as arguments."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, to access the root storage struct under the key ",(0,s.jsx)(t.code,{children:"0x00000000"})," of a contract,\njust specify the contract's address and the storage key ",(0,s.jsx)(t.code,{children:"0x00000000"})," as-is. The API call\nwill return the scale-encoded root storage struct of the contract."]}),"\n",(0,s.jsxs)(t.h2,{id:"accessing-storage-items-with-the-childstate-rpc-call-api",children:["Accessing storage items with the ",(0,s.jsx)(t.code,{children:"childState"})," RPC call API"]}),"\n",(0,s.jsxs)(t.p,{children:["Under the hood, each contract gets its own\n",(0,s.jsx)(t.a,{href:"https://paritytech.github.io/substrate/master/frame_support/storage/child/index.html",children:"child trie"}),", where its storage items are actually stored."]}),"\n",(0,s.jsxs)(t.p,{children:["Additionally, the contracts pallet uses the\n",(0,s.jsx)(t.a,{href:"https://paritytech.github.io/substrate/master/frame_support/struct.Blake2_128Concat.html",children:(0,s.jsx)(t.code,{children:"Blake2 128 Concat"})}),"\n",(0,s.jsx)(t.a,{href:"https://docs.substrate.io/build/runtime-storage/#transparent-hashing-algorithms",children:(0,s.jsx)(t.code,{children:"Transparent hashing algorithm"})}),"\nto calculate storage keys for any stored item inside the child trie.\nYou'll need to account for that as well."]}),"\n",(0,s.jsxs)(t.p,{children:["With that in mind, to directly access storage items of any on-chain contract using a\nchildState ",(0,s.jsx)(t.a,{href:"https://polkadot.js.org/apps/#/rpc",children:(0,s.jsx)(t.code,{children:"RPC call"})}),", you'll need the following:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The child trie ID of the contract, represented as a ",(0,s.jsx)(t.a,{href:"https://docs.rs/sp-storage/10.0.0/sp_storage/struct.PrefixedStorageKey.html",children:(0,s.jsx)(t.code,{children:"PrefixedStorageKey"})})]}),"\n",(0,s.jsx)(t.li,{children:"The hashed storage key of the storage field"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"finding-the-contracts-child-trie-id",children:"Finding the contracts child trie ID"}),"\n",(0,s.jsxs)(t.p,{children:["The child trie ID is the ",(0,s.jsx)(t.code,{children:"Blake2_256"})," hash of the contracts instantiation nonce\nconcatenated to it's ",(0,s.jsx)(t.code,{children:"AccountId"}),". You can find it in\n",(0,s.jsx)(t.a,{href:"https://polkadot.js.org/apps/#/chainstate",children:(0,s.jsx)(t.code,{children:"polkadot-js chainstate query interface"})}),",\nwhere you need to execute the ",(0,s.jsx)(t.code,{children:"contracts_contractInfoOf"})," state query."]}),"\n",(0,s.jsxs)(t.p,{children:["It can also be calculate manually according to the following code snippet. The\ninstantiation note of the contract must be still be known. You can get it using the\n",(0,s.jsx)(t.code,{children:"contracts_nonce"})," chain state query in polkadot-js UI."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'use sp_core::crypto::Ss58Codec;\nuse parity_scale_codec::Encode;\n\n// Given our contract ID is 5DjcHxSfjAgCTSF9mp6wQBJWBgj9h8uh57c7TNx1mL5hdQp4\nlet account: AccountId32 =\n    Ss58Codec::from_string("5DjcHxSfjAgCTSF9mp6wQBJWBgj9h8uh57c7TNx1mL5hdQp4").unwrap();\n// Given our instantiation nonce was 1\nlet nonce: u64 = 1;\n\n// The child trie ID can be calculated as follows:\nlet trie_id = (&account, nonce).using_encoded(Blake2_256::hash);\n'})}),"\n",(0,s.jsxs)(t.h3,{id:"calculate-the-prefixedstoragekey-from-the-child-trie-id",children:["Calculate the ",(0,s.jsx)(t.code,{children:"PrefixedStorageKey"})," from the child trie ID"]}),"\n",(0,s.jsxs)(t.p,{children:["A ",(0,s.jsx)(t.code,{children:"PrefixedStorageKey"})," based on the child trie ID can be constructed using the ",(0,s.jsx)(t.code,{children:"ChildInfo"}),"\nprimitive as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"use sp_core::storage::ChildInfo;\nlet prefixed_storage_key = ChildInfo::new_default(&trie_id).into_prefixed_storage_key();\n"})}),"\n",(0,s.jsx)(t.h3,{id:"calculate-the-storage-key-using-transparent-hashing",children:"Calculate the storage key using transparent hashing"}),"\n",(0,s.jsxs)(t.p,{children:["Finally, we calculate the hashed storage key of the storage item we are wanting to access.\nThe algorithm is simple: ",(0,s.jsx)(t.code,{children:"Blake2_128"})," hash the storage key and then concatenate the unhashed\nkey to the hash. Given you want to access the storage item under the ",(0,s.jsx)(t.code,{children:"0x00000000"}),",\nit will look like this in code:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"use frame_support::Blake2_128Concat;\n\n// The base key is 0x00000000\nlet storage_key = Blake2_128Concat::hash(&[0, 0, 0, 0]);\n"})}),"\n",(0,s.jsx)(t.h3,{id:"a-full-example",children:"A full example"}),"\n",(0,s.jsx)(t.p,{children:"Let's recap the last few paragraphs into a full example. Given:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["A contract at address ",(0,s.jsx)(t.code,{children:"5DjcHxSfjAgCTSF9mp6wQBJWBgj9h8uh57c7TNx1mL5hdQp4"})]}),"\n",(0,s.jsxs)(t.li,{children:["With instantiation nonce of ",(0,s.jsx)(t.code,{children:"1"})]}),"\n",(0,s.jsxs)(t.li,{children:["The root storage struct is to be found at base key ",(0,s.jsx)(t.code,{children:"0x00000000"})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The following Rust program demonstrates how to calculate the ",(0,s.jsx)(t.code,{children:"PrefixedStorageKey"})," of the\ncontracts child trie, as well as the hashed key for the storage struct, which can then be\nused with the ",(0,s.jsx)(t.code,{children:"chilstate"})," RPC endpoint function ",(0,s.jsx)(t.code,{children:"getStorage"})," in polkadot-js to receive\nthe root storage struct of the contract:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'use frame_support::{sp_runtime::AccountId32, Blake2_128Concat, Blake2_256, StorageHasher};\nuse parity_scale_codec::Encode;\nuse sp_core::{crypto::Ss58Codec, storage::ChildInfo};\nuse std::ops::Deref;\n\nfn main() {\n    // Find the child storage trie ID\n    let account_id = "5DjcHxSfjAgCTSF9mp6wQBJWBgj9h8uh57c7TNx1mL5hdQp4";\n    let account: AccountId32 = Ss58Codec::from_string(account_id).unwrap();\n    let instantiation_nonce = 1u64;\n    let trie_id = (account, instantiation_nonce).using_encoded(Blake2_256::hash);\n    assert_eq!(\n        hex::encode(trie_id),\n        "2fa252b7f996d28fd5d8b11098c09e56295eaf564299c6974421aa5ed887803b"\n    );\n\n    // Calculate the PrefixedStorageKey based on the trie ID\n    let prefixed_storage_key = ChildInfo::new_default(&trie_id).into_prefixed_storage_key();\n    println!("0x{}", hex::encode(prefixed_storage_key.deref()));\n    // 0x3a6368696c645f73746f726167653a64656661756c743a2fa252b7f996d28fd5d8b11098c09e56295eaf564299c6974421aa5ed887803b\n\n    // Calculate the storage key using transparent hashing\n    let storage_key = Blake2_128Concat::hash(&[0, 0, 0, 0]);\n    println!("0x{}", hex::encode(&storage_key));\n    // 0x11d2df4e979aa105cf552e9544ebd2b500000000\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(96540);const s={},c=a.createContext(s);function r(e){const t=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(c.Provider,{value:t},e.children)}}}]);