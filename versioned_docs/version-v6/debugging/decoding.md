---
title: Decode raw transactions
slug: /contract-debugging/decoding-transactions
hide_title: true
---

![Magnifying Glass Title Picture](/img/title/magnifying-glass.svg)

# Decode Data Payload

You can use a block explorer (or an app like Polkadot.js) to retrieve the data
payload of a contract transaction. [cargo-contract](https://github.com/use-ink/cargo-contract) supports decoding
this data.

```bash
# From your contract directory
$ cargo contract decode message -d fe5bd8ea01000000
```

This command will output the method name and parameters encoded in the data payload:

```
Decoded data: inc_by { n: 1 }
```

If the contract was called through a cross-contract interaction, the payload will not be available in the transaction. In such cases, you can use the approach described in the next section to access it.

