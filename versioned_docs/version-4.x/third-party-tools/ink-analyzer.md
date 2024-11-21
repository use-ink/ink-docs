---
title: ink! Analyzer
slug: /getting-started/ink-analyzer
---

[ink! analyzer](https://github.com/ink-analyzer) is a collection of modular and reusable libraries and tools for semantic analysis of ink! smart contract code.

ink! analyzer aims to improve ink! language support in [integrated development environments (IDEs)](https://en.wikipedia.org/wiki/Integrated_development_environment), [source code editors](https://en.wikipedia.org/wiki/Source-code_editor) and other development tools by providing modular and reusable building blocks for implementing language features (e.g. diagnostic errors, quick fixes, code completion suggestions, code/intent actions and hover content e.t.c) for the ink! programming language.

- Semantic Analyzer ([source code](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/analyzer), [crates.io](https://crates.io/crates/ink-analyzer), [docs.rs](https://docs.rs/ink-analyzer/latest/ink_analyzer/)).
- Language Server ([source code](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/lsp-server), [binary/executable releases](https://github.com/ink-analyzer/ink-analyzer/releases), [crates.io](https://crates.io/crates/ink-lsp-server), [docs.rs](https://docs.rs/ink-lsp-server/latest/ink_lsp_server/)).
- Visual Studio Code Extension ([source code](https://github.com/ink-analyzer/ink-vscode), [VS Code Marketplace listing](https://marketplace.visualstudio.com/items?itemName=ink-analyzer.ink-analyzer), [VSIX releases](https://github.com/ink-analyzer/ink-vscode/releases)).

## Problem

While ink! developers can leverage Rust tooling and excellent IDE/code editor support via [rust-analyzer](https://rust-analyzer.github.io/) and [IntelliJ Rust](https://www.jetbrains.com/rust/) because ["ink! is just standard Rust in a well-defined "contract format" with specialized `#[ink(…)]` attribute macros"](../getting-started/creating.md),
relying on only generic Rust language support in IDEs, code editors and other development tools has some significant limitations for the developer experience including:

- No language support (e.g. diagnostic errors/warnings and quick fixes) for ink!'s domain specific semantic rules for smart contracts (e.g. exactly one `#[ink(storage)]` struct, at least one `#[ink(message)]` method and the same for `#[ink(constructor)]`, ink! attributes should be applied to items of the correct type e.t.c).
- Inconsistent editor experience with issues like no code completion and/or hover content for some ink! attribute arguments (e.g `#[ink(payable)]`) because [macro expansion/name resolution and trait resolution are hard problems for generic IDE/code editor tools](https://rust-lang.github.io/compiler-team/working-groups/rls-2.0/#scope-and-purpose) (see also [https://rust-analyzer.github.io/blog/2021/11/21/ides-and-macros.html](https://rust-analyzer.github.io/blog/2021/11/21/ides-and-macros.html)).
- No language support (e.g. go to definition, find references and rename/refactor) for [ink! specific syntax like paths in ink! attribute argument values (e.g. `env` values)](https://github.com/use-ink/ink/blob/v4.2.1/crates/ink/ir/src/ast/mod.rs#L19-L25).

## Solution

To solve the above challenges and improve ink! language support in IDEs, code editors and other development tools, ink! analyzer creates two main components:
- [A modular domain-specific semantic analysis library for ink!](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/analyzer) built on a [resilient and lossless parser](https://analyze.ink/blog/introducing-ink-analyzer#1-semantic-analyzer).
- A [Language Server Protocol (LSP)](https://microsoft.github.io/language-server-protocol/) [implementation](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/lsp-server) built on top of the aforementioned semantic analysis library.

These two components can be reused to add ink! language support to multiple IDEs, code editors and other development tools.

In particular, a large number of IDEs and code editors support LSP servers either via configurable LSP clients or robust LSP client libraries/APIs/modules, including [Visual Studio Code, Visual Studio, Vim / Neovim, Emacs, Atom, Sublime Text, Acme, Lapce, Eclipse and many more](https://microsoft.github.io/language-server-protocol/implementors/tools/).

ink! analyzer makes it relatively easy for:
- Users to enable ink! language support for their IDE, code editor or other development tool if it has either a native/built-in or third-party LSP client that can be configured to launch an LSP server using an executable command (i.e. the path to an [installed ink! Language Server binary](https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/lsp-server#installation)) and can use stdio (standard in/standard out) as the message transport.
- Developers to either build extensions/plugins/integrations that add ink! language support to any tool with robust LSP client libraries/APIs/modules, or add first-class ink! language support to an existing LSP client (e.g. an open-source extension/plugin/integration).

In addition to [distributing compiled ink! Language Server (`ink-lsp-server`) binaries for most of the major platforms/architectures](https://github.com/ink-analyzer/ink-analyzer/releases),
ink! analyzer additionally distributes a [Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=ink-analyzer.ink-analyzer) that ships with a bundled ink! Language Server as a showcase and [reference implementation](https://github.com/ink-analyzer/ink-vscode) for the latter use case.

## Diving Deeper

To learn more about ink! analyzer, read the [introductory blog post](https://analyze.ink/blog/introducing-ink-analyzer) and/or check out the [ink! analyzer organization on GitHub](https://github.com/ink-analyzer) for source code, technical documentation, installation and usage instructions, and links to useful resources.

Issues, bug reports, PRs and feature requests are welcome at the respective GitHub repositories 🙂.