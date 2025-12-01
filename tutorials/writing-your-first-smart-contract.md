---
title: Writing Your First Smart Contract
sidebar_position: 2
---

![First Smart Contract Title Picture](/img/title/text/contract.svg)

# Writing Your First Smart Contract

We will walk through hand-on instructions to create a
fully functional [ink!](https://use.ink/docs/v6) smart contract.

Follow along with the companion GitHub repo [helloink](https://github.com/anataliocs/helloink).

**We will break down and explain key concepts including:**

- Using the Pop CLI
- Storage: Reading, Writing & Mutating Storage
- Constructors
- Messages
- Ink contract macros

:::note
**Learning Objectives:**

⭐️ _By the end of this tutorial, you will be able to write, compile, build, test and deploy **ink!** contracts._

⭐️ _You will be familiar with all the key components of **ink!** smart contract._

⭐️ _You will understand how to use the Pop CLI._

⭐️ _You will understand important concepts like storage, events and how to use them in your smart contract._
:::

## Prerequisites

_Here's what you'll need to get started:_

- Install Brew: https://brew.sh/
- Install [Rust](https://rust-lang.org/tools/install/), [Cargo](https://doc.rust-lang.org/cargo/)
  and [Pop CLI](https://github.com/r0gue-io/pop-cli): https://use.ink/docs/v6/getting-started/setup
- Read up on the [Pop CLI](https://learn.onpop.io/)

_After that, let's verify everything is installed correctly:_

**Verify Rust version:**

```bash
rustc --version
```

**Verify Cargo version:**

```bash
cargo --version
```

**Verify Pop CLI version:**

```bash
pop --version
```

----

## Create a New Project with the Pop CLI

:::note
**Display available Pop CLI commands:**

_If you need help with any of the commands below, run:_

```bash
pop --help
```

:::

_First, let's create a new project using the `pop new` command:_

### Create a new project

- Pass in `contract` to the command `pop new`
- We name the contract`helloink`
- Lastly, we use the [Standard Template](https://github.com/use-ink/ink-examples/tree/main/flipper),
  passing in `-t standard`
- Check out the [Pop CLI docs](https://learn.onpop.io/contracts/guides/create-a-new-contract) for more options

```bash
pop new contract helloink -t standard
```

_Next, let's review the files that were generated:_

### View Generated Files

```bash
cd helloink
ls -latr
```

:::note

⚠️ **This code is provided for educational purposes.**

Contracts should **ALWAYS** be formally audited and reviewed for security vulnerabilities before being deployed to
mainnet.

Review the source repository at https://github.com/use-ink/ink-examples/tree/main/flipper

:::

**Generated files:**

- `Cargo.toml` - The [cargo project manifest file](https://doc.rust-lang.org/cargo/reference/manifest.html)
- `lib.rs` - The [main source file](https://github.com/use-ink/ink-examples/blob/main/flipper/lib.rs) for the smart
  contract written in Rust
- `.gitignore`- Tells git files/directories to ignore

_Import the project into your IDE and let's dig in!_

---

## Reviewing the Generated Smart Contract

_Let's review each major component of the `lib.rs` file:_

### Conditional Compilation Statement

Configures [Conditional compilation](https://doc.rust-lang.org/reference/conditional-compilation.html) to
ensure an optimal memory footprint and performance.

- The `no_main` attribute is required to compile the contract for on-chain execution.
- The `no_std` ensures the standard library is not included in the contract.
    - The [Rust standard library](https://doc.rust-lang.org/std/) is OS-dependent and too heavyweight for on-chain use
    - More details on [no_std](https://docs.rust-embedded.org/book/intro/no-std.html)

```rust
#![cfg_attr(not(feature = "std"), no_std, no_main)]
```

:::note
ℹ️ Check out
the [FAQ](https://use.ink/docs/v6/faq/#what-does-the-cfg_attrnotfeature--std-no_std-no_main-at-the-beginning-of-each-contract-mean)
for a more in-depth explanation.
:::

### Module Declaration

_Next, let's take a look at the module declaration:_

Applies the `#[ink::contract]` [proc macro attribute]((https://doc.rust-lang.org/reference/procedural-macros.html)) to
the module declaration.

- Marks the module as an **ink!** contract
  and [checks for invalid arguments and structure](https://use.ink/docs/v6/macros-attributes/contract#analysis).
- Uses your provided contract code to generate valid, optimized code for execution
  on-chain.
- This allows you to simply define your contract's storage and other functionality
  without writing a bunch of complicated, boilerplate code! 😊

```rust
#[ink::contract]
mod helloink {
    ///...
}
```

Every **ink!** Smart Contract MUST have:

- EXACTLY one `#[ink(storage)]` struct
- AT LEAST one `#[ink(constructor)]` function
- AT LEAST one `#[ink(message)]` function

:::note
ℹ️ Learn more about the [ink! contract macro](https://use.ink/docs/v6/macros-attributes/contract)
:::

### Storage Declaration

_Let's check out the storage declaration:_

Applies the `#[ink(storage)]` macro to the struct declaration.

- Marks the `struct` type as the contract's storage definition.
- There must be **ONLY** one **ink!** storage definition per contract.
- Defines the layout of storage using a variety of built-in facilities.
- Advanced users can provide their own implementations of storage data structures.

_In this case, we define a simple `bool` storage variable._

```rust
    #[ink(storage)]
    pub struct Helloink {
        value: bool,
    }
```

:::note
ℹ️ Learn more about the [ink! storage macro](https://use.ink/docs/v6/macros-attributes/storage)

ℹ️ Check out the Rust docs for a deeper dive
into the [ink_storage crate](https://docs.rs/ink_storage/latest/ink_storage/)

:::

### Constructor Declaration

_Let's take a look at the constructor declaration:_

Applies the `#[ink(constructor)]` macro to the `new()` function declaration.

- Marks the function as the **ink!** constructor.
- Makes function available to the API for instantiating the contract.
- There must be **AT LEAST** one `#[ink(constructor)]` defined function.
- Dispatchable upon contract instantiation.
- Multiple constructors can be defined.

```rust
    impl Helloink {
        #[ink(constructor)]
        pub fn new(init_value: bool) -> Self {
            Self { value: init_value }
        }
        
        ///...
    }
```

### Message Declarations

_Next, let's review the message declarations:_

Applies the `#[ink(message)]` macro to the `flip()` and `get()` function declarations.

- Marks function as an **ink!** public message function
- Makes the function available for calling the contract.
- There must be **AT LEAST** one `#[ink(message)]` defined function.
- Dispatchable upon contract invocation
- The set of **ink!** messages defines its external API for users to invoke
- A message with a `&self` receiver may **ONLY** read state.
- A message with a `&mut self` receiver may modify state.

:::note
⚠️ **ALL** public functions must use the #[ink(message)] attribute
:::

```rust
    impl Helloink {
        ///...
        
        #[ink(message)]
        pub fn flip(&mut self) {
            self.value = !self.value;
        }

        #[ink(message)]
        pub fn get(&self) -> bool {
            self.value
        }
    }
```

:::note
ℹ️ Learn more about the [ink! constructor macro](https://use.ink/docs/v6/macros-attributes/constructor)

ℹ️ Learn more about the [ink! message macro](https://use.ink/docs/v6/macros-attributes/message)

:::

----

## Executing Tests

**Build and run unit tests:**

Now, let's [build](https://learn.onpop.io/contracts/guides/build-your-contract)
and [test](https://learn.onpop.io/contracts/guides/run-your-unit-tests) our contract.

```bash
pop build --release
pop test
```

:::note
ℹ️ Learn more about the [ink! testing strategies](https://use.ink/docs/v6/contract-testing/overview/)

:::

## Deploy to Testnet

Now, let's use the [Pop CLI to deploy our contract](https://learn.onpop.io/contracts/guides/deploy) to
a [local ink node](https://github.com/use-ink/ink-node)

**Deploy to testnet:**

- `-p` points to the contract directory
- `--constructor` method name (defaults to `new`)
- `--args` constructor arguments
- `--suri` secret key URI (default to `//Alice`)
- `--url` ink node url  (default `ws://localhost:9944`)

```bash
pop up -p ./lib.rs \
  --constructor new \
  --args true \
  --suri //Alice
```

----

## Conclusion

_Let's recap what we've done during this tutorial:_

- Generated an **ink!** smart contract using the Pop CLI (`pop new`) with the standard template
- Reviewed Rust conditional compilation for **ink!** contracts: `#![cfg_attr(not(feature = "std"), no_std, no_main)]`
- Walked through various **ink!** macros:
    - `#[ink::contract]` Mark a module as an **ink!** contract,
    - `#[ink(storage)]` Define the SINGLE storage struct,
    - `#[ink(constructor)]` defines instantiation logic,
    - `#[ink(message)]` defines public callable API (read-only with `&self` vs. state‑mutating with `&mut self`).
- Demonstrated contract storage by implementing a simple boolean field
- Built & tested the contract using Pop CLI commands (`pop build --release`, `pop test`)
- Deployed the contract to a local ink node using Pop CLI (`pop up`)

## Author

I'm Chris Anatalio, and I'm a Web3-native software engineer, technical educator, and developer advocate. I've
previously worked at ConsenSys, Stellar Development Foundation, and I produced a course
on [Web3 Infrastructure](https://www.pluralsight.com/courses/web3-infrastructure-development-tools) on
Pluralsight. I also run a small [web3 consultancy](https://hella.website/)

I completed Polkadot Blockchain Academy Cohort 7 in Bali(2025) and have been a community member of the Polkadot
community since 2022.

**Follow me on:**

- [LinkedIn](https://www.linkedin.com/in/anataliocs/)
- [GitHub](https://github.com/anataliocs)
- [Twitter](https://x.com/CAnatalio)
