---
title: Setup
slug: /getting-started/setup
hide_title: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![Setup Title Picture](/img/title/setup.svg)

:::tip Pro tip
 Use the [Pop CLI](https://learn.onpop.io/contracts/welcome/install-pop-cli) for ink! smart contract development with the greatest developer experience.
:::

# Setup

On this page we describe the pre-requisites for working with ink!.

## Rust & Cargo

A pre-requisite for compiling smart contracts is to install a stable Rust 
version (>= 1.88) and `cargo`. Please see [the official Rust installation guide](https://doc.rust-lang.org/cargo/getting-started/installation.html).

## Tooling

<Tabs>
  <TabItem value="cargo-contract" label="cargo-contract" default>

      Install [`cargo-contract`](https://github.com/use-ink/cargo-contract), a CLI tool for setting up and managing ink! smart contracts:

      ```bash
      cargo install --force --locked --tag v6.0.0-alpha.4 --git https://github.com/use-ink/cargo-contract
      ```

      Make sure you have the latest stable version of Rust installed:
      ```bash
      rustup update stable
      ```

      ### ink-node

      The [ink-node](https://github.com/use-ink/ink-node) is
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

      ### (2) Install or Build it yourself

      Alternatively, you can build the node by yourself.
      This can take a while though!

      The build instructions and pre-requisites can be found
      [here](https://github.com/use-ink/ink-node?tab=readme-ov-file#build-locally).
  </TabItem>
    <TabItem value="pop" label="Pop">
       Use the [Pop CLI](https://learn.onpop.io/contracts/welcome/install-pop-cli) for ink! smart contract development with an enhanced developer experience.

       ```bash
       cargo install --git https://github.com/r0gue-io/pop-cli.git --branch  v6.0.0-alpha.3 --no-default-features --locked -F polkavm-contracts,chain,telemetry
       ```

       **Pop CLI advantages over `cargo-contract`:**
       - **Automated setup**: Handles all required installations and dependencies for you
       - **Contract templates**: Access to a range of pre-built contract templates
       - **Interactive UI**: Deploy and interact with contracts through an interactive command-line interface
       - **Built-in ink-node**: Automatically manages the ink-node without manual configuration
       - **Easy local network setup**: Quickly spin up local development networks
       - **Wallet integration**: Seamless wallet connection and management
    </TabItem>
</Tabs>
