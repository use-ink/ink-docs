---
title: Contract Debugging
---

import useBaseUrl from '@docusaurus/useBaseUrl';

![Magnifying Glass Title Picture](/img/title/magnifying-glass.svg)

# Contract Debugging

Learn how to debug and troubleshoot your ink! smart contracts effectively.

## Prerequisites

Before debugging, ensure you have:
- A deployed contract that's exhibiting issues
- Access to the node logs and debugging tools
- Basic understanding of ink! contract structure

## Common Issues and Solutions

### Contract Traps

**Symptom**: Contract calls fail with "Contract trapped"

**Causes**:
- Panic in contract code
- Division by zero
- Array out of bounds access
- Assertion failures

**Solution**: Add proper error handling and validation:

```rust
#[ink(message)]
pub fn safe_divide(&self, a: u32, b: u32) -> Result<u32, ContractError> {
    if b == 0 {
        return Err(ContractError::DivisionByZero);
    }
    Ok(a / b)
}
```

### Out of Gas Issues

**Symptom**: Transactions fail with "Out of gas"

**Debugging Steps**:
1. Use dry-run to estimate gas requirements
2. Check for infinite loops
3. Optimize storage operations

```bash
# Estimate gas usage
cargo contract call \
  --contract YOUR_CONTRACT_ADDRESS \
  --message your_method \
  --dry-run
```

## Debugging Techniques

### 1. Event-Based Debugging

Add debug events to track execution flow:

```rust
#[ink(event)]
pub struct DebugEvent {
    message: String,
    value: u32,
}

#[ink(message)]
pub fn debug_method(&mut self, input: u32) {
    self.env().emit_event(DebugEvent {
        message: "Method called".to_string(),
        value: input,
    });
    
    // Your logic here
    
    self.env().emit_event(DebugEvent {
        message: "Method completed".to_string(),
        value: self.result,
    });
}
```

### 2. Return Value Debugging

Use return values to debug internal state:

```rust
#[ink(message)]
pub fn debug_state(&self) -> (u32, bool, String) {
    (self.counter, self.is_active, "Debug info".to_string())
}
```

### 3. Conditional Compilation

Use conditional compilation for debug builds:

```rust
#[ink(message)]
pub fn process_data(&mut self, data: u32) {
    #[cfg(debug_assertions)]
    {
        // Debug-only code
        ink::env::debug_println!("Processing data: {}", data);
    }
    
    // Production code
    self.data = data;
}
```

## Using ink!'s Debug Features

### Debug Printing

ink! provides `debug_println!` for local debugging:

```rust
use ink::env::debug_println;

#[ink(message)]
pub fn debug_method(&self) {
    debug_println!("Current state: {:?}", self);
    debug_println!("Caller: {:?}", self.env().caller());
}
```

### Environment Debugging

Access environment information for debugging:

```rust
#[ink(message)]
pub fn debug_env(&self) -> (AccountId, Balance, BlockNumber) {
    (
        self.env().caller(),
        self.env().balance(),
        self.env().block_number(),
    )
}
```

## Testing for Debugging

### Unit Tests with Debugging

```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[ink::test]
    fn debug_test() {
        let mut contract = MyContract::new();
        
        // Test and debug in isolation
        println!("Initial state: {:?}", contract);
        
        contract.some_method();
        
        println!("After method call: {:?}", contract);
        assert_eq!(contract.get_value(), expected_value);
    }
}
```

### Integration Tests

```rust
#[cfg(all(test, feature = "e2e-tests"))]
mod e2e_tests {
    use super::*;
    use ink_e2e::build_message;

    #[ink_e2e::test]
    async fn debug_e2e_test(mut client: ink_e2e::Client<C, E>) -> E2EResult<()> {
        // Deploy contract
        let constructor = MyContractRef::new();
        let contract_account_id = client
            .instantiate("my_contract", &ink_e2e::alice(), constructor, 0, None)
            .await
            .expect("instantiate failed")
            .account_id;

        // Debug the deployed contract
        let get_result = build_message::<MyContractRef>(contract_account_id.clone())
            .call(|contract| contract.get_debug_info());
            
        let get_result = client
            .call_dry_run(&ink_e2e::alice(), &get_result, 0, None)
            .await;
            
        println!("Debug info: {:?}", get_result.return_value());
        
        Ok(())
    }
}
```

