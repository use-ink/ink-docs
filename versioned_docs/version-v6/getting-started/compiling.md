---
title: Compile Your Contract
slug: /getting-started/building-your-contract
hide_title: true
---

![Cargo Contract Title Picture](/img/title/cargo-contract.svg)

# Compile Your Contract

Run the following command in your `flipper` directory to compile your smart contract:

```bash
cargo contract build
```

This command will build the following for your contract: 
a binary, a metadata file (which contains the
contract's ABI) and a `.contract` file which bundles both.

If all goes well, you should see a `target` folder which contains these files:

```
target
  └─ ink
    └─ flipper.contract
    └─ flipper.polkavm
    └─ flipper.json
```
You can think of it this way: the raw `.polkavm` binary contains just
the bytecode of your contract. Without further information it's
not possible to know what this bytecode refers to. For example,
which functions can be called in there and what their arguments
are. This additional information that describes what the raw binary
is about is called metadata ‒ data that describes other data.

<p>
    <img src="/img/metadata.svg"  />
</p>

The purpose of each file is:

* `flipper.polkavm`: This is the raw contract bytecode that will be deployed on-chain.
* `flipper.json`: The isolated metadata, which is not stored on-chain.
It's big and would take up too much space and costs.
This file is used by e.g. a dApp user interface to know how to communicate with the on-chain contract.
* `flipper.contract`: Combines both the contract's bytecode and the metadata. This file
is used when you are using a Developer UI like [Contracts UI](https://ui.use.ink).

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

You can also open up the `flipper.contract` file in any text editor. You'll notice that it's
nearly the same as the `flipper.json`. The only different is that the `.contract` file contains
an additional field with the hex-encoded binary of your contract:

```
{
    "source": {
        …
        "contract_binary": "0x006173…",
    },
    …
}
```

In the next section we will start a [Substrate Smart Contracts node](https://github.com/use-ink/ink-node)
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

This will ensure that nothing unnecessary is compiled into the binary blob, making
your contract faster and cheaper to deploy and execute.

:::info
With this behavior `cargo-contract` mirrors how `cargo` behaves for Rust programs:
the `--release` flag has to be passed explicitly to `cargo build`.
:::
