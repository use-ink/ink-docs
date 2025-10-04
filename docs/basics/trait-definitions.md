---
title: Trait Definitions
slug: /basics/trait-definitions
hide_title: true
---

![Text/trait Title Picture](/img/title/text/trait.svg)

Through the `#[ink::trait_definition]` proc. macro it is now possible to define your very own trait definitions that are then implementable by ink! smart contracts.

This allows to define shared smart contract interfaces to different concrete implementations.
Note that this ink! trait definition can be defined anywhere, even in another crate!

## Example

### Definition

Defined in the `base_erc20.rs` module.

```rust
#[ink::trait_definition]
pub trait BaseErc20 {
    /// Returns the total supply.
    #[ink(message)]
    fn total_supply(&self) -> Balance;

    /// Transfers `amount` from caller to `to`.
    #[ink(message, payable)]
    fn transfer(&mut self, to: AccountId, amount: Balance);
}
```

### Implementation

An ink! smart contract definition can then implement this trait definition as follows:

```rust
#[ink::contract]
mod erc20 {
    use base_erc20::BaseErc20;

    #[ink(storage)]
    pub struct Erc20 {
        total_supply: Balance,
        // more fields ...
    }
    
    impl Erc20 {
        /// Creates a new ERC-20 contract and initializes it with the initial supply for the instantiator.
        #[ink(constructor)]
        fn new(initial_supply: Balance) -> Self {
            // implementation ...
        }
    }

    impl BaseErc20 for Erc20 {
        #[ink(message)]
        fn total_supply(&self) -> Balance {
            // implementation ...
        }

        #[ink(message, payable)]
        fn transfer(&mut self, to: AccountId, amount: Balance) {
            // implementation ...
        }
    }
}
```

### Usage

Calling the above `Erc20` explicitly through its trait implementation can be done just as if it was normal Rust code:

```rust
// --- Instantiating the ERC-20 contract:
//
let mut erc20 = <Erc20 as BaseErc20>::new(1000);
// --- Is just the same as:
use base_erc20::BaseErc20;
let mut erc20 = Erc20::new(1000);

// --- Retrieving the total supply:
//
assert_eq!(<Erc20 as BaseErc20>::total_supply(&erc20), 1000);
// --- Is just the same as:
use base_erc20::BaseErc20;
assert_eq!(erc20.total_supply(), 1000);
```

See our [`ERC20-Trait example contract`](https://github.com/use-ink/ink-examples/blob/main/trait-erc20/lib.rs)
for an elaborate example which uses trait definitions.

## Limitations

There are still many limitations to ink! trait definitions and trait implementations.
For example, it is not possible to define associated constants or types or have default implemented methods.
These limitations exist because of technical intricacies, however, please expect that many of those will be tackled in future ink! releases.
