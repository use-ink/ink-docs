---
title: Contract Template
slug: /basics/contract-template
---

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
cargo +nightly test
```

Also check that you can build the Wasm file by running:

```bash
cargo +nightly contract build
```

If everything looks good, then we are ready to start programming!
