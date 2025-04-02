"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9215],{66439:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"basics/storing-values","title":"Storing Values","description":"Storage Title Picture","source":"@site/versioned_docs/version-v6/basics/storing-values.md","sourceDirName":"basics","slug":"/basics/storing-values","permalink":"/docs/v6/basics/storing-values","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v6/basics/storing-values.md","tags":[],"version":"v6","frontMatter":{"title":"Storing Values","slug":"/basics/storing-values","hide_title":true},"sidebar":"reference","previous":{"title":"Contract Template","permalink":"/docs/v6/basics/contract-template"},"next":{"title":"Reading Values from Storage","permalink":"/docs/v6/basics/reading-values"}}');var i=t(74848),r=t(28453);const c={title:"Storing Values",slug:"/basics/storing-values",hide_title:!0},o="Storing Values",a={},d=[{value:"Supported Types",id:"supported-types",level:2},{value:"String, Vector and More",id:"string-vector-and-more",level:3},{value:"Mapping",id:"mapping",level:3},{value:"Polkadot SDK Types",id:"polkadot-sdk-types",level:3},{value:"Enum",id:"enum",level:3},{value:"Struct",id:"struct",level:3},{value:"Initializing Storage in Constructors",id:"initializing-storage-in-constructors",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Storage Title Picture",src:t(48908).A+"",width:"1600",height:"500"})}),"\n",(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"storing-values",children:"Storing Values"})}),"\n",(0,i.jsx)(n.p,{children:"Here is how you store simple values in storage:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink(storage)]\npub struct MyContract {\n    // Store a bool\n    my_bool: bool,\n    // Store some number\n    my_number: u32,\n}\n/* --snip-- */\n"})}),"\n",(0,i.jsx)(n.h2,{id:"supported-types",children:"Supported Types"}),"\n",(0,i.jsxs)(n.p,{children:["ink! contracts may store types that are encodable and decodable with the\n",(0,i.jsx)(n.a,{href:"https://github.com/paritytech/parity-scale-codec",children:"Parity SCALE Codec"})," which includes most Rust common data\ntypes such as ",(0,i.jsx)(n.code,{children:"bool"}),", ",(0,i.jsx)(n.code,{children:"u{8,16,32,64,128}"}),", ",(0,i.jsx)(n.code,{children:"i{8,16,32,64,128}"}),", ",(0,i.jsx)(n.code,{children:"String"}),", tuples, and arrays."]}),"\n",(0,i.jsxs)(n.p,{children:["Furthermore, ink! provides ",(0,i.jsx)(n.a,{href:"https://polkadot.com/platform/sdk",children:"Polkadot SDK"})," specific types like ",(0,i.jsx)(n.code,{children:"AccountId"}),", ",(0,i.jsx)(n.code,{children:"Balance"}),", and ",(0,i.jsx)(n.code,{children:"Hash"})," to smart contracts as if\nthey were primitive types."]}),"\n",(0,i.jsx)(n.h3,{id:"string-vector-and-more",children:"String, Vector and More"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://docs.rs/ink_prelude/6.0.0/ink_prelude/index.html",children:(0,i.jsx)(n.code,{children:"ink_prelude"})})," crate provides an efficient approach to import commonly used Rust types such as ",(0,i.jsx)(n.code,{children:"String"})," and ",(0,i.jsx)(n.code,{children:"Vec"}),", ensuring safe usage within an ink! contract."]}),"\n",(0,i.jsxs)(n.p,{children:["This simplifies the type referencing process between the ",(0,i.jsx)(n.code,{children:"std"})," and ",(0,i.jsx)(n.code,{children:"no_std"})," environments. Typically, these types are defined within the ",(0,i.jsx)(n.code,{children:"std"})," crate in the ",(0,i.jsx)(n.code,{children:"std"})," environment, and the ",(0,i.jsx)(n.code,{children:"alloc"})," crate in the ",(0,i.jsx)(n.code,{children:"no_std"})," environment. Given that ink! smart contract code is compiled in both environments (",(0,i.jsx)(n.code,{children:"no_std"})," for production and ",(0,i.jsx)(n.code,{children:"std"})," for unit tests), developers might find themselves writing intricate conditional compilation macros. The ",(0,i.jsx)(n.code,{children:"ink_prelude"})," crate conveniently re-exports these types, eliminating this complexity."]}),"\n",(0,i.jsx)(n.p,{children:"You can use the prelude definitions like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink::contract]\nmod MyContractWithStringsAndArrays {\n    use ink::prelude::string::String;\n    use ink::prelude::vec::Vec;\n\n    #[ink(storage)]\n    pub struct MyContract {\n        // Store some String\n        my_string: String,\n        // Store some u32 in a vec\n        my_vector: Vec<u32>,\n    }\n    /* --snip-- */\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"mapping",children:"Mapping"}),"\n",(0,i.jsxs)(n.p,{children:["ink! also provides a ",(0,i.jsx)(n.code,{children:"Mapping"})," storage type. You can read more about it ",(0,i.jsx)(n.a,{href:"/docs/v6/datastructures/mapping",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"polkadot-sdk-types",children:"Polkadot SDK Types"}),"\n",(0,i.jsxs)(n.p,{children:["Here is an example of how you would store substrate types ",(0,i.jsx)(n.code,{children:"AccountId"}),", ",(0,i.jsx)(n.code,{children:"Balance"})," and ",(0,i.jsx)(n.code,{children:"Hash"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink::contract]\nmod MyContract {\n\n    // Our struct will use those default ink! types\n    #[ink(storage)]\n    pub struct MyContract {\n        // Store some AccountId\n        my_account: AccountId,\n        // Store some Balance\n        my_balance: Balance,\n        // Store some Hash\n        my_hash: Hash,\n    }\n    /* --snip-- */\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"enum",children:"Enum"}),"\n",(0,i.jsxs)(n.p,{children:["Enum can be used as a datatype as well. It's use in the example in the ",(0,i.jsx)(n.a,{href:"#struct",children:"Struct"})," section."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"pub enum Status {\n    /// An auction has not started yet.\n    NotStarted,\n    /// We are in the starting period of the auction, collecting initial bids.\n    OpeningPeriod,\n    /// We are in the ending period of the auction, where we are taking snapshots\n    /// of the winning bids.\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"struct",children:"Struct"}),"\n",(0,i.jsxs)(n.p,{children:["You can even combine all the above mentioned types in a custom ",(0,i.jsx)(n.code,{children:"struct"})," which you can then store in the contract's storage."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"mod MyContract {\n    use ink::prelude::string::String;\n    use ink::prelude::vec::Vec;\n\n\n    pub struct Auction {\n        /// Branded name of the auction event.\n        name: String,\n        /// Some hash identifying the auction subject.\n        subject: Hash,\n        /// Auction status.\n        status: Status, // Enum: Usage shown in next section\n        /// Candle auction can have no winner.\n        /// If auction is finalized, that means that the winner is determined.\n        finalized: bool,\n        /// vector\n        vector: Vec<u8>,\n    }\n\n    #[ink(storage)]\n    pub struct MyContract {\n        // Store Auctions in a vec\n        auctions: Vec<Auction>,\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The values of an enum should be referenced as ",(0,i.jsx)(n.code,{children:"Status::OpeningPeriod"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"initializing-storage-in-constructors",children:"Initializing Storage in Constructors"}),"\n",(0,i.jsx)(n.p,{children:"Constructors are how values get initialized.\nEvery ink! smart contract must have a constructor which is run once when a contract is created. ink! smart contracts can have multiple constructors:"}),"\n",(0,i.jsxs)(n.p,{children:["Note that if you have a contract whose storage contains ",(0,i.jsx)(n.code,{children:"Mapping'"}),"s you will need to use\n",(0,i.jsx)(n.code,{children:"ink_lang::utils::initialize_contract"})," in your constructor. See the\n",(0,i.jsxs)(n.a,{href:"/docs/v6/datastructures/mapping",children:[(0,i.jsx)(n.code,{children:"Mapping"})," documentation"]})," for more details."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink::contract]\nmod mycontract {\n\n    #[ink(storage)]\n    pub struct MyContract {\n        number: u32,\n    }\n\n    impl MyContract {\n        /// Constructor that initializes the `u32` value to the given `init_value`.\n        #[ink(constructor)]\n        pub fn new(init_value: u32) -> Self {\n            Self {\n                number: init_value,\n            }\n        }\n\n        /// Constructor that initializes the `u32` value to the `u32` default.\n        #[ink(constructor)]\n        pub fn default() -> Self {\n            Self {\n                number: Default::default(),\n            }\n        }\n    /* --snip-- */\n    }\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},48908:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/storage-ee91ff72871e8fcb3e47049c3110f8bf.svg"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(96540);const i={},r=s.createContext(i);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);