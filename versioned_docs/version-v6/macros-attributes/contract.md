---
title: "#[ink::contract]"
hide_title: true
slug: /macros-attributes/contract
---

![Text/contract Title Picture](/img/title/text/contract.svg)

:::caution
This page has not yet been written for ink! v6.

TODO @davidsemakula Please add the `abi` header argument here.
:::


# \#[ink::contract]

The `#[ink::contract]` macro is the entry point for writing ink! smart contracts.

If you are a beginner trying to learn ink! we recommend starting
from the [Getting Started](../getting-started/setup.md) page of this documentation.

## Description

The macro does analysis on the provided smart contract code and generates
proper code.

## Usage

### Header Arguments

The `#[ink::contract]` macro can be provided with some additional comma-separated
header arguments:

### `compile_as_dependency: bool`

Tells the ink! code generator to **always** or **never**
compile the smart contract as if it was used as a dependency of another ink!
smart contract.

Normally this flag is only really useful for ink! developers who
want to inspect code generation of ink! smart contracts.
The author is not aware of any particular practical use case for users that
makes use of this flag but contract writers are encouraged to disprove this.

Note that it is recommended to make use of the built-in crate feature
`ink-as-dependency` to flag smart contract dependencies listed in a contract's
`Cargo.toml` as actual dependencies to ink!.

**Usage Example:**
```rust
#[ink::contract(compile_as_dependency = true)]
mod my_contract {
    #[ink(storage)]
    pub struct MyStorage;

    impl MyStorage {
        #[ink(constructor)]
        pub fn construct() -> Self { MyStorage {} }

        #[ink(message)]
        pub fn message(&self) {}
    }
    // ...
}
```

**Default value:** Depends on the crate feature propagation of `Cargo.toml`.

### `env: impl Environment`

Tells the ink! code generator which environment to use for the ink! smart contract.
The environment must implement the `Environment` (defined in `ink_env`) trait and provides
all the necessary fundamental type definitions for `Balance`, `AccountId` etc.

When using a custom `Environment` implementation for a smart contract all types
that it exposes to the ink! smart contract and the mirrored types used in the runtime
must be aligned with respect to SCALE encoding and semantics.

**Usage Example:**

Given a custom `Environment` implementation:
```rust
pub struct MyEnvironment;

impl ink::env::Environment for MyEnvironment {
    const MAX_EVENT_TOPICS: usize = 3;

    type AccountId = u64;
    type Balance = u128;
    type Hash = [u8; 32];
    type Timestamp = u64;
    type BlockNumber = u32;
    type ChainExtension = ::ink::env::NoChainExtension;
}
```
A user might implement their ink! smart contract using the above custom `Environment`
implementation as demonstrated below:

```rust
#[ink::contract(env = MyEnvironment)]
mod my_contract {
    pub struct MyEnvironment;

    impl ink::env::Environment for MyEnvironment {
        const MAX_EVENT_TOPICS: usize = 3;
        type AccountId = u64;
        type Balance = u128;
        type Hash = [u8; 32];
        type Timestamp = u64;
        type BlockNumber = u32;
        type ChainExtension = ::ink::env::NoChainExtension;
    }

    #[ink(storage)]
    pub struct MyStorage;

    impl MyStorage {
        #[ink(constructor)]
        pub fn construct() -> Self { MyStorage {} }

        #[ink(message)]
        pub fn message(&self) {}
    }
    // ...
}
```

**Default value:** `DefaultEnvironment` defined in `ink_env` crate.

## Analysis

The `#[ink::contract]` macro fully analyses its input smart contract
against invalid arguments and structure.

Some example rules include but are not limited to:

- There must be exactly one `#[ink(storage)]` struct.

     This struct defines the layout of the storage that the ink! smart contract operates on.
     The user is able to use a variety of built-in facilities, combine them in various ways
     or even provide their own implementations of storage data structures.

     For more information visit the `ink_storage` crate documentation.

     **Example:**

     ```rust
     #[ink::contract]
     mod flipper {
         #[ink(storage)]
         pub struct Flipper {
             value: bool,
         }

         impl Flipper {
             #[ink(constructor)]
             pub fn construct() -> Self { Flipper { value: false } }

             #[ink(message)]
             pub fn message(&self) {}
         }
     }
     ```

