---
title: Setup
slug: /getting-started/setup
hide_title: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![Setup Title Picture](/img/title/setup.svg)

## Rust & Cargo

A pre-requisite for compiling smart contracts is to install a stable Rust
version and `cargo`.
```
curl https://sh.rustup.rs -sSf | sh
```

## CLI tool

<Tabs>
  <TabItem value="pop" label="Pop" default>
      Use the [Pop CLI](https://learn.onpop.io/contracts/welcome/install-pop-cli) for ink! smart contract development with the greatest developer experience.

      Via Homebrew:
      ```bash
      brew install r0gue-io/pop-cli/pop
      ```
      Or Source:
      ```bash
      cargo install --force --locked pop-cli
      ```

      Then set up your environment:
      ```
      pop install
      ```
  </TabItem>
  <TabItem value="cargo-contract" label="cargo-contract">

      Install [`cargo-contract`](https://github.com/use-ink/cargo-contract), a CLI tool for setting up and managing smart contracts written with ink!. To install `cargo-contract`, run the following command in your terminal:

      ```bash
      rustup component add rust-src
      cargo install --force --locked --version 6.0.0-beta.1 cargo-contract 
      ```

      In addition to Rust, installation requires a C++ compiler that supports C++17.
      Modern releases of gcc and clang, as well as Visual Studio 2019+ should work.

      :::tip
      Looking to run the ink! linter locally? Follow the steps in the [linter setup guide](../development/linter/overview.md).
      :::

      ## ink-node

      For Pop CLI users, Pop automatically manages the local node for you.

      For cargo-contract users, the [ink-node](https://github.com/use-ink/ink-node) is
      a simple Polkadot SDK blockchain with smart contract functionality. It's a comfortable option for local development and testing.

      There are two ways of installing the node:

      ### (1) Download the Binary
      Go to the [ink-node releases page](https://github.com/use-ink/ink-node/releases). Under `Assets` of the latest release, download the appropriate binary for your platform:
         - **Linux (ARM64)**: `ink-node-linux-arm64.tar.gz`
         - **Linux (x86)**: `ink-node-linux.tar.gz`
         - **macOS**: `ink-node-mac-universal.tar.gz`

      Make the binary executable:
         ```bash
         chmod +x ./ink-node
         ```

      **For macOS users:**
      When you first try to run `ink-node`, macOS may show a security warning.

      To allow the binary to run:
      1. Click the **question mark (?)** icon at the right top corner of the warning.
      2. Follow the Apple instructions that appear.
      3. Try running `ink-node` again and click **"Open Anyway"** when prompted.

      To confirm that `ink-node` is working correctly, run:
      ```bash
      ./ink-node --version
      ```
      If you see version information, your installation is successful!

      ### (2) Build it yourself

      Alternatively, you can build the node by yourself.
      This can take a while though!

      The build instructions and pre-requisites can be found
      [here](https://github.com/use-ink/ink-node?tab=readme-ov-file#build-locally).
  </TabItem>
</Tabs>

## IDE/Editor support

For VS Code users, we recommend using the [ink! analyzer extension][ink-analyzer-extension] (alongside [rust-analyzer][rust-analyzer]) for the best editor experience.

For other IDEs/editors with [LSP (Language Server Protocol)][lsp-server] support (e.g. [Vim/Neovim, Emacs, Helix, Zed e.t.c][lsp-tools]),
[ink! analyzer][ink-analyzer] provides [prebuilt language server binaries for Windows, Linux and macOS][ink-analyzer-releases].

[ink-analyzer]: https://analyze.ink/
[ink-analyzer-extension]: https://marketplace.visualstudio.com/items?itemName=ink-analyzer.ink-analyzer
[ink-analyzer-releases]: https://github.com/ink-analyzer/ink-analyzer/releases
[rust-analyzer]: https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer
[lsp-server]: https://microsoft.github.io/language-server-protocol/
[lsp-tools]: https://microsoft.github.io/language-server-protocol/implementors/tools/