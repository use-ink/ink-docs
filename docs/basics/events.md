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