- There must be at least one `#[ink(constructor)]` defined method.

     Methods flagged with `#[ink(constructor)]` are special in that they are dispatchable
     upon contract instantiation. A contract may define multiple such constructors which
     allow users of the contract to instantiate a contract in multiple different ways.

     **Example:**

     Given the `Flipper` contract definition above we add an `#[ink(constructor)]`
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

             #[ink(message)]
             pub fn message(&self) {}
         }
     }
     ```

- There must be at least one `#[ink(message)]` defined method.

     Methods flagged with `#[ink(message)]` are special in that they are dispatchable
     upon contract invocation. The set of ink! messages defined for an ink! smart contract
     define its API surface with which users are allowed to interact.

     An ink! smart contract can have multiple such ink! messages defined.

     **Note:**

     - An ink! message with a `&self` receiver may only read state whereas an ink! message
       with a `&mut self` receiver may mutate the contract's storage.

     **Example:**

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

     **Payable Messages:**

     An ink! message by default will reject calls that additional fund the smart contract.
     Authors of ink! smart contracts can make an ink! message payable by adding the `payable`
     flag to it. An example below:

     Note that ink! constructors are always implicitly payable and thus cannot be flagged
     as such.

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
             #[ink(payable)] // You can either specify payable out-of-line.
             pub fn flip(&mut self) {
                 self.value = !self.value;
             }

             /// Returns the current value.
             #[ink(message, payable)] // ...or specify payable inline.
             pub fn get(&self) -> bool {
                 self.value
             }
         }
     }
     ```

     **Controlling the messages selector:**

     Every ink! message and ink! constructor has a unique selector with which the
     message or constructor can be uniquely identified within the ink! smart contract.
     These selectors are mainly used to drive the contract's dispatch upon calling it.

     An ink! smart contract author can control the selector of an ink! message or ink!
     constructor using the `selector` flag. An example is shown below:

     ```rust
     #[ink::contract]
     mod flipper {
         #[ink(storage)]
         pub struct Flipper {
             value: bool,
         }

         impl Flipper {
             #[ink(constructor)]
             #[ink(selector = "0xDEADBEEF")] // Works on constructors as well.
             pub fn new(initial_value: bool) -> Self {
                 Flipper { value: false }
             }

             /// Flips the current value.
             #[ink(message)]
             #[ink(selector = "0xCAFEBABE")] // You can either specify selector out-of-line.
             pub fn flip(&mut self) {
                 self.value = !self.value;
             }

             /// Returns the current value.
             #[ink(message, selector = "0xFEEDBEEF")] // ...or specify selector inline.
             pub fn get(&self) -> bool {
                 self.value
             }
         }
     }
     ```

## Interacting with the Contract Executor

The `ink_env` crate provides facilities to interact with the contract executor that
connects ink! smart contracts with the outer world.

For example it is possible to query the current call's caller via:

```rust
use ink_env;
ink::env::test::run_test::<ink::env::DefaultEnvironment, _>(|_| {
    let caller = ink::env::caller::<ink::env::DefaultEnvironment>();
    let _caller = caller;
    Ok(())
}).unwrap();
```

However, ink! provides a much simpler way to interact with the contract executor
via its environment accessor. An example below:

```rust
#[ink::contract]
mod greeter {
    #[ink(storage)]
    pub struct Greeter;

    impl Greeter {
        #[ink(constructor)]
        pub fn new() -> Self {
            let caller = Self::env().caller();
            let message = format!("thanks for instantiation {:?}", caller);
            ink::env::debug_println(&message);
            Greeter {}
        }

        #[ink(message, payable)]
        pub fn fund(&mut self) {
            let caller = self.env().caller();
            let value = self.env().transferred_balance();
            let message = format!("thanks for the funding of {:?} from {:?}", value, caller);
            ink::env::debug_println(&message);
        }
    }
}
```

## Events

An ink! smart contract may define events that it can emit during contract execution.
Emitting events can be used by third party tools to query information about a contract's
execution and state.

The following example ink! contract shows how an event `Transferred` is defined and
emitted in the `#[ink(constructor)]`.

```rust
 #[ink::contract]
 mod erc20 {
     /// Defines an event that is emitted every time value is transferred.
     #[ink(event)]
     pub struct Transferred {
         from: Option<AccountId>,
         to: Option<AccountId>,
         value: Balance,
     }

     #[ink(storage)]
     pub struct Erc20 {
         total_supply: Balance,
         // more fields ...
     }

     impl Erc20 {
         #[ink(constructor)]
         pub fn new(initial_supply: Balance) -> Self {
             let caller = Self::env().caller();
             Self::env().emit_event(Transferred {
                 from: None,
                 to: Some(caller),
                 value: initial_supply,
             });
             Self { total_supply: initial_supply }
         }

         #[ink(message)]
         pub fn total_supply(&self) -> Balance {
             self.total_supply
         }
     }
 }
```

## Example: Flipper

The below code shows the complete implementation of the so-called Flipper
ink! smart contract.
For us it acts as the "Hello, World!" of the ink! smart contracts because
it is minimal while still providing some more or less useful functionality.

It controls a single `bool` value that can be either `false` or `true`
and allows the user to flip this value using the `Flipper::flip` message
or retrieve the current value using `Flipper::get`.

```rust
#[ink::contract]
pub mod flipper {
    #[ink(storage)]
    pub struct Flipper {
        value: bool,
    }

    impl Flipper {
        /// Creates a new flipper smart contract initialized with the given value.
        #[ink(constructor)]
        pub fn new(init_value: bool) -> Self {
            Self { value: init_value }
        }

        /// Flips the current value of the Flipper's bool.
        #[ink(message)]
        pub fn flip(&mut self) {
            self.value = !self.value;
        }

        /// Returns the current value of the Flipper's bool.
        #[ink(message)]
        pub fn get(&self) -> bool {
            self.value
        }
    }
}
```
