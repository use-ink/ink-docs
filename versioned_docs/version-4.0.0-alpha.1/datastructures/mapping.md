---
title: Working with Mapping 
slug: /datastructures/mapping
---

In this section we demonstrate how to work with ink! [`Mapping`](https://docs.rs/ink_storage/4.0.0-beta.1/ink_storage/struct.Mapping.html).

Here is an example of a mapping from a user to a `Balance`:

```rust
#[ink(storage)]
pub struct MyContract {
    /// Assign a balance to every account.
    map: balances: ink::storage::Mapping<AccountId, Balance>
}
```

This means that for a given key, you can store a unique instance of a value type. In this
case, each "user" gets credited their own balance. 

## Example: Using a `Mapping`

The following example contract utilizes a `Mapping` so that anyone can deposit and withdraw 
balance for their own account:

```rust
#![cfg_attr(not(feature = "std"), no_std)]

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

        /// Retreive the balance of the caller.
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

### Updating values

The attentive reader may have noticed that accessing mapping values via the `Mapping::get()` 
method will result in an owned value (a local copy), as opposed to a direct reference 
into the storage. Changes to this value won't be reflected in the contracts storage 
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

### Storage loading behaviour

Each `Mapping` value lives under it's own storage key. Briefly, this means that `Mapping`s are 
lazily loaded in ink!. In other words, if your message only accesses a single key of a 
mapping, it will not load the whole mapping but only the value being accessed.

```rust
// This causes only a single storage access and the decoding of a single "MyValue" struct,
// no matter ho many elements there are inside the mapping.
let foo: MyValue = my_mapping.get(0)?;

for n in 0..5 {
    // This causes a storage access and a decoding operation for each loop iteration.
    // It is not possible to "fetch" all key/value pairs directly at once.
    let bar: MyValue = my_mapping.get(n)?;
}

```

Furthermore, this implies that it is not possible to iterate over the contents of a map. 
Circumventing this restriction by storing populated keys inside an `ink_prelude::Vec` is not 
advisable as this might result in very high gas costs.
