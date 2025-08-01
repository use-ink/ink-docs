---
title: Setup Solidity ABI
sidebar_position: 2
---

# Setup Solidity ABI

To make your ink! contract compatible with Ethereum tooling, you need to configure it to generate a Solidity-compatible ABI. This allows you to use tools like MetaMask, Hardhat, and Wagmi with your ink! contracts.

## Prerequisites

Before starting, ensure you have the latest tools installed:

:::caution Latest Tools Required
To ensure compatibility with the latest updates:
- Install the latest `cargo-contract` from GitHub:
``bash
cargo install --locked --git https://github.com/use-ink/cargo-contract
```
- Import `ink!` from the latest GitHub branch in your `Cargo.toml`:
```toml
ink = { git = "https://github.com/use-ink/ink.git", branch = "master", default-features = false, features = ["unstable-hostfn"] }
```
:::

## Create and Configure Your Contract

1. **Create a new ink! contract**

```bash
cargo contract new flipper_evm
cd flipper_evm
```

2. **Configure Solidity ABI generation** in your `Cargo.toml`. Change:

```toml
[package.metadata.ink-lang]
abi = "ink"
```

to:

```toml
[package.metadata.ink-lang]
abi = "sol"
```

## Build with Solidity Metadata

Build your contract with Solidity metadata support:

```bash
cargo contract build --release --metadata solidity
```

This command will generate:
- The standard ink! contract artifacts
- A Solidity-compatible ABI file
- Metadata that can be used with Ethereum tools

## Understanding the Output

After building, you'll find additional files in your `target/ink/` directory:
- `*.json` - Solidity ABI file
- Contract metadata compatible with Ethereum tooling

## Next Steps

With Solidity ABI configured, you can now:
- [Set up MetaMask](./metamask-setup.md) to connect to Polkadot networks
- [Use Hardhat](./hardhat-deployment.md) for deployment and interaction
- [Build frontends with Wagmi](./wagmi-integration.md)
