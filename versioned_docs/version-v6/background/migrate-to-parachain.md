---
title: Migrate an ink! contract to a Rollup
hide_title: true
slug: /background/migrate-ink-contracts-to-polkadot-frame-parachain-rollup
---

![Polkadot Title Picture](/img/title/polkadot.svg)

# Migrate an ink! contract to a Polkadot SDK Runtime

Smart contracts written in ink! are a great starting point for developing applications in the Polkadot ecosystem. Developers can go from an idea to a fully functioning web3 application "in production" in a matter of hours or days. This allows faster feedback on ideas, to validate whether there is user demand in the first place, and to easily iterate and refine the implementation.

For many applications, smart contracts are good enough. However, they are exposed to the inherent limitations of the smart contract execution environment: 
    
1. Sharing of blockspace with other smart contracts, volatile "gas" fees.
2. Default model enforces gas fees being paid by the end user.
3. Relative poor performance of interpreted smart contract (untrusted) code compared to pre-compiled Parachain runtime (trusted) code.
4. Limited access to the host chain environment and any special functionality provided by an extensive suite of customisable FRAME pallets.

Once a web3 application has proven it can work, the team may consider "upgrading" to a Parachain to unlock the full power of a dedicated App Chain. Compared to developing and deploying a smart contract, this requires considerably more time and expertise, which is why we encourage to start with ink! where possible, at least at the prototype stage.

Much of the difficulty in launching a parachain comes in configuring a node implementation, bootstrapping and maintaining a collator network, deploying to testnets, managing infrastructure, acquiring "Coretime" (previously via a slot auction). All of which is time consuming and costly. This is important to note because this guide will focus on the migration of the code from ink! to `FRAME`, which might be a learning curve but overall a minor part of the overall migration, and a one-off cost.

## Utilizing existing FRAME pallets

There is a rich library of FRAME pallets, which may provide a drop in replacement for some (or all) of your smart contract functionality. For example, for a [PSP22](../standards/overview.md) (similar to ERC20) fungible token contract, this could be replaced either by the native Parachain token itself via `pallet_balances` or by an asset on `pallet_assets`. Governance functions could be replaced by e.g. `pallet_democracy`, and so on. See [`polkadot-sdk`](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame) for a range of pre-built pallets which can be used to handle some common functions.

## Similarities and differences between ink! and `FRAME`

### Similar

The biggest advantage we have when migrating from ink! to `FRAME` is that both are Rust based DSLs, in both cases actual Rust (or Rust-like)  code annotated with attributes expands into Rust code for handling all the boilerplate for integrating into their respective execution environments. Indeed the modern `FRAME 2.0` was originally inspired by the ink! approach of attribute macros annotating Rust code.

So we can assume that the developer performing the migration is already familiar with Rust and its development environment, which is already a huge headstart for developing with `FRAME`. 

Next we can assume some familiarity with the execution environment, after all a contract is running inside of `pallet_contracts` and is invoked in a similar way via a pallet dispatchable, has access to storage (sandboxed to the contract), and can emit events.

### Different

The biggest difference is that a contract is user uploaded and therefore untrusted code, so there are restrictions to what the contract is able to do and it will perform slower because it is interpreted. For example, a contract can only read and write from its own sandboxed storage.

