---
title: "#[ink::trait_definition]"
slug: /macros-attributes/trait-definition
hide_title: true
---

![Text/trait Title Picture](/img/title/text/trait.svg)

Marks trait definitions to ink! as special ink! trait definitions.

There are some restrictions that apply to ink! trait definitions that this macro checks.
Also ink! trait definitions are required to have specialized structure so that
the main [`#[ink::contract]`](./contract.md) macro can properly generate code
for its implementations.

[See our section on Trait Definitions](../basics/trait-definitions.md) for a detailed description and examples.
