---
title: Deploy your contract
slug: /getting-started/deploy-your-contract
hide_title: true
---

![Rocket Title Picture](/img/title/rocket.svg)

# Deploy Your Contract

Now that we have generated the contract binary from our source code and connected to a local node, we want
to deploy this contract onto our local node.

Smart contract deployment on `pallet-revive` is a little different than on traditional smart contract
blockchains.

Whereas a completely new blob of smart contract source code is deployed each time you push a
contract on other platforms, `pallet-revive` opts to optimize this behavior. For example, the standard
ERC20 token has been deployed to Ethereum thousands of times, sometimes only with changes to the
initial configuration (through the Solidity `constructor` function). Each of these instances take
up space on the blockchain equivalent to the contract source code size, even though no code was
actually changed.

For `pallet-revive`, the contract deployment process is split into two steps:

1. Putting your contract code on the blockchain
2. Creating an instance of your contract

With this pattern, contract code like the ERC20 standard can be put on the blockchain one single
time, but instantiated any number of times. No need to continually upload the same source code over
and waste space on the blockchain.

## Using the Contracts UI

:::caution
This section on the Contracts UI has not yet been updated to ink! v6.

TODO @peterwht Please review this section.
:::

### 1. Upload Contract Code

Here we will upload the contract code and instantiate one copy of the contract on the blockchain
(which is usually why we upload the contract code in the first place):

- Go to https://ui.use.ink
- Click the **Add New Contract** button in the sidebar.
- Click the **Upload New Contract Code** button in the Add New Contract page.
- Choose an **Instantiation account** (e.g. ALICE).
- Give the contract a descriptive **Name** (e.g. Flipper Contract).
- Drag the `flipper.contract` file that contains the bundled binary blob and metadata into the drag
  & drop area. You will see the UI parse the metadata and enabling the button that takes you to the next step.
- Click the **Next** button

![Flipper Instantiate Contract 01](/img/contracts-ui-0.png)

### 2. Instantiate a Contract on the Blockchain

Smart contracts exist as an extension of the account system on the blockchain. Thus creating an
instance of this contract will create a new `AccountId` which will store any balance managed by the
smart contract and allow us to interact with the contract.

Now a screen displays the information that represents our smart contract. We are going to
instantiate a copy of the smart contract:

- Accept the default options for the contract **Deployment Constructor**.
- Accept the default options **Max Gas Allowed** of `200000`.
- Click on `Next`

![Flipper Instantiate Contract 02](/img/contracts-ui-1.png)

The transaction is now queued, review your data and click **Upload and Instantiate** or go back and modify your inputs.

![Flipper Instantiate Contract 03](/img/contracts-ui-2.png)

When you click **Upload and Instantiate** you should see
the extrinsic `instantiateWithCode` is processing, and a flurry of events appear including the
creation of a new account (`system.NewAccount`) and the instantiation of the contract
(`contracts.Instantiated`).
You will be redirected to a new page, where you can interact with the newly created contract instance.

![Flipper Instantiate Success](/img/contracts-ui-3.png)

## Using `cargo-contract`

Contracts can be deployed via the command-line as well. With `cargo-contract`
it's just a simple sequence of:

```bash
$ cargo contract build
$ cargo contract instantiate --suri //Alice --args true
```