Runtime code built using `FRAME` is trusted, can be pre-compiled and therefore executes significantly faster (though that may change if/when contracts are able to target [PolkaVM](https://forum.polkadot.network/t/announcing-polkavm-a-new-risc-v-based-vm-for-smart-contracts-and-possibly-more/3811)). Pallets have direct access to other pallets and have full access to the Parachain storage, and the permissioning can be configured as desired.

Because ink! is executing in a more constrained environment, it is able to be much more opinionated and therefore a simpler language. Because execution is metered (pay as you go execution by the user), there is no need to worry about benchmarking for "weight" calculation. `FRAME` is more powerful, but necessarily more complicated.

## Example Migration

We'll use the [`DNS` example](https://github.com/use-ink/ink-examples/blob/main/dns/lib.rs) contract to demonstrate a migration.

### Setup

Start by cloning the [Parachain Template](https://github.com/paritytech/polkadot-sdk-parachain-template) which contains a [template pallet](https://github.com/paritytech/polkadot-sdk-parachain-template/blob/master/pallets/template/src/lib.rs) which we can modify.

Now we will move down the contract from top to bottom and begin the migration of code.

### Event Definitions

First thing we encounter are events. E.g.:

```rust
#[ink(event)]
pub struct Register {
    #[ink(topic)]
    name: Hash,
    #[ink(topic)]
    from: AccountId,
}
```

Each of these structs annotated with `#[ink(event)]` can be translated to a variant in the pallet `Error` enum annotated with `#[pallet::error]`. Any of the ink! environment type aliases (both `Hash` and `AccountId` in the above example) must be translated to their equivalent associated type on the `Config` trait e.g. `AccountId` -> `T::AccountId`. Also the `#[ink(topic)]` annotations must be removed: topics must be calculated manually when the event is emitted, and will be covered later. Remove the `#[pallet::generate_deposit(pub(super) fn deposit_event)]` and the final `Event` type will look like:


```rust
#[pallet::event]
pub enum Event<T: Config> {
    Register {
        name: T::Hash,
        from: T::AccountId,
    },
    SetAddress {
        name: T::Hash,
        from: T::AccountId,
        old_address: Option<T::AccountId>,
        new_address: T::AccountId,
    },
    Transfer {
        name: T::Hash,
        from: T::AccountId,
        old_owner: Option<T::AccountId>,
        new_owner: T::AccountId,
    }
}
```

### Storage

The storage layout of the contract is defined by the following struct:

```rust
#[ink(storage)]
pub struct DomainNameService {
    /// A hashmap to store all name to addresses mapping.
    name_to_address: Mapping<Hash, AccountId>,
    /// A hashmap to store all name to owners mapping.
    name_to_owner: Mapping<Hash, AccountId>,
    /// The default address.
    default_address: AccountId,
}
```
In ink!, the layout of the contract storage is defined by this top level `struct`. A brief recap of how this is used:
- Constructors must return an initialized instance of this struct, which is then written to storage. 
- Non mutable messages e.g. `#[ink(message)] fn message(&self, ..)` will load an instance of this struct and pass it as `&self`.
- Mutable messages e.g. `#[ink(message)] fn message(&mut self, ..)`, will load an instance of the struct and persist it if the message succeeds in executing.
- Fields of type `Mapping` or `Lazy` are not written directly into the same storage slot as the parent, but are wrappers around direct reads/writes to storage under many or a single key respectively.

In `FRAME`, all storage operations happen eagerly via "type aliases" annotated with `#[pallet::storage]`. So for each field in the `#[ink(storage)]` struct, we require a corresponding pallet storage definition.

`default_address: AccountId` translates to:

```rust
#[pallet::storage]
pub type DefaultAddress<T: Config> = StorageValue<_, T::AccountId>;
```

`name_to_address: Mapping<Hash, AccountId>,` translates to a `StorageMap` like so:

```rust
#[pallet::storage]
pub type NameToAddress<T: Config> = StorageMap<_, Blake2_128Concat, T::Hash, T::AccountId>;
```

`name_to_owner: Mapping<Hash, AccountId>,` also translates to a `StorageMap`:

```rust
#[pallet::storage]
pub type NameToOwner<T: Config> = StorageMap<_, Blake2_128Concat, T::Hash, T::AccountId>;
```

Reading and writing these storage values must all be done explicitly, in contrast with ink! which can do so automatically for non "lazy" values. When it comes to migrating the messages, this will be demonstrated.

### Error Definition

Simply copy across the variants of the `enum Error` to the equivalent `#[pallet::error]` definition. In our case we end up with:

```rust
#[pallet::error]
pub enum Error<T> {
    /// Returned if the name already exists upon registration.
    NameAlreadyExists,
    /// Returned if caller is not owner while required to.
    CallerIsNotOwner,
}
```
Note that the `T` generic parameter is not used in this case, the `error` macro handles the generation of `PhantomData<T>`. If we use some environmental types we can use the `T` similar to the event definition.

### Constructors

In this example, the single constructor is simply initializing the storage to empty values. 

```rust
 #[ink(constructor)]
pub fn new() -> Self {
    Default::default()
}
```
This code is executed when the contract instance was initialized.

Our use case is a migration, so we will assume that the existing data must be migrated from contract storage to the pallet storage. This will be covered in the [Data Migration](#data-migration) section.

No code migration is required then for this constructor.

### Messages

#### Mutable

There are 3 mutable messages (that can change the state of the contract): `register`, `set_address` and `transfer`. This guide will demonstrate `register`, and the other two can follow a similar pattern. The message is defined as so, with added numerical comments to show the translation to the equivalent `FRAME` code.

```rust
#[ink(message)]
pub fn register(&mut self, name: Hash) -> Result<()> {
    // 1.
    let caller = self.env().caller();
    // 2.
    if self.name_to_owner.contains(name) {
        return Err(Error::NameAlreadyExists)
    }
    // 3.
    self.name_to_owner.insert(name, &caller);
    // 4.
    self.env().emit_event(Register { name, from: caller });
    // 5.
    Ok(())
}
```

Before proceeding, it is necessary to add a custom `deposit_event` function for raising events which accepts topics:

```rust
impl<T: Config> Pallet<T> {
    fn deposit_event(topics: Vec<T::Hash>, event: Event<T>) {
        <frame_system::Pallet<T>>::deposit_event_indexed(
            &topics,
            <T as Config>::RuntimeEvent::from(event).into()
        )
    }
}
```
Now we can translate the `register` message into a "Dispatchable":

```rust
#[pallet::call_index(0)]
#[pallet::weight(Weight::from_parts(10_000, 0)
    .saturating_add(T::DbWeight::get().reads(1))
    .saturating_add(T::DbWeight::get().writes(1)))]
pub fn register(origin: OriginFor<T>, name: T::Hash) -> DispatchResultWithPostInfo {
    // 1.
    let caller = ensure_signed(origin)?;
    // 2.
    ensure!(!NameToOwner::<T>::contains_key(&name), Error::<T>::NameAlreadyExists);
    // 3.
    <NameToOwner<T>>::insert(name, &caller);
    // 4.
    Self::deposit_event(
        &[name.clone(), T::Hashing::hash_of(&caller)],
        Event::Register { name, from: caller }
    );
    // 5.
    Ok(().into())
}
```
Compare the numbered annotations from the ink! contract message and the `FRAME` dispatchable, and you can see they are very similar, just different APIs for interacting with the environment and with storage.

For `4.`, in `FRAME` we need to generate the topic list manually which is done automatically in ink! via the annotations.

#### Weights

The `pallet::weight` attribute defines the `weight` of the dispatchable i.e. the amount of onchain resources it is estimated to consume. Because we are now writing trusted code, we can define this up front (no runtime gas metering). The number in the `weight` is typically generated via a benchmarking process. It is important to integrate this process and set a non-arbitrary value here before deploying to a production chain. Read more https://docs.substrate.io/build/tx-weights-fees/.

#### Immutable (read only) messages

`ink!` messages can return a value, which when executed as an RPC "dry-run" (not via a transaction), are used to read the state of contracts. Dispatchables in `FRAME` cannot return values directly. There are two ways to read the state from a FRAME pallet:

1. Reading from `#[pallet::storage]` items directly, client libraries will generate an API to do this from the runtime metadata. See e.g. [`subxt`](https://github.com/paritytech/subxt/blob/master/subxt/examples/storage_fetch.rs)
2. Via runtime APIs, RPC methods that can be wired up directly into query methods on a pallet. See https://docs.substrate.io/reference/runtime-apis/.

In our case, `1.` is good enough, so the following read only message:

```rust
#[ink(message)]
pub fn get_address(&self, name: Hash) -> AccountId {
    self.get_address_or_default(name)
}

fn get_address_or_default(&self, name: Hash) -> AccountId {
    self.name_to_address
        .get(name)
        .unwrap_or(self.default_address)
}
```
Can be queried *without* any modifications to the `NameToAddress` storage type:

```rust
#[pallet::storage]
pub type NameToAddress<T: Config> = StorageMap<_, Blake2_128Concat, T::Hash, T::AccountId>;
```
`subxt` would generate the following accessor for querying the storage:

```rust
let storage_query = my_custom_chain::storage().dns().name_to_address(&name);

// Use that query to `fetch` a result. This returns an `Option<_>`, which will be
// `None` if no value exists at the given address. You can also use `fetch_default`
// where applicable, which will return the default value if none exists.
let result = api
    .storage()
    .at_latest()
    .await?
    .fetch(&storage_query)
    .await?;
```

### Data Migration

Data migration can be done at either genesis time or once the custom parachain is up and running. 

#### Retrieving the data from the contract

In both cases the first steps are to first download the current state of the contract at a fixed point in time, and then ensuring that no changes can be made to the contract after that. 

This could be done by using `set_code_hash` to update the source code of the contract to a special contract which allows only querying and downloading the state of the current contract, and no mutating messages.

An alternative would be querying the contract storage directly, but currently there are no good tools for this, and it would require some key calculation for retrieving the data at all storage locations. Additionally the contract would still need to be "frozen" somehow to ensure no changes can be made to the contract state.

#### Initializing the pallet 

Once the data has been downloaded and serialized, it can be used to initialize the state of the custom parachain runtime. This can be hardcoded in a `#[pallet::genesis_build]` impl block. See https://docs.substrate.io/reference/how-to-guides/basics/configure-genesis-state/.

Alternatively the state could be initialized via dispatchable extrinsic(s) which initialize the storage.

### Adjusting UIs

User interfaces will need to be adjusted to interact with a pallet rather than a contract. This should be relatively straightforward since client libraries usually have first-class support for interacting with Substrate pallets, and the signing etc. should already be integrated.
