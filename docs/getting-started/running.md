---
title: Run a Substrate Node
slug: /getting-started/running-substrate
---

The [canvas-node](https://github.com/paritytech/canvas-node#note) is a simple Substrate
blockchain which is configured to include the `contracts` module.

It's a comfortable option if you want to get a quickstart.

[After successfully installing `canvas`](/getting-started/setup), you can start a local development chain by running:

```bash
canvas --dev --tmp
```

![An image of the terminal starting a Substrate node](./assets/start-substrate-node.png)

You should start to see blocks being produced by your node in your terminal.

You can interact with your node using the Canvas UI:

https://paritytech.github.io/canvas-ui

Now configure the UI to connect to the locally running node:

- Click on the dropdown selector at bottom left corner.
- Choose the "Local Node".

![An image of the Canvas UI connected to the local node](./assets/canvas-settings.png)
