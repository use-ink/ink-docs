---
title: 'useEventSubscription'
description: 'React hook for subscribing to events for a specific contract.'
---

# useEventSubscription

A hook for subscribing to events for a specific contract. This hook should only be called
once. Only events emitted after the subscription has been established
will be available. See [configuration](/frontend/configuration#configprops) to learn more
about setting dApp defaults for how long events should live in state before being removed.

## Usage

```tsx
import { useEventSubscription, useContract } from 'useink'
import metadata from 'metadata.json'

const CONTRACT_ADDRESS = '..'

export const MyContractView: React.FC = () => {
  const contract = useContract(CONTRACT_ADDRESS, metadata)
  useEventSubscription(contract) // subscribe to events for a contract one time
  // call useEvents(contract?.address) to fetch the events from state

  return null
}
```

## Return Value

```tsx
void
```