---
title: Compile Your Contract
slug: /getting-started/building-your-contract
hide_title: true
---

<img src="/img/title/cargo-contract.svg" className="titlePic" />

# Compile Your Contract

Run the following command in your `flipper` directory to compile your smart contract:

```bash
cargo contract build
```

This command will build the following for your contract: a Wasm binary, a metadata file (which contains the
contract's ABI) and a `.contract` file which bundles both. This `.contract` file can be used to
deploy your contract to a chain. If all goes well, you should see a `target` folder which
contains these files:

```
target
  └─ ink
    └─ flipper.contract
    └─ flipper.wasm
    └─ flipper.json
```

Let's take a look at the structure of the `flipper.json`:

```json
{
  "source": {...},
  "contract": {...},
  "spec": {
    "constructors": [...],
    "docs": [],
    "events": [],
    "messages": [...],
  },
  "storage": {...},
  "types": [...],
  "version": "4"
}
```

This file describes all the interfaces that can be used to interact with your contract:

* `types` provides the custom **data types** used throughout the rest of the JSON.
* `storage` defines all the **storage** items managed by your contract and how to ultimately access them.
* `spec` stores information about the callable functions like **constructors** and **messages** a
user can call to interact with the contract. It also has helpful information like the **events**
that are emitted by the contract or any **docs**.
  
If you look closely at the constructors and messages, you will also notice a `selector` which
contains a 4-byte hash of the function name and is used to route your contract calls to the correct
functions.

In the next section we will start a [Substrate Smart Contracts node](https://github.com/paritytech/substrate-contracts-node)
and configure the [Contracts UI](https://github.com/use-ink/contracts-ui) to interact with it.

## Debug vs. Release Build

By default, `cargo-contract` builds the contract in debug mode. This means
that the contract will e.g. print statements like

```rust
ink::env::debug_println!("magic number: {}", value);
```

to the node's console if debugging was enabled on the node ([instructions here](../faq/faq.md#how-do-i-print-something-to-the-console-from-the-runtime)).
To support functionality like this the debug build of a contract includes some
heavy-weight logic.

For contracts that are supposed to run in production you should always build the
contract with `--release`:

```bash
cargo contract build --release
```

This will ensure that nothing unnecessary is compiled into the Wasm blob, making
your contract faster and cheaper to deploy and execute.

:::info
With this behavior `cargo-contract` mirrors how `cargo` behaves for Rust programs:
the `--release` flag has to be passed explicitly to `cargo build`.
:::
