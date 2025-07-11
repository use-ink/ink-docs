---
title: Building Your Contract
---

import useBaseUrl from '@docusaurus/useBaseUrl';

![Cargo Contract Title Picture](/img/title/cargo-contract.svg)

# Building Your Contract

Learn how to compile your ink! smart contract into WebAssembly.

## Prerequisites

Make sure you have completed the [Creating an ink! Project](../creating-an-ink-project) tutorial and have:
- A working ink! project (e.g., the `flipper` contract)
- `cargo-contract` installed

## Building the Contract

Navigate to your contract directory and build it:

```bash
cd flipper
cargo contract build
```

This command will:
1. Compile your Rust code to WebAssembly
2. Optimize the Wasm binary
3. Generate metadata files

## Build Output

After a successful build, you'll see new files in your project:

```
flipper/
├── target/
│   └── ink/
│       ├── flipper.contract    # Bundled contract (Wasm + metadata)
│       ├── flipper.wasm        # Optimized WebAssembly binary
│       └── flipper.json        # Contract metadata
├── Cargo.toml
└── lib.rs
```

## Understanding the Output Files

### 1. `flipper.wasm`
The compiled WebAssembly binary containing your contract logic.

### 2. `flipper.json`
Metadata describing your contract's interface:
- Constructor signatures
- Message signatures  
- Storage layout
- Events (if any)

### 3. `flipper.contract`
A bundled file containing both the Wasm binary and metadata - this is what you'll deploy.

## Build Options

### Release Mode
For production deployment, always build in release mode:

```bash
cargo contract build --release
```

### Checking Build Info
View information about your compiled contract:

```bash
cargo contract info target/ink/flipper.contract
```

## Troubleshooting Common Issues

### Issue: "cargo-contract not found"
**Solution**: Install cargo-contract:
```bash
cargo install --force --locked cargo-contract
```

### Issue: Build fails with dependency errors
**Solution**: Update your dependencies:
```bash
cargo update
```

### Issue: Wasm binary too large
**Solution**: Build in release mode and check for unnecessary dependencies.

## Verifying Your Build

You can verify your contract compiles correctly by running:

```bash
cargo check
```

And run any unit tests:

```bash
cargo test
```

## What's Next?

Now that your contract is compiled:
1. [Deploy your contract](../deploy-your-contract) to a blockchain
2. [Learn to call your contract](../calling-your-contract)

## Key Points

- Always build in `--release` mode for production
- The `.contract` file contains everything needed for deployment
- The metadata describes your contract's interface for frontends
- Building is local - no blockchain interaction required yet 