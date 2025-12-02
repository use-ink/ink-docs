---
title: Overview
hide_title: true
slug: /contract-testing/overview
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

![Testing Title Picture](/img/title/testing1.svg)

# Testing Overview

ink! provides three testing approaches for different needs:

| Aspect | Unit Tests | Runtime Tests | Node Tests |
|--------|-----------|---------------|------------|
| **Runtime interaction** | ❌ No | ✅ Yes | ✅ Yes |
| **Cross-contract calls** | ❌ No | ✅ Yes | ✅ Yes |
| **Precompiles** | ❌ No | ✅ Yes | ✅ Yes |
| **Initial compile** | Fast | Slow (compiles runtime) | Medium |
| **Test execution** | Fastest | Fast (after first compile) | Slower (node spawn) |
| **Rust analyzer** | ✅ Contract | ✅ Contract + Runtime | ✅ Contract |
| **External dependencies** | None | None | Requires ink-node |

## When to Use What

```
Does your contract need to interact with the runtime?
(cross-contract calls, precompiles, pallet access)

├── NO → Use Unit Tests
│         Fast, simple, test your contract logic in isolation
│
└── YES → Use Runtime Tests or Node Tests
          │
          ├── Need to debug runtime internals?
          │   └── Use Runtime Tests
          │       Rust analyzer works on runtime code too
          │
          ├── Want fast iteration after first compile?
          │   └── Use Runtime Tests
          │       First compile is slow, then very fast
          │
          ├── Want quick setup, no runtime compilation?
          │   └── Use Node Tests
          │       Spawns ink-node, slightly slower per test
          │
          └── Need the most production-like environment?
              └── Use Node Tests
                  Tests against a real node, closest to mainnet
```

## Running Tests

<Tabs>
  <TabItem value="pop" label="Pop CLI" default>
  ```bash
  # Unit tests
  pop test

  # E2E tests (runtime and node)
  pop test --e2e
  ```
  </TabItem>
  <TabItem value="cargo" label="cargo">
  ```bash
  # Unit tests
  cargo test

  # E2E tests (runtime and node)
  cargo test --features e2e-tests
  ```
  </TabItem>
</Tabs>
