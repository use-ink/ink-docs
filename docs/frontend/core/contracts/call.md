---
title: call
hide_title: true
description: Call a contract ang get the decoded result.
---

# Call

Call a contract message and decode the response. This is used inside of
[useCall](/frontend/react/hooks/contracts/use-call) and similar hooks. See [useCall hook
implementation](https://github.com/paritytech/useink/blob/8b8e8383f0adbe1054a3aec7f300131f09969a18/react/hooks/contracts/useCall.ts#L50)
for more information.

## Returns

```tsx
Promise<DecodedContractResult<T> | undefined>
```
