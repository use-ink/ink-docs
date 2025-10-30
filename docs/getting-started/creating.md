---
title: Create a new project
slug: /getting-started/creating-an-ink-project
hide_title: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![Heart Title Picture](/img/title/heart.svg)

## Create a new project

<Tabs>
  <TabItem value="pop" label="Pop" default>
  ```bash
  pop new contract flipper -t standard
  ```
  This command will create a new project folder named `flipper` with:

  ```
  flipper
    └─ lib.rs         <-- Contract Source Code
    └─ Cargo.toml     <-- Rust Dependencies and ink! Configuration
    └─ .gitignore
  ```

  You can find the flipper code [here](https://github.com/use-ink/ink-examples/blob/main/flipper/lib.rs).

  To see other templates:
  ```
  pop new contract
  ```
  </TabItem>
  <TabItem value="cargo-contract" label="cargo-contract">
  ```bash
  cargo contract new flipper
  ```
  This command will create a new project folder named `flipper` with:

  ```
  flipper
    └─ lib.rs         <-- Contract Source Code
    └─ Cargo.toml     <-- Rust Dependencies and ink! Configuration
    └─ .gitignore
  ```

  You can find the flipper code [here](https://github.com/use-ink/ink-examples/blob/main/flipper/lib.rs).
  </TabItem>
</Tabs>


Now that we are feeling confident things are working, we can actually compile the contract in the next step.


