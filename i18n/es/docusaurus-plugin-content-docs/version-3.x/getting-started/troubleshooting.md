---
title: Troubleshooting
slug: /getting-started/troubleshooting
---

Here are solutions to some of the common problems you may come across:

### Unexpected Epoch Change

There is a known issue with the Substrate block production (BABE) on a running chain. If you stop your node for too long (closing the terminal, putting your computer to sleep, etc.), you will get the following error:

```bash
ClientImport("Unexpected epoch change")
```

To solve this you will need to restart your node with: `substrate-contracts-node --dev`. At that point, you will
need to re-deploy any contracts and re-do any steps that you may have done before on your node. As
long as you keep your node running, you should face no issues.

### Old Contracts in Local Storage

**Contracts UI** uses its own local storage to track the contracts that you have deployed. This means
that if you deploy a contract using the UI, and then purge your Substrate node, you will be prompted to
reset your local storage and please do so. And then re-deploy any contracts and re-do any steps that
you may have done before on your node.


### Other Issues

If you run into any other issues during this tutorial, please [report an issue](https://github.com/substrate-developer-hub/substrate-docs/issues)!
