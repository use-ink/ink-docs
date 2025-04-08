---
title: "#[ink::contract]"
hide_title: true
slug: /macros-attributes/contract
---

![Text/contract Title Picture](/img/title/text/contract.svg)

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

### `abi: String`

Tells the ink! code generator which ABI (Application Binary Interface)
specification(s) to support for contract interactions
(i.e. which calling conventions to use for message calls).

**Default value:** `"ink"`

**Allowed values:** `"ink"`, `"sol"`, `"all"`

**Usage Example:**
```rust
#[ink::contract(abi = "sol")]
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

#### `abi = "ink"`

The code generator follows the ink! ABI specification. This means:
- By default, message selectors are generated according to the
  [ink! ABI specification for selectors][ink-spec-selector].
- Message selectors can be manually overridden using the `selector` attribute.
- Parity's [SCALE Codec][scale-codec] is used for input/output encoding/decoding.
- Call builders (used for making cross-contract calls) are generated for ink! ABI
  calling conventions.

#### `abi = "sol"`

The code generator follows the [Solidity ABI specification][sol-abi]. This means:

- Message selectors are **always** generated according to the
  [Solidity ABI specification for function selectors][sol-abi-selector].
- Message selector manual overrides using the `selector` attribute are ignored.
- [Solidity ABI encoding][sol-abi-codec] is used for input/output encoding/decoding.
- Call builders are generated for Solidity ABI calling conventions.

#### `abi = "all"`

The code generator follows both the ink! and Solidity ABI specifications, and
generates entry points for both calling conventions. This means:

- For each message, two selectors are generated, one for ink! and another for
  Solidity ABI.
- Each selector is ABI specific and its entry point uses the corresponding
  input/output encoding/decoding scheme (i.e. entry points for ink! selectors use
  Parity's [SCALE Codec][scale-codec], while entry points for Solidity selectors
  use Solidity ABI encoding/decoding for input/output encoding/decoding).
- Message selector manual overrides (using the `selector` attribute) are respected
  for ink! ABI entry points but ignored for Solidity ABI entry points
  (i.e. Solidity selectors are **always** generated according to the
  [Solidity ABI specification for function selectors][sol-abi-selector]).
- Call builders are generated for both ink! and Solidity ABI calling conventions,
  and a `_sol` suffix is used to disambiguate Solidity calls.

Please note that your contract sizes will get larger if you support both the ink!
and Solidity ABI.

For contracts that support Solidity ABI encoding (i.e. `abi = "sol"` or `abi = "all"`),
all types used as constructor/message arguments and return types must define a mapping
to an equivalent Solidity type.

This mapping is defined using the [`SolEncode`][sol-trait-encode] and
[`SolDecode`][sol-trait-decode] traits, which are analogs to `scale::Encode` and
`scale::Decode` (but for Solidity ABI encoding/decoding).

[`SolEncode`][sol-trait-encode] and [`SolDecode`][sol-trait-decode] are implemented
for the following Rust/ink! primitive types creating a mapping
to the corresponding Solidity ABI types as shown in the table below:

| Rust/ink! type | Solidity ABI type | Notes |
| -------------- | ----------------- | ----- |
| `bool` | `bool` ||
| `iN` for `N ∈ {8,16,32,64,128}` | `intN` | e.g `i8` ↔ `int8` |
| `uN` for `N ∈ {8,16,32,64,128}` | `uintN` | e.g `u8` ↔ `uint8` |
| [`ink::U256`][ink-u256] | `uint256` ||
| `String` | `string` ||
| `Box<str>` | `string` ||
| [`ink::Address`][ink-address] / [`ink::H160`][ink-h160] | `address` | `ink::Address` is a type alias for the `ink::H160` type used for addresses in `pallet-revive` |
| `[T; N]` for `const N: usize` | `T[N]` | e.g. `[i8; 64]` ↔ `int8[64]` |
| `Vec<T>` | `T[]` | e.g. `Vec<i8>` ↔ `int8[]` |
| `Box<[T]>` | `T[]` | e.g. `Box<[i8]>` ↔ `int8[]` |
| [`ink::SolBytes<u8>`][ink-sol-bytes] | `bytes1` ||
| [`ink::SolBytes<[u8; N]>`][ink-sol-bytes] for `1 <= N <= 32` | `bytesN` | e.g. `ink::SolBytes<[u8; 1]>` ↔ `bytes1` |
| [`ink::SolBytes<Vec<u8>>`][ink-sol-bytes] | `bytes` ||
| [`ink::SolBytes<Box<[u8]>>`][ink-sol-bytes] | `bytes` ||
| `(T1, T2, T3, ... T12)` | `(U1, U2, U3, ... U12)` | where `T1` ↔ `U1`, ... `T12` ↔ `U12` e.g. `(bool, u8, Address)` ↔ `(bool, uint8, address)` |

[`SolEncode`][sol-trait-encode] is additionally implemented for reference and smart
pointer types below:

| Rust/ink! type | Solidity ABI type | Notes |
| -------------- | ----------------- | ----- |
| `&str`, `&mut str` | `string` ||
| `&T`, `&mut T`, `Box<T>` | `T` | e.g. `&i8 ↔ int8` |
| `&[T]`, `&mut [T]` | `T[]` | e.g. `&[i8]` ↔ `int8[]` |

See the rustdoc for [`SolEncode`][sol-trait-encode] and [`SolDecode`][sol-trait-decode]
for instructions for implementing the traits for custom arbitrary types.

Please note that Rust's [coherence/orphan rules][rust-coherence] mean that you can
only implement the [`SolEncode`][sol-trait-encode] and [`SolDecode`][sol-trait-decode]
traits for local types.

[ink-spec-selector]: https://use.ink/basics/selectors/
[scale-codec]: https://docs.rs/parity-scale-codec/latest/parity_scale_codec
[sol-abi]: https://docs.soliditylang.org/en/latest/abi-spec.html
[sol-abi-selector]: https://docs.soliditylang.org/en/latest/abi-spec.html#function-selector
[sol-abi-codec]: https://docs.soliditylang.org/en/latest/abi-spec.html#formal-specification-of-the-encoding
[ink-u256]: https://docs.rs/ink/latest/ink/struct.U256.html
[ink-address]: https://docs.rs/ink/latest/ink/type.Address.html
[ink-h160]: https://docs.rs/ink/latest/ink/struct.H160.html
[ink-sol-bytes]: https://docs.rs/ink/latest/ink/struct.SolBytes.html
[sol-trait-encode]: https://docs.rs/ink/latest/ink/trait.SolEncode.html
[sol-trait-decode]: https://docs.rs/ink/latest/ink/trait.SolEncode.html
[rust-coherence]: https://doc.rust-lang.org/reference/items/implementations.html#trait-implementation-coherence

### `keep_attr: String`

Tells the ink! code generator which attributes should be passed to call builders.
Call builders are used for making cross-contract calls and are automatically
generated for contracts.

**Usage Example:**

```rust
#[ink::contract(keep_attr = "foo, bar")]
mod my_contract {
    #[ink(storage)]
    pub struct MyStorage;
    
    impl MyStorage {
        #[ink(constructor)]
        #[bar]
        pub fn construct() -> Self { MyStorage {} }
        
        #[ink(message)]
        #[foo]
        pub fn message(&self) {}
    }
    
    // ...
}
```

**Allowed attributes by default:** `cfg`, `cfg_attr`, `allow`, `warn`, `deny`,
`forbid`, `deprecated`, `must_use`, `doc`, `rustfmt`.

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
