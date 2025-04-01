---
title: "#[ink::chain_extension]"
slug: /macros-attributes/chain-extension
hide_title: true
---

![Text/chain Ext Title Picture](/img/title/text/chain-ext.svg)

:::caution
This page has not yet been edited for ink! v6 yet.

TODO 
:::

In the default configuration of the `contracts-pallet` a smart contract can only interact with the runtime
via its well defined set of basic smart contract interface functions. This API already allows a whole variety of
interaction between the `contracts-pallet` and the executed smart contract. For example it is possible
to call and instantiate other smart contracts on the same chain, emit events, query context information
or run built-in cryptographic hashing procedures.

If this basic set of features is not enough for a particular Polkadot SDK built blockchain it is possible
to easily extend this API using the so-called chain extension feature.

<center>
  <img src="/img/venn.png" width="50%" />
</center>

With chain extensions you can expose parts of your runtime logic
to smart contract developers.

:::note
The ink! examples repository contains [the `rand-extension` example](https://github.com/use-ink/ink-examples/tree/main/rand-extension).
This is a complete example of a chain extension implemented in both ink! and Polkadot SDK.
:::

## Structure

The interface consists of an error code that indicates lightweight errors
as well as the definition of some chain extension methods.

The overall structure follows that of a simple Rust trait definition.
The error code is defined as an associated type definition of the trait definition.
The methods are defined as associated trait methods without implementation.

Chain extension methods must not have a `self` receiver such as `&self` or `&mut self`
and must have inputs and output that implement SCALE codec. Their return value follows
specific rules that can be altered using the `handle_status` attribute and
alternation between  `Result` and Non-`Result` types which are described in more detail below.

## Usage

Usually the chain extension definition using this proc. macro is provided
by the author of the chain extension in a separate crate.
ink! smart contracts using this chain extension simply depend on this crate
and use its associated environment definition in order to make use of
the methods provided by the chain extension.

## Macro Attributes

The macro supports only one required argument: `extension = N: u16`.
The runtime may have several chain extensions at the same time. The `extension`
identifier points to the corresponding chain extension in the runtime.
The value should be the same as during the definition of the chain extension.
You can consult the 
[chain extension module documentation](https://paritytech.github.io/polkadot-sdk/master/pallet_contracts/chain_extension/index.html)
if you are unsure how to find the chain extension code.
Otherwise, you should consult the target chain's documentation 
for specifications of any chain extensions it exposes.

:::note
If the chain extension is not used in a tuple in the runtime configuration, 
`extension = N: u16` can take any `u16` number.
:::

## Method Attributes

There are two different attributes with which the chain extension methods
can be flagged:

| Attribute | Required | Default Value | Description |
|:----------|:--------:|:--------------|:-----------:|
| `ink(function = N: u16)` | Yes | - | Determines the unique function ID within the chain extension. |
| `ink(handle_status = flag: bool)` | Optional | `true` | Assumes that the returned status code of the chain extension method always indicates success and therefore always loads and decodes the output buffer of the call. |

As with all ink! attributes multiple of them can either appear in a contiguous list:

```rust
type Access = i32;

#[ink::chain_extension(extension = 12)]
pub trait MyChainExtension {
    type ErrorCode = i32;

    #[ink(function = 5, handle_status = false)]
    fn key_access_for_account(key: &[u8], account: &[u8]) -> Access;
}
```

…or as multiple standalone ink! attributes applied to the same item:

```rust
type Access = i32;

#[ink::chain_extension(extension = 12)]
pub trait MyChainExtension {
  type ErrorCode = i32;

  #[ink(function = 5)]
  #[ink(handle_status = false)]
  fn key_access_for_account(key: &[u8], account: &[u8]) -> Access;
}
```

## Details: `handle_status`

Default value: `true`

By default all chain extension methods should return a `Result<T, E>` where `E: From<Self::ErrorCode>`.
The `Self::ErrorCode` represents the error code of the chain extension.
This means that a smart contract calling such a chain extension method first queries the returned
status code of the chain extension method and only loads and decodes the output if the returned
status code indicates a successful call.
This design was chosen as it is more efficient when no output besides the error
code is required for a chain extension call. When designing a chain extension try to utilize the
error code to return errors and only use the output buffer for information that does not fit in
a single `u32` value.

A chain extension method that is flagged with `handle_status = false` assumes that the returned error code
will always indicate success. Therefore it will always load and decode the output buffer and loses
the `E: From<Self::ErrorCode` constraint for the call.

Note that if a chain extension method does not return `Result<T, E>` where `E: From<Self::ErrorCode>`,
but `handle_status = true` it will still return a value of type `Result<T, Self::ErrorCode>`.

## Usage: `handle_status` + `Result<T, E>` return type

Use both `handle_status = false` and non-`Result` return type for the same chain extension method
if a call to it may never fail and never returns a `Result` type.

## Combinations

Due to the possibility to flag a chain extension method with `handle_status` and either (1) return `Result<T, E>`
or (2) return just `T`
there are 4 different cases with slightly varying semantics:

| `handle_status` | Returns `Result<T, E>` | Effects |
|:---------------:|:----------------:|:--------|
|`true` |`true` | The chain extension method is required to return a value of type `Result<T, E>` where `E: From<Self::ErrorCode>`. A call will always check if the returned status code indicates success and only then will load and decode the value in the output buffer. |
|`true` |`false`| The chain extension method may return any non-`Result` type. A call will always check if the returned status code indicates success and only then will load and decode the value in the output buffer. The actual return type of the chain extension method is still `Result<T, Self::ErrorCode>` when the chain extension method was defined to return a value of type `T`. |
|`false`|`true` | The chain extension method is required to return a value of type `Result<T, E>`. A call will always assume that the returned status code indicates success and therefore always load and decode the output buffer directly. |
|`false`|`false`| The chain extension method may return any non-`Result` type. A call will always assume that the returned status code indicates success and therefore always load and decode the output buffer directly. |

## Error Code

Every chain extension defines exactly one `ErrorCode` using the following syntax:

```rust
#[ink::chain_extension]
pub trait MyChainExtension {
    type ErrorCode = MyErrorCode;

    // more definitions ...
}
```

The defined `ErrorCode` must implement `FromStatusCode` which should be implemented as a
more or less trivial conversion from the `u32` status code to a `Result<(), Self::ErrorCode>`.
The `Ok(())` value indicates that the call to the chain extension method was successful.

By convention an error code of `0` represents success.
However, chain extension authors may use whatever suits their needs.

## Example: Definition

In the below example a chain extension is defined that allows its users to read and write
from and to the runtime storage using access privileges:

```rust
/// Custom chain extension to read to and write from the runtime.
#[ink::chain_extension(extension = 12)]
pub trait RuntimeReadWrite {
    type ErrorCode = ReadWriteErrorCode;

    /// Reads from runtime storage.
    ///
    /// # Note
    ///
    /// Actually returns a value of type `Result<Vec<u8>, Self::ErrorCode>`.
    #[ink(function = 1, returns_result = false)]
    fn read(key: &[u8]) -> Vec<u8>;

    ///
    /// Reads from runtime storage.
    ///
    /// Returns the number of bytes read and up to 32 bytes of the
    /// read value. Unused bytes in the output are set to 0.
    ///
    /// # Errors
    ///
    /// If the runtime storage cell stores a value that requires more than
    /// 32 bytes.
    ///
    /// # Note
    ///
    /// This requires `ReadWriteError` to implement `From<ReadWriteErrorCode>`
    /// and may potentially return any `Self::ErrorCode` through its return value.
    #[ink(function = 2)]
    fn read_small(key: &[u8]) -> Result<(u32, [u8; 32]), ReadWriteError>;

    /// Writes into runtime storage.
    ///
    /// # Note
    ///
    /// Actually returns a value of type `Result<(), Self::ErrorCode>`.
    #[ink(function = 3)]
    fn write(key: &[u8], value: &[u8]);

    /// Returns the access allowed for the key for the caller.
    ///
    /// # Note
    ///
    /// Assumes to never fail the call and therefore always returns `Option<Access>`.
    #[ink(function = 4, handle_status = false)]
    fn access(key: &[u8]) -> Option<Access>;

    /// Unlocks previously acquired permission to access key.
    ///
    /// # Errors
    ///
    /// If the permission was not granted.
    ///
    /// # Note
    ///
    /// Assumes the call to never fail and therefore does _NOT_ require `UnlockAccessError`
    /// to implement `From<Self::ErrorCode>` as in the `read_small` method above.
    #[ink(function = 5, handle_status = false)]
    fn unlock_access(key: &[u8], access: Access) -> Result<(), UnlockAccessError>;
}

#[ink::scale_derive(Encode, Decode, TypeInfo)]
pub enum ReadWriteErrorCode {
  InvalidKey,
  CannotWriteToKey,
  CannotReadFromKey,
}

#[ink::scale_derive(Encode, Decode, TypeInfo)]
pub enum ReadWriteError {
  ErrorCode(ReadWriteErrorCode),
  BufferTooSmall { required_bytes: u32 },
}

impl From<ReadWriteErrorCode> for ReadWriteError {
  fn from(error_code: ReadWriteErrorCode) -> Self {
    Self::ErrorCode(error_code)
  }
}

impl From<scale::Error> for ReadWriteError {
  fn from(_: scale::Error) -> Self {
    panic!("encountered unexpected invalid SCALE encoding")
  }
}

#[ink::scale_derive(Encode, Decode, TypeInfo)]
pub struct UnlockAccessError {
  reason: String,
}

impl From<scale::Error> for UnlockAccessError {
  fn from(_: scale::Error) -> Self {
    panic!("encountered unexpected invalid SCALE encoding")
  }
}

#[ink::scale_derive(Encode, Decode, TypeInfo)]
pub enum Access {
  ReadWrite,
  ReadOnly,
  WriteOnly,
}

impl ink::env::chain_extension::FromStatusCode for ReadWriteErrorCode {
  fn from_status_code(status_code: u32) -> Result<(), Self> {
    match status_code {
      0 => Ok(()),
      1 => Err(Self::InvalidKey),
      2 => Err(Self::CannotWriteToKey),
      3 => Err(Self::CannotReadFromKey),
      _ => panic!("encountered unknown status code"),
    }
  }
}
```

All the error types and other utility types used in the chain extension definition
above are often required to implement various traits such as SCALE's `Encode` and `Decode`
as well as `scale-info`'s `TypeInfo` trait.

A full example of the above chain extension definition can be seen
[here](https://github.com/use-ink/ink/blob/017f71d60799b764425334f86b732cc7b7065fe6/crates/lang/macro/tests/ui/chain_extension/simple.rs).

## Example: Environment

In order to allow ink! smart contracts to use the above defined chain extension it needs
to be integrated into an `Environment` definition as shown below:

```rust
type RuntimeReadWrite = i32;

use ink::env::{Environment, DefaultEnvironment};

pub enum CustomEnvironment {}

impl Environment for CustomEnvironment {
    const MAX_EVENT_TOPICS: usize =
        <DefaultEnvironment as Environment>::MAX_EVENT_TOPICS;

    type AccountId = <DefaultEnvironment as Environment>::AccountId;
    type Balance = <DefaultEnvironment as Environment>::Balance;
    type Hash = <DefaultEnvironment as Environment>::Hash;
    type BlockNumber = <DefaultEnvironment as Environment>::BlockNumber;
    type Timestamp = <DefaultEnvironment as Environment>::Timestamp;

    type ChainExtension = RuntimeReadWrite;
}
```

Above we defined the `CustomEnvironment` which defaults to ink!'s `DefaultEnvironment`
for all constants and types but the `ChainExtension` type which is assigned to our newly
defined chain extension.

## Example: Usage

An ink! smart contract can use the above defined chain extension through the `Environment`
definition defined in the last example section using the `env` macro parameter as
shown below.

Note that chain extension methods are accessible through `Self::extension()` or
`self.extension()`. For example as in `Self::extension().read(..)` or `self.extension().read(..)`.

```rust
#[ink::contract(env = CustomEnvironment)]
mod read_writer {

    #[ink(storage)]
    pub struct ReadWriter {}

    impl ReadWriter {
        #[ink(constructor)]
        pub fn new() -> Self { Self {} }

        #[ink(message)]
        pub fn read(&self, key: Vec<u8>) -> Result<Vec<u8>, ReadWriteErrorCode> {
            self.env()
                .extension()
                .read(&key)
        }

        #[ink(message)]
        pub fn read_small(&self, key: Vec<u8>) -> Result<(u32, [u8; 32]), ReadWriteError> {
            self.env()
                .extension()
                .read_small(&key)
        }

        #[ink(message)]
        pub fn write(
            &self,
            key: Vec<u8>,
            value: Vec<u8>,
        ) -> Result<(), ReadWriteErrorCode> {
            self.env()
                .extension()
                .write(&key, &value)
        }

        #[ink(message)]
        pub fn access(&self, key: Vec<u8>) -> Option<Access> {
            self.env()
                .extension()
                .access(&key)
        }

        #[ink(message)]
        pub fn unlock_access(&self, key: Vec<u8>, access: Access) -> Result<(), UnlockAccessError> {
            self.env()
                .extension()
                .unlock_access(&key, access)
        }
    }

    /// Custom chain extension to read to and write from the runtime.
    #[ink::chain_extension(extension = 12)]
    pub trait RuntimeReadWrite {
          type ErrorCode = ReadWriteErrorCode;
          #[ink(function = 1)]
          fn read(key: &[u8]) -> Vec<u8>;
          #[ink(function = 2)]
          fn read_small(key: &[u8]) -> Result<(u32, [u8; 32]), ReadWriteError>;
          #[ink(function = 3)]
          fn write(key: &[u8], value: &[u8]);
          #[ink(function = 4, handle_status = false)]
          fn access(key: &[u8]) -> Option<Access>;
          #[ink(function = 5, handle_status = false)]
          fn unlock_access(key: &[u8], access: Access) -> Result<(), UnlockAccessError>;
    }

    #[ink::scale_derive(Encode, Decode, TypeInfo)]
    pub enum ReadWriteErrorCode {
          InvalidKey,
          CannotWriteToKey,
          CannotReadFromKey,
    }

    #[ink::scale_derive(Encode, Decode, TypeInfo)]
    pub enum ReadWriteError {
          ErrorCode(ReadWriteErrorCode),
          BufferTooSmall { required_bytes: u32 },
    }
    impl From<ReadWriteErrorCode> for ReadWriteError {
         fn from(error_code: ReadWriteErrorCode) -> Self {
             Self::ErrorCode(error_code)
         }
    }
    impl From<scale::Error> for ReadWriteError {
         fn from(_: scale::Error) -> Self {
             panic!("encountered unexpected invalid SCALE encoding")
         }
    }

    #[ink::scale_derive(Encode, Decode, TypeInfo)]
    pub struct UnlockAccessError {
         reason: String,
    }
    impl From<scale::Error> for UnlockAccessError {
         fn from(_: scale::Error) -> Self {
             panic!("encountered unexpected invalid SCALE encoding")
         }
    }
    #[ink::scale_derive(Encode, Decode, TypeInfo)]
    pub enum Access {
         ReadWrite,
         ReadOnly,
         WriteOnly,
    }
    impl ink::env::chain_extension::FromStatusCode for ReadWriteErrorCode {
         fn from_status_code(status_code: u32) -> Result<(), Self> {
             match status_code {
                 0 => Ok(()),
                 1 => Err(Self::InvalidKey),
                 2 => Err(Self::CannotWriteToKey),
                 3 => Err(Self::CannotReadFromKey),
                 _ => panic!("encountered unknown status code"),
             }
         }
    }
    pub enum CustomEnvironment {}
    impl ink::env::Environment for CustomEnvironment {
         const MAX_EVENT_TOPICS: usize =
             <ink::env::DefaultEnvironment as ink::env::Environment>::MAX_EVENT_TOPICS;

         type AccountId = <ink::env::DefaultEnvironment as ink::env::Environment>::AccountId;
         type Balance = <ink::env::DefaultEnvironment as ink::env::Environment>::Balance;
         type Hash = <ink::env::DefaultEnvironment as ink::env::Environment>::Hash;
         type BlockNumber = <ink::env::DefaultEnvironment as ink::env::Environment>::BlockNumber;
         type Timestamp = <ink::env::DefaultEnvironment as ink::env::Environment>::Timestamp;

         type ChainExtension = RuntimeReadWrite;
    }
}
```

## Using Multiple Chain Extensions

It is possible to use multiple exposed chain extensions in the single environment of a smart contract.
The declaration procedure of the chain extension stays the same.

Suppose we want to combine two chain extension called `Psp22Extension` and `FetchRandom`, ink! provides
a useful macro [`ink::combine_extensions!`](https://docs.rs/ink/6.0.0/ink/macro.combine_extensions.html) that allows to construct the structure combining 
the aforementioned chain extensions like so:
```rust
ink::combine_extensions! {
    /// This extension combines the `FetchRandom` and `Psp22Extension` extensions.
    /// It is possible to combine any number of extensions in this way.
    ///
    /// This structure is an instance that is returned by the `self.env().extension()` call.
    pub struct CombinedChainExtension {
        /// The instance of the `Psp22Extension` chain extension.
        ///
        /// It provides you access to `PSP22` functionality.
        pub psp22: Psp22Extension,
        /// The instance of the `FetchRandom` chain extension.
        ///
        /// It provides you access to randomness functionality.
        pub rand: FetchRandom,
    }
}
```

The combined structure is called `CombinedChainExtension`, and we can refer to it 
when specifying the chain extension type in `Environment`:
```rust
type ChainExtension = CombinedChainExtension;
```

Each extension's method can be called by accessing it via the name of the field of `CombineChainExtension`:
```rust
self.env().extension().rand.<method_name_in_rand_ext>()
// or
self.env().extension().psp22.<method_name_in_psp22_ext>()
// e.g.
self.env().extension().psp22.total_supply()
```

:::note
The ink! repository contains the [full example](https://github.com/use-ink/ink-examples/tree/main/combined-extension) illustrating how to combine existing chain extensions 
and mock them for testing.
:::


## Mocking Chain Extension

You can mock chain extensions for unit testing purposes. 
This can be achieved by implementing the [`ink::env::test::ChainExtension`](https://docs.rs/ink_env/6.0.0/ink_env/test/trait.ChainExtension.html) trait.

```rust
/// Opaque structure
struct MockedPSP22Extension;

// Implementing 
impl ink::env::test::ChainExtension for MockedPSP22Extension {
    fn ext_id(&self) -> u16 {
        // It is identifier used by `psp22_extension::Psp22Extension` extension.
        // Must be the same as the once specified in `#[ink::chain_extension(extension = _)]`
        13
    }

    // Call dispatcher.
    // Call specific code based on the function id which is dispatched from the contract/
    fn call(&mut self, func_id: u16, _input: &[u8], output: &mut Vec<u8>) -> u32 {
        match func_id {
            // `func_id` of the `total_supply` function.
            // must match `#[ink(function = _)]` of the corresponding method
            0x162d => {
                ink::scale::Encode::encode_to(&TOTAL_SUPPLY, output);
                0
            },
            // Other functions
            _ => {
                1
            }
        }
    }
}
```

## Technical Limitations

- Due to technical limitations it is not possible to refer to the `ErrorCode` associated type
  using `Self::ErrorCode` anywhere within the chain extension and its defined methods.
  Instead chain extension authors should directly use the error code type when required.
  This limitation might be lifted in future versions of ink!.
- It is not possible to declare other chain extension traits as super traits or super
  chain extensions of another.