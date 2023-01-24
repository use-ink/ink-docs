---
title: Storage Layout
slug: /datastructures/storage-layout
---

Let's dive deeper into the concepts behind ink! storage to get a better understanding 
of some of its implications and limitations.

## Storage Organization

The following schema depicts the storage which is exposed
to ink! by the contracts pallet:

<div class="schema">
    <img src="/img/kv.svg" alt="Storage Organization: Layout" />
</div>

The storage API operates by storing and loading entries into and from a single storage
cell. Since it does not care about the values at all - a value is just an arbitrary 
byte sequence after all - smart contract authors are given some flexibility in 
regards on how they want to organize the storage layout of their contracts.

## Packed vs Non-Packed layout

Types that can be stored as a whole under a single storage cell are considered
[`Packed`](https://paritytech.github.io/ink/ink/storage/traits/trait.Packed.html).
By default, ink! tries to store all storage struct fields under a single storage cell.
Consequentially, with a `Packed` storage layout, any message interacting with the contract 
storage will always need to operate on the whole storage struct.

For example, if we have a somewhat small contract storage struct consisting of only a few 
tiny fields, pulling everything from the storage inside every message is not 
problematic. It may even be advantegous - especially if we expect most messages to 
interact with most of the storage fields.

On the other hand, this can get problematic if we're storing a large `Vec` on the
contract storage but provide messages that do not need to read and write from this `Vec`. 
In that scenario, each and every contract message bears runtime overhead by dealing 
with that `Vec`, regardless whether they access it or not, resulting in extra gas costs. 
To solve this problem we need to turn our storage into a `Non-Packed` layout somehow.

## Eager Loading vs. Lazy Loading
With the [`Lazy`](https://paritytech.github.io/ink/ink/storage/struct.Lazy.html) primitive, 
ink! provides means of breaking the storage up into smaller pieces, which can be loaded 
on demand. Wrapping any storage field inside a `Lazy` struct makes the storage 
`Non-Packed`, preventing it being eagerly loaded by arbitrary storage operations.

The following example demonstrates how we can solve the problem introduced in the above 
section. You'll notice that for the lazily loaded storage field, we now work with getters 
and setters to access and modify the underlying storage value:

```rust
#![cfg_attr(not(feature = "std"), no_std)]

#[ink::contract]
mod mycontract {
    use ink::prelude::vec::Vec;
    use ink::storage::Lazy;

    #[derive(Default)]
    #[ink(storage)]
    pub struct MyContract {
        tiny_value: Balance,
        /// This vector might get large and expensive to work with.
        /// We want to enforce a `Non-Packed` storage layout.
        large_vec: Lazy<Vec<Balance>>,
    }

    impl MyContract {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self::default()
        }

        /// Because `large_vec` is loaded lazyly, this message is always cheap.
        #[ink(message)]
        pub fn get_balance(&self) -> Balance {
            self.tiny_value
        }

        /// Lazy fields like `large_vec` provide `get()` and `set()` storage operators.
        #[ink(message)]
        pub fn add_balance(&mut self, value: Balance) {
            let mut balances = self.large_vec.get_or_default();
            balances.push(value);
            self.large_vec.set(&balances);
        }
    }
}
}
```

:::caution

`Vec` are always loaded as a whole, meaning that all elements of the `Vec` live under a 
single storage key. Wrapping the `Vec` inside `Lazy`, like the provided example above does, 
has no influence on its elements. If you are dealing with sparse arrays on contract 
storage, consider using a `Mapping` instead.

:::

## Considerations

It might be worthwhile to think about the desired storage layout of your contract. While 
using a `Packed` layout will keep your contracts overall code size smaller, it can cause 
unnecessarily high gas costs. Thus we consider it a good practice to break up large 
or complex storage layouts into reasonably sized distinct storage cells.

:::note

ink! `Mappings` are always `Non-Packed` and loaded lazily, one key-value pair at the time.

:::
