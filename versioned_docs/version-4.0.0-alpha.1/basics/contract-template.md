---
title: Contract Template
slug: /basics/contract-template
---

## Creating a template

Change into your working directory and run:

```bash
cargo contract new foobar
```

This will create a new project folder named `foobar`.

```bash
cd foobar/
```

In the `lib.rs` file you find initial scaffolded code, which you can use as a starting point.

Quickly check that it compiles and the trivial tests pass with:

```bash
cargo test
```

Also check that you can build the Wasm file by running:

```bash
cargo contract build
```

If everything looks good, then we are ready to start programming!

## What the template contains

TODO