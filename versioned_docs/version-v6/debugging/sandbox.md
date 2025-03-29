---
title: Sandbox
slug: /contract-debugging/sandbox
hide_title: true
---

![Magnifying Glass Title Picture](/img/title/magnifying-glass.svg)

# Sandbox API

In the chapter on [Testing Strategies](../testing/sandbox.md), we explain that ink! supports
two means of End-to-End testing:

* `#[ink_e2e::test]`:
  The End-to-End tests spawn a local node process in the backend
  and submit transactions against it, returning the output to you.

* `#[ink_e2e::test(backend(runtime_only))]` 
  With these settings, the End-to-End tests will be executed in
  a sandbox. The sandbox contains the `pallet-revive`, but anything
  that the node would do is mocked and can be influenced (block numbers, etc.).

You can utilize the DRink! library that is described on
[Testing Strategies](../testing/sandbox.md) to influence the state of the mocked 
sandbox. This is very useful for debugging, and we invite you to read the linked page.