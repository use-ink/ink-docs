---
title: ink! vs. Solidity
hide_title: true
slug: /background/ink-vs-solidity
---

![Solidity Title Picture](/img/title/solidity.svg)

TODO re-read in particular because of our migration to RISC-V

# ink! vs. Solidity

The following table gives a brief comparison of features between ink! and Solidity:

<div class="comparison">

|                       | ink!                        | Solidity      |
| :-------------------- | :-------------------------- | :------------ |
| Virtual Machine       | Any Wasm VM                 | EVM           |
| Encoding              | Wasm                        | EVM Byte Code |
| Language              | Rust                        | Standalone    |
| Overflow Protection   | Enabled by default          | Yes           |
| Constructor Functions | Multiple                    | Single        |
| Tooling               | Anything that supports Rust | Custom        |
| Versioning            | Semantic                    | Semantic      |
| Has Metadata?         | Yes                         | Yes           |
| Multi-File Project    | Planned                     | Yes           |
| Storage Entries       | Variable                    | 256 bits      |
| Supported Types       | Docs                        | Docs          |
| Has Interfaces?       | Yes (Rust Traits)           | Yes           |

</div>

## Converting a Solidity Contract to ink!

In the following, we'll explain how to convert a Solidity contract to ink!.

### 1. Generate a new ink! contract

Run the following command to generate the skeleton for an ink! contract.
The command will set up the boilerplate code for ink!'s "Hello, World!"
(the [`flipper`](https://github.com/use-ink/ink-examples/tree/main/flipper) contract)).

```
cargo contract new <contract-name>
```

### 2. Build the contract

```
cargo contract build
```

### 3. Convert Solidity class fields to Rust struct

Solidity is an object-oriented language, and uses classes. ink! (Rust) does not use classes.

An example Solidity class looks like:

<!-- Markdown syntax highlighting does not support Solidity. C++ seems to be the best match -->

```C++
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract MyContract {
    bool private _theBool;
    event UpdatedBool(bool indexed _theBool);

    constructor(bool theBool) {
        require(theBool == true, "theBool must start as true");

        _theBool = theBool;
    }

    function setBool(bool newBool) public returns (bool boolChanged) {
        if (_theBool == newBool) {
            boolChanged = false;
        } else {
            boolChanged = true;
        }

        _theBool = newBool;

        // emit event
        emit UpdatedBool(newBool);
    }
}
```

And the equivalent contract in ink! looks like:

```rust
#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod mycontract {
    #[ink(storage)]
    pub struct MyContract {
        the_bool: bool, // class members become struct fields
    }

    #[ink(event)]
    pub struct UpdatedBool {
        #[ink(topic)] // -> indexed
        the_bool: bool,
    }

    impl MyContract {
        #[ink(constructor)]
        pub fn new(the_bool: bool) -> Self {
            assert!(the_bool == true, "the_bool must start as true");
            Self { the_bool }
        }

        #[ink(message)] // functions become struct implementations
        pub fn set_bool(&mut self, new_bool: bool) -> bool {
            let bool_changed: bool;

            if self.the_bool == new_bool{
                bool_changed = false;
            }else{
                bool_changed = true;
            }

            self.the_bool = new_bool;

            self.env().emit_event(UpdatedBool {
                the_bool: new_bool
            });

            // return
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
  - This way off-chain unit tests can be written to test the core functionality
    - unit tests are off-chain and do not work with cross-contract calls
  - Once fully tested, start adding in cross-contract calls and perform on-chain manual + integration tests
- Ensure that function's visibility (public, private) are matched in ink!
- In Solidity, if a function returns a `bool success`, ink! will use a `Result<()>` instead (`Result::Ok` or `Result::Err`).

Solidity return example:

```c++
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract Example {
    uint128 public data;

    constructor(){}

    function setData(uint128 newData) public returns (
        bool success,
        string memory reason
        ) {

        if (newData == 0) {
            return (false, "Data should not be zero");
        }

        data = newData;
        return (true, "");
    }
}
```

The equivalent contract in ink!:

```rust
#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod example {
    #[ink(storage)]
    pub struct Example {
        data: u128,
    }

    #[ink::scale_derive(Encode, Decode, TypeInfo)]
    #[derive(Debug, PartialEq, Eq)]
    pub enum Error {
        DataShouldNotBeZero,
    }

    pub type Result<T> = core::result::Result<T, Error>;

    impl Example {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self { data: 0 }
        }

        #[ink(message)]
        pub fn set_data(&mut self, new_data: u128) -> Result<()> {
            if new_data == 0 {
                return Err(Error::DataShouldNotBeZero);
            }

            self.data = new_data;
            Ok(())
        }
    }
}
```

## Best Practices + Tips

- If the Solidity contract uses a `string`, it is recommended to use a `Vec<u8>` to avoid the overhead of a `String`. See [here](https://substrate.stackexchange.com/questions/1174/why-is-it-a-bad-idea-to-use-string-in-an-ink-smart-contract) for more details on why. The smart contract should only contain the information that strictly needs to be placed on the blockchain and go through consensus. The UI should be used for displaying strings.
- Double check all `.unwrap()`s performed. Solidity does not have as strict checking as ink! does. For example, a mapping field can be accessed as simple as `myMapping[someKey]`. ink!, however, requires `self.my_mapping.get(some_key).unwrap()`. A useful way to handle `None` cases is to use `.unwrap_or(some_val)`.
- Run the contracts node with `ink-node -lerror,runtime::contracts=debug` for debug prints, and errors to be displayed in the nodes console.
- When passing parameters to a helper, it is recommended to pass references (even for primitives) as Wasm is more efficient with references.
  For example (see [erc20](https://github.com/use-ink/ink-examples/blob/main/erc20/lib.rs) example):

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
// or
// by default, functions are public
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
use ink::storage::Mapping;

#[ink(storage)]
pub struct ContractName {
    map_name: Mapping<AccountId, u128>,
}
```

