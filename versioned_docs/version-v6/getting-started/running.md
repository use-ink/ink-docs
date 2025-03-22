---
title: Run a Substrate Node
slug: /getting-started/running-substrate
hide_title: true
---

![Substrate Title Picture](/img/title/substrate.svg)

# Run a Substrate Node

The [`ink-node`](https://github.com/use-ink/ink-node)
is a simple Substrate blockchain which is configured to include the `contracts` module.
It's a comfortable option if you want to get a quickstart.

[After successfully installing `ink-node`](./setup.md#installing-ink-node),
you can start a local development chain by running:

```bash
ink-node
```

**Note:** `ink-node` uses the `--dev` flag by default. 
You may need to specify the `--dev` flag when you want to run a development chain with another binary (e.g using the Substrate Node Template).

<img src="/img/ink-node.png" className="titlePic titleSpace" title="An image of the terminal starting a Substrate node" />

You can interact with your node using [the Contracts UI](https://contracts-ui.substrate.io).
Once you have the webpage open, you have to configure the UI to connect to the locally running node:

- Click on the dropdown selector at the top left corner.
- Choose "Local Node".

![Connect to local node](/img/contracts-ui-local-node.png)
