"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7418],{28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>o});var i=t(96540);const s={},a=i.createContext(s);function r(n){const e=i.useContext(a);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(a.Provider,{value:e},n.children)}},62186:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"basics/trait-definitions","title":"Trait Definitions","description":"Through the #[ink::trait_definition] proc. macro it is now possible to define your very own trait definitions that are then implementable by ink! smart contracts.","source":"@site/versioned_docs/version-v3/basics/trait-definitions.md","sourceDirName":"basics","slug":"/basics/trait-definitions","permalink":"/docs/v3/basics/trait-definitions","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-v3/basics/trait-definitions.md","tags":[],"version":"v3","frontMatter":{"title":"Trait Definitions","slug":"/basics/trait-definitions"},"sidebar":"reference","previous":{"title":"Events","permalink":"/docs/v3/basics/events"},"next":{"title":"Cross-Contract Calling","permalink":"/docs/v3/basics/cross-contract-calling"}}');var s=t(74848),a=t(28453);const r={title:"Trait Definitions",slug:"/basics/trait-definitions"},o=void 0,c={},l=[{value:"Example",id:"example",level:3}];function p(n){const e={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["Through the ",(0,s.jsx)(e.code,{children:"#[ink::trait_definition]"})," proc. macro it is now possible to define your very own trait definitions that are then implementable by ink! smart contracts."]}),"\n",(0,s.jsx)(e.p,{children:"This allows to define shared smart contract interfaces to different concrete implementations.\nNote that this ink! trait definition can be defined anywhere, even in another crate!"}),"\n",(0,s.jsxs)(e.p,{children:["See our ",(0,s.jsx)(e.a,{href:"https://github.com/use-ink/ink-examples/blob/main/trait-erc20/lib.rs",children:(0,s.jsx)(e.code,{children:"ERC20-Trait example contract"})}),"\nfor an elaborate example which uses trait definitions."]}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(e.p,{children:["Defined in the ",(0,s.jsx)(e.code,{children:"base_erc20.rs"})," module."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"use ink_lang as ink;\n\n#[ink::trait_definition]\npub trait BaseErc20 {\n    /// Creates a new ERC-20 contract and initializes it with the initial supply for the instantiator.\n    #[ink(constructor)]\n    fn new(initial_supply: Balance) -> Self;\n\n    /// Returns the total supply.\n    #[ink(message)]\n    fn total_supply(&self) -> Balance;\n\n    /// Transfers `amount` from caller to `to`.\n    #[ink(message, payable)]\n    fn transfer(&mut self, to: AccountId, amount: Balance);\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"An ink! smart contract definition can then implement this trait definition as follows:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"use ink_lang as ink;\n\n#[ink::contract]\nmod erc20 {\n    use base_erc20::BaseErc20;\n\n    #[ink(storage)]\n    pub struct Erc20 {\n        total_supply: Balance,\n        // more fields ...\n    }\n\n    impl BaseErc20 for Erc20 {\n        #[ink(constructor)]\n        fn new(initial_supply: Balance) -> Self {\n            // implementation ...\n        }\n\n        #[ink(message)]\n        fn total_supply(&self) -> Balance {\n            // implementation ...\n        }\n\n        #[ink(message, payable)]\n        fn transfer(&mut self, to: AccountId, amount: Balance) {\n            // implementation ...\n        }\n    }\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:["Calling the above ",(0,s.jsx)(e.code,{children:"Erc20"})," explicitly through its trait implementation can be done just as if it was normal Rust code:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"// --- Instantiating the ERC-20 contract:\n//\nlet mut erc20 = <Erc20 as BaseErc20>::new(1000);\n// --- Is just the same as:\nuse base_erc20::BaseErc20;\nlet mut erc20 = Erc20::new(1000);\n\n// --- Retrieving the total supply:\n//\nassert_eq!(<Erc20 as BaseErc20>::total_supply(&erc20), 1000);\n// --- Is just the same as:\nuse base_erc20::BaseErc20;\nassert_eq!(erc20.total_supply(), 1000);\n"})}),"\n",(0,s.jsx)(e.p,{children:"There are still many limitations to ink! trait definitions and trait implementations.\nFor example it is not possible to define associated constants or types or have default implemented methods.\nThese limitations exist because of technical intricacies, however, please expect that many of those will be tackled in future ink! releases."}),"\n",(0,s.jsx)(e.p,{children:"Marks trait definitions to ink! as special ink! trait definitions."}),"\n",(0,s.jsxs)(e.p,{children:["There are some restrictions that apply to ink! trait definitions that\nthis macro checks. Also ink! trait definitions are required to have specialized\nstructure so that the main ",(0,s.jsx)(e.a,{href:"https://docs.rs/ink_lang/3.3.1/ink_lang/attr.contract.html",children:(0,s.jsx)(e.code,{children:"#[ink::contract]"})})," macro can\nproperly generate code for its implementations."]}),"\n",(0,s.jsx)(e.h1,{id:"example-definition",children:"Example: Definition"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"use ink_lang as ink;\ntype Balance = <ink_env::DefaultEnvironment as ink_env::Environment>::Balance;\n\n#[ink::trait_definition]\npub trait Erc20 {\n    /// Constructs a new ERC-20 compliant smart contract using the initial supply.\n    #[ink(constructor)]\n    fn new(initial_supply: Balance) -> Self;\n\n    /// Returns the total supply of the ERC-20 smart contract.\n    #[ink(message)]\n    fn total_supply(&self) -> Balance;\n\n    // etc.\n}\n"})}),"\n",(0,s.jsx)(e.h1,{id:"example-implementation",children:"Example: Implementation"}),"\n",(0,s.jsx)(e.p,{children:"Given the above trait definition you can implement it as shown below:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"use ink_lang as ink;\n\n#[ink::contract]\nmod base_erc20 {\n    /// We somehow cannot put the trait in the doc-test crate root due to bugs.\n    #[ink::trait_definition]\n    pub trait Erc20 {\n        /// Constructs a new ERC-20 compliant smart contract using the initial supply.\n        #[ink(constructor)]\n        fn new(initial_supply: Balance) -> Self;\n\n        /// Returns the total supply of the ERC-20 smart contract.\n        #[ink(message)]\n        fn total_supply(&self) -> Balance;\n    }\n\n    #[ink(storage)]\n    pub struct BaseErc20 {\n        total_supply: Balance,\n        // etc ..\n    }\n\n    impl Erc20 for BaseErc20 {\n        #[ink(constructor)]\n        fn new(initial_supply: Balance) -> Self {\n            Self { total_supply: initial_supply }\n        }\n\n        /// Returns the total supply of the ERC-20 smart contract.\n        #[ink(message)]\n        fn total_supply(&self) -> Balance {\n            self.total_supply\n        }\n\n        // etc ..\n    }\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}}}]);