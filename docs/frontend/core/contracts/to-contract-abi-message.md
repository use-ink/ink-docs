---
title: toAbiMessage
hide_title: true
description: Get an instance of an AbiMessage or undefined
---

# toAbiMessage

## Basic Usage

```ts
toAbiMessage(contract, 'flip');
```

## Returns

```ts
interface AbiMessage {
  args: AbiParam[];
  docs: string[];
  fromU8a: (data: Uint8Array) => DecodedMessage;
  identifier: string;
  index: number;
  isConstructor?: boolean;
  isMutating?: boolean;
  isPayable?: boolean;
  method: string;
  path: string[];
  returnType?: TypeDef | null;
  selector: ContractSelector;
  toU8a: (params: unknown[]) => Uint8Array;
}
```