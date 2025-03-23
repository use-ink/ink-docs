---
title: Run a local node
slug: /getting-started/running-substrate
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl'

![Run an ink! node](/img/title/cargo-contract.svg)

# Run a local node

The [`ink-node`](https://github.com/use-ink/ink-node) is a simple 
[Polkadot SDK](https://polkadot.com/platform/sdk) blockchain. It is 
configured to include the [`pallet-revive`](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/revive) module,
which adds support for smart contracts.
Specifically this module allows uploading and executing RISC-V smart
contracts to a blockchain.

:::info
You can read more about how ink!, `pallet-revive`, and Polkadot SDK
are related in [our technical background section](../background/polkadot-sdk.md).
:::

[After successfully installing `ink-node`](./setup.md#installing-ink-node),
you can start a local development chain by running:

```bash
$ ink-node
```

**Note:** `ink-node` uses the `--dev` flag by default. 
You may need to specify the `--dev` flag when you want to run a development chain with another binary (e.g using the Substrate Node Template).

<img src={useBaseUrl('/img/ink-node.png')} className="titlePic titleSpace" title="Screenshot of terminal starting a local node" />

You can interact with your node using `cargo-contract` or [the Contracts UI](https://contracts-ui.substrate.io).
If you use the Contracts UI, you have to configure it to connect to the locally running node:

- Click on the dropdown selector at the top left corner.
- Choose "Local Node".

![Connect to local node](/img/contracts-ui-local-node.png)