### `mapping usage`

```c++
// solidity

// insert / update
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

When porting a `uint256` from Solidity to ink!, it is recommended to, with discretion, determine the range of the value, and choose the appropriate size (u8, u16, u32, u64, u128). If a 256-bit hash value is required, ink! has a `Hash` primitive available. In the event a value needs to be 256-bit, it is recommended to use an array (e.g. `[u64; 4]`).

### `payable`

```c++
// solidity
function myFunction() payable returns (uint64) {}
```

```rust
#[ink(message, payable)]
pub fn my_function(&self) -> u64 {}
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
address(this).balance
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
// ink!
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

// emit event
emit MyCoolEvent(someValue, someOtherValue);
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

ink! uses a `Result` enum (`Ok(T)`, `Err(E)`), `assert!` and `panic!`. [This Stack Exchange](https://substrate.stackexchange.com/questions/2391/panic-in-ink-smart-contracts) answer and [GitHub discussion](https://github.com/use-ink/ink/issues/641) provide more details on these.

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
function myFunction(bool returnError) public pure {
    require(!returnError, "my error here");

    // or

    if returnError {
        revert("my error here");
    }
}
```

```rust
// ink!

#[derive(Debug, PartialEq, Eq)]
#[ink::scale_derive(Encode, Decode, TypeInfo)]
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

    use ink::{
        prelude::vec::Vec,
        storage::Mapping,
    };

    #[ink(storage)]
    pub struct Proposal {
        voted_yes: Mapping<AccountId, bool>,
    }

    #[ink(storage)]
    pub struct Dao {
        proposals: Vec<Proposal>,
        is_whitelisted: Mapping<AccountId, bool>,
    }

    impl Dao{
        #[ink(constructor)]
        pub fn new() -> Self {
            Self {
                is_whitelisted: Mapping::default(),
                proposals: Vec::new(),
            }
        }
    }
}
```

However, this will cause an error due to the nested mapping. [This answer](https://substrate.stackexchange.com/questions/1659/how-to-have-a-mapping-in-a-custom-structure-inside-an-ink-contract) explains in detail why nested mappings are not allowed

So, as of now, to get around this issue an alternate data structure will need to be used. A data-structure that can be interchanged with the `Mapping` syntax and with minimal additional implementations is the `BTreeMap`. `BTreeMap` is less efficient than `Mapping`, but is an easy workaround until nested mappings are allowed. This will be used in the nested struct. Additional `derive`s will need to be added to be compatible with the #[ink(storage)] struct (see below).

```rust
#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod dao {

    use ink::{
        prelude::{
            collections::BTreeMap,
            vec::Vec,
        },
        storage::Mapping,
    };

    #[derive(Debug)]
    #[ink::scale_derive(Encode, Decode, TypeInfo)]
    pub struct Proposal {
        voted_yes: BTreeMap<AccountId, bool>,
    }

    #[ink(storage)]
    #[derive(Debug)]
    pub struct Dao {
        proposals: Vec<Proposal>,
        is_whitelisted: Mapping<AccountId, bool>,
    }

    impl Dao{
        #[ink(constructor)]
        pub fn new() -> Self {
            Self {
                is_whitelisted: Mapping::default(),
                proposals: Vec::new(),
            }
        }

        #[ink(message)]
        pub fn add_proposal(&mut self) {
            self.proposals.push(Proposal {
                voted_yes: BTreeMap::new(),
            });
        }

        #[ink(message)]
        pub fn vote(&mut self, proposal_id: u32, vote: bool) {
            let proposal = self.proposals
                .get_mut(proposal_id as usize)
                .unwrap();

            proposal.voted_yes
                .insert(Self::env().caller(), vote);
        }

        #[ink(message)]
        pub fn get_proposal(&self, proposal_id: u32) -> BTreeMap<AccountId, bool> {
            self.proposals
                .get(proposal_id as usize)
                .unwrap()
                .voted_yes
                .clone()
        }
    }
}
```

### `cross-contract calling`

In ink!, to do [cross-contract calling](../basics/cross-contract-calling.md), the contract will need to be added to the project. Ensure the contract is properly exporting its Structs. See the `erc20` contract example:

```rust
#![cfg_attr(not(feature = "std"), no_std, no_main)]

