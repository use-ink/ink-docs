"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9401],{55323:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"basics/events","title":"Events","description":"An ink! smart contract may define events that it can emit during contract execution.","source":"@site/versioned_docs/version-3.x/basics/events.md","sourceDirName":"basics","slug":"/basics/events","permalink":"/3.x/basics/events","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-3.x/basics/events.md","tags":[],"version":"3.x","frontMatter":{"title":"Events","slug":"/basics/events"},"sidebar":"reference","previous":{"title":"Mutating Storage Values","permalink":"/3.x/basics/mutating-values"},"next":{"title":"Trait Definitions","permalink":"/3.x/basics/trait-definitions"}}');var i=t(74848),a=t(28453);const o={title:"Events",slug:"/basics/events"},r=void 0,c={},l=[{value:"Event Definition",id:"event-definition",level:2},{value:"Emitting Events in a Constructor",id:"emitting-events-in-a-constructor",level:2},{value:"Emitting Events from Messages",id:"emitting-events-from-messages",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"An ink! smart contract may define events that it can emit during contract execution.\nEmitting events can be used by third party tools to query information about a contract's\nexecution and state."}),"\n",(0,i.jsxs)(n.p,{children:["The following example ink! contract shows how an event ",(0,i.jsx)(n.code,{children:"Transferred"})," is defined and\nemitted in the ",(0,i.jsx)(n.code,{children:"#[ink(constructor)]"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"use ink_lang as ink;\n\n#[ink::contract]\nmod erc20 {\n    /// Defines an event that is emitted\n    /// every time value is transferred.\n    #[ink(event)]\n    pub struct Transferred {\n        from: Option<AccountId>,\n        to: Option<AccountId>,\n        value: Balance,\n    }\n\n    #[ink(storage)]\n    pub struct Erc20 {\n        total_supply: Balance,\n        // more fields ...\n    }\n\n    impl Erc20 {\n        #[ink(constructor)]\n        pub fn new(initial_supply: Balance) -> Self {\n            let caller = Self::env().caller();\n            Self::env().emit_event(Transferred {\n                from: None,\n                to: Some(caller),\n                value: initial_supply,\n            });\n            Self { total_supply: initial_supply }\n        }\n\n        #[ink(message)]\n        pub fn total_supply(&self) -> Balance {\n            self.total_supply\n        }\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["See our ",(0,i.jsx)(n.a,{href:"https://github.com/use-ink/ink-examples/blob/main/erc20/lib.rs",children:(0,i.jsx)(n.code,{children:"ERC20 example contract"})}),"\nfor an elaborate example which uses events."]}),"\n",(0,i.jsx)(n.h2,{id:"event-definition",children:"Event Definition"}),"\n",(0,i.jsx)(n.p,{children:"This is how an event definition looks:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink(event)]\npub struct Transferred {\n    #[ink(topic)]\n    from: Option<AccountId>,\n\n    #[ink(topic)]\n    to: Option<AccountId>,\n\n    amount: Balance\n\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Add the ",(0,i.jsx)(n.code,{children:"#[ink(topic)]"})," attribute tag to each item in your event that you want to have indexed.\nA good rule of thumb is to ask yourself if somebody might want to search for this topic.\nFor this reason the ",(0,i.jsx)(n.code,{children:"amount"})," in the exemplary event above was not\nmade indexable \u2012 there will most probably be a lot of different events with\ndiffering amounts each."]}),"\n",(0,i.jsxs)(n.p,{children:["The signature of the event is by default one of the topics of the event, except\nif you annotate the event with ",(0,i.jsx)(n.code,{children:"#[ink(anonymous)]"}),".\nSee ",(0,i.jsx)(n.a,{href:"/3.x/macros-attributes/anonymous",children:"here"})," for details on this attribute."]}),"\n",(0,i.jsx)(n.h2,{id:"emitting-events-in-a-constructor",children:"Emitting Events in a Constructor"}),"\n",(0,i.jsxs)(n.p,{children:["In a constructor events are emitted via ",(0,i.jsx)(n.code,{children:"Self::env().emit_event()"}),".\nSee this example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink(constructor)]\npub fn new(initial_value: Balance) -> Self {\n    let caller = Self::env().caller();\n    let mut balances = HashMap::new();\n    balances.insert(caller, initial_supply);\n\n    Self::env().emit_event(Transferred {\n        from: None,\n        to: Some(caller),\n        amount: initial_supply\n    });\n\n    Self { total_supply: initial_supply, balances }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"emitting-events-from-messages",children:"Emitting Events from Messages"}),"\n",(0,i.jsxs)(n.p,{children:["In a message events are emitted via ",(0,i.jsx)(n.code,{children:"self.env().emit_event()"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[ink(message)]\npub fn transfer(&mut self, to: AccountId, amount: Balance) -> Result {\n    let from = self.env().caller();\n    // implementation hidden\n    self.env().emit_event(Transferred {\n        from: Some(from),\n        to: Some(to),\n        amount\n    });\n    Ok(())\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(96540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);