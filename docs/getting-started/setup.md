---
title: Setup
slug: /getting-started/setup
hide_title: true
---

![Setup Title Picture](/img/title/setup.svg)

# Setup

On this page we describe the pre-requisites for working with ink!.

:::tip Pro tip
 Use the [Pop CLI](https://learn.onpop.io/contracts/welcome/install-pop-cli) for ink! smart contract development.
:::

## Rust & Cargo

A pre-requisite for compiling smart contracts is to install a stable Rust 
version (>= 1.85) and `cargo`. Please see [the official Rust installation guide](https://doc.rust-lang.org/cargo/getting-started/installation.html).

## cargo-contract

The first tool we will be installing is [`cargo-contract`](https://github.com/use-ink/cargo-contract),
our CLI tool for setting up and managing smart contracts written with ink!.

Please see the installation instructions in the `cargo-contract` repository [here](https://github.com/use-ink/cargo-contract#installation).

## ink-node

The [ink-node](https://github.com/use-ink/ink-node) is
a simple Polkadot SDK blockchain with smart contract functionality. It's a comfortable option for local development and testing.

There are two ways of installing the node:

### (1) Download the Binary
This is the recommended method, you can
[download a binary from our releases page](https://github.com/use-ink/ink-node/releases)
(Linux and Mac). 

### (2) Build it yourself

Alternatively, you can build the node by yourself.
This can take a while though!

The build instructions and pre-requisites can be found
[here](https://github.com/use-ink/ink-node?tab=readme-ov-file#build-locally).