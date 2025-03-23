---
title: Storage Layout
slug: /datastructures/storage-layout
hide_title: true
---

![Storage Title Picture](/img/title/storage.svg)

# Storage Layout

Smart contract authors are given some flexibility in regards on how they want to organize
the storage layout of their contracts.
Let's dive deeper into the concepts behind ink! storage to get a better understanding
of some of its implications and limitations.

## Storage Organization

The following schema depicts the storage which is exposed
to ink! by the contracts pallet:

<div class="schema">
    <img src="/img/kv.svg" alt="Storage Organization: Layout" />
</div>

Storage data is always encoded with the
[`SCALE`](https://docs.substrate.io/reference/scale-codec/) codec.
The storage API operates by storing and loading entries into and from a single storage
cells, where each storage cell is accessed under its own dedicated storage key. To some
extent, the storage API works similar to a traditional key-value database.

## Packed vs Non-Packed layout

Types that can be stored entirely under a single storage cell are considered
[`Packed`](https://docs.rs/ink_storage_traits/6.0.0/ink_storage_traits/trait.Packed.html).
By default, ink! tries to store all storage struct fields under a single storage cell.
Consequentially, with a `Packed` storage layout, any message interacting with the contract
storage will always need to operate on the entire contract storage struct.

For example, if we have a somewhat small contract storage struct consisting of only a few
tiny fields, pulling everything from the storage inside every message is not
problematic. It may even be advantageous - especially if we expect most messages to
interact with most of the storage fields.

On the other hand, this can get problematic if we're storing a large `ink::prelude::vec::Vec`
in the contract storage but provide messages that do not need to read and write from this
`Vec`. In that scenario, each and every contract message bears runtime overhead by dealing
with that `Vec`, regardless whether they access it or not. This results in extra gas costs.
To solve this problem we need to turn our storage into a non-packed layout somehow.

:::caution

If any type exhibiting `Packed` layout gets large enough (an ever-growing `Vec` might be
a prime candidate for this), it will break your contract.
This is because for encoding and decoding storage items, there is a buffer with only limited
capacity (around 16KB in the default configuration) available. This means any contract
trying to decode more than that will trap! If you are unsure about the potential size a
data structure might get, consider using an ink! `Mapping`, which can store an arbitrary
number of elements, instead.

:::

## Eager Loading vs. Lazy Loading
ink! provides means of breaking the storage up into smaller pieces, which can be loaded
on demand, with the
[`Lazy`](https://use-ink.github.io/ink/ink/storage/struct.Lazy.html) primitive.
Wrapping any storage field inside a `Lazy` struct makes the storage
struct in which that field appears also
non-`Packed`, preventing it from being eagerly loaded during arbitrary storage operations:

<div class="schema">
    <img src="/img/storage-layout.svg" alt="Storage Organization: Layout with a Lazy field" />
</div>

Note that in above illustration, the key of `0x12345678` just serves as an example; we'll
learn more about storage key calculation
[later in this chapter](#manual-vs-automatic-key-generation).

The following example demonstrates how we can solve the problem introduced in the above
section. You'll notice that for the lazily loaded storage field, we now work with getters
and setters to access and modify the underlying storage value:

```rust
#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod mycontract {
    use ink::prelude::vec::Vec;
    use ink::storage::Lazy;

    #[derive(Default)]
    #[ink(storage)]
    pub struct MyContract {
        tiny_value: Balance,
        /// This vector might get large and expensive to work with.
        /// We want to enforce a non-`Packed` storage layout.
        large_vec: Lazy<Vec<Balance>>,
    }

    impl MyContract {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self::default()
        }

        /// Because `large_vec` is loaded lazily, this message is always cheap.
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
```

:::caution

`ink::prelude::vec::Vec`'s are always loaded in their entirety. This is because all elements
of the `ink::prelude::vec::Vec` live under a single storage key. Wrapping the
`ink::prelude::vec::Vec` inside `Lazy`, like the
provided example above does, has no influence on its inner layout. If you are dealing with
large or sparse arrays on contract storage, consider using a `Mapping` instead.

:::

## Manual vs. Automatic Key Generation

By default, keys are calculated automatically for you, thanks to the
[`AutoKey`](https://docs.rs/ink_storage_traits/6.0.0/ink_storage_traits/struct.AutoKey.html)
primitive. They'll be generated at compile time and ruled out for conflicts.
However, for non-`Packed` types like `Lazy` or the `Mapping`, the
[`ManualKey`](https://docs.rs/ink_storage_traits/6.0.0/ink_storage_traits/struct.ManualKey.html)
primitive allows manual control over the storage key of a field like so:

```rust
#[ink(storage)]
pub struct MyContract {
    /// The storage key for this field is always `0x0000007f`
    inner: Lazy<bool, ManualKey<127>>,
}
```

This may be advantageous: Your storage key will always stay the same, regardless of
the version of your contract or ink! itself (note that the key calculation algorithm may
change with future ink! versions).

:::tip

Using `ManualKey` instead of `AutoKey` might be especially desirable for upgradable
contracts, as using `AutoKey` might result in a different storage key for the same field
in a newer version of the contract. This may break your contract after an upgrade 😱!

:::

The storage key of the contracts root storage struct defaults to `0x00000000`.  However,
contract developers can set the key to an arbitrary 4 bytes value by providing it a
`ManualKey` like so:

```rust
/// Manually set the root storage key of `MyContract` to be `0xcafebabe`.
#[ink(storage)]
pub struct MyContract<KEY: StorageKey = ManualKey<0xcafebabe>> {
    value: bool,
}
```

## Considerations

It might be worthwhile to think about the desired storage layout of your contract. While
using a `Packed` layout will keep your contracts overall code size smaller, it can cause
unnecessarily high gas costs. Thus, we consider it a good practice to break up large
or complex storage layouts into reasonably sized distinct storage cells.

:::note

ink! `Mapping`s are always non-`Packed` and loaded lazily, one key-value pair at the time.

:::
