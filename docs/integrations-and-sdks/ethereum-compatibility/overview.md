---
title: Ethereum Compatibility Overview
slug: /integrations-and-sdks/ethereum-compatibility/overview
hide_title: true
---

![Use Solidity tooling](/img/title/solidity.svg)

# Ethereum Compatibility

ink! smart contracts can be made compatible with Ethereum tooling and libraries through Solidity ABI generation. This allows you to use familiar Ethereum development tools like MetaMask, Hardhat, Wagmi, and ethers.js with your ink! contracts.

## What's Covered

Follow the tutorials below for step-by-step guides:

1. **[Setting up Solidity ABI](/tutorials/ethereum-compatibility/setup-solidity-abi)**: Configure your ink! contract to generate Solidity-compatible ABI
2. **[MetaMask Setup](/tutorials/ethereum-compatibility/metamask-setup)**: Connect MetaMask wallet to Polkadot networks
3. **[Hardhat Deployment](/tutorials/ethereum-compatibility/hardhat-deployment)**: Deploy and interact with ink! contracts using Hardhat
4. **[Wagmi Integration](/tutorials/ethereum-compatibility/wagmi-integration)**: Build frontend dApps using Wagmi and React

## Important Considerations

:::caution Known Limitations
The Rust/ink! to Solidity ABI type mapping is still a work in progress. Some limitations are known - [see details here](../../background/solidity-metamask-compat.md#rustink-to-solidity-abi-type-mapping).

To ensure compatibility with the latest updates:
- Install the latest `cargo-contract` from GitHub:
```bash
cargo install --locked --git https://github.com/use-ink/cargo-contract
```
- Import `ink!` from the latest GitHub branch in your `Cargo.toml`:
```toml
ink = { git = "https://github.com/use-ink/ink.git", branch = "master", default-features = false, features = ["unstable-hostfn"] }
```
:::