## Advanced Debugging Tools

### 1. Contract State Inspection

Create getter methods for all important state:

```rust
#[ink(message)]
pub fn get_debug_info(&self) -> DebugInfo {
    DebugInfo {
        counter: self.counter,
        owner: self.owner,
        is_paused: self.is_paused,
        last_updated: self.last_updated,
    }
}

#[derive(scale::Decode, scale::Encode)]
#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
pub struct DebugInfo {
    pub counter: u32,
    pub owner: AccountId,
    pub is_paused: bool,
    pub last_updated: u64,
}
```

### 2. Gas Profiling

Track gas usage across different operations:

```rust
#[ink(message)]
pub fn expensive_operation(&mut self) -> u64 {
    let gas_before = self.env().gas_left();
    
    // Expensive computation
    self.heavy_computation();
    
    let gas_after = self.env().gas_left();
    gas_before - gas_after // Return gas consumed
}
```

### 3. Storage Debugging

Monitor storage changes:

```rust
#[ink(storage)]
pub struct MyContract {
    value: u32,
    #[cfg(debug_assertions)]
    debug_log: Vec<String>,
}

#[ink(message)]
pub fn update_value(&mut self, new_value: u32) {
    #[cfg(debug_assertions)]
    {
        self.debug_log.push(format!("Value changed from {} to {}", self.value, new_value));
    }
    
    self.value = new_value;
}
```

## Common Debugging Patterns

### Error Recovery

```rust
#[derive(Debug, PartialEq, Eq, scale::Encode, scale::Decode)]
#[cfg_attr(feature = "std", derive(scale_info::TypeInfo))]
pub enum ContractError {
    InvalidInput,
    InsufficientFunds,
    Unauthorized,
}

#[ink(message)]
pub fn safe_operation(&mut self, input: u32) -> Result<u32, ContractError> {
    // Validate input
    if input == 0 {
        return Err(ContractError::InvalidInput);
    }
    
    // Check permissions
    if self.env().caller() != self.owner {
        return Err(ContractError::Unauthorized);
    }
    
    // Perform operation
    Ok(input * 2)
}
```

### State Validation

```rust
#[ink(message)]
pub fn validate_state(&self) -> bool {
    // Check invariants
    self.counter <= self.max_value &&
    self.owner != AccountId::from([0x0; 32]) &&
    self.balance >= 0
}
```

## Production Debugging

### Monitoring Events

Set up event monitoring for production contracts:

```rust
#[ink(event)]
pub struct ErrorOccurred {
    error_code: u32,
    caller: AccountId,
    timestamp: u64,
}

#[ink(message)]
pub fn monitored_operation(&mut self) -> Result<(), ContractError> {
    match self.risky_operation() {
        Ok(result) => Ok(result),
        Err(e) => {
            self.env().emit_event(ErrorOccurred {
                error_code: e.as_u32(),
                caller: self.env().caller(),
                timestamp: self.env().block_timestamp(),
            });
            Err(e)
        }
    }
}
```

## Best Practices

1. **Always use Result types** for operations that can fail
2. **Add comprehensive events** for monitoring
3. **Validate inputs** early and explicitly
4. **Test edge cases** thoroughly
5. **Use debug builds** for development
6. **Monitor gas usage** in production
7. **Keep debug code** behind feature flags

## Troubleshooting Checklist

- [ ] Check contract compilation warnings
- [ ] Verify gas limits are sufficient
- [ ] Validate all input parameters
- [ ] Review recent state changes
- [ ] Check account balances and permissions
- [ ] Monitor events for error patterns
- [ ] Test with minimal reproducible cases

## What's Next?

After mastering debugging:
1. Learn about contract upgrades and migrations
2. Explore advanced testing strategies  
3. Study security best practices
4. Build more complex contract interactions

## Key Points

- Use events liberally for production monitoring
- Always handle errors gracefully
- Test thoroughly with unit and integration tests
- Monitor gas usage to prevent out-of-gas issues
- Keep debug information accessible but optional 