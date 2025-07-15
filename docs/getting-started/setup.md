---
title: Setup
slug: /getting-started/setup
hide_title: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![Setup Title Picture](/img/title/setup.svg)

# Setup

On this page we describe the pre-requisites for working with ink!.

:::tip Pro tip
 Use the [Pop CLI](https://learn.onpop.io/contracts/welcome/install-pop-cli) for ink! smart contract development with the greatest developer experience.
:::

## Rust & Cargo

A pre-requisite for compiling smart contracts is to install a stable Rust 
version (>= 1.85) and `cargo`. Please see [the official Rust installation guide](https://doc.rust-lang.org/cargo/getting-started/installation.html).

<Tabs>
  <TabItem value="cargo-contract" label="cargo-contract" default>
      ## cargo-contract

      The first tool we will be installing is [`cargo-contract`](https://github.com/use-ink/cargo-contract),
      it is a CLI tool for setting up and managing smart contracts written with ink!. To install `cargo-contract`, run the following command in your terminal:

      ```bash
      cargo install cargo-contract --version 6.0.0-alpha --locked
      ```

      Make sure you have the latest stable version of Rust installed:
      ```bash
      rustup update stable
      ```
  </TabItem>
  <TabItem value="pop" label="Pop">
   ## Pop CLI
      Use the [Pop CLI](https://learn.onpop.io/contracts/welcome/install-pop-cli) for ink! smart contract development with the greatest developer experience.

      Pop CLI supports ink! v6 through the polkavm-contracts feature flag:
      ```bash
      cargo install pop-cli --no-default-features --locked -F polkavm-contracts,parachain,telemetry
      ```
       Make sure you have the latest stable version of Rust installed:
      ```bash
      rustup update stable
      ```
  </TabItem>
</Tabs>


## ink-node

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

### (2) Build it yourself

Alternatively, you can build the node by yourself.
This can take a while though!

The build instructions and pre-requisites can be found
[here](https://github.com/use-ink/ink-node?tab=readme-ov-file#build-locally).