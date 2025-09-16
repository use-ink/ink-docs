---
title: "#[ink(message)]"
slug: /macros-attributes/message
hide_title: true
---

![Text/message Title Picture](/img/title/text/message.svg)

Applicable to methods.

Flags a method for the ink! storage struct as message making it available to the API for calling the contract.

Note that all public functions must use the `#[ink(message)]` attribute

There must be at least one `#[ink(message)]` defined method.

Methods flagged with `#[ink(message)]` are special in that they are dispatchable
upon contract invocation. The set of ink! messages defined for an ink! smart contract
define its API surface with which users are allowed to interact.

An ink! smart contract can have multiple such ink! messages defined.

An ink! message with a `&self` receiver may only read state whereas an ink! message
with a `&mut self` receiver may modify state.

```rust
#[ink(message)]
pub fn read_only(&self, from: AccountId) {
    // actual implementation
}

#[ink(message)]
pub fn modifies_state(&mut self, from: AccountId) {
    // actual implementation
}
```


## Messages Return Value

The return value of a message needs to implement `scale::Encode`.

It is notable that the collections under `ink_storage` ‒ such as e.g. `Vec` or `HashMap` ‒
don't implement `scale::Encode`. This means you can't just return a `Vec` from an ink! message.
This restriction is intentional ‒ returning a complete data structure with a potentially unbounded
content is an anti-pattern for smart contracts. Just think about the unpredictable gas costs.

If you _really really_ need to return a data structure in its entirety then use the ones from
`ink_prelude` (e.g. `ink_prelude::vec::Vec`). Those implement `scale::Encode`.

:::note
In ["sol"][abi-sol] and ["all"][abi-all] ABI mode, the return value of a message
must either implement [`SolEncode`][sol-encode], or be a `Result<T,E>` type
where `T` implements [`SolEncode`][sol-encode] and `E` implements [`SolErrorEncode`][sol-error-encode].

See our [Solidity ABI compatibility docs][sol-abi-compat] for more details.
:::

[abi-all]: ../basics/abi/all.md
[abi-sol]: ../basics/abi/solidity.md
[sol-encode]: https://use-ink.github.io/ink/ink/trait.SolEncode.html
[sol-error-encode]: https://use-ink.github.io/ink/ink/sol/trait.SolErrorEncode.html
[sol-abi-compat]: ../background/solidity-metamask-compat.md

## Example

Given the `Flipper` contract definition above we add some `#[ink(message)]` definitions
as follows:

```rust
#[ink::contract]
mod flipper {
    #[ink(storage)]
    pub struct Flipper {
        value: bool,
    }

    impl Flipper {

        #[ink(constructor)]
        pub fn new(initial_value: bool) -> Self {
            Flipper { value: false }
        }

        /// Flips the current value.
        #[ink(message)]
        pub fn flip(&mut self) {
            self.value = !self.value;
        }

        /// Returns the current value.
        #[ink(message)]
        pub fn get(&self) -> bool {
            self.value
        }
    }
}
```
