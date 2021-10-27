---
title: Run a Substrate Node
slug: /getting-started/running-substrate
---

The [substrate-contracts-node](https://github.com/paritytech/substrate-contracts-node#note) is a simple Substrate
blockchain which is configured to include the `contracts` module.

It's a comfortable option if you want to get a quickstart.

[After successfully installing `canvas`](/getting-started/setup), you can start a local development chain by running:

```bash
substrate-contracts-node --dev --tmp
```

![An image of the terminal starting a Substrate node](./assets/start-substrate-node.png)

You should start to see blocks being produced by your node in your terminal.

You can interact with your node using the Canvas UI:

<a href="https://paritytech.github.io/canvas-ui">https://paritytech.github.io/canvas-ui</a>

Now configure the UI to connect to the locally running node:

- Click on the dropdown selector at bottom left corner.
- Choose the "Local Node".

![An image of the Canvas UI connected to the local node](./assets/canvas-settings.png)
