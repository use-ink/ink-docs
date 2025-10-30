---
title: Test your contract
slug: /getting-started/testing-your-contract
hide_title: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Test Your Contract

If you created a new project using a template, you can find at the bottom of the `lib.rs` simple test cases which verify the functionality of the contract. We can quickly test this code is functioning as expected:

<Tabs>
  <TabItem value="pop" label="Pop" default>
  ```bash
  pop test
  ```
  </TabItem>
  <TabItem value="cargo-contract" label="cargo-contract">
  ```bash
  cargo contract test
  ```
  </TabItem>
</Tabs>

To which you should see a successful test completion:

```bash
running 2 tests
test flipper::tests::it_works ... ok
test flipper::tests::default_works ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out
```

Learn more about the [testing strategies for ink! contracts](../testing/overview.md).


## Run End-to-End (E2E) tests

E2E tests compile and deploy your contract to a running node.

Run E2E tests:

<Tabs>
  <TabItem value="pop" label="Pop" default>
  ```bash
  pop test --e2e
  ```
  </TabItem>
  <TabItem value="cargo-contract" label="cargo-contract">
  First, install the `ink-node` [here](/getting-started/setup?tabs=cargo-contract#ink-node).

  Then run:
  ```bash
  cargo contract test --features e2e-tests
  ```
  </TabItem>
</Tabs>

For more details and examples (including testing against live state snapshots), see the [E2E guide](../testing/e2e.md).

