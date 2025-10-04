---
title: "#[ink::contract_ref]"
hide_title: true
slug: /macros-attributes/contract_ref
---

![Text/contract Title Picture](/img/title/text/contract.svg)

Defines the interface of a "callee" contract and generates a wrapper type which can be
used for interacting with the contract.

The interface is defined using a trait, and the macro generates a native Rust type
(a contract reference) that implements this trait, so it can be used in any Rust
context that expects types.

## Example

### Definition

```rust
#[ink::contract_ref(abi = "sol")]
pub trait Erc20 {
    Returns the total supply of the ERC-20 smart contract.
    #[ink(message)]
    fn total_supply(&self) -> ink::U256;

    Transfers balance from the caller to the given address.
    #[ink(message)]
    fn transfer(&mut self, amount: ink::U256, to: ink::Address) -> bool;

    // etc.
}
```

### Usage

Given the above interface, you can use the generated contract reference in a
"caller" contract as shown below:

```rust
#[ink::contract]
mod erc20_caller {
    use ink::U256;

    #[ink(storage)]
    pub struct Erc20Caller {
        callee: ink::Address,
    }

    impl Erc20Caller {
        #[ink(constructor)]
        pub fn new(addr: ink::Address) -> Self {
            Self { callee: addr }
        }

        #[ink(message)]
        pub fn call_erc20(&self) {
            // Calls the ERC20 contract using the contract ref generated above.
            let total = Erc20Ref::from(self.callee).total_supply();

            // Do some fun stuff!
        }
    }
}
```

## Header Arguments

The `#[ink::contract_ref]` macro can be provided with some additional
comma-separated header arguments:

### `abi: String`

Specifies the ABI (Application Binary Interface) of the "callee" contract.

**Usage Example:**
```rust
#[ink::contract_ref(abi = "sol")]
pub trait Callee {
  #[ink(message)]
  fn message1(&self);

  #[ink(message, selector = 42)]
  fn message2(&self);
}
```

**Default value:** Empty.

**Allowed values:** `"ink"`, `"sol"`

**NOTE**: When no value is provided, the generated contract reference will use the
ABI of the  root contract (i.e "ink" in ["ink" and "all" ABI mode][abi-mode]
and "sol" in ["sol" ABI mode][abi-mode]).

[abi-mode]: ../basics/abi/overview.md

### `env: impl Environment`

Specifies the environment to use for the generated contract reference.

This should be the same environment used by the root contract (if any).

The environment must implement the `Environment` (defined in `ink_env`)
trait and provides all the necessary fundamental type definitions for `Balance`,
`AccountId` etc.

**Usage Example:**

Given a custom `Environment` implementation:
```rust
#[derive(Clone)]
pub struct MyEnvironment;

impl ink_env::Environment for MyEnvironment {
  const NATIVE_TO_ETH_RATIO: u32 = 100_000_000;
  type AccountId = [u8; 16];
  type Balance = u128;
  type Hash = [u8; 32];
  type Timestamp = u64;
  type BlockNumber = u32;
  type EventRecord = ();
}
```
A user might define an interface (and generate a contract reference) that uses the
above custom `Environment` implementation as demonstrated below:
```rust
#[ink::contract_ref(env = MyEnvironment)]
pub trait Callee {
  #[ink(message)]
  fn message(&self);

  // ...
}
```

**Default value:** `DefaultEnvironment` defined in `ink_env` crate.
