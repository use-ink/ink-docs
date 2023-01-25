---
title: Metadata Format
slug: /datastructures/storage-in-metadata
---

The storage layout of a contract is reflected inside the metadata. It allows third-party 
tooling to work with contract stroage and can also help to better understand the storage 
layout of any given contract.

Given a contract with the following storage:

```rust
#[ink(storage)]
pub struct MyContract {
    balance: Balance,
    block: BlockNumber,
    something: Lazy<bool>,
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
          "name": "something"
        }
      ],
      "name": "MyContract"
    }
  },
  "root_key": "0x00000000"
}
```

We observe that the storage is layed out as a tree, where tangible storage values end up 
inside a `leaf`. Because of `Packed` encoding, leafs can share the same storage key, and 
in order to reach them you'd need fetch and decode the whole storage cell under this key.

A `root_key` is meant to either be used to directly access a `Packed` storage field 
or to serve as the base key for calculting the actual keys needed to access values in 
`Non-Packed` fields (such as Mappings).

## Storage key calculation for mappings

Root storage keys are always 4 bytes in size. However, the storage API of the contracts 
pallet supports keys of arbitrary length. In order to reach a mapping value, the storage 
key of said value is calculated at runtime.

The formula to calculate a storage key `S` used to access a mapping value under the key `K`
for a mapping with base key `B` can be expressed as follows:

```
S = B + scale::encode(K)
```
 
In words, find the base (root) key of the mapping and concatenate it with the 
SCALE encoded key of the mapped value to obtain the actual storage key used to 
access the mapped value.
