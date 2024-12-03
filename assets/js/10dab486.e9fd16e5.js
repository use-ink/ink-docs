"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2985],{36652:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"basics/events","title":"Events","description":"An ink! smart contract may define events that it can emit during contract execution.","source":"@site/versioned_docs/version-6.x/basics/events.md","sourceDirName":"basics","slug":"/basics/events","permalink":"/6.x/basics/events","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-6.x/basics/events.md","tags":[],"version":"6.x","frontMatter":{"title":"Events","slug":"/basics/events","hide_title":true},"sidebar":"reference","previous":{"title":"Mutating Storage Values","permalink":"/6.x/basics/mutating-values"},"next":{"title":"Selectors","permalink":"/6.x/basics/selectors"}}');var s=t(74848),o=t(28453);const a={title:"Events",slug:"/basics/events",hide_title:!0},c="Events",r={},l=[{value:"Example",id:"example",level:2},{value:"Event Definition",id:"event-definition",level:2},{value:"Legacy syntax for inline Event definitions",id:"legacy-syntax-for-inline-event-definitions",level:3},{value:"Topics",id:"topics",level:3},{value:"Signature Topic",id:"signature-topic",level:4},{value:"Anonymous Events",id:"anonymous-events",level:4},{value:"Emitting Events in a Constructor",id:"emitting-events-in-a-constructor",level:2},{value:"Emitting Events from Messages",id:"emitting-events-from-messages",level:2},{value:"Cost of using Events",id:"cost-of-using-events",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:"/img/title/balloons-1.svg",className:"titlePic"}),"\n",(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"events",children:"Events"})}),"\n",(0,s.jsx)(n.p,{children:"An ink! smart contract may define events that it can emit during contract execution.\nEmitting events can be used by third party tools to query information about a contract's\nexecution and state."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Contract execution via transaction",src:t(98183).A+"",width:"1780",height:"1000"})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["The following example ink! contract shows how an event ",(0,s.jsx)(n.code,{children:"Transferred"})," is defined and\nemitted in the ",(0,s.jsx)(n.code,{children:"#[ink(constructor)]"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink::contract]\nmod erc20 {\n    /// Defines an event that is emitted\n    /// every time value is transferred.\n    #[ink(event)]\n    pub struct Transferred {\n        from: Option<AccountId>,\n        to: Option<AccountId>,\n        value: Balance,\n    }\n\n    #[ink(storage)]\n    pub struct Erc20 {\n        total_supply: Balance,\n        // more fields ...\n    }\n\n    impl Erc20 {\n        #[ink(constructor)]\n        pub fn new(initial_supply: Balance) -> Self {\n            let caller = Self::env().caller();\n            Self::env().emit_event(Transferred {\n                from: None,\n                to: Some(caller),\n                value: initial_supply,\n            });\n            Self { total_supply: initial_supply }\n        }\n\n        #[ink(message)]\n        pub fn total_supply(&self) -> Balance {\n            self.total_supply\n        }\n    }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["See our ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink-examples/blob/main/erc20/lib.rs",children:(0,s.jsx)(n.code,{children:"ERC20 example contract"})}),"\nfor an elaborate example which uses events."]}),"\n",(0,s.jsx)(n.h2,{id:"event-definition",children:"Event Definition"}),"\n",(0,s.jsx)(n.p,{children:"Since ink! version 5.0, events can be defined independently of the contract which emits them.\nEvents can now be defined once and shared across multiple contracts."}),"\n",(0,s.jsxs)(n.p,{children:["This is useful for events for contracts which conform to standards such as ERC-20:\ncontract indexers/explorers are now able to group all e.g. ",(0,s.jsx)(n.code,{children:"Transferred"})," events."]}),"\n",(0,s.jsx)(n.p,{children:"This is how an event definition looks:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"use ink::primitives::AccountId;\n\n#[ink::event]\npub struct Transferred {\n    #[ink(topic)]\n    from: Option<AccountId>,\n    #[ink(topic)]\n    to: Option<AccountId>,\n    amount: u128,\n}\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Note that generics are ",(0,s.jsx)(n.a,{href:"https://github.com/use-ink/ink/issues/2044",children:"not currently supported"}),"\n, so the concrete types of ",(0,s.jsx)(n.code,{children:"Environment"}),"\nspecific types such as ",(0,s.jsx)(n.code,{children:"AccountId"})," must match up with the types used in the contract."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This definition can exist within a contract definition module (inline events), in a different\nmodule in the same crate or even in a different crate to be shared by multiple contracts."}),"\n",(0,s.jsx)(n.h3,{id:"legacy-syntax-for-inline-event-definitions",children:"Legacy syntax for inline Event definitions"}),"\n",(0,s.jsxs)(n.p,{children:["Events defined within a ",(0,s.jsx)(n.code,{children:"#[ink::contract]"})," module can continue to use the original syntax for an\nevent definition, using the ",(0,s.jsx)(n.code,{children:"#[ink(event)]"})," attribute. Under the covers this is simply expanded\nto the new top level ",(0,s.jsx)(n.code,{children:"#[ink::event]"})," macro, so both events defined using the legacy style and\nusing the new ",(0,s.jsx)(n.code,{children:"event"})," attribute macro directly will behave exactly the same."]}),"\n",(0,s.jsx)(n.h3,{id:"topics",children:"Topics"}),"\n",(0,s.jsx)(n.p,{children:"When an event is emitted, 0 or more topics can be associated with it. The event is then indexed\ntogether with other events with the same topic value."}),"\n",(0,s.jsxs)(n.p,{children:["An event's fields can be annotated with ",(0,s.jsx)(n.code,{children:"#[ink(topic)]"})," (see example), which will result in a\ntopic derived from the value of that field being emitted together with the event."]}),"\n",(0,s.jsxs)(n.p,{children:["Topics are by default a 32 byte array (",(0,s.jsx)(n.code,{children:"[u8; 32]"}),"), although this is configurable on the\nPolkadot SDK runtime level. If the SCALE encoded bytes of a field value are ",(0,s.jsx)(n.code,{children:"<= 32"}),", then the\nencoded bytes are used directly as the topic value."]}),"\n",(0,s.jsxs)(n.p,{children:["For example, in the common case of indexing a field of type ",(0,s.jsx)(n.code,{children:"AccountId"}),", where the default\n",(0,s.jsx)(n.code,{children:"AccountId"})," type is 32 bytes in length, the topic value will be the encoded account id itself. This\nmakes it easy to filter for all events which have a topic of a specific ",(0,s.jsx)(n.code,{children:"AccountId"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If however the size of the encoded bytes of the value of a field exceeds 32, then the encoded\nbytes will be hashed using the ",(0,s.jsx)(n.code,{children:"Blake2x256"})," hasher."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Topics are a native concept in the Polkadot SDK, and can be queried via ",(0,s.jsx)(n.a,{href:"https://docs.rs/frame-system/latest/frame_system/pallet/storage_types/struct.EventTopics.html",children:(0,s.jsx)(n.code,{children:"EventTopics"})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["How to choose which fields to make topics? A good rule of thumb is to ask yourself if somebody\nmight want to search for this topic. For this reason the ",(0,s.jsx)(n.code,{children:"amount"})," in the example ",(0,s.jsx)(n.code,{children:"Transferred"})," event\nabove was not made indexable \u2012 there will most probably be a lot of different events with differing\namounts each."]}),"\n",(0,s.jsx)(n.h4,{id:"signature-topic",children:"Signature Topic"}),"\n",(0,s.jsxs)(n.p,{children:["By default all events have a signature topic. This allows indexing of all events of the same\ntype, emitted by different contracts. The ",(0,s.jsx)(n.code,{children:"#[ink::event]"})," macro generates a signature topic at\ncompile time by hashing the name of the event concatenated with the ",(0,s.jsx)(n.em,{children:"names of the types"})," of the all\nthe field\nnames:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'blake2b("Event(field1_type,field2_type)")`\n'})}),"\n",(0,s.jsxs)(n.p,{children:["So for our ",(0,s.jsx)(n.code,{children:"Transferred"})," example it will be:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'blake2b("Transferred(Option<AccountId>,Option<AccountId>,u128)")`\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["Important caveat: because the ",(0,s.jsx)(n.em,{children:"name"})," of the field type is used, refactoring an event\ndefinition to use a type alias or a fully qualified type will change the signature topic, even\nthough the underlying type is the same. Two otherwise identical definitions of an event with the\nsame name and same field types but different field type names will have different signature\ntopics."]})}),"\n",(0,s.jsx)(n.p,{children:"When decoding events emitted from a contract, signature topics are now required to determine which\ntype of event to decode into."}),"\n",(0,s.jsx)(n.h4,{id:"anonymous-events",children:"Anonymous Events"}),"\n",(0,s.jsxs)(n.p,{children:["Events annotated with ",(0,s.jsx)(n.code,{children:"anonymous"})," will not have a signature topic generated and published with the\nevent."]}),"\n",(0,s.jsxs)(n.p,{children:["For inline events, this can be done by marking the event with the ",(0,s.jsx)(n.code,{children:"anonymous"})," attribute e.g."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink(event, anonymous)]\npub struct Event { .. }\n"})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink(event)]\n#[ink(anonymous)]\npub struct Event { .. }\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For events defined using the ",(0,s.jsx)(n.code,{children:"#[ink::event]"})," macro, the ",(0,s.jsx)(n.code,{children:"anonymous"})," flag needs to be added as an\nargument:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink::event(anonymous)]\npub struct Event { .. }\n"})}),"\n",(0,s.jsx)(n.p,{children:"Without a signature topic, indexers will not be able to index over the type of the event, which\nmay be desirable for some contracts, and would be a small gas cost optimization if necessary."}),"\n",(0,s.jsxs)(n.p,{children:["However, when interacting with the contract from a client, no signature topic means that another\nway is required to determine the type of the event to be decoded into (i.e. how do we know it is\na ",(0,s.jsx)(n.code,{children:"Transferred"})," event, not an ",(0,s.jsx)(n.code,{children:"Approval"})," event. One way would be to try decoding for each type\nof event defined in the metadata of the contract until one succeeds. If calling a specific\n",(0,s.jsx)(n.code,{children:"message"}),", it may be known up front what type of event that message will raise, so the client\ncode could just decode into that event directly."]}),"\n",(0,s.jsx)(n.h2,{id:"emitting-events-in-a-constructor",children:"Emitting Events in a Constructor"}),"\n",(0,s.jsxs)(n.p,{children:["In a constructor events are emitted via ",(0,s.jsx)(n.code,{children:"Self::env().emit_event()"}),".\nSee this example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink(constructor)]\npub fn new(initial_value: Balance) -> Self {\n    let caller = Self::env().caller();\n    let mut balances = HashMap::new();\n    balances.insert(caller, initial_supply);\n\n    Self::env().emit_event(Transferred {\n        from: None,\n        to: Some(caller),\n        amount: initial_supply\n    });\n\n    Self { total_supply: initial_supply, balances }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"emitting-events-from-messages",children:"Emitting Events from Messages"}),"\n",(0,s.jsxs)(n.p,{children:["In a message events are emitted via ",(0,s.jsx)(n.code,{children:"self.env().emit_event()"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink(message)]\npub fn transfer(&mut self, to: AccountId, amount: Balance) -> Result {\n    let from = self.env().caller();\n    // implementation hidden\n    self.env().emit_event(Transferred {\n        from: Some(from),\n        to: Some(to),\n        amount\n    });\n    Ok(())\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"cost-of-using-events",children:"Cost of using Events"}),"\n",(0,s.jsx)(n.p,{children:"When using events and topics, developers should be mindful of the costs associated. Firstly: if\noptimizing for contract size, using events will increase the size of the final code size. So\nminimizing or eliminating event usage where necessary will reduce contract size. The same can be\nsaid for the execution (aka gas) costs when using events. We recommend considering the cost of\nevents when using them, and measuring the code size and gas costs with different usage patterns\nwhen optimizing."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},98183:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/events-a50c7787c51ef0290b65675711fd9f2c.svg"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var i=t(96540);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);