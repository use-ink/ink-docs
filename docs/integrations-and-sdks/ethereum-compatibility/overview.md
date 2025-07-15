---
title: Ethereum Compatibility Overview
slug: /integrations-and-sdks/ethereum-compatibility/overview
hide_title: true
---

![Use Solidity tooling](/img/title/solidity.svg)

# Ethereum Compatibility

ink! smart contracts can be made compatible with Ethereum tooling and libraries through Solidity ABI generation. This allows you to use familiar Ethereum development tools like MetaMask, Hardhat, Wagmi, and ethers.js with your ink! contracts.

## What's Covered

This section provides step-by-step guides for:

1. **[Setting up Solidity ABI](./setup-solidity-abi.md)**: Configure your ink! contract to generate Solidity-compatible ABI
2. **[MetaMask Setup](./metamask-setup.md)**: Connect MetaMask wallet to Polkadot networks
3. **[Hardhat Deployment](./hardhat-deployment.md)**: Deploy and interact with ink! contracts using Hardhat
4. **[Wagmi Integration](./wagmi-integration.md)**: Build frontend dApps using Wagmi and React

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
