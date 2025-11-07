---
title: Use ink! with Solidity ABI
hide_title: true
slug: /solidity-interop/use-ink-with-solidity-abi
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![Use Solidity tooling](/img/title/solidity.svg)

# Use ink! with Solidity ABI

ink! v6 contracts can be configured to use Solidity ABI encoding, enabling seamless compatibility with Ethereum tools like MetaMask, Hardhat, Wagmi, and ethers.js. This allows you to leverage the Ethereum ecosystem while building on Polkadot networks.

## Why Use Solidity ABI?

By enabling Solidity ABI compatibility, you can:
- **Use Ethereum wallets** like MetaMask to interact with your ink! contracts
- **Deploy with Hardhat** and other familiar Ethereum development tools
- **Build frontends** using ethers.js, Wagmi, and React hooks
- **Call Solidity contracts** from ink! and vice versa
- **Share contracts** easily with Ethereum developers

## Quick Start

### 1. Create Your Contract

<Tabs>
  <TabItem value="pop" label="Pop" default>
    ```bash
    pop new contract my_contract -t standard
    cd my_contract
    ```
  </TabItem>
  <TabItem value="cargo-contract" label="cargo-contract">
    ```bash
    cargo contract new my_contract
    cd my_contract
    ```
  </TabItem>
</Tabs>

### 2. Enable Solidity ABI

Open `Cargo.toml` and configure the ABI mode:

```toml
[package.metadata.ink-lang]
abi = "sol"
```

### 3. Build with Solidity Metadata

<Tabs>
  <TabItem value="pop" label="Pop" default>
    ```bash
    pop build --release --metadata solidity
    ```
  </TabItem>
  <TabItem value="cargo-contract" label="cargo-contract">
    ```bash
    cargo contract build --release --metadata solidity
    ```
  </TabItem>
</Tabs>

This generates Solidity-compatible artifacts in `target/ink/`:
- `*.abi` - Solidity ABI file for contract interaction
- `*.json` - Metadata compatible with Ethereum tooling

## How It Works

When you specify `abi = "sol"`, the ink! code generator follows the [Solidity ABI specification](https://docs.soliditylang.org/en/latest/abi-spec.html):

### Function Selectors
- Message selectors use **keccak256** hashing (Ethereum standard)
- First 4 bytes of `keccak256("functionName(type1,type2,...)")`
- Manual selector overrides via `#[ink(selector = ...)]` are ignored

### Encoding/Decoding
- Uses [Solidity ABI encoding](https://docs.soliditylang.org/en/latest/abi-spec.html#formal-specification-of-the-encoding) for inputs/outputs
- Events and errors follow Solidity format
- Internal storage still uses SCALE codec (no storage changes!)

### Constraints
- **Only one constructor** can be defined
- All types must map to Solidity ABI types (see [Type Reference](./type-reference.md))
- Call builders are generated for Solidity calling conventions

:::info Storage Format
The contract ABI only affects external interactions. **Your contract's internal storage remains SCALE-encoded!** Using Solidity ABI does not change your storage layout.
:::

## Dual ABI Mode ("all")

You can support **both** ink! and Solidity ABIs simultaneously:

```toml
[package.metadata.ink-lang]
abi = "all"
```

### Benefits
- Contracts callable by both ink! and Solidity tools
- Each message has two entry points (ink! selector + Solidity selector)
- Flexibility for cross-ecosystem interoperability

### Tradeoffs
- **Larger contract size** (both entry points compiled in)
- Must designate a `#[ink(constructor, default)]` for Solidity instantiation
- All types must be Solidity-compatible

```rust
#[ink(constructor, default)]
pub fn new(initial_value: bool) -> Self {
    Self { value: initial_value }
}
```

:::note Type Requirements
The "all" ABI mode requires all message arguments, return types, and event arguments to be mappable to Solidity ABI types. See the [Type Reference](./type-reference.md) for details.
:::

## Next Steps

Now that your contract uses Solidity ABI:
- [Call Solidity Contracts](./calling-solidity-contracts.md) from ink!
- [Set up MetaMask](./metamask-setup.md) and other Ethereum tools
- Check [Type Reference](./type-reference.md) for advanced type mappings
