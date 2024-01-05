---
title: Events
slug: /basics/events
hide_title: true
---

<img src="/img/title/balloons-1.svg" className="titlePic" />

# Events

An ink! smart contract may define events that it can emit during contract execution.
Emitting events can be used by third party tools to query information about a contract's
execution and state.

![Contract execution via transaction](/img/events.svg)

## Example

The following example ink! contract shows how an event `Transferred` is defined and
emitted in the `#[ink(constructor)]`.

```rust
#[ink::contract]
mod erc20 {
    /// Defines an event that is emitted
    /// every time value is transferred.
    #[ink(event)]
    pub struct Transferred {
        from: Option<AccountId>,
        to: Option<AccountId>,
        value: Balance,
    }

    #[ink(storage)]
    pub struct Erc20 {
        total_supply: Balance,
        // more fields ...
    }

    impl Erc20 {
        #[ink(constructor)]
        pub fn new(initial_supply: Balance) -> Self {
            let caller = Self::env().caller();
            Self::env().emit_event(Transferred {
                from: None,
                to: Some(caller),
                value: initial_supply,
            });
            Self { total_supply: initial_supply }
        }

        #[ink(message)]
        pub fn total_supply(&self) -> Balance {
            self.total_supply
        }
    }
}
```

See our [`ERC20 example contract`](https://github.com/paritytech/ink-examples/blob/main/erc20/lib.rs) 
for an elaborate example which uses events.

## Event Definition

Since `ink!` version `5.0`, events can be defined independently of the contract which emits them. 
Events can now be defined once and shared across multiple contracts. 

This is useful for events for contracts which conform to standards such as `ERC20`: 
contract indexers/explorers are now able to group all e.g. `Transferred` events.

This is how an event definition looks:

```rust
use ink::primitives::AccountId;

#[ink::event]
pub struct Transferred {
    #[ink(topic)]
    from: Option<AccountId>,
    #[ink(topic)]
    to: Option<AccountId>,
    amount: u128,
}
```
> Note that generics are [not currently supported](https://github.com/paritytech/ink/issues/2044)
> , so the concrete types of `Environment` 
> specific types such as `AccountId` must match up with the types used in the contract.

This definition can exist within a contract definition module (inline events), in a different 
module in the same crate or even in a different crate to be shared by multiple contracts.

### Legacy syntax for inline Event definitions

Events defined within a `#[ink::contract]` module can continue to use the original syntax for an 
event definition, using the `#[ink(event)]` attribute. Under the covers this is simply expanded 
to the new top level `#[ink::event]` macro, so both events defined using the legacy style and 
using the new `event` attribute macro directly will behave exactly the same.

### Topics

When an event is emitted, 0 or more topics can be associated with it. The event is then indexed 
together with other events with the same topic value.

An event's fields can be annotated with `#[ink(topic)]` (see example), which will result in a 
topic derived from the value of that field being emitted together with the event.

Topics are by default a 32 byte array (`[u8; 32]`), although this is configurable on the 
Polkadot SDK runtime level. If the SCALE encoded bytes of a field value are <= 32, then the 
encoded bytes are used directly as the topic value. 

For example, in the common case of indexing a field of type `AccountId`, where the default 
`AccountId` type is 32 bytes in length, the topic value will be the encoded account id itself. This 
makes it easy to filter for all events which have a topic of a specific `AccountId`.

If however the size of the encoded bytes of the value of a field exceeds 32, then the encoded 
bytes will be hashed using the `Blake2x256` hasher.

> Topics are a native concept in the Polkadot SDK, and can be queried via [`EventTopics`](https://docs.rs/frame-system/latest/frame_system/pallet/storage_types/struct.EventTopics.html)

How to choose which fields to make topics? A good rule of thumb is to ask yourself if somebody 
might want to search for this topic. For this reason the `amount` in the example `Transferred` event
above was not made indexable ‒ there will most probably be a lot of different events with differing
amounts each.

#### Signature Topic



#### Anonymous Events

Add the `#[ink(topic)]` attribute tag to each item in your event that you want to have indexed.
A good rule of thumb is to ask yourself if somebody might want to search for this topic.
For this reason the `amount` in the exemplary event above was not
made indexable ‒ there will most probably be a lot of different events with
differing amounts each.

The signature of the event is by default one of the topics of the event, except
if you annotate the event with `#[ink(anonymous)]`.
See [here](/macros-attributes/anonymous) for details on this attribute.


## Emitting Events in a Constructor

In a constructor events are emitted via `Self::env().emit_event()`.
See this example:

```rust
#[ink(constructor)]
pub fn new(initial_value: Balance) -> Self {
    let caller = Self::env().caller();
    let mut balances = HashMap::new();
    balances.insert(caller, initial_supply);

    Self::env().emit_event(Transferred {
        from: None,
        to: Some(caller),
        amount: initial_supply
    });

    Self { total_supply: initial_supply, balances }
}
```

## Emitting Events from Messages

In a message events are emitted via `self.env().emit_event()`:

```rust
#[ink(message)]
pub fn transfer(&mut self, to: AccountId, amount: Balance) -> Result {
    let from = self.env().caller();
    // implementation hidden
    self.env().emit_event(Transferred {
        from: Some(from),
        to: Some(to),
        amount
    });
    Ok(())
}
```

## Cost of using Events

When using events and topics, developers should be mindful of the costs associated. Firstly: if 
optimizing for contract size, using events will increase the size of the final code size. So 
minimizing or eliminating event usage where necessary will reduce contract size. The same can be 
said for the execution (aka gas) costs when using events. We recommend considering the cost of 
events when using them, and measuring the code size and gas costs with different usage patterns 
when optimizing.
