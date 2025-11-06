---
title: Compile your contract
slug: /getting-started/building-your-contract
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![Cargo Contract Title Picture](/img/title/cargo-contract.svg)

# Compile Your Contract

Run the following command in your `flipper` directory to compile your smart contract:

<Tabs>
  <TabItem value="pop" label="Pop" default>
  ```bash
  pop build
  ```
  </TabItem>
  <TabItem value="cargo-contract" label="cargo-contract">
  ```bash
  cargo contract build
  ```
  </TabItem>
</Tabs>

This command will build the following for your contract: 
a binary (`.polkavm`), a metadata file (`.json`), and a `.contract` file which bundles both.

If all goes well, you should see a `target` folder that contains these files:

```
target
  └─ ink
    └─ flipper.polkavm     <-- Raw contract binary
    └─ flipper.json        <-- Metadata for the contract
    └─ flipper.contract    <-- JSON file that combines binary + metadata
```

Learn more about [metadata](../reference/metadata/overview.md) and the [ink! metadata format](../reference/metadata/ink-format.md) for detailed information about the structure of these files.

## Debug vs. Release Build

By default, contracts are built in debug mode, which includes debugging information and
increases the contract's size. For production deployments, you should always build with the
`--release` flag:

<Tabs>
  <TabItem value="pop" label="Pop" default>
  ```bash
  pop build --release
  ```
  </TabItem>
  <TabItem value="cargo-contract" label="cargo-contract">
  ```bash
  cargo contract build --release
  ```
  </TabItem>
</Tabs>

This will ensure that nothing unnecessary is compiled into the binary blob, making
your contract faster and cheaper to deploy and execute.