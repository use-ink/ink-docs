---
title: Cross-Contract Calling
slug: /basics/cross-contract-calling
hide_title: true
---

<img src="/img/title/cross-contract.svg" className="titlePic" />

# Cross-Contract Calls

In ink! contracts it is possible to call ink! messages and constructors of other
on-chain contracts.

There are a few approaches to performing these cross-contract calls in ink!:
1. Contract references (i.e `ContractRef`)
1. Builders (i.e `CreateBuilder` and `CallBuilder`)

A short tl;dr of the trade-offs:

ContractRef Pros
- Type safe
- Calls are generated correctly for you

ContractRef Cons
- Need to instantiate contract yourself
    - NANDO: Double check to see if we can use `code_hash`es

CallBuiler Pros
- More flexible call interface
- Can tune call parameters more finely
- Ability to use `delegate_call`
    - NANDO: Double check if we can do this from `ContractRef`s
- Can use it to call non-ink! contracts (e.g contracts compiled with Solang)

CallBuiler Cons
- Not type safe
- Harder to use

## Contract References

See our [`delegator example contract`](https://github.com/paritytech/ink/blob/master/examples/delegator/lib.rs)
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

## Builders
The
[`CreateBuilder`](https://docs.rs/ink_env/latest/ink_env/call/struct.CreateBuilder.html)
and
[`CallBuilder`](https://docs.rs/ink_env/latest/ink_env/call/struct.CallBuilder.html)
offer low-level, flexible interfaces for performing cross-contract calls. The
`CreateBuilder` allows you to instantiate already uploaded contracts, and the
`CallBuilder` allows you to call messages on instantiated contracts.

### CreateBuilder
The `CreateBuilder` offers an an easy way for you to **instantiate** a contract. Note
that you'll still need this contract to have been previously uploaded.

::: note

For a refresher on the difference between `upload` and `instantiate`
[see here](/getting-started/deploy-your-contract).

:::

In order to instantiate a contract you need a reference to your contract, just like in
[previous section TODO](TODO).

Below is an example of how to instantiate a contract using the `CreateBuilder`. We will:
- instantiate the uploaded contract with a `code_hash` of `0x4242...`
- with no gas limit specified (`0` means "automatic")
- sending `10` units of transferred value to the contract instance
- instantiating with the `new` constructor
- with the following arguments
    - a `u8` with value `42`
    - a `bool` with value `true`
    - an array of 32 `u8` with value `0x10`
- generate the address (`AccountId`) using the specified `salt_bytes`
- and we expect it to return a value of type `MyContractRef`

```rust
use contract::MyContractRef;
let my_contract: MyContractRef = build_create::<MyContractRef>()
    .code_hash(Hash::from([0x42; 32]))
    .gas_limit(0)
    .endowment(10)
    .exec_input(
        ExecutionInput::new(Selector::new(ink::selector_bytes!("new")))
            .push_arg(42)
            .push_arg(true)
            .push_arg(&[0x10u8; 32])
    )
    .salt_bytes(&[0xDE, 0xAD, 0xBE, 0xEF])
    .returns::<MyContractRef>()
    .instantiate();
```

Since `CreateBuilder::instantiate()` method returns a contract reference. we can use this
contract refernece to call messages just like in the
[previous section](TODO).

### CallBuilder
The `CallBuilder` gives you a couple of ways to call messages from other contracts. There
are two main approaches to this: `Call`s and `DelegateCall`s. We will briefly cover both
here.

#### CallBuilder: Call
When using `Call`s the `CallBuilder` requires an already instantiated contract.

We saw an example of how to use the `CreateBuilder` to intantiate contracts in the
[previous section](TODO).

Below is an example of how to call a contract using the `CallBuilder`. We will:
- make a regular `Call`
- to a contract at the address `0x4242...`
- with no gas limit specified (`0` means "automatic")
- sending `10` units of transferred value to the contract instance
- calling the `flip` message
- with the following arguments
    - a `u8` with value `42`
    - a `bool` with value `true`
    - an array of 32 `u8` with value `0x10`
- and we expect it to return a value of type `bool`

```rust
let my_return_value = build_call::<DefaultEnvironment>()
    .call(AccountId::from([0x42; 32]))
    .gas_limit(0)
    .transferred_value(10)
    .exec_input(
        ExecutionInput::new(Selector::new(ink::selector_bytes!("flip")))
            .push_arg(42u8)
            .push_arg(true)
            .push_arg(&[0x10u8; 32])
    )
    .returns::<bool>()
    .invoke();
```

Note:

Message arguments will be encoded in the order in which they are provided to the `CallBuilder`.
This means that they should match the order (and type) they appear in the function
signature.

You will not be able to get any feedback about this at at compile time. You will only
find out your call failed at runtime!

#### CallBuilder: Delegate Call
You can also use the `CallBuilder` to craft calls using `DelegateCall` mechanics.
If you need a refresher on what delegate calls are,
[see this article](https://medium.com/coinmonks/delegatecall-calling-another-contract-function-in-solidity-b579f804178c).

In the case of `DelegateCall`s, we don't require an already instantiated contract.
We only need the `code_hash` of an uploaded contract.

Below is an example of how to delegate call a contract using the `CallBuilder`. We will:
- make a `DelegateCall`
- to a contract with a `code_hash` (not contract address!) of `0x4242...`
- with no gas limit specified (`0` means "automatic")
- sending `10` units of transferred value to the contract instance
- calling the `flip` message
- with the following arguments
    - a `u8` with value `42`
    - a `bool` with value `true`
    - an array of 32 `u8` with value `0x10`
- and we expect it to return an `i32`

```rust
let my_return_value = build_call::<DefaultEnvironment>()
    .delegate(ink::primitives::Hash::from([0x42; 32]))
    .exec_input(
        ExecutionInput::new(Selector::new(ink::selector_bytes!("flip")))
            .push_arg(42u8)
            .push_arg(true)
            .push_arg(&[0x10u8; 32])
    )
    .returns::<i32>()
    .invoke();
```

### Builder Error Handling
The `CreateBuilder` and the `CallBuilder` both offer error handling with the
`try_instantiate()` and `try_invoke()` methods respectively.

These allow contract developers to handle two types of errors:
1. Errors from the underlying execution environment (e.g the Contracts pallet)
2. Error from the programming language (e.g `LangError`s)

See the documentation for
[`try_instantiate`](https://docs.rs/ink_env/latest/ink_env/call/struct.CreateBuilder.html#method.try_instantiate),
[`try_invoke`](https://docs.rs/ink_env/latest/ink_env/call/struct.CallBuilder.html#method.try_invoke-2),
[`ink::env::Error`](https://docs.rs/ink_env/latest/ink_env/enum.Error.html)
and
[`ink::LangError`](https://docs.rs/ink/latest/ink/enum.LangError.html)
for more details on proper error handling.

::: tip

Because the `CallBuilder` requires only a contract's `AccountId` and message `selector`,
we can call Solidity contracts compiled using the [Solang](TODO) compiler and deployed to
a chain which supports the `contracts-pallet.`

The reverse, calls from Solidity to ink!, are **not** supported by Solang, but there are
plans to implement this in the future.

:::
