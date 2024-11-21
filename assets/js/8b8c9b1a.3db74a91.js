"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8065],{4433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=n(4848),s=n(8453);const a={title:"Overview",slug:"/datastructures/overview"},i=void 0,o={id:"datastructures/overview",title:"Overview",description:"The ink_storage crate acts as the standard storage library for ink! smart contracts. At",source:"@site/versioned_docs/version-3.x/datastructures/overview.md",sourceDirName:"datastructures",slug:"/datastructures/overview",permalink:"/3.x/datastructures/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/use-ink/ink-docs/edit/master/versioned_docs/version-3.x/datastructures/overview.md",tags:[],version:"3.x",frontMatter:{title:"Overview",slug:"/datastructures/overview"},sidebar:"reference",previous:{title:"#[ink::chain_extension]",permalink:"/3.x/macros-attributes/chain-extension"},next:{title:"Working with Mapping",permalink:"/3.x/datastructures/mapping"}},c={},d=[{value:"Eager Loading",id:"eager-loading",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"ink_storage"})," crate acts as the standard storage library for ink! smart contracts. At\nthe moment it only provides a single low-level primitive for interacting with storage,\nthe ",(0,r.jsx)(t.a,{href:"https://docs.rs/ink_storage/3.3.1/ink_storage/struct.Mapping.html",children:(0,r.jsx)(t.code,{children:"Mapping"})}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"Mapping"})," is a mapping of key-value pairs directly to the contract storage. Its main advantage\nis to be simple and lightweight. As such, it does not provide any high-level\nfunctionality, such as iteration or automatic clean-up. Smart contract authors will need\nto implement any high level functionality themselves."]}),"\n",(0,r.jsx)(t.h2,{id:"eager-loading",children:"Eager Loading"}),"\n",(0,r.jsxs)(t.p,{children:["When executing a contract, all the fields of the ",(0,r.jsx)(t.code,{children:"#[ink(storage)]"})," struct will be pulled\nfrom storage, regardless of whether or not they are used during the message execution."]}),"\n",(0,r.jsx)(t.p,{children:"Smart contract authors should be aware of this behavior since it could potentially\naffect their contract performance. For example, consider the following storage struct:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:"#[ink(storage)]\npub struct EagerLoading {\n    a: i32,\n    b: ink_prelude::vec::Vec<i32>,\n}\n\nimpl EagerLoading {\n    #[ink(message)]\n    pub fn read_a(&self) {\n        let a = self.a;\n    }\n}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.code,{children:"EagerLoading::read_a()"})," we only read the ",(0,r.jsx)(t.code,{children:"a"})," storage item. However, the ",(0,r.jsx)(t.code,{children:"b"})," storage\nitem will still be loaded from storage. As a reminder, this means accessing the\nunderlying database and SCALE decoding the value. This can incur high costs, especially\nas the number of elements in ",(0,r.jsx)(t.code,{children:"b"})," grows."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Eager loading does ",(0,r.jsx)(t.strong,{children:"not"})," apply to ",(0,r.jsx)(t.code,{children:"Mapping"})," fields, though, as key lookups in mappings\nare done directly from contract storage."]})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(6540);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);