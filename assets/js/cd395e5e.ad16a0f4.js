"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7742],{28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}},71917:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"third-party-tools/ink-analyzer","title":"ink! Analyzer","description":"ink! analyzer is a collection of modular and reusable libraries and tools for semantic analysis of ink! smart contract code.","source":"@site/docs/third-party-tools/ink-analyzer.md","sourceDirName":"third-party-tools","slug":"/getting-started/ink-analyzer","permalink":"/docs/v5/getting-started/ink-analyzer","draft":false,"unlisted":false,"editUrl":"https://github.com/use-ink/ink-docs/edit/master/docs/third-party-tools/ink-analyzer.md","tags":[],"version":"current","frontMatter":{"title":"ink! Analyzer","slug":"/getting-started/ink-analyzer"},"sidebar":"reference","previous":{"title":"Sirato","permalink":"/docs/v5/basics/verification/sirato"},"next":{"title":"SubWallet","permalink":"/docs/v5/getting-started/subwallet"}}');var r=t(74848),s=t(28453);const a={title:"ink! Analyzer",slug:"/getting-started/ink-analyzer"},o=void 0,l={},c=[{value:"Problem",id:"problem",level:2},{value:"Solution",id:"solution",level:2},{value:"Diving Deeper",id:"diving-deeper",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/ink-analyzer",children:"ink! analyzer"})," is a collection of modular and reusable libraries and tools for semantic analysis of ink! smart contract code."]}),"\n",(0,r.jsxs)(n.p,{children:["ink! analyzer aims to improve ink! language support in ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Integrated_development_environment",children:"integrated development environments (IDEs)"}),", ",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Source-code_editor",children:"source code editors"})," and other development tools by providing modular and reusable building blocks for implementing language features (e.g. diagnostic errors, quick fixes, code completion suggestions, code/intent actions and hover content e.t.c) for the ink! programming language."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Semantic Analyzer (",(0,r.jsx)(n.a,{href:"https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/analyzer",children:"source code"}),", ",(0,r.jsx)(n.a,{href:"https://crates.io/crates/ink-analyzer",children:"crates.io"}),", ",(0,r.jsx)(n.a,{href:"https://docs.rs/ink-analyzer/latest/ink_analyzer/",children:"docs.rs"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["Language Server (",(0,r.jsx)(n.a,{href:"https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/lsp-server",children:"source code"}),", ",(0,r.jsx)(n.a,{href:"https://github.com/ink-analyzer/ink-analyzer/releases",children:"binary/executable releases"}),", ",(0,r.jsx)(n.a,{href:"https://crates.io/crates/ink-lsp-server",children:"crates.io"}),", ",(0,r.jsx)(n.a,{href:"https://docs.rs/ink-lsp-server/latest/ink_lsp_server/",children:"docs.rs"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["Visual Studio Code Extension (",(0,r.jsx)(n.a,{href:"https://github.com/ink-analyzer/ink-vscode",children:"source code"}),", ",(0,r.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=ink-analyzer.ink-analyzer",children:"VS Code Marketplace listing"}),", ",(0,r.jsx)(n.a,{href:"https://github.com/ink-analyzer/ink-vscode/releases",children:"VSIX releases"}),")."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"problem",children:"Problem"}),"\n",(0,r.jsxs)(n.p,{children:["While ink! developers can leverage Rust tooling and excellent IDE/code editor support via ",(0,r.jsx)(n.a,{href:"https://rust-analyzer.github.io/",children:"rust-analyzer"})," and ",(0,r.jsx)(n.a,{href:"https://www.jetbrains.com/rust/",children:"IntelliJ Rust"})," because ",(0,r.jsxs)(n.a,{href:"/docs/v5/getting-started/creating-an-ink-project",children:['"ink! is just standard Rust in a well-defined "contract format" with specialized ',(0,r.jsx)(n.code,{children:"#[ink(\u2026)]"}),' attribute macros"']}),",\nrelying on only generic Rust language support in IDEs, code editors and other development tools has some significant limitations for the developer experience including:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["No language support (e.g. diagnostic errors/warnings and quick fixes) for ink!'s domain specific semantic rules for smart contracts (e.g. exactly one ",(0,r.jsx)(n.code,{children:"#[ink(storage)]"})," struct, at least one ",(0,r.jsx)(n.code,{children:"#[ink(message)]"})," method and the same for ",(0,r.jsx)(n.code,{children:"#[ink(constructor)]"}),", ink! attributes should be applied to items of the correct type e.t.c)."]}),"\n",(0,r.jsxs)(n.li,{children:["Inconsistent editor experience with issues like no code completion and/or hover content for some ink! attribute arguments (e.g ",(0,r.jsx)(n.code,{children:"#[ink(payable)]"}),") because ",(0,r.jsx)(n.a,{href:"https://rust-lang.github.io/compiler-team/working-groups/rls-2.0/#scope-and-purpose",children:"macro expansion/name resolution and trait resolution are hard problems for generic IDE/code editor tools"})," (see also ",(0,r.jsx)(n.a,{href:"https://rust-analyzer.github.io/blog/2021/11/21/ides-and-macros.html",children:"https://rust-analyzer.github.io/blog/2021/11/21/ides-and-macros.html"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:["No language support (e.g. go to definition, find references and rename/refactor) for ",(0,r.jsxs)(n.a,{href:"https://github.com/use-ink/ink/blob/v4.2.1/crates/ink/ir/src/ast/mod.rs#L19-L25",children:["ink! specific syntax like paths in ink! attribute argument values (e.g. ",(0,r.jsx)(n.code,{children:"env"})," values)"]}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"solution",children:"Solution"}),"\n",(0,r.jsx)(n.p,{children:"To solve the above challenges and improve ink! language support in IDEs, code editors and other development tools, ink! analyzer creates two main components:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/analyzer",children:"A modular domain-specific semantic analysis library for ink!"})," built on a ",(0,r.jsx)(n.a,{href:"https://analyze.ink/blog/introducing-ink-analyzer#1-semantic-analyzer",children:"resilient and lossless parser"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.a,{href:"https://microsoft.github.io/language-server-protocol/",children:"Language Server Protocol (LSP)"})," ",(0,r.jsx)(n.a,{href:"https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/lsp-server",children:"implementation"})," built on top of the aforementioned semantic analysis library."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"These two components can be reused to add ink! language support to multiple IDEs, code editors and other development tools."}),"\n",(0,r.jsxs)(n.p,{children:["In particular, a large number of IDEs and code editors support LSP servers either via configurable LSP clients or robust LSP client libraries/APIs/modules, including ",(0,r.jsx)(n.a,{href:"https://microsoft.github.io/language-server-protocol/implementors/tools/",children:"Visual Studio Code, Visual Studio, Vim / Neovim, Emacs, Atom, Sublime Text, Acme, Lapce, Eclipse and many more"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"ink! analyzer makes it relatively easy for:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Users to enable ink! language support for their IDE, code editor or other development tool if it has either a native/built-in or third-party LSP client that can be configured to launch an LSP server using an executable command (i.e. the path to an ",(0,r.jsx)(n.a,{href:"https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/lsp-server#installation",children:"installed ink! Language Server binary"}),") and can use stdio (standard in/standard out) as the message transport."]}),"\n",(0,r.jsx)(n.li,{children:"Developers to either build extensions/plugins/integrations that add ink! language support to any tool with robust LSP client libraries/APIs/modules, or add first-class ink! language support to an existing LSP client (e.g. an open-source extension/plugin/integration)."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In addition to ",(0,r.jsxs)(n.a,{href:"https://github.com/ink-analyzer/ink-analyzer/releases",children:["distributing compiled ink! Language Server (",(0,r.jsx)(n.code,{children:"ink-lsp-server"}),") binaries for most of the major platforms/architectures"]}),",\nink! analyzer additionally distributes a ",(0,r.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=ink-analyzer.ink-analyzer",children:"Visual Studio Code extension"})," that ships with a bundled ink! Language Server as a showcase and ",(0,r.jsx)(n.a,{href:"https://github.com/ink-analyzer/ink-vscode",children:"reference implementation"})," for the latter use case."]}),"\n",(0,r.jsx)(n.h2,{id:"diving-deeper",children:"Diving Deeper"}),"\n",(0,r.jsxs)(n.p,{children:["To learn more about ink! analyzer, read the ",(0,r.jsx)(n.a,{href:"https://analyze.ink/blog/introducing-ink-analyzer",children:"introductory blog post"})," and/or check out the ",(0,r.jsx)(n.a,{href:"https://github.com/ink-analyzer",children:"ink! analyzer organization on GitHub"})," for source code, technical documentation, installation and usage instructions, and links to useful resources."]}),"\n",(0,r.jsx)(n.p,{children:"Issues, bug reports, PRs and feature requests are welcome at the respective GitHub repositories \ud83d\ude42."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);