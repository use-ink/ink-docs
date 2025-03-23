---
title: Selectors
hide_title: true
slug: /basics/selectors
---

![Selector Hex Title Picture](/img/title/selector-hex.svg)

# Selectors

Selectors in ink! are a language agnostic way of identifying constructors and messages.
They are four-byte hexadecimal strings which look something like: `0x633aa551`.

You can find the selector of an ink! constructor or message in your
[contract metadata](./ink-metadata) by looking for the `selector` field of the dispatchable
you're interested in.

Here is an example of how you can grab the message name and selector from your contract
metadata using [`jq`](https://stedolan.github.io/jq/).

```bash
$ cat target/ink/flipper.json | jq '.spec.messages[0] | "\(.label): \(.selector)"'
"flip: 0x633aa551"
```

## Selector Calculation

If you do not have access to a contract's metadata, you can also calculate it yourself.

The algorithm ink! uses is fairly straightforward:
1. Get _just_ the name of the constructor or message
2. Compute the `BLAKE2` hash of the name
3. Take the first four bytes of the hash as the selector

Let's walk through a short example of what this looks like in practice. Consider the
following message:

```rust
#[ink(message)]
fn frobinate(&mut self, fro: bool, bi: u32, nate: AccountId) -> bool {
    unimplemented!()
}
```

To calculate the selector we:
1. Grab the name of the message, `frobinate`
2. Compute `BLAKE2("frobinate") = 0x8e39d7f22ef4f9f1404fe5200768179a8b4f2b67799082d7b39f6a8ca82da8f1`
3. Grab the first four bytes, `0x8e39d7f2`

## Selector Calculation: ink! Traits

These rules change a bit if you define any messages using the `[ink::trait_definition]`
[macro](./trait-definitions.md). For our first step, instead of taking _just_ the
message name, we now also add the _trait name_ to the selector calculation.

```
cat target/ink/trait-flipper.json | jq '.spec.messages[0] | "\(.label): \(.selector)"'
"Flip::flip: 0xaa97cade"
```

Let's see what this would look like in practice. Consider the following trait:

```rust
#[ink::trait_definition]
pub trait Frobinate {
    fn frobinate(&mut self, fro: bool, bi: u32, nate: AccountId) -> bool;
}

-- snip --

impl Frobinate for Contract {
    #[ink(message)]
    fn frobinate(&mut self, fro: bool, bi: u32, nate: AccountId) -> bool {
        unimplemented!()
    }
}
```

To calculate the selector we:
1. Grab the name of the trait **and** the name of the message, `Frobinate::frobinate`
2. Compute `BLAKE2("Frobinate::frobinate") = 0x8915412ad772b2a116917cf75df4ba461b5808556a73f729bce582fb79200c5b`
3. Grab the first four bytes, `0x8915412a`

:::tip

Don't worry if you're not able to calculate the `BLAKE2` hash of a string by hand. You
can use [Shawn's Substrate Utilities](https://www.shawntabrizi.com/substrate-js-utilities/)
to do it for you!

:::
