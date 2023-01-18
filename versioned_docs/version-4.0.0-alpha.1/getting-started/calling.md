---
title: Call Your Contract
slug: /getting-started/calling-your-contract
---

Now that your contract has been fully deployed, we can start interacting with it! Flipper only has
two functions: `flip()` and `get()`. We will show you what it's like to play with both of them.

## Using the Contracts UI

### 1. get() function

We set the initial value of the Flipper contract
`value` to `false` when we instantiated the contract. Let's check that this is the case.

In the **Message to Send** section, select the "**get(): bool**" message and accept the default
values for the other options.

Press **"Read"** and confirm that it returns the value `false`:

![An image of Flipper RPC call with false](./assets/flipper-false.png)

### 2. flip() function

So let's make the value turn `true` now!

The alternative message to send with the UI is `flip()`. Again, accept the default values for the other options and click **Call**

![An image of a Flipper transaction](./assets/send-as-transaction.png)

If the transaction was successful, we should then be able to go back to the `get()` function and see our updated storage:

![An image of Flipper RPC call with true](./assets/flipper-true.png)

## Using `cargo-contract`

TODO
