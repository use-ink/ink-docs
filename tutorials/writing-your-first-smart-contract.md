---
title: Writing Your First Smart Contract
sidebar_position: 2
---

---

### Overview

We will walk through hand-on instructions to create a
fully functional [ink!](https://use.ink/docs/v6) smart contract.

**We will break down and explain key concepts including:**

- Storage: Reading, Writing & Mutating Storage
- Messages

:::note
**Learning Objectives:**

⭐️ _By the end of this tutorial, you will be able to write, compile, build, test and deploy an ink! smart contract._

⭐️ _You will be familiar with all the important components of a Rust ink! smart contract._

⭐️ _You will understand how to use the Pop CLI to work with ink! smart contracts._

⭐️ _You will understand important concepts like storage, events and how to use them in your smart contract._
:::

### Prerequisites

_Here's what you'll need to get started:_

- Install Brew: https://brew.sh/
- Install [Rust](https://rust-lang.org/tools/install/), [Cargo](https://doc.rust-lang.org/cargo/)
  and [Pop CLI](https://github.com/r0gue-io/pop-cli):  https://use.ink/docs/v6/getting-started/setup
- Read up on the Pop CLI basics: https://learn.onpop.io/

After installing the prerequisites, verify that they are installed correctly:

**Verify Rust install:**

```bash
rustc --version
```

**Verify Cargo install:**

```bash
cargo --version
```

**Verify Pop CLI install:**

```bash
pop --version
```

----

### Creating a New Project

:::note
**Display available Pop CLI commands:**

_If you need help with any of the commands below, run:_

```bash
pop --help
```

:::

First, let's create a new project using the `pop new` command:

**Create a new project:**

- Pass in `contract` to the command `pop new`
- We name the contract`helloink`
- Finally, we use the [Standard Template](https://github.com/use-ink/ink-examples/tree/main/flipper),
  passing in
  `-t standard`:
- Check out
  the [Pop CLI docs](https://learn.onpop.io/contracts/guides/create-a-new-contract) for more options

```bash
pop new contract helloink -t standard
```

Next, let's review the files that were created:

**View files:**

```bash
cd helloink
ls -latr
```

:::note

⚠️ **This code is provided for educational purposes only.**

Contracts should **ALWAYS** be formally audited and reviewed for security vulnerabilities before being deployed to
mainnet.

Consult the source repository at https://github.com/use-ink/ink-examples/tree/main/flipper to review the
template code.

:::

**You will see the following files:**

- `Cargo.toml` - The [cargo project manifest file](https://doc.rust-lang.org/cargo/reference/manifest.html)
- `lib.rs` - The [main source file](https://github.com/use-ink/ink-examples/blob/main/flipper/lib.rs) for the smart
  contract written in Rust
- `.gitignore`- A file that tells git which files and directories to ignore

Import the project into your IDE and let's dig in!

---

### Reviewing the Generated Smart Contract

Let's review each major component of the `lib.rs` file:

**Conditional Compilation Statement**

Configures [Conditional compilation](https://doc.rust-lang.org/reference/conditional-compilation.html) to
ensure an optimal memory footprint and performance.

- The `no_main` attribute is required to compile the contract for on-chain execution.
- The `no_std` ensures the standard library is not included in the contract
    - The [Rust standard library](https://doc.rust-lang.org/std/) is OS-dependent and too heavyweight for on-chain use
    - More details on [no_std](https://docs.rust-embedded.org/book/intro/no-std.html)

```rust
#![cfg_attr(not(feature = "std"), no_std, no_main)]
```

:::note
Check out
the [FAQ](https://use.ink/docs/v6/faq/#what-does-the-cfg_attrnotfeature--std-no_std-no_main-at-the-beginning-of-each-contract-mean)
for a more in-depth explanation.
:::

**Module Declaration**

Next let's review the module declaration:

Applies the `#[ink::contract]` [proc macro attribute]((https://doc.rust-lang.org/reference/procedural-macros.html)) to
the module declaration.

- Marks the module as an ink! contract
  and [checks for invalid arguments and structure](https://use.ink/docs/v6/macros-attributes/contract#analysis).
- Uses your provided contract code to generate valid, optimized code for execution
  on-chain.
- This allows you to simply define your contract's storage and other functionality
  without writing a bunch of complicated, boilerplate code! 😊

```rust
#[ink::contract]
mod helloink {}
```

**Every ink! Smart Contract MUST have:**

- EXACTLY one `#[ink(storage)]` struct
- AT LEAST one `#[ink(constructor)]` function
- AT LEAST one `#[ink(message)]` function

:::note
Learn more about the [ink::contract macro](https://use.ink/docs/v6/macros-attributes/contract)
:::

**Storage Declaration**

```rust
    #[ink(storage)]
    pub struct Helloink {
        /// Stores a single `bool` value on the storage.
        value: bool,
    }
```

**Constructor and Message Declaration**

```rust
    impl Helloink {
        #[ink(constructor)]
        pub fn new(init_value: bool) -> Self {
            Self { value: init_value }
        }

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

----

### Executing Tests

**Run tests:**

```bash

```

### Deploy to Testnet

**Deploy to testnet:**

```bash

```

----

### Customizing the Code

```rust

```

----

### Conclusion

Summarize the key takeaways from the tutorial. Suggest next steps, further reading, or related tutorials.

### Author

Write a short bio and link to your profile, blog, or project.
