---
title: Run a Substrate Node
slug: /getting-started/running-substrate
---

The [substrate-contracts-node](https://github.com/paritytech/substrate-contracts-node#note) is a simple Substrate
blockchain which is configured to include the `contracts` module.

It's a comfortable option if you want to get a quickstart.

[After successfully installing `substrate-contracts-node`](/getting-started/setup), you can start a local development chain by running:

```bash
substrate-contracts-node --dev
```

![An image of the terminal starting a Substrate node](./assets/start-substrate-node.png)

You should start to see blocks being produced by your node in your terminal.

You can interact with your node using [the Contracts UI](https://github.com/paritytech/contracts-ui).
Once you have the webpage open, you have to configure the UI to connect to the locally running node:

- Click on the dropdown selector at top left corner.
- Choose the Local Node.

![Connect to local node](./assets/canvas-connect-to-local.png)
