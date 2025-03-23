---
title: Storage Metadata Format
slug: /datastructures/storage-in-metadata
hide_title: true
---

![Storage Title Picture](/img/title/storage.svg)

# Storage Metadata Format

The storage layout of a contract is reflected inside the metadata. It allows third-party
tooling to work with contract storage and can also help to better understand the storage
layout of any given contract.

Given a contract with the following storage:

```rust
#[ink(storage)]
pub struct MyContract {
    balance: Balance,
    block: BlockNumber,
    lazy: Lazy<bool>,
}
```

The storage will be reflected inside the metadata as like follows:

```json
"root": {
  "layout": {
    "struct": {
      "fields": [
        {
          "layout": {
            "leaf": {
              "key": "0x00000000",
              "ty": 0
            }
          },
          "name": "balance"
        },
        {
          "layout": {
            "leaf": {
              "key": "0x00000000",
              "ty": 1
            }
          },
          "name": "block"
        },
        {
          "layout": {
            "root": {
              "layout": {
                "leaf": {
                  "key": "0xb1f4904e",
                  "ty": 2
                }
              },
              "root_key": "0xb1f4904e"
            }
          },
          "name": "lazy"
        }
      ],
      "name": "MyContract"
    }
  },
  "root_key": "0x00000000"
}
```

