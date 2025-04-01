---
title: Replays
slug: /contract-debugging/transaction-extrinsic-replays
hide_title: true
---

![Magnifying Glass Title Picture](/img/title/magnifying-glass.svg)

:::caution
This section has not yet been updated to ink! v6.

TODO Verify if this still works.
:::


# Replays
On this page we'll examine possibilities of replaying on-chain action.

## Replay and Debug a Block

To replay a transaction, you can use [Chopstick](https://github.com/AcalaNetwork/chopsticks) to create a local fork of the chain and replay the block with trace-level logging.

Assuming you have a node that you can connect to at `$ENDPOINT` and the transaction you want to replay is in block `$BLOCK_HASH`, you can use the following command:

```bash
$ npx @acala-network/chopsticks@latest run-block \
    --endpoint $ENDPOINT \
    --block $BLOCK_HASH \
    --runtime-log-level 5 \
    | grep runtime::contracts
```

This command replays the block with trace-level logging enabled. By filtering the output with `runtime::contracts`, you can view all the contract calls in the block:

```
runtime::contracts           TRACE: call ExportedFunction::Call account: , input_data: [246, 118, 44, 201]
runtime::contracts           TRACE: call ExportedFunction::Call account: , input_data: [254, 91, 216, 234, 1, 0, 0, 0]
runtime::contracts           TRACE: call result ExecReturnValue { flags: (empty), data: [0] }
runtime::contracts           TRACE: call result ExecReturnValue { flags: (empty), data: [0] }
```

From here, you can identify the call you are interested in and decode the data payload:

```bash
$ echo 254, 91, 216, 234, 1, 0, 0, 0 \
    | tr ',' ' ' \
    | xargs printf '%02x' \
    | xargs cargo contract decode message -d
```

This command will output the following:

```
Decoded data: inc_by { n: 1 }
```

## Fork Node and Replay Transactions

:::caution
This section has not yet been updated to ink! v6.

TODO Verify if this still works.
:::

You can also use [Chopstick](https://github.com/AcalaNetwork/chopsticks) to start a local fork of your chain.

This command starts a fork beginning at block `$BLOCK_HASH`. You can connect to this fork using `ws://localhost:8000` to submit extrinsics via PolkadotJs or `cargo contract`:

```bash
$ npx @acala-network/chopsticks@latest \
    --endpoint $ENDPOINT \
    --block $BLOCK_HASH \
    --runtime-log-level 5
```

Here, for example, you can re-run the transaction that we decoded in the previous section:

```bash
$ cargo contract call \
    --contract $CONTRACT_ADDR \
    --message inc_by --args 1 \
    --suri //Alice \
    --url ws://localhost:8000
```

Since trace-level logging is used, you will receive detailed information about all the host functions called during the execution of the contract:

```
runtime::contracts           TRACE: call ExportedFunction::Call account: , input_data: [254, 91, 216, 234, 2, 0, 0, 0]
runtime::contracts           TRACE: call result ExecReturnValue { flags: (empty), data: [0] }
runtime::contracts           DEBUG: Execution finished with debug buffer: seal0::value_transferred(out_ptr: 65488, out_len_ptr: 65516) = Ok(())
seal0::input(out_ptr: 65536, out_len_ptr: 65524) = Ok(())
seal1::get_storage(key_ptr: 65536, key_len: 4, out_ptr: 65540, out_len_ptr: 65524) = Ok(Success)
seal2::set_storage(key_ptr: 65536, key_len: 4, value_ptr: 65540, value_len: 4) = Ok(4)
seal0::seal_return(flags: 0, data_ptr: 65536, data_len: 1) = Err(TrapReason::Return(ReturnData { flags: 0, data: [0] }))
```
