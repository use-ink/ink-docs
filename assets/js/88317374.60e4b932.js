"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9448],{10404:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"linter/rules/primitive_topic","title":"primitive_topic","description":"primitive_topic lint documentation","source":"@site/docs/linter/rules/primitive_topic.md","sourceDirName":"linter/rules","slug":"/linter/rules/primitive_topic","permalink":"/linter/rules/primitive_topic","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/docs/linter/rules/primitive_topic.md","tags":[],"version":"current","frontMatter":{"title":"primitive_topic","hide_title":true,"description":"primitive_topic lint documentation"},"sidebar":"reference","previous":{"title":"no_main","permalink":"/linter/rules/no_main"},"next":{"title":"storage_never_freed","permalink":"/linter/rules/storage_never_freed"}}');var s=i(74848),r=i(28453);const o={title:"primitive_topic",hide_title:!0,description:"primitive_topic lint documentation"},c="primitive_topic",a={},l=[{value:"What it does",id:"what-it-does",level:2},{value:"Why is this bad?",id:"why-is-this-bad",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"primitive_topic",children:"primitive_topic"})}),"\n",(0,s.jsx)(t.h2,{id:"what-it-does",children:"What it does"}),"\n",(0,s.jsxs)(t.p,{children:["Checks for ink! contracts that use the\n",(0,s.jsx)(t.a,{href:"/macros-attributes/topic",children:(0,s.jsx)(t.code,{children:"#[ink(topic)]"})})," annotation with primitive number\ntypes. Topics are discrete events for which it makes sense to filter. Typical examples of\nfields that should be filtered are ",(0,s.jsx)(t.code,{children:"AccountId"}),", ",(0,s.jsx)(t.code,{children:"bool"})," or ",(0,s.jsx)(t.code,{children:"enum"})," variants."]}),"\n",(0,s.jsx)(t.h2,{id:"why-is-this-bad",children:"Why is this bad?"}),"\n",(0,s.jsxs)(t.p,{children:["It typically doesn't make sense to annotate types like ",(0,s.jsx)(t.code,{children:"u32"})," or ",(0,s.jsx)(t.code,{children:"i32"})," as a topic, if those\nfields can take continuous values that could be anywhere between ",(0,s.jsx)(t.code,{children:"::MIN"})," and ",(0,s.jsx)(t.code,{children:"::MAX"}),". An\nexample of a case where it doesn't make sense at all to have a topic on the storage field\nis something like ",(0,s.jsx)(t.code,{children:"value: Balance"})," in the examle below."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"// Bad\n// It typically makes no sense to filter `Balance`, since its value may varies from `::MAX`\n// to `::MIN`.\n#[ink(event)]\npub struct Transaction {\n    #[ink(topic)]\n    src: Option<AccountId>,\n    #[ink(topic)]\n    dst: Option<AccountId>,\n    #[ink(topic)]\n    value: Balance,\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"Use instead:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"// Good\n// Filtering transactions based on source and destination addresses.\n#[ink(event)]\npub struct Transaction {\n    #[ink(topic)]\n    src: Option<AccountId>,\n    #[ink(topic)]\n    dst: Option<AccountId>,\n    value: Balance,\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>c});var n=i(96540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);