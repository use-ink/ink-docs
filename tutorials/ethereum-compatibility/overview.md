---
title: Ethereum Compatibility Overview
sidebar_position: 1
---

![Use Solidity tooling](/img/title/solidity.svg)

# Ethereum Compatibility

ink! smart contracts can be made compatible with Ethereum tooling and libraries through Solidity ABI generation. This allows you to use familiar Ethereum development tools like MetaMask, Hardhat, Wagmi, and ethers.js with your ink! contracts.

## What's Covered

This section provides guides for:

1. **[Setting up Solidity ABI](./setup-solidity-abi.md)**: Configure your ink! contract to generate Solidity-compatible ABI

For detailed guides on using Ethereum tools like MetaMask, Hardhat, and Wagmi with ink! contracts, see the [Solidity Interop documentation](/docs/v6/solidity-interop/use-ink-with-solidity-abi).

:::caution Known Limitations
The Rust/ink! to Solidity ABI type mapping is still a work in progress. Some limitations are known.

To ensure compatibility with the latest updates, follow the [setup instructions](/docs/v6/getting-started/setup) to install the required tools and dependencies.
:::
