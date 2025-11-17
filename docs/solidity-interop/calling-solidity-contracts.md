---
title: Calling Solidity Contracts
hide_title: true
slug: /solidity-interop/calling-solidity-contracts
---

![Cross Contract Title Picture](/img/title/cross-contract.svg)

# Calling Solidity Contracts

[ink! v6 contracts can call Solidity ABI-encoded contracts][blog-post], enabling seamless interoperability between ink!, Solidity, and other Solidity ABI-compatible contracts. 
This allows you to integrate with existing Ethereum-compatible smart contracts deployed on Polkadot.

[blog-post]: https://medium.com/coinsbench/ink-solidity-abi-on-polkavm-c675c854efd3

There are two main approaches to calling Solidity contracts from ink!:
1. **Contract References** (`ContractRef`) - High-level, type-safe interfaces
2. **Builders** (`CreateBuilder` and `CallBuilder`) - Low-level control over call parameters

## Using Contract References

Contract references provide a high-level type-safe interface for interacting with on-chain contracts. 
When working with Solidity ABI-encoded contracts, you can use manually defined contract references with the [`#[ink::contract_ref]` attribute][contract-ref-attr].

[contract-ref-attr]: ../reference/macros-attributes/contract_ref.md

## Using CreateBuilder with Solidity ABI

The `CreateBuilder` allows you to **instantiate** Solidity ABI-encoded contracts. To instantiate a contract that uses Solidity ABI, use the `build_create_sol` utility:

```rust
use ink::env::call::build_create_sol;

let my_contract: MyContractRefSol = build_create_sol::<MyContractRefSol>()
    .code_hash(Hash::from([0x42; 32]))
    .ref_time_limit(0)
    .endowment(10)
    .exec_input(
        // Note: Solidity constructors don't have selectors.
        ExecutionInput::no_selector()
            .push_arg(42)
            .push_arg(true)
    )
    .salt_bytes(&[0xDE, 0xAD, 0xBE, 0xEF])
    .returns::<MyContractRefSol>()
    .instantiate();
```

:::note
One important difference with ink! ABI instantiation is that Solidity constructors don't have selectors.
:::

## Using CallBuilder with Solidity ABI

The `CallBuilder` enables you to call messages from Solidity ABI-encoded contracts using low-level control. This approach is particularly useful when you need to call contracts with different [ABIs](../reference/abi/overview.md).

### Solidity ABI Calls

To call Solidity ABI-encoded contracts, use the `build_call_sol` utility. This requires using a Solidity-compatible function selector computed with a `keccak256` hash of the function signature:

```rust
use ink::env::call::build_call_sol;

let my_return_value = build_call_sol::<DefaultEnvironment>()
    .call(H160::from([0x42; 20]))
    .ref_time_limit(0)
    .transferred_value(10)
    .exec_input(
        ExecutionInput::new([0xcd, 0xe4, 0xef, 0xa9].into()) // solidity selector: keccak256("flip()")
    )
    .returns::<bool>()
    .invoke();
```

:::info
**Key differences from ink! calls:**
- Solidity uses `keccak256` hashing for function selectors (first 4 bytes)
- ink! uses `blake2b` hashing for function selectors
- Use `build_call_sol` for Solidity contracts instead of `build_call`
:::

### Error Handling

Both `CreateBuilder` and `CallBuilder` offer error handling with `try_instantiate()` and `try_invoke()` methods respectively. These allow you to handle:
1. Errors from the underlying execution environment (e.g. the Contracts pallet)
2. Errors from the programming language (e.g. `LangError`s)

See the documentation for [`try_instantiate`](https://use-ink.github.io/ink/ink_env/call/struct.CreateBuilder.html#method.try_instantiate), [`try_invoke`](https://use-ink.github.io/ink/ink_env/call/struct.CallBuilder.html#method.try_invoke-2), [`ink::env::Error`](https://use-ink.github.io/ink/ink_env/enum.Error.html), and [`ink::LangError`](https://use-ink.github.io/ink/ink/enum.LangError.html) for more details.

## Learn More

- For general cross-contract calling patterns in ink!, see [Cross-Contract Calling](../basics/cross-contract-calling.md)
- For type mappings and ABI compatibility details, see [Type Reference](./type-reference.md)
- For technical ABI specification, see [Solidity ABI Reference](../reference/abi/solidity.md)
