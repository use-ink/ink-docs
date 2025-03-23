---
title: Create an ink! Project
slug: /getting-started/creating-an-ink-project
hide_title: true
---

![Heart Title Picture](/img/title/heart.svg)

# Creating an ink! Project

ink! is an [Embedded Domain Specific Language](https://wiki.haskell.org/Embedded_domain_specific_language) (eDSL):
a domain-specific language of the Rust programming language.
That means:

* we allow only a subset of the Rust programming language features to be used
  for writing smart contracts. For example, it is not possible do any 
  multi-threading operations or access the web.
* we provide annotations, macros, and primitives that are needed when writing
  smart contracts. For example, annotations on what the smart contract's storage
  struct is or what an event is.

ink! is just standard Rust in a well-defined "contract format" with specialized `#[ink(…)]` attribute macros. These attribute macros tell ink! what the different parts of your Rust smart contract represent, and ultimately allow ink! to do all the magic needed to create Polkadot SDK compatible RISC-V bytecode!

## Create a new project
Use the ink! CLI to generate an initial smart contract with some scaffolding code.

Make sure you are in your working directory, and then run:

```bash
$ cargo contract new flipper
```

This command will create a new project folder named `flipper` with this content:

```
flipper
  └─ lib.rs         <-- Contract Source Code
  └─ Cargo.toml     <-- Rust Dependencies and ink! Configuration
  └─ .gitignore
```

## Contract Source Code

For the `lib.rs` file, `cargo-contract` automatically generates the source code for the "Flipper" contract, which is about the simplest "smart" contract you can build. You can take a sneak peak as to what will come by looking at the source code here:
[Flipper Example Source Code](https://github.com/use-ink/ink-examples/blob/main/flipper/lib.rs).

The Flipper contract is nothing more than a `bool` which gets flipped from `true` to `false` through the `flip()` function. 

## Testing Your Contract

At the bottom of the `lib.rs` you'll see some simple test cases which verify the functionality of the contract.
We can quickly test this code is functioning as expected:

```bash
$ cargo test
```

To which you should see a successful test completion:

```bash
$ cargo test
running 2 tests
test flipper::tests::it_works ... ok
test flipper::tests::default_works ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out
```

Now that we are feeling confident things are working, we can actually compile this contract to a RISC-V binary in the next step.


