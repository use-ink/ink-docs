---
title: Cross-Contract Calling
slug: /basics/cross-contract-calling
---

In ink! contracts it is possible to call ink! messages and ink! constructors. So ink! constructors allow
delegation and ink! messages can easily call other ink! messages.
Given another ink! contract like, we can call any of its functions.

See our [`delegator example contract`](https://github.com/use-ink/ink-examples/blob/main/delegator/lib.rs) 
for an elaborate example which uses cross-contract calling.

### How it Works

In order to deploy the delegator smart contract we first
have to manually put the code of the other contract, receive
its code hash from the signalled event and put their code hash
into our calling smart contract.

The calling contract looks like this:

```rust
use other_contract::OtherContract;

//--snip--
#[ink(storage)]
struct MyContract {
    /// The other contract.
    other_contract: OtherContract,
}

impl MyContract {
    /// Instantiate `MyContract with the given
    /// sub-contract codes and some initial value.
    #[ink(constructor)]
    pub fn new(
        other_contract_code_hash: Hash,
    ) -> Self {
        let other_contract = OtherContract::new(1337)
            .endowment(total_balance / 4)
            .code_hash(other_contract_code_hash)
            .instantiate()
            .expect("failed at instantiating the `OtherContract` contract");
        Self {
            other_contract
        }
    }

    /// Calls the other contract.
    #[ink(message)]
    pub fn call_other_contract(&self) -> i32 {
        self.other_contract.get_value()
    }
}
//--snip--
```

It's `Cargo.toml` contains
```toml
other_contract = { path = "other_contract", default-features = false, features = ["ink-as-dependency"] }
```

The `other_contract/Cargo.toml` contains this:

```toml
[features]
ink-as-dependency = []
```

Tells the ink! code generator to **always** or **never**
compile the smart contract as if it was used as a dependency of another ink!
smart contract.

The `other_contract/lib.rs`:

```rust
#[ink::contract]
pub mod other_contract {
    /// Storage for the other contract.
    #[ink(storage)]
    pub struct OtherContract {
        value: i32,
    }

    impl OtherContract {
        /// Initializes the contract.
        #[ink(constructor)]
        pub fn new(value: i32) -> Self {
            Self { value }
        }

        /// Returns the current state.
        #[ink(message)]
        pub fn get_value(&self) -> i32 {
            self.value
        }
    }
}
```
