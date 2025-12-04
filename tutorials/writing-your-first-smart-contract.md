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
- Ink Contract Macros

:::note
**Learning Objectives:**

⭐️ _By the end of this tutorial, you will be able to write, build, test and deploy **ink!** contracts_

⭐️ _You will be familiar with all the key components of an **ink!** smart contract_

⭐️ _You will understand how to use the Pop CLI_

⭐️ _You will understand important concepts like storage and messages and how to use them in your smart contract_
:::

## Prerequisites

There are two ways to follow along with this tutorial!

### GitHub Codespace

_You can create your own repo to follow along with this tutorial in a Github Codespace!_

The companion GitHub repo [helloink](https://github.com/anataliocs/helloink).

This is a template repo. Click
the [Use this Template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template)
button to create your own repo to follow along with this tutorial.

The included `.devcontainer` config creates a GitHub codespace pre-installed with Rust, Cargo, and the Pop CLI so you
can hit the ground running. Learn more
about [Devcontainers](https://docs.github.com/en/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers).

### Local Config

_Or if you want to follow along on your local machine, here's what you'll need to get started!_

Follow the steps in the [ink! Getting Started Guide](https://use.ink/docs/v6/getting-started/setup) to:

- Install [Brew](https://brew.sh/)
- Install [Rust](https://rust-lang.org/tools/install/), [Cargo](https://doc.rust-lang.org/cargo/)
  and [Pop CLI](https://github.com/r0gue-io/pop-cli)

:::note
Read up on the [Pop CLI](https://learn.onpop.io/)
:::

### Verify Installation

_In both cases, let's verify everything is installed correctly:_

**Verify Rust version:**

```bash
rustc --version
```

rustc version 1.91.1 or higher is recommended.

**Verify Cargo version:**

```bash
cargo --version
```

cargo version 1.91.1 or higher is recommended.

**Verify Pop CLI version:**

```bash
pop --version
```

pop cli version 0.12.1 or higher is recommended.

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

### Create a New Project

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

- The `no_main` attribute is required to compile the contract for on-chain execution
- The `no_std` ensures the standard library is not included in the contract
    - The [Rust standard library](https://doc.rust-lang.org/std/) is OS-dependent and too heavyweight for on-chain use
    - More details on [no_std](https://docs.rust-embedded.org/book/intro/no-std.html)

**lib.rs** (excerpt)

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

Applies the `#[ink::contract]` [proc macro attribute](https://doc.rust-lang.org/reference/procedural-macros.html) to
the module declaration.

- Marks the module as an **ink!** contract
  and [checks for invalid arguments and structure](https://use.ink/docs/v6/macros-attributes/contract#analysis).
- Uses your provided contract code to generate valid, optimized code for execution
  on-chain
- This allows you to simply define your contract's storage and other functionality
  without writing a bunch of complicated, boilerplate code! 😊

**lib.rs** (excerpt)

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

- Marks the `struct` type as the contract's storage definition
- There must be **ONLY** one **ink!** storage definition per contract
- Defines the layout of storage using a variety of built-in facilities
- Advanced users can provide their own implementations of storage data structures

_In this case, we define a simple `bool` storage variable._

**lib.rs** (excerpt)

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

- Marks the function as the **ink!** constructor
- Makes function available to the API for instantiating the contract
- There must be **AT LEAST** one `#[ink(constructor)]` defined function
- Dispatchable upon contract instantiation
- Multiple constructors can be defined

**lib.rs** (excerpt)

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

- Marks functions as **ink!** public message functions
- There must be **AT LEAST** one `#[ink(message)]` defined function in a contract
- Dispatchable upon contract invocation
- The set of **ink!** messages defines its external API available for invocation

:::note
⚠️ **ALL** public functions must use the #[ink(message)] attribute

- A message with a `&self` receiver may **ONLY** read state
- A message with a `&mut self` receiver may modify state
  :::

**lib.rs** (excerpt)

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

## Build and Execute Tests

_Now, let's [build](https://learn.onpop.io/contracts/guides/build-your-contract)
and [test](https://learn.onpop.io/contracts/guides/run-your-unit-tests) our contract._

### Build the Contract

```bash
pop build --release
```

This will generate the following artifacts in `target/ink`:

- `helloink.contract`: JSON with contract binary + metadata
- `helloink.polkavm`: Contract binary
- `helloink.json`: Contract metadata

:::note
ℹ️ Learn more about [metadata](https://use.ink/docs/v6/basics/metadata/)

ℹ️ Learn more about the [ink! metadata format](https://use.ink/docs/v6/basics/metadata/ink/)

:::

### Run the Unit Tests

```bash
pop test
```

### Review Unit Test Code

_Next, let's review the unit test code:_

Applies the `#[cfg(test)]` macro to the `tests` module declaration.

Applies the `#[ink::test]` macro to the `it_works()` function declaration.

- Marks function as an **ink!** unit test
- This macro is NOT strictly required to run unit tests that require **ink!** off-chain testing capabilities but
  improves code readability

**lib.rs** (excerpt)

```rust
    #[cfg(test)]
    mod tests {
        use super::*;

        #[ink::test]
        fn it_works() {
            let mut helloink = Helloink::new(false);
            assert_eq!(helloink.get(), false);
            helloink.flip();
            assert_eq!(helloink.get(), true);
        }
    }
```

:::note
ℹ️ Learn more about the [ink! testing strategies](https://use.ink/docs/v6/contract-testing/overview/)

:::

## Deploy to Local Ink Node

Now, let's use [Pop to deploy our contract](https://learn.onpop.io/contracts/guides/deploy) to
a [local ink node](https://github.com/use-ink/ink-node).

### Deploy to Local Node using Pop CLI

- `--path` points to the contract directory
- `--constructor` method name (defaults to `new`)
- `--args` constructor arguments
- `--suri` secret key URI (default to `//Alice`)
- `--url` ink node url  (default `ws://localhost:9944`)

```bash
pop up --path . \
  --constructor new \
  --args true \
  --suri //Alice \
  --url ws://localhost:9944
```

**The Pop CLI will prompt you to start a local node for the deployment:**

- Select `Yes` to start the local ink node

```terminaloutput
◆  No local ink! node detected. Would you like to start it node in the background for testing?
│  ● Yes  / ○ No 
```

**The Pop CLI will prompt you to download the local node binary(During first run):**

- Select `Yes` to download the local ink node binary

```terminaloutput
▲  ⚠️ The ink-node binary is not found.
│  
◆  📦 Would you like to source it automatically now?
│  ● Yes  / ○ No 
```

**After the local ink node is started, you will be prompted to deploy the contract:**

- Select `Yes` to deploy your contract to the local ink node binary

```terminaloutput
◆  Do you want to deploy the contract? (Selecting 'No' will keep this as a dry run)
│  ● Yes  / ○ No 
└  
```

### Successful Deployment

_Congrats! You've successfully deployed your first **ink!** smart contract!_ 🎉

```terminaloutput
⚙  Contract deployed and instantiated:
│  ● The contract address is "0x5801b439a678d9d3a68b8019da6a4abfa507de11"
```

:::note
ℹ️ Learn more about the [ink! local node](https://github.com/use-ink/ink-node)

:::

## Invoke Deployed Contract

_We will use the `pop call contract` command to invoke the deployed contract:_

- Replace the hash passed into the `--contract` argument with the deployed contract address from the previous step
- This command will invoke the `flip()` function mutating the state of the boolean storage variable

```bash
 pop call contract --path . \
 --contract 0x5801b439a678d9d3a68b8019da6a4abfa507de11 \
 --message flip \
 --url ws://localhost:9944/ \
 --suri //Alice \
 --execute
```

You should see something similar to the following output:

```terminaloutput
⚙        Events
│         Event Balances ➜ Withdraw
│           who: 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY
│           amount: 1.204583894mUNIT
│         Event Balances ➜ BurnedDebt
│           amount: 1.204583894mUNIT
│         Event TransactionPayment ➜ TransactionFeePaid
│           who: 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY
│           actual_fee: 1.204583894mUNIT
│           tip: 0UNIT
│         Event System ➜ ExtrinsicSuccess
│           dispatch_info: DispatchEventInfo { weight: Weight { ref_time: 1204645303, proof_size: 37207 }, class: Normal, pays_fee: Yes }
```

### Read the Current Contract Storage Value

_Use the `pop call contract` command to get the contract storage current value._

- Replace the hash passed into the `--contract` argument with the deployed contract address from the previous step
- This retrieves and displays the current state of the boolean storage variable

```bash
pop call contract --path . \
--contract 0x5801b439a678d9d3a68b8019da6a4abfa507de11 \
--message value \
--url ws://localhost:9944/
```

:::note
ℹ️ Learn more about the [Pop CLI call contract command](https://learn.onpop.io/contracts/guides/call-your-contract)

:::

----

## Conclusion

_Let's recap what we've accomplished during this tutorial:_

- Generated an **ink!** smart contract using the Pop CLI (`pop new`) with the standard template
- Reviewed Rust conditional compilation for **ink!** contracts: `#![cfg_attr(not(feature = "std"), no_std, no_main)]`
- Walked through various **ink!** macros:
    - `#[ink::contract]` Mark a module as an **ink!** contract
    - `#[ink(storage)]` Define the SINGLE storage struct
    - `#[ink(constructor)]` defines instantiation logic
    - `#[ink(message)]` defines public callable API (read-only with `&self` vs. state‑mutating with `&mut self`)
- Demonstrated contract storage by implementing a simple boolean field and message function to read and mutate that
  storage variable
- Built & tested the contract using Pop CLI commands (`pop build --release`, `pop test`)
- Deployed the contract to a local ink node using Pop CLI (`pop up`)
- Invoked the contract using Pop CLI (`pop call contract`)

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
