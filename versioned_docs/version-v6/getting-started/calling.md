---
title: Call your contract
slug: /getting-started/calling-your-contract
hide_title: true
---

![Frontend Title Picture](/img/title/frontend.svg)

# Call Your Contract

Now that your contract has been fully deployed, we can start interacting with it! Flipper only has
two functions: `flip()` and `get()`. We will show you what it's like to play with both of them.

## RPC calls vs. Transactions

There are two ways of calling a contract:

### Dry-run via RPC

Remote procedure calls, or RPC methods, are a way for an external program – for example, a browser
or front-end application – to communicate with a Polkadot SDK node. 
For example, you might use an RPC method to read a stored value, submit a transaction, or request
information about the chain a node is connected to.

If a user interface displays the value of a contract (e.g. the balance of an account in
an ERC-20 contract), then this is typically done via RPC. Specifically it is done by
executing a synchronous dry-run of the contract method and returning its result.
The following schema depicts this.

![Contract dry-run via RPC](/img/rpc-revive.svg)

RPC calls don't require any tokens, they just require a connection to a node in the 
network. It's important to note that the execution won't result in any state mutations
on the blockchain, it really just is a dry-run.

### State mutating via submitting a Transaction 

The other method of executing a call to a contract is by submitting a transaction
on-chain. This requires tokens of the network to pay for the cost of the transaction.
The transaction will be put in a transaction pool and asynchronously processed.
The important implication here is that during submission of the transaction no result
is available. This is different from an RPC call.

The typical pattern for how a client can recognize the result of the contract call is
to have the contract emit an event and have the client actively listen for such an
event. Typically libraries (like `polkadot-js/api`) provide API functions to do just that.
The important take-away is that contract developers have to make sure that events
are emitted if they want clients to be able to pick up on them.

![Contract execution via transaction](/img/events-revive.svg)

## Using the Contracts UI

### 1. `get()` function

We set the initial value of the Flipper contract
`value` to `false` when we instantiated the contract. Let's check that this is the case.

In the **Message to Send** section, select the "**get(): bool**" message and accept the default
values for the other options.

Press **"Read"** and confirm that it returns the value `false`:

![An image of Flipper RPC call with false](/img/flipper-false.png)

### 2. `flip()` function

So let's make the value turn `true` now!

The alternative message to send with the UI is `flip()`. Again, accept the default values for the other options and click **Call contract**

![An image of a Flipper transaction](/img/send-as-transaction.png)

If the transaction was successful, we should then be able to go back to the `get()` function and see our updated storage:

![An image of Flipper RPC call with true](/img/flipper-true.png)

## Using `cargo-contract`

Calling a contract can also be done via the command-line! 

### 1. `get()` function

```bash
$ cargo contract build
$ cargo contract instantiate --execute --suri //Alice --args true

# The output of this command will contain the contract address in
# this format: 
#     Contract 5DXR2MxThkyZvG3s4ubu9yRdNiifchZ9eNV8i6ErGx6u1sea
# Insert it in the command below.

$ cargo contract call 
  --contract <insert-contract-address> 
  --message get 
  --suri //Alice
```

### 2. `flip()` function

```bash
$ cargo contract call 
  --contract <insert-contract-address>
  --message flip
  --execute
  --suri //Alice
```
