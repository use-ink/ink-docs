---
title: Working with Mapping
slug: /datastructures/mapping
hide_title: true
---

![Storage Title Picture](/img/title/storage.svg)

# Working with Mapping

In this section we demonstrate how to work with ink! [`Mapping`](https://docs.rs/ink_storage/6.0.0/ink_storage/struct.Mapping.html).

Here is an example of a mapping from a user to a `Balance`:

```rust
#[ink(storage)]
pub struct MyContract {
    /// Assign a balance to every account.
    balances: ink::storage::Mapping<AccountId, Balance>,
}
```

This means that for a given key, you can store a unique instance of a value type. In this
case, each "user" gets credited their own balance.

## Example: Using a `Mapping`

The following example contract utilizes a `Mapping` so that anyone can deposit and withdraw
balance for their own account:

```rust
#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod mycontract {
    use ink::storage::Mapping;

    #[ink(storage)]
    pub struct MyContract {
        /// Assign a balance to every account ID
        balances: Mapping<AccountId, Balance>,
    }

    impl MyContract {
        /// Constructor to initialize the contract with an empty mapping.
        #[ink(constructor, payable)]
        pub fn new() -> Self {
            let balances = Mapping::default();
            Self { balances }
        }

        /// Retrieve the balance of the caller.
        #[ink(message)]
        pub fn get_balance(&self) -> Option<Balance> {
            let caller = self.env().caller();
            self.balances.get(caller)
        }

        /// Credit more money to the contract.
        #[ink(message, payable)]
        pub fn transfer(&mut self) {
            let caller = self.env().caller();
            let balance = self.balances.get(caller).unwrap_or(0);
            let endowment = self.env().transferred_value();
            self.balances.insert(caller, &(balance + endowment));
        }

        /// Withdraw all your balance from the contract.
        pub fn withdraw(&mut self) {
            let caller = self.env().caller();
            let balance = self.balances.get(caller).unwrap();
            self.balances.remove(caller);
            self.env().transfer(caller, balance).unwrap()
        }
    }
}

```

## Considerations when using the `Mapping` type

One of the main purposes of the ink! `Mapping` is to allow storing a lot of values.

:::note

There are many additional data structures accessible under `ink::prelude::collections`,
such as `HashMap` or `BTreeMap` (to name a few). Note that these data structures all exhibit
`Packed` storage loading behavior, as opposed to the ink! `Mapping`!

:::

### Storage loading behavior

Each `Mapping` value lives under it's own storage key. Briefly, this means that `Mapping`s
are lazily loaded in ink!. In other words, if your message only accesses a single key of a
mapping, it will not load the whole mapping but only the value being accessed.

```rust
// This causes only a single storage access and the decoding of a single "MyValue" struct,
// no matter how many elements there are inside the mapping.
let foo: MyValue = my_mapping.get(0)?;

for n in 0..5 {
    // This causes a storage access and a decoding operation for each loop iteration.
    // It is not possible to "fetch" all key/value pairs directly at once.
    let bar: MyValue = my_mapping.get(n)?;
}
```

Furthermore, it follows that mapping values do not have a contiguous storage layout, and it is
not possible to iterate over the contents of a map.


### Use fallible storage methods for dynamically sized values
Reading from or writing to a `Mapping` implies encoding or decoding
the according `Mapping` key and value. This happens transparently under the hood.
However, because the static buffer used to store the encoded data is of limited
size, it can fail and trap the contract.

:::note

The static buffer defaults to 16KB in size.

:::

This can be an issue for values with dynamically sized types.
It is recommended to use fallible storage methods (prefixed with `try_`) for
`Mapping`s containing dynamically sized values.

Consider a `Mapping` with `String` values like so:

```rust
#[ink(storage)]
pub struct MyContract {
    on_chain_log: Mapping<u64, String>,
    nonce: u64,
}
```

If the `String` overgrows the static buffer size, it will no longer fit into the mapping:

```rust
#[ink(message)]
pub fn do_something(&mut self, data: String) {
    let caller = self.env().caller();

    let log_message = format!("{caller:?}: {data}");

    // Panics if log_message overgrows the static buffer size!
    self.on_chain_log.insert(&self.nonce, &log_message);

    self.nonce += 1;
}
```

Instead, consider using the fallible `try_insert` method to handle the situation:

```rust
#[ink(message)]
pub fn do_something2(&mut self, data: String) {
    let caller = self.env().caller();

    let log_message = format!("{caller:?}: {data}");

    // `try_insert` will not panic but return an error instead.
    if self
        .on_chain_log
        .try_insert(&self.nonce, &log_message)
        .is_err()
    {
        // We get the chance to handle this problem properly:
        // Restrain the log message to a size guaranteed to fit.
        let log_message = format!("{caller:?}: <data omitted>");
        self.on_chain_log.insert(&self.nonce, &log_message);
    }

    self.nonce += 1;
}
```

We provide fallible `try_` versions for all storage operations on `Mapping`.

### Updating values

The attentive reader may have noticed that accessing mapping values via the `Mapping::get()`
method will result in an owned value (a local copy), as opposed to a direct reference
into the storage. Changes to this value won't be reflected in the contract's storage
"automatically". To avoid this common pitfall, the value must be inserted again at the same
key after it was modified. The `transfer` function from above example illustrates this:

```rust
pub fn transfer(&mut self) {
    let caller = self.env().caller();
    // `balance` is a local value and not a reference to the value on storage!
    let balance = self.balances.get(caller).unwrap_or(0);
    let endowment = self.env().transferred_value();
    // The following line of code would have no effect to the balance of the
    // caller stored in contract storage:
    //
    // balance += endowment;
    //
    // Instead, we use the `insert` function to write it back like so:
    self.balances.insert(caller, &(balance + endowment));
}
```
