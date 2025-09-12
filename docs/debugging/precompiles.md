---
title: Precompiles
slug: /contract-debugging/precompiles
hide_title: true
---

![Magnifying Glass Title Picture](/img/title/magnifying-glass.svg)

# Precompile

We don't have any examples for debugging with precompiles yet. 

Our intention is to add an explanation here, once the precompile API 
in `pallet-revive` is released.

The overarching with precompiles for debugging is to implement one that 
outputs log information to the node process console (`stdout` or `stderr`).
This precompile could then be called from within an ink! contract.