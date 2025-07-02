---
title: Return value
slug: /contract-debugging/return-value
hide_title: true
---

![Magnifying Glass Title Picture](/img/title/magnifying-glass.svg)

# Return an error message

You can return a specific error message from your contract via 
[`ink::return_value(REVERT, err);`](https://docs.rs/ink_env/5.1.1/ink_env/fn.return_value.html).

If you do a dry-run of the contract call, you can read this data.


You cannot read the data if you submit the extrinsic on-chain
(i.e. execute the contract call "for real", on-chain). This is because extrinsic 
do not return data. They are executed in a transaction pool, asynchronous.

Furthermore, since you "REVERT" the transaction, it will just fail with
`ExtrinsicFailed`.

Here's an example:

```rust
#[ink::message]
fn get(&self) {
    ink::return_value(
        ink::env::ReturnFlags::REVERT,
        format!("received {:?}", self.env().transferred_value()).as_bytes();
    );
}
```

We've put the above into a complete example. You can see the full source code
[here](https://github.com/use-ink/ink/tree/master/integration-tests/public/debugging-strategies/lib.rs).
