---
title: 'useEvents'
description: 'React hook for fetching contract events from state'
---

# useEvents

A hook for fetching contract events from state after you have subscribed by calling
[useEventSubscription](/frontend/core/hooks/contracts/use-event-subscription). You can
filter for specific events by passing in a case-sensitive array of event names. 

## Usage

```tsx
import { useEvents, useEventSubscription, useContract } from 'useink'
import metadata from 'metadata.json'

const CONTRACT_ADDRESS = '..'

export const MyContractView: React.FC = () => {
  const contract = useContract(CONTRACT_ADDRESS, metadata)
  useEventSubscription(contract) // Only subscribe to a contract's events one time.
  const { events: allContractEvents } = useEvents(contract?.address) // fetch a specific contracts events from state
  const { events: fooBarEvents } = useEvents(contract?.address, ['Foo', 'Bar']) // only fetch Events Foo and Bar from state

  return (
    <div>
      <ul>
        {allContractEvents.map(e => (
          <li key={e.id}>
            {e.name}: Do something with the args -> {JSON.stringify(e.args)}
          </li>
        ))}
      </ul>

      <ul>
        {fooBarEvents.map(e => (
          <li key={e.id}>
            {e.name}: Do something with the args -> {JSON.stringify(e.args)}
          </li>
        ))}
      </ul>
    </div>
  )
}
```

## Return Value

```tsx
{
  events: {
      id: string;
      createdAt: number;
      name: string; // The name of the event emitted
      args: unknown[]; // human-readable values emitted in the event
    }[];
  // A function to remove an event from state. Useful when a user closes a snackbar notification, etc
  removeEvent: (args: { address: string, id: string }) => void;
}
```