We observe that the storage layout is represented as a tree, where tangible storage values
end up inside a `leaf`. Because of
[`Packed`](https://docs.rs/ink_storage_traits/6.0.0/ink_storage_traits/trait.Packed.html)
encoding, leafs can share the same storage key, and
in order to reach them you'd need to fetch and decode the whole storage cell under this key.

A `root_key` is meant to either be used to directly access a `Packed` storage field
or to serve as the base key for calculating the actual keys needed to access values in
non-`Packed` fields (such as `Mapping`s).

## Storage key calculation for ink! `Mapping` values

Base storage keys are always 4 bytes in size. However, the storage API of the contracts
pallet supports keys of arbitrary length. In order to reach a mapping value, the storage
key of said value is calculated at runtime.

The formula to calculate the base storage key `S` used to access a mapping value under the
key `K` for a mapping with base key `B` can be expressed as follows:

```
S = scale::encode(B) + scale::encode(K)
```

Where the base key `B` is the `root_key` (of type `u32`) found in the contract metadata.

In words, SCALE encode the base (root) key of the mapping and concatenate it with the
SCALE encoded key of the mapped value to obtain the actual storage key used to
access the mapped value.

Given the following contract storage, which maps accounts to a balance:

```rust
#[ink(storage)]
pub struct Contract {
    roles: Mapping<AccountId, Balance, ManualKey<0x12345678>>,
}
```

Now let's suppose we are interested in finding the balance for the account 
`5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY`. The storage key is calculated as follows:

1. SCALE encode the base key of the mapping (`0x12345678u32`), resulting in `0x78563412`
2. SCALE encode the `AccountId`, which will be 
   `0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d`.
   Note that you'll need to convert the SS58 into a `AccountId32` first.
3. Concatenating those two will result in the key 
   `0x78563412d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d`.

```rust
let account_id = "5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY";
let account: AccountId32 = Ss58Codec::from_string(account_id).unwrap();
let storage_key = &(0x12345678u32, account).encode();
println!("0x{}", hex::encode(storage_key));
// 0x78563412d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d
```

## Accessing storage items with the `contractsApi` runtime call API

There are two ways to query for storage fields of smart contracts from outside a contract.
Both methods are accessible via the [`polkadot-js`](https://polkadot.js.org/apps/) web UI.

The straight forward way to query a contracts storage is via a
[`runtime API`](https://polkadot.js.org/apps/#/runtime) call, using the `contractsApi`
endpoint provided by the contracts pallet. The endpoint provides a `getStorage` method,
which just expects a contract address and a storage key as arguments.

For example, to access the root storage struct under the key `0x00000000` of a contract,
just specify the contract's address and the storage key `0x00000000` as-is. The API call
will return the scale-encoded root storage struct of the contract.

## Accessing storage items with the `childState` RPC call API

Under the hood, each contract gets its own
[child trie](https://paritytech.github.io/substrate/master/frame_support/storage/child/index.html), where its storage items are actually stored.

Additionally, the contracts pallet uses the
[`Blake2 128 Concat`](https://paritytech.github.io/substrate/master/frame_support/struct.Blake2_128Concat.html)
[`Transparent hashing algorithm`](https://docs.substrate.io/build/runtime-storage/#transparent-hashing-algorithms)
to calculate storage keys for any stored item inside the child trie.
You'll need to account for that as well.

With that in mind, to directly access storage items of any on-chain contract using a
childState [`RPC call`](https://polkadot.js.org/apps/#/rpc), you'll need the following:
- The child trie ID of the contract, represented as a [`PrefixedStorageKey`](https://docs.rs/sp-storage/10.0.0/sp_storage/struct.PrefixedStorageKey.html)
- The hashed storage key of the storage field

### Finding the contracts child trie ID

The child trie ID is the `Blake2_256` hash of the contracts instantiation nonce
concatenated to it's `AccountId`. You can find it in
[`polkadot-js chainstate query interface`](https://polkadot.js.org/apps/#/chainstate),
where you need to execute the `contracts_contractInfoOf` state query.

It can also be calculate manually according to the following code snippet. The
instantiation note of the contract must be still be known. You can get it using the
`contracts_nonce` chain state query in polkadot-js UI.

```rust
use sp_core::crypto::Ss58Codec;
use parity_scale_codec::Encode;

// Given our contract ID is 5DjcHxSfjAgCTSF9mp6wQBJWBgj9h8uh57c7TNx1mL5hdQp4
let account: AccountId32 =
    Ss58Codec::from_string("5DjcHxSfjAgCTSF9mp6wQBJWBgj9h8uh57c7TNx1mL5hdQp4").unwrap();
// Given our instantiation nonce was 1
let nonce: u64 = 1;

// The child trie ID can be calculated as follows:
let trie_id = (&account, nonce).using_encoded(Blake2_256::hash);
```

### Calculate the `PrefixedStorageKey` from the child trie ID
A `PrefixedStorageKey` based on the child trie ID can be constructed using the `ChildInfo`
primitive as follows:

```rust
use sp_core::storage::ChildInfo;
let prefixed_storage_key = ChildInfo::new_default(&trie_id).into_prefixed_storage_key();
```

### Calculate the storage key using transparent hashing

Finally, we calculate the hashed storage key of the storage item we are wanting to access.
The algorithm is simple: `Blake2_128` hash the storage key and then concatenate the unhashed
key to the hash. Given you want to access the storage item under the `0x00000000`,
it will look like this in code:

```rust
use frame_support::Blake2_128Concat;

// The base key is 0x00000000
let storage_key = Blake2_128Concat::hash(&[0, 0, 0, 0]);
```

### A full example

Let's recap the last few paragraphs into a full example. Given:

* A contract at address `5DjcHxSfjAgCTSF9mp6wQBJWBgj9h8uh57c7TNx1mL5hdQp4`
* With instantiation nonce of `1`
* The root storage struct is to be found at base key `0x00000000`

The following Rust program demonstrates how to calculate the `PrefixedStorageKey` of the
contracts child trie, as well as the hashed key for the storage struct, which can then be
used with the `chilstate` RPC endpoint function `getStorage` in polkadot-js to receive
the root storage struct of the contract:

```rust
use frame_support::{sp_runtime::AccountId32, Blake2_128Concat, Blake2_256, StorageHasher};
use parity_scale_codec::Encode;
use sp_core::{crypto::Ss58Codec, storage::ChildInfo};
use std::ops::Deref;

fn main() {
    // Find the child storage trie ID
    let account_id = "5DjcHxSfjAgCTSF9mp6wQBJWBgj9h8uh57c7TNx1mL5hdQp4";
    let account: AccountId32 = Ss58Codec::from_string(account_id).unwrap();
    let instantiation_nonce = 1u64;
    let trie_id = (account, instantiation_nonce).using_encoded(Blake2_256::hash);
    assert_eq!(
        hex::encode(trie_id),
        "2fa252b7f996d28fd5d8b11098c09e56295eaf564299c6974421aa5ed887803b"
    );

    // Calculate the PrefixedStorageKey based on the trie ID
    let prefixed_storage_key = ChildInfo::new_default(&trie_id).into_prefixed_storage_key();
    println!("0x{}", hex::encode(prefixed_storage_key.deref()));
    // 0x3a6368696c645f73746f726167653a64656661756c743a2fa252b7f996d28fd5d8b11098c09e56295eaf564299c6974421aa5ed887803b

    // Calculate the storage key using transparent hashing
    let storage_key = Blake2_128Concat::hash(&[0, 0, 0, 0]);
    println!("0x{}", hex::encode(&storage_key));
    // 0x11d2df4e979aa105cf552e9544ebd2b500000000
}
```
