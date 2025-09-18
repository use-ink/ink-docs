---
title: Create an ink! Project
slug: /getting-started/creating-an-ink-project
hide_title: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![Heart Title Picture](/img/title/heart.svg)

## Create a new project
Make sure you have [installed the tooling](./setup.md) and that you are in the working directory, and then run:

<Tabs>
  <TabItem value="pop" label="Pop" default>
  ```bash
  pop new contract
  ```
  </TabItem>
  <TabItem value="cargo-contract" label="cargo-contract">
  ```bash
  cargo contract new flipper
  ```
  </TabItem>
</Tabs>

This command will create a new project folder named `flipper` with:

```
flipper
  └─ lib.rs         <-- Contract Source Code
  └─ Cargo.toml     <-- Rust Dependencies and ink! Configuration
  └─ .gitignore
```

:::tip
The [Pop CLI](https://learn.onpop.io/contracts/guides/create-a-new-contract) has many templates to offer!
:::

## Contract Source Code

For the `lib.rs` file, `cargo-contract` automatically generates the source code for the "Flipper" contract, which is about the simplest "smart" contract you can build. You can take a sneak peak as to what will come by looking at the source code here:
[Flipper Example Source Code](https://github.com/use-ink/ink-examples/blob/main/flipper/lib.rs).

The Flipper contract is nothing more than a `bool` which gets flipped from `true` to `false` through the `flip()` function. 

Now that we are feeling confident things are working, we can actually compile the contract in the next step.


