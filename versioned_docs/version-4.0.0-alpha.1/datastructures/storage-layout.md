---
title: Storage Layout
slug: /datastructures/storage-layout
---

Let's dive a bit deeper into the concepts behind ink! storage, so you can get a better 
understanding of some of its implications.

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
tiny fields, reading (decoding) and writing (encoding) the whole storage struct inside 
every message is not problematic. It may even be advantegous - especially if we expect most 
messages to interact with most of the storage fields.

On the other hand, this can get problematic if we're storing a large `Vec` on the
contract storage but provide messages that do not need to read and write from this `Vec`. 
In that scenario, each and every contract message bears the runtime gas costs dealing 
with that `Vec`, regardless whether they access it or not, resulting in extra gas costs. 

### Eager Loading vs. Lazy Loading

ink! spreads information to as many cells as possible. For example if you have the
following `#[ink(storage)]` struct every field will live in its own single storage cell.
Note that for `b` all 32 bytes will share the same cell!

```rust
#[ink(storage)]
pub struct Spread {
    a: i32,
    b: [u8; 32],
}
```

The following schema depicts the storage layout for a vector with three elements,
persisted to storage in a spread layout.

<div class="schema">
    <img src="/img/spread.svg" alt="Storage Organization: Spreading" />
</div>

## Eager Loading vs. Lazy Loading

When executing a contract, all the fields of the `#[ink(storage)]` struct will be pulled
from storage, regardless of whether or not they are used during the message execution.

Smart contract authors should be aware of this behaviour since it could potentially
affect their contract performance. For example, consider the following storage struct:

```rust
#[ink(storage)]
pub struct EagerLoading {
    a: i32,
    b: ink_prelude::vec::Vec<i32>,
}

impl EagerLoading {
    #[ink(message)]
    pub fn read_a(&self) {
        let a = self.a;
    }
}
```

In `EagerLoading::read_a()` we only read the `a` storage item. However, the `b` storage
item will still be loaded from storage. As a reminder, this means accessing the
underlying database and SCALE decoding the value. This can incur high costs, especially
as the number of elements in `b` grows.

:::note

Eager loading does **not** apply to `Mapping` fields, though, as key lookups in mappings
are done directly from contract storage.

:::

## Considerations