// make the structs visible
pub use self::erc20::{
    Erc20,
    // this is necessary
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

`ink-as-dependency` "tells the ink! code generator to always or never compile the smart contract as if it was used as a dependency of another ink! smart contract" ([source](../basics/cross-contract-calling.md)).

Then, In the main contract's Cargo.toml, import the contract that will be cross-called.

```rust
erc20 = { path = "erc20", default-features = false, features = ["ink-as-dependency"] }
```

And make sure to add it to the `std` field of the .toml file.

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
   See [here](../basics/cross-contract-calling.md) for a tutorial, and [here](https://github.com/use-ink/ink-examples/tree/main/upgradeable-contracts/delegator) for an example.
2. Or, add the `AccountId` of an already deployed contract.
   Here is an example constructor to set this up:

   ```rust
   use my_other_contract::MyOtherContractRef;
   // ...
   fn new(contract_id: AccountId) -> Self {
        // for already deployed contract
        let contract_ref: MyOtherContractRef =
            ink_env::call::FromAccountId::from_account_id(contract_id);
        Self {contract_ref}
   }
   ```

Now, to perform the cross-contract call:

```rust
{
    self.contract_ref.some_external_function(a_param);
}
```

Note: as of now (ink! v3.3.1), when using cross-contract calls, emitting events will not work and compile errors will occur. See [issue #1000](https://github.com/use-ink/ink/issues/1000). Furthermore, the compiler will throw an error saying that (for example) Erc20Ref does not implement `SpreadAllocate`. This [issue #1149](https://github.com/use-ink/ink/issues/1149) explains more and has a workaround. These issues will be fixed in [issue #1134](https://github.com/use-ink/ink/issues/1134).

### `submit generic transaction / dynamic cross-contract calling`

invokes function found at `callee` contract address, sends the `transferAmount` to the `callee`, and the `transactionData` payload.

```c++
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

contract CallContract {

    constructor() {}

    function invokeTransaction(
        address payable callee,
        uint transferAmount,
        bytes4 functionSelector,
        string memory transactionData
    ) public returns(bool success, bytes memory message) {

        bytes memory _data = abi
            .encodePacked(functionSelector, transactionData);

        (success, message) = callee
            .call{value: transferAmount}(_data);

        return (success, message);
    }
}
```

The equivalant in Ink!:

```rust
#![cfg_attr(not(feature = "std"), no_std, no_main)]

#[ink::contract]
mod call_contract {
    use ink::{
        env::call::{
            build_call,
            Call,
            ExecutionInput,
            Selector
        },
        prelude::vec::Vec,
    };

    #[ink(storage)]
    #[derive(Default)]
    pub struct CallContract {}

    #[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
    #[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
    pub enum Error {
        TransactionFailed,
    }
    type Result<T> = core::result::Result<T, Error>;


    impl CallContract{
        #[ink(constructor)]
        pub fn new() -> Self {
            Default::default()
        }

        #[ink(message, payable)]
        pub fn invoke_transaction(
            &mut self,
            callee: AccountId,
            transfer_amount: u128,
            function_selector: [u8; 4],
            transaction_data: Vec<u8>,
            gas_limit: Option<u64>,
        ) -> Result<()> {

            let transaction_result = build_call::<<Self as ::ink::env::ContractEnv>::Env>()
                .call_type(
                    Call::new(callee) // contract to call
                        .gas_limit(gas_limit.unwrap_or_default())
                        .transferred_value(transfer_amount), // value to transfer with call
                )
                .exec_input(
                    ExecutionInput::new(Selector::new(function_selector))
                        .push_arg(transaction_data), // SCALE-encoded parameters
                )
                .returns::<()>()
                .try_invoke();

            match transaction_result {
                Ok(Ok(_)) => Ok(()),
                _ => Err(Error::TransactionFailed),
            }
        }
    }
}
```

Note: the `function_selector` bytes can be found in the generated `target/ink/<contract-name>.json`.

## Limitations of ink! v4

- Multi-file projects are not supported with pure ink!
  - implementing traits / interfaces will not work
  - There are alternatives that do add this functionality such as OpenBrush

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
- To run ink! tests, use the command `cargo test`. Add the `--nocapture` flag for debug prints to show.
- From the contract module, make sure to make the contract struct and anything else that is going to be used in the unit tests public. For example:

```rust
// top of file
#![cfg_attr(not(feature = "std"), no_std, no_main)]


pub use self::mycontract::{
    MyContract
};
```

- Off-chain unit tests will not work with cross-contract calls.
  One workaround to ensure unit tests are still passing is to provide mock data.

An easy approach is to use conditional compiling with `#[cfg(test)]` and `#[cfg(not(test))]`.

Note: This solution may not be the best option. A more effective approach can be found in our current E2E test. Please refer to [the showcased example here](https://github.com/use-ink/ink-examples/tree/main/multi-contract-caller).

For example, here is a read-only ERC20 cross-contract call:

```rust
// only compiles when *not* running tests
#[cfg(not(test))]
fn get_token_balance(&self, caller: &AccountId) -> Balance {
    // calls the external ERC-20 contract
    self.token.balance_of(*caller)
}

// only compiles when running tests
#[cfg(test)]
fn get_token_balance(&self, _: &AccountId) -> Balance {
    // arbitrary value
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

// on-chain, performs cross-contract call
#[cfg(not(test))]
fn do_some_write(&mut self) {
    self.external_contract.write_to_field(0xDEADBEEF);
}


// testing environment only
#[cfg(test)]
fn do_some_write(&mut self) {
    self.mock_field.my_fake_storage_item = 0xDEADBEEF;
}
```

- useful code to interact and modify the contract environment for testing

[ink_env docs](https://docs.rs/ink_env/4.3.0/ink_env/index.html)

```rust
// get the default accounts (alice, bob, ...)
let accounts = ink::env::test::default_accounts::<ink::env::DefaultEnvironment>();
accounts.alice //usage example

// set which account calls the contract
ink::env::test::set_caller::<ink::env::DefaultEnvironment>(accounts.bob);

// get the contract's address
let callee = ink::env::account_id::<ink::env::DefaultEnvironment>();

// set the contracts address.
// by default, this is alice's account
ink::env::test::set_callee::<ink::env::DefaultEnvironment>(callee);

// transfer native currency to the contract
ink::env::test::set_value_transferred::<ink::env::DefaultEnvironment>(2);

// increase block number (and block timestamp).
// this can be placed in a loop to advance the block many times
ink::env::test::advance_block::<ink::env::DefaultEnvironment>();

// generate arbitrary AccountId
AccountId::from([0x01; 32]);

// generate arbitrary Hash
Hash::from([0x01; 32])

// macro for tests that are expected to panic.
#[should_panic]
```
