"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6830],{4431:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(4848),l=i(8453);const s={title:"non_fallible_api",hide_title:!0,description:"non_fallible_api lint documentation"},r="non_fallible_api",a={id:"linter/rules/non_fallible_api",title:"non_fallible_api",description:"non_fallible_api lint documentation",source:"@site/docs/linter/rules/non_fallible_api.md",sourceDirName:"linter/rules",slug:"/linter/rules/non_fallible_api",permalink:"/linter/rules/non_fallible_api",draft:!1,unlisted:!1,editUrl:"https://github.com/use-ink/ink-docs/edit/master/docs/linter/rules/non_fallible_api.md",tags:[],version:"current",frontMatter:{title:"non_fallible_api",hide_title:!0,description:"non_fallible_api lint documentation"},sidebar:"reference",previous:{title:"strict_balance_equality",permalink:"/linter/rules/strict_balance_equality"},next:{title:"Overview",permalink:"/frontend/overview"}},o={},c=[{value:"What it does",id:"what-it-does",level:2},{value:"Why is this bad?",id:"why-is-this-bad",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"non_fallible_api",children:"non_fallible_api"}),"\n",(0,t.jsx)(n.h2,{id:"what-it-does",children:"What it does"}),"\n",(0,t.jsx)(n.p,{children:"The lint detects potentially unsafe uses of methods for which there are safer alternatives."}),"\n",(0,t.jsx)(n.h2,{id:"why-is-this-bad",children:"Why is this bad?"}),"\n",(0,t.jsxs)(n.p,{children:["In some standard collections in ink!, there are two types of implementations: non-fallible\n(e.g. ",(0,t.jsx)(n.code,{children:"get"}),") and fallible (e.g. ",(0,t.jsx)(n.code,{children:"try_get"}),"). Fallible alternatives are considered safer,\nas they perform additional checks for incorrect input parameters and return ",(0,t.jsx)(n.code,{children:"Result::Err"}),"\nwhen they are used improperly. On the other hand, non-fallible methods do not provide these\nchecks and will panic on incorrect input, placing the responsibility on the user to\nimplement these checks."]}),"\n",(0,t.jsxs)(n.p,{children:["For more context, see: ",(0,t.jsx)(n.a,{href:"https://github.com/use-ink/ink/pull/1910",children:"ink#1910"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["Consider the contract that has the following ",(0,t.jsx)(n.code,{children:"Mapping"})," field:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"#[ink(storage)]\npub struct Example { map: Mapping<String, AccountId> }\n"})}),"\n",(0,t.jsx)(n.p,{children:"The following usage of the non-fallible API is unsafe:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"// Bad: can panic if `input_string` doesn't fit into the static buffer\nself.map.insert(input_string, &self.sender);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["It could be replaced with the fallible version of ",(0,t.jsx)(n.code,{children:"Mapping::insert"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"// Good: returns Result::Err on incorrect input\nself.map.try_insert(input_string, &self.sender);\n"})}),"\n",(0,t.jsx)(n.p,{children:"Otherwise, the user could explicitly check the encoded size of the argument in their code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"// Good: explicitly checked encoded size of the input\nif String::encoded_size(&input_string) < ink_env::BUFFER_SIZE {\n  self.map.insert(input_string, &self.sender);\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(6540);const l={},s=t.createContext(l);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);