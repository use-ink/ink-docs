---
title: tx Helpers
hide_title: true
description: Helper functions for checking the state of a transaction.
---

# tx Helpers

There are a number of helper functions to check the status of a transaction. See
[useTx](/frontend/react/hooks/contracts/use-tx#transaction-state) for a full list of
Transaction state values and descriptions.

## shouldDisable

This function that returns `true` if a transaction state is `DryRun`, `PendingSignature`,
or `Broadcast`. It is good practice to disable a button that triggers a transaction unless
it has fully resolved. In a successful transaction, `Broadcast` state comes immediately
before `InBlock`, which is when contracts emit events and the transaction is most likely
to succeed. See `shouldDisableStrict` if you want to disable a button until it is
`Finalized`, which may be more appropriate for high stake dApps.

```tsx
import { shouldDisable } from 'useink';

export const Flipper = (contract) => {
    const flipTx = useTx(contract, 'flip');

    return (
        <button
            onClick={flipTx.signAndSend}
            disabled={shouldDisable(flipTx)}
        >
            {shouldDisable(flipTx) ? 'Flipping' : 'Flip!'}
        </button>
    )
}
```

## shouldDisableStrict

This function that returns `true` if a transaction state is `DryRun`, `PendingSignature`,
`Broadcast`, or `InBlock`. It is good practice to disable a button that triggers a
transaction unless it has fully resolved.

```tsx
import { shouldDisableStrict } from 'useink';

//... React code omitted
<button
    onClick={flipTx.signAndSend}
    disabled={shouldDisableStrict(flipTx)}
>
    {shouldDisableStrict(flipTx) ? 'Flipping' : 'Flip!'}
</button>
```

## hasAny

Returns a boolean if the transaction status has any of the arguments you pass in. Arguments must be of type `Status`;

```tsx
import { hasAny } from 'useink';

//... React code omitted
const flipTx = useTx(contract, 'flip');

console.log(hasAny(['Broadcast', 'Finalized']));
```

## isPendingSignature

Returns a boolean if the transaction status is `PendingSignature`. `PendingSignature` is
set when you call `signAndSend()` on a transaction, which opens up a browser wallet
extension modal for a user to sign. Once the transaction is signed the state will change
to `Broadcast`.

```ts
import { isPendingSignature } from 'useink';

//... React code omitted
const flipTx = useTx(contract, 'flip');
flipTx.signAndSend();

console.log(isPendingSignature(flipTx));
```

## isNone

Returns a boolean if the transaction status is `None`.

```tsx
import { isNone } from 'useink';

//... React code omitted
const flipTx = useTx(contract, 'flip');

console.log(isNone(flipTx));
```

## isDryRun

Returns `true` if the transaction status is `DryRun`. `DryRun` occurs immediately before a
transaction is sent to verify if it will succeed.

```ts
import { isDryRun } from 'useink';

//... React code omitted
const flipTx = useTx(contract, 'flip');

console.log(isDryRun(flipTx));
```

## isErrored

Returns a boolean if the transaction status is `Errored`, which means that there was an
error in JavaScript somewhere.

```tsx
import { isErrored } from 'useink';

//... React code omitted
const flipTx = useTx(contract, 'flip');

console.log(isErrored(flipTx));
```

## isFuture

Returns a boolean if the transaction status is `Future`, which means that the transaction
is moving in to the transaction pool.

```tsx
import { isFuture } from 'useink';

//... React code omitted
const flipTx = useTx(contract, 'flip');

console.log(isFuture(flipTx));
```

## isReady

Returns a boolean if the transaction status is `Ready`, which means that the transaction
is ready to be entered in to the transaction pool.

```tsx
import { isReady } from 'useink';

//... React code omitted
const flipTx = useTx(contract, 'flip');

console.log(isFuture(flipTx));
```

## isBroadcast

Returns a boolean if the transaction status is `Broadcast`. This is the point when
events are emitted.

```tsx
import { isBroadcast } from 'useink';

//... React code omitted
const flipTx = useTx(contract, 'flip');

console.log(isBroadcast(flipTx));
```

## isInBlock

Returns a boolean if the transaction status is `InBlock`. At this point it is very likely
that the transaction will succeed. Most dApps can optimistically assume that the
transaction is a success, but you may want to wait until `Finalized` stutus if you are
building a high stakes dApp with monetary value so you can offer 100% guarantee that a
transaction did succeed.

```tsx
import { isInBlock } from 'useink';

//... React code omitted
const flipTx = useTx(contract, 'flip');

console.log(isInBlock(flipTx));
```

## isInvalid

Returns a boolean if the transaction status is `Invalid`.

```tsx
import { isInvalid } from 'useink';

//... React code omitted
const flipTx = useTx(contract, 'flip');

console.log(isInvalid(flipTx));
```

## isUsurped

Returns a boolean if the transaction status is `Usurped`.

```tsx
import { isUsurped } from 'useink';

//... React code omitted
const flipTx = useTx(contract, 'flip');

console.log(isUsurped(flipTx));
```

## isDropped

Returns a boolean if the transaction status is `Usurped`.

```tsx
import { isDropped } from 'useink';

//... React code omitted
const flipTx = useTx(contract, 'flip');

console.log(isDropped(flipTx));
```

## isFinalized

Returns a boolean if the transaction status is `Finalized`. This status guarantees that a
transaction completed.

```tsx
import { isFinalized } from 'useink';

//... React code omitted
const flipTx = useTx(contract, 'flip');

console.log(isFinalized(flipTx));
```

## isFinalityTimeout

Returns a boolean if the transaction status is `FinalityTimeout`. 

```tsx
import { isFinalityTimeout } from 'useink';

//... React code omitted
const flipTx = useTx(contract, 'flip');

console.log(isFinalityTimeout(flipTx));
```

## isRetracted

Returns a boolean if the transaction status is `Retracted`.

```tsx
import { isRetracted } from 'useink';

//... React code omitted
const flipTx = useTx(contract, 'flip');

console.log(isRetracted(flipTx));
```