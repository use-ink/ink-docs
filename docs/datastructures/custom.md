---
title: Custom Datastructures
slug: /datastructures/custom-datastructure
---

While the `ink_storage` crate provides tons of useful utilities and data structures to organize and manipulate the contract's storage contract authors are not limited by its capabilities. By implementing the core `SpreadLayout`/`PackedLayout` traits (and the `StorageLayout` trait for supporting the metadata generated for the `.contract` bundle) users are able to define their very own custom storage data structures with their own set of requirement and features that work along the `ink_storage` data structures as long as they fulfill the mere requirements stated by those two traits.

In the future we plan on providing some more ink! workshops and tutorials guiding the approach to design and implement a custom storage data structure.
