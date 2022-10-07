---
title: ink! vs. Solidity
slug: /ink-vs-solidity
---

Here is a brief comparison of features between ink! and Solidity:

<div class="comparison">

|                       | ink!                        | Solidity      |
| :-------------------- | :-------------------------- | :------------ |
| Virtual Machine       | Any Wasm VM                 | EVM           |
| Encoding              | Wasm                        | EVM Byte Code |
| Language              | Rust                        | Standalone    |
| Overflow Protection   | Enabled by default          | None          |
| Constructor Functions | Multiple                    | Single        |
| Tooling               | Anything that supports Rust | Custom        |
| Versioning            | Semantic                    | Semantic      |
| Has Metadata?         | Yes                         | Yes           |
| Multi-File Project    | Planned                     | Yes           |
| Storage Entries       | Variable                    | 256 bits      |
| Supported Types       | Docs                        | Docs          |
| Has Interfaces?       | Yes (Rust Traits)           | Yes           |

</div>

## Solidity to ink! Guide

## Table of Contents

- [Solidity to ink! Guide](#solidity-to-ink-guide)
- [Table of Contents](#table-of-contents)
- [Converting a Solidity Contract to ink!](#converting-a-solidity-contract-to-ink)
  - [1. Generate New ink! Contract](#1-generate-new-ink-contract)
  - [2. Build ink! Contract](#2-build-ink-contract)
  - [3. Convert Solidity class fields to Rust struct](#3-convert-solidity-class-fields-to-rust-struct)
  - [4. Convert each function](#4-convert-each-function)
- [Best Practices + Tips](#best-practices--tips)
- [Syntax Equivalencies](#syntax-equivalencies)
  - [`public function`](#public-function)
  - [`mapping declaration`](#mapping-declaration)
  - [`mapping usage`](#mapping-usage)
  - [`struct`](#struct)
  - [`assertions / requires`](#assertions--requires)
  - [`timestamp`](#timestamp)
  - [`contract caller`](#contract-caller)
  - [`contract's address`](#contracts-address)
  - [`bytes`](#bytes)
  - [`uint256`](#uint256)
  - [`payable`](#payable)
  - [`received deposit / payment`](#received-deposit--payment)
  - [`contract balance`](#contract-balance)
  - [`transfer tokens from contract`](#transfer-tokens-from-contract)
  - [`events & indexed`](#events--indexed)
  - [`errors and returning`](#errors-and-returning)
    - [`throw`](#throw)
    - [`assert`](#assert)
    - [`require and revert`](#require-and-revert)
  - [`nested mappings + custom / advanced structures`](#nested-mappings--custom--advanced-structures)
  - [`cross-contract calling`](#cross-contract-calling)
  - [`submit generic transaction / dynamic cross-contract calling`](#submit-generic-transaction--dynamic-cross-contract-calling)
- [Limitations of ink! v3](#limitations-of-ink-v3)
- [Troubleshooting Errors](#troubleshooting-errors)
- [unit testing (off-chain)](#unit-testing-off-chain)

## Converting a Solidity Contract to ink!

### 1. Generate New ink! Contract

Run the following to generate ink! boilerplate code for ink!'s "Hello, World!" (the [`flipper`](https://github.com/paritytech/ink/tree/master/examples/flipper) contract))

```
cargo contract new <contract-name>
```

### 2. Build ink! Contract

```
cargo +nightly contract build
```

### 3. Convert Solidity class fields to Rust struct

Solidity is an object oriented language, and uses classes. ink! (Rust) does not use classes.

An example Solidity class looks like:

<!-- Markdown syntax highlighting does not support Solidity. C++ seems to be the best match -->

```c++
contract MyContract {
    bool private _theBool;
    event UpdatedBool(bool indexed _theBool);

    constructor(bool theBool_) {
        require(theBool_ == true, "theBool_ must start as true");

        _theBool = theBool_;
    }

    function setBool(bool newBool) public returns (bool boolChanged) {
        if _theBool == newBool{
               boolChanged = false;
        }else{
            boolChanged = true;
        }

        _theBool = newBool;
        //emit event
        UpdatedBool(newBool);
    }
}
```

And the equivalent contract in ink! looks like:

```rust
#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;

#[ink::contract]
mod mycontract {
    #[ink(storage)]
    pub struct MyContract {
        the_bool: bool, //class members become struct fields
    }

    #[ink(event)]
    pub struct UpdatedBool {
        #[ink(topic)] //-> indexed
        the_bool: bool,
    }

    impl MyContract {
        #[ink(constructor)]
        pub fn new(the_bool: bool) -> Self {
            assert!(the_bool == true, "the_bool must start as true");
            Self { the_bool }
        }

        #[ink(message)] //functions become struct implementations
        pub fn set_bool(&mut self, new_bool: bool) -> bool{
            let bool_changed = true;

            if self.the_bool == new_bool{
                bool_changed = false;
            }else{
                bool_changed = true;
            }

            self.the_bool = new_bool;

            self.env().emit_event(UpdatedBool {
                the_bool: new_bool
            });

            //return
            bool_changed
        }
    }
}
```

A few key differences are:

- Solidity class variables / members will be placed in the contract struct in ink!
- All class methods in Solidity are `impl`emented for the contract struct in ink!
- Solidity frequently prefixes variables with an underscore (`_name`). ink! / Rust only prefixes with an underscore for _unused_ variables.
- Solidity uses camelCase. ink! uses snake_case.
- In Solidity, the variable type comes before the variable name (e.g. bool myVar). While ink! specifies var type after the var name (e.g. my_var: bool)

### 4. Convert each function

- Start converting each function one by one.
  - A recommended approach is to, if possible, skip cross-contract calls at first and use mock data instead
  - This way offchain unit tests can be written to test the core functionality
    - unit tests are offchain and do not work with cross-contract calls
  - Once fully tested, start adding in cross-contract calls and perform on-chain manual + integration tests
- Ensure that function's visibility (public, private) are matched in ink!
- In Solidity, if a function returns a `bool success`, ink! will use a `Result<()>` instead (`Result::Ok` or `Result::Err`).

  ```rust
  // ink!

  //result type
  pub type Result<T> = core::result::Result<T, Error>;

  // ...

  //public function that returns a Result
  #[ink(message)]
  pub fn my_function(&self) -> Result<()>{
      Ok(())
  }
  ```

## Best Practices + Tips

- If the Solidity contract uses a `string`, it is recommended to use a `Vec<u8>` to avoid the overhead of a `String`. See [here](https://substrate.stackexchange.com/questions/1174/why-is-it-a-bad-idea-to-use-string-in-an-ink-smart-contract) for more details on why. The smart contract should only contain the information that strictly needs to be placed on the blockchain and go through consensus. The UI should be used for displaying strings.
- Double check all `.unwrap()`s performed. Solidity does not have as strict checking as ink! does. For example, a mapping field can be accessed as simple as `myMapping[someKey]`. ink!, however, requires `self.my_mapping.get(some_key).unwrap()`. A useful way to handle `None` cases is to use `.unwrap_or(some_val)`.
- Run the contracts node with `substrate-contracts-node --dev -lerror,runtime::contracts=debug` for debug prints, and errors to be displayed in the nodes console.
- When passing parameters to a helper, it is recommended to pass references (even for primitives) as Wasm is more efficient with references.
  For example (see [erc20](https://github.com/paritytech/ink/blob/master/examples/erc20/lib.rs) example):

```rust
/// Returns the account balance for the specified `owner`.
///
/// Returns `0` if the account is non-existent.
#[ink(message)]
pub fn balance_of(&self, owner: AccountId) -> Balance {
    self.balance_of_impl(&owner)
}

/// Returns the account balance for the specified `owner`.
///
/// Returns `0` if the account is non-existent.
///
/// # Note
///
/// Prefer to call this method over `balance_of` since this
/// works using references which are more efficient in Wasm.
#[inline]
fn balance_of_impl(&self, owner: &AccountId) -> Balance {
    self.balances.get(owner).unwrap_or_default()
}
```

- Just as in Solidity, ink! does not have floating point numbers due to the non-deterministic nature. Instead, the frontend should add decimal points as needed.

## Syntax Equivalencies

### `public function`

```c++
// solidity
function fnName() public {}
//or
//by default, functions are public
function fnName() {}
```

```rust
// ink!
#[ink(message)]
pub fn fn_name(&self) {}
```

### `mapping declaration`

```c++
// solidity
mapping(address => uint128) private mapName;
```

```rust
//ink!
use ink_storage::{
    traits::SpreadAllocate,
    Mapping,
};

#[ink(storage)]
#[derive(SpreadAllocate)]
pub struct ContractName {
    map_name: Mapping<AccountId, u128>,
}
```

when using a map in ink!, `ink_lang::utils::initialize_contract` must be used in the constructor. See [here](https://ink.substrate.io/datastructures/mapping) for more details.

### `mapping usage`

```c++
// solidity

//insert / update
aMap[aKey] = aValue;

// get
aMap[aKey]
```

```rust
// ink!

//insert / update
self.a_map.insert(&a_key, &a_value);

// get
self.a_map.get(a_key).unwrap()
```

### `struct`

```c++
// solidity
struct MyPerson{
    address person;
    u64 favNum;
}
```

```rust
// ink!
struct MyPerson {
    person: AccountId,
    fav_num: u64,
}
```

### `assertions / requires`

```c++
// solidity
require(someValue < 10, "someValue is not less than 10");
```

```rust
// ink!
assert!(some_value < 10, "some_value is not less than 10");
```

### `timestamp`

```c++
// solidity
block.timestamp
// or
now
```

```rust
// ink!
self.env().block_timestamp()
```

### `contract caller`

```c++
// solidity
address caller = msg.sender;
```

```rust
// ink!
let caller: AccountId = self.env().caller();
```

### `contract's address`

```c++
// solidity
address(this)
```

```rust
// ink!
self.env().account_id()
```

### `bytes`

Solidity has a type `bytes`. `bytes` is (essentially) equivalent to an array of uint8. So, `bytes` in Solidity => `Vec<u8>` or `[u8; ...]` in ink!. See [here](https://ethereum.stackexchange.com/questions/91119/difference-between-byte-and-uint8-datatypes-in-solidity) for more details. If desired, a `bytes` struct can be created in ink! to replicate the `bytes` type in Solidity.

### `uint256`

Solidity uses `uint256` and `uint` to represent a 256-bit type.

Solidity is 256-bit / 32-byte word optimized. Meaning, using `uint256` in Solidity contracts will reduce gas usage -- but increase storage usage. The largest size ink! has built in is a `u128`. ink! compiles to Wasm. The largest primitive Wasm has is 64bit (due to most computers using 64bit). So, there is no benefit to using any larger primitive over a collection.

When porting a `uint256` from Solidity to ink!, it is recommended to, with discretion, determine the range of the value, and choose the appropiate size (u8, u16, u32, u64, u128). If a 256-bit hash value is required, ink! has a `Hash` primitive available. In the event a value needs to be 256-bit, it is recommended to use an array (e.g. `[u64; 4]`).

### `payable`

```c++
// solidity
function myFunction() payable returns (uint64) {}
```

```rust
#[ink(message, payable)]
pub fn my_function() -> (u64) {}
```

### `received deposit / payment`

```C++
// solidity
msg.value
```

```rust
// ink!
self.env().transferred_value()
```

### `contract balance`

```c++
// solidity
this.balance
```

```rust
// ink!
self.env().balance()
```

### `transfer tokens from contract`

```c++
// solidity
recipient.send(amount)
```

```rust
//ink!
if self.env().transfer(recipient, amount).is_err() {
    panic!("error transferring")
}
```

### `events & indexed`

```c++
// solidity

event MyCoolEvent(
    u128 indexed indexedValue,
    u128 notIndexedValue,
);

//emit event
MyCoolEvent (someValue, someOtherValue)
```

```rust
// ink!

#[ink(event)]
pub struct MyCoolEvent {
    #[ink(topic)]
    indexed_value: u128,

    not_indexed_value: u128,
}

// emit event
self.env().emit_event(MyCoolEvent {
    indexed_value: some_value,
    not_indexed_value: some_other_value
});
```

### `errors and returning`

Solidity has several error handling mechanisms: `assert`, `require`, `revert`, and `throw`. Each of these will revert the changed state when called. See [this article](https://medium.com/blockchannel/the-use-of-revert-assert-and-require-in-solidity-and-the-new-revert-opcode-in-the-evm-1a3a7990e06e) for details on these.

ink! uses a `Result` enum (`Ok(T)`, `Err(E)`), `assert!` and `panic!`. [This Stack Exchange](https://substrate.stackexchange.com/questions/2391/panic-in-ink-smart-contracts) answer and [GitHub discussion](https://github.com/paritytech/ink/issues/641) provide more details on these.

#### `throw`

Throw is deprecated in Solidity and would throw an invalid opcode error (no details) and revert the state. As an alternative to the `if...{throw;}` pattern in Solidity, a `Result::Err` should be returned for expected errors, and an `assert!` should be used for errors that should not occur.

#### `assert`

In Solidity, `assert` is used as internal guards against errors in the _code_. In general, properly functioning code should never hit a failing assert. `assert` in Solidity does not have error strings. In ink!, use `assert!`. `assert!` will `panic!` if it evaluates to _false_. The state will be reverted, and a `CalleeTrapped` will be returned. The (optional) error string will be printed to the debug buffer.

```rust
// ink!
assert!(caller == owner, "caller is not owner")
```

#### `require and revert`

In Solidity, `require` is used for general (normal) errors -- such as errors that occur based on user input. `require` does have the option for an error string. `revert` is very similar to `require` except that `revert` will be called in `if ... else` chains. Both `require` and `revert` will revert the chain state. In ink!, `if ... { return Err(Error::SomeError) }` should be used for `require` or `revert`. When a `Result::Err` is returned in ink!, then all state is reverted.

In general, `Result::Err` should be used when a _calling contract_ needs to know _why_ a function failed. Otherwise, `assert!` should be used as it has less overhead than a `Result`.

```c++
// Solidity
function myFunction(bool returnError) public {
    require(!returnError, "my error here");

    //or

    if returnError {
        revert("my error here");
    }
}
```

```rust
//ink!

#[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
pub enum Error {
    /// Provide a detailed comment on the error
    MyError,
}

// result type
pub type Result<T> = core::result::Result<T, Error>;

// ...
#[ink(message)]
pub fn my_function(&self, return_error: bool) -> Result<()> {
    if return_error{
        return Err(Error::MyError)
    }
    Ok(())
}

```

### `nested mappings + custom / advanced structures`

In Solidity, it is easy to do nested mappings. It is not as straightforward in ink!.

imagine the following scenario

```c++
// solidity
contract Dao {
    struct Proposal {
        mapping (address => bool) votedYes
    }

    mapping (address => bool) public isWhitelisted;
    Proposal[] public proposals;
}
```

in ink! this _seems_ like it could be represented like so:

```rust
#[ink::contract]
mod dao {

    #[derive(SpreadAllocate)]
    pub struct Proposal {
        voted_yes: Mapping<AccountId, bool>,
    }

    #[ink(storage)]
    #[derive(SpreadAllocate)]
    pub struct Dao {
        proposals: Vec<Proposal>,
        is_whitelisted: Mapping<AccountId, bool>,
    }

    impl Dao{
        #[ink(constructor)]
        pub fn new(/*...*/) -> Self {
            //required for mappings
            ink_lang::utils::initialize_contract(|contract| {/*...*/})
        }
    }
}
```

However, this will cause an error due to the nested mapping. [This answer](https://substrate.stackexchange.com/questions/1659/how-to-have-a-mapping-in-a-custom-structure-inside-an-ink-contract) explains in detail why nested mappings are not allowed

So, as of now, to get around this issue an alternate data structure will need to be used. A data-structure that can be interchanged with the `Mapping` syntax and with minimal additional implementations is the `BTreeMap`. `BTreeMap` is less efficient than `Mapping`, but is an easy workaround until nested mappings are allowed. This will be used in the nested struct. Additional `derive`s will need to be added to be compatible with the #[ink(storage)] struct (see below).

```rust
#[ink::contract]
mod dao {

    use ink_prelude::collections::BTreeMap;

    #[derive(
        scale::Encode,
        scale::Decode,
        SpreadLayout,
        PackedLayout,
        SpreadAllocate,
    )]
    #[cfg_attr(
        feature = "std",
        derive(scale_info::TypeInfo, ink_storage::traits::StorageLayout)
    )]
    pub struct Proposal {
        voted_yes: BTreeMap<AccountId, bool>,
    }

    #[ink(storage)]
    #[derive(SpreadAllocate)]
    pub struct Dao {
        proposals: Vec<Proposal>,
        is_whitelisted: Mapping<AccountId, bool>,
    }

    impl Dao{
        #[ink(constructor)]
        pub fn new(/*...*/) -> Self {
            //required for mappings
            ink_lang::utils::initialize_contract(|contract| {/*...*/})
        }
    }
}
```

This almost works as expected. However, there is still one issue. `SpreadAllocate` (used with `Mapping`) requires that `Vec<Proposal>` implements `PackedAllocate`. To fix this, `Proposal` needs to implement `PackedAllocate`. See [here](https://docs.rs/ink_storage/3.3.1/ink_storage/traits/trait.PackedAllocate.html) for details + examples. See the following for this example:

```rust
    use ink_primitives::Key;

    pub struct Proposal {
        voted_yes: BTreeMap<AccountId, bool>,
    }

    impl ink_storage::traits::PackedAllocate for Proposal {
        fn allocate_packed(&mut self, at: &Key){
            PackedAllocate::allocate_packed(&mut *self, at)
        }
    }
```

### `cross-contract calling`

In ink!, to do [cross-contract calling](https://ink.substrate.io/basics/cross-contract-calling), the contract will need to be added to the project. Ensure the contract is properly exporting its Structs. See the `erc20` contract example:

```rust
#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;

//make the structs visible
pub use self::erc20::{
    Erc20,
    //this is necessary
    Erc20Ref,
};

#[ink::contract]
pub mod erc20 {}
```

In the new cross-called contract's Cargo.toml, add (or edit) the following:

```
[lib]
name = "erc20"
path = "lib.rs"
crate-type = [
	# Used for normal contract Wasm blobs.
	"cdylib",
    # Used for ABI generation. Necessary for importing as a dependency
    "rlib",
]

[features]
ink-as-dependency = []
```

`ink-as-dependency` "tells the ink! code generator to always or never compile the smart contract as if it was used as a dependency of another ink! smart contract" ([source](https://ink.substrate.io/basics/cross-contract-calling)).

Then, In the main contract's Cargo.toml, import the contract that will be cross-called.

```rust
erc20 = { path = "erc20", default-features = false, features = ["ink-as-dependency"] }
```

And make sure to add it to the `std` field of the the .toml file.

```rust
[features]
default = ["std"]
std = [
    # ...

    "erc20/std",
]
```

Now, import the cross-called-contract to the main contract:

```rust
// example
use erc20::Erc20Ref;
```

There are two methods to setup the other contract.

1. Instantiate the cross-called-contract in the main contract's constructor.  
   See [here](https://ink.substrate.io/basics/cross-contract-calling/) for a tutorial, and [here](https://github.com/paritytech/ink/tree/master/examples/delegator) for an example.
2. Or, add the `AccountId` of an already deployed contract.
   Here is an example constructor to set this up:

   ```rust
   use my_other_contract::MyOtherContractRef;
   // ...
   fn new(contract_id: AccountId) -> Self {
        //for already deployed contract
        let contract_ref: MyOtherContractRef = ink_env::call::FromAccountId::from_account_id(contract_id);
        Self {contract_ref}
   }
   ```

Now, to perform the cross-contract call:

```rust
{
    self.contract_ref.some_external_function(a_param);
}
```

Note: as of now (ink! v3.3.1), when using cross-contract calls, emitting events will not work and compile errors will occur. See [issue #1000](https://github.com/paritytech/ink/issues/1000). Furthermore, the compiler will throw an error saying that (for example) Erc20Ref does not implement `SpreadAllocate`. This [issue #1149](https://github.com/paritytech/ink/issues/1149) explains more and has a workaround. These issues will be fixed in [issue #1134](https://github.com/paritytech/ink/issues/1134).

### `submit generic transaction / dynamic cross-contract calling`

```c++
// solidity

// invokes function found at`addr`, sends the `_amount` to the `addr`, and the `_transactionData` payload.
addr.call.value(_amount)(_transactionData)
```

```rust
// ink!

// ...

use ink_env::call::{
    build_call,
    Call,
    ExecutionInput,
    Selector,
};

/// A wrapper that allows us to encode a blob of bytes.
///
/// We use this to pass the set of untyped (bytes) parameters to the `CallBuilder`.
struct CallInput<'a>(&'a [u8]);

impl<'a> scale::Encode for CallInput<'a> {
    fn encode_to<T: Output + ?Sized>(&self, dest: &mut T) {
        dest.write(self.0);
    }
}

// ...

// see: https://github.com/paritytech/ink/blob/master/examples/multisig/lib.rs#L535
fn invoke_transaction(
    &mut self,
    callee: AccountId,
    transfer_amount: u128,
    function_selector: [u8; 4],
    transaction_data: Vec<u8>,
    gas_limit: u64) -> Result<()> {

    let result = build_call::<<Self as ::ink_lang::reflect::ContractEnv>::Env>()
        .call_type(
            Call::new()
                .callee(callee) //contract to call
                .gas_limit(*gas_limit)
                .transferred_value(transfer_amount), //value to transfer with call
        )
        .exec_input(
            ExecutionInput::new(Selector::from(*function_selector)).push_arg(CallInput(transaction_data)), //SCALE encoded parameters
        )
        .returns::<()>()
        .fire()
        .map_err(|_| Error::TransactionFailed);
    result
}

```

Note: the `function_selector` bytes can be found in the generated `target/ink/metadata.json`

## Limitations of ink! v3

- Multi-file projects are not supported with pure ink!
  - implementing traits / interfaces will not work
  - There are alternatives that do add this functionality such as OpenBrush
- Nested structs and data structures can be difficult to use
- Cross-contract calling prevents events from being emitted. See [here](https://github.com/paritytech/ink/issues/1000) for details.
- Cross-contract calling can not be tested offchain with unit tests. On-chain integration tests will need to be used.

## Troubleshooting Errors

- `ERROR: Validation of the Wasm failed.`

```
ERROR: Validation of the Wasm failed.

ERROR: An unexpected panic function import was found in the contract Wasm.
This typically goes back to a known bug in the Rust compiler:
https://github.com/rust-lang/rust/issues/78744

As a workaround try to insert `overflow-checks = false` into your `Cargo.toml`.
This will disable safe math operations, but unfortunately we are currently not
aware of a better workaround until the bug in the compiler is fixed.
```

**Solution**  
Add the following to the contract Cargo.toml:

```
[profile.release]
overflow-checks = false
```

- `"failed to load bitcode of module '...' "`

This happens when trying to import a contract for cross-contract calling.

**Solution**  
Ensure that the following is added to Cargo.toml contract import:`

```
features = ["ink-as-dependency"]
```

so the import would look like:

```
mycontract = { path = "mycontract/", default-features = false, features = ["ink-as-dependency"]}
```

## unit testing (off-chain)

- Unit tests are an integral part of smart-contract development and ensuring your code works off-chain before testing on-chain.
- To run ink! tests, do _not_ use `cargo +nightly contract test`. Use `cargo +nightly test`. Add the `--nocapture` flag for debug prints to show. See [here](https://substrate.stackexchange.com/questions/3197/how-to-understand-which-test-failed-in-ink) for more info why.
- From the contract module, make sure to make the the contract struct and anything else that is going to be used in the unit tests public. For example:

```rust
// top of file
#![cfg_attr(not(feature = "std"), no_std)]

use ink_lang as ink;

pub use self::mycontract::{
    MyContract
};
```

- Off-chain unit tests will not work with cross-contract calls.
  One workaround to ensure unit tests are still passing is to provide mock data.

An easy approach is to use conditional compiling with `#[cfg(test)]` and `#[cfg(not(test))]`.

Note: this solution is not ideal. ink! v4.0 will provide much better solutions.

For example, here is a read-only ERC20 cross-contract call:

```rust
//only compiles when *not* running tests
#[cfg(not(test))]
fn get_token_balance(&self, caller: &AccountId) -> Balance {
    //calls the external ERC-20 contract
    self.token.balance_of(*caller)
}

//only compiles when running tests
#[cfg(test)]
fn get_token_balance(&self, _: &AccountId) -> Balance {
    //arbitrary value
    1
}
```

And if the cross-contract call _writes_ to storage, a mock field can be added to the contract struct. For example:

```rust
#[ink(storage)]
pub struct MyContract {
    #[cfg(test)]
    mock_field: SomeStruct, // will serve as a fake storage
}

...

//on-chain, performs cross-contract call
#[cfg(not(test))]
fn do_some_write(&mut self) {
    self.external_contract.write_to_field(0xDEADBEEF);
}


//testing environment only
#[cfg(test)]
fn do_some_write(&mut self) {
    self.mock_field.my_fake_storage_item = 0xDEADBEEF;
}
```

- useful code to interact and modify the contract enviroment for testing

[ink_env docs](https://paritytech.github.io/ink/ink_env/test/index.html)

```rust
// get the default accounts (alice, bob, ...)
let accounts = ink_env::test::default_accounts::<ink_env::DefaultEnvironment>();
accounts.alice //usage example

// set which account calls the contract
ink_env::test::set_caller::<ink_env::DefaultEnvironment>(accounts.bob);

//get the contract's address
let callee = ink_env::account_id::<ink_env::DefaultEnvironment>();

// set the contracts address.
// by default, this is alice's account
ink_env::test::set_callee::<ink_env::DefaultEnvironment>(callee);

// transfer native currency to the contract
ink_env::test::set_value_transferred::<ink_env::DefaultEnvironment>(2);

// increase block number (and block timestamp).
// this can be placed in a loop to advance the block many times
ink_env::test::advance_block::<ink_env::DefaultEnvironment>();

//generate arbitrary AccountId
AccountId::from([0x01; 32]);

//generate arbitrary Hash
Hash::from([0x01; 32])

//macro for tests that are expected to panic.
#[should_panic]
```
