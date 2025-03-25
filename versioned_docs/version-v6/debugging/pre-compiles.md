---
title: Pre-compiles
slug: /contract-debugging/pre-compiles
hide_title: true
---

![Magnifying Glass Title Picture](/img/title/magnifying-glass.svg)

# Pre-compile

We don't have any examples for debugging with pre-compiles yet. 
Our intention add one here, once the pre-compile API in `pallet-revive`
is clearer.

The idea here is to implement a pre-compile that outputs log information
to the node process console (`stdout` or `stderr`).

This pre-compile could then be called from within an ink! contract.