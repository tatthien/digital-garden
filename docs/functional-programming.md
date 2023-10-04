---
title: Functional programming
category: Programming
---

# Functional programming

4 concepts

- Pure functions and idempotent
- Side effects
- Function composition
- Shared state and immutable data

## Idempotent

A pure funciton always returns the same output if you give it the same input.

## Side effects

A pure function cannot have any side effects. In other words, your function cannot interact with external environment.

For example, functional programming considers an API call to be a side effect. Because an API call is an external environment that is not under your control. An API can have several inconsistencies such as timeout or failure.

## Function composition

Combine two pure functions to create a new function. The concept of producing the same output for the same input is still applies here.

## Shared state and immutable data

The goal of function programming is to create functions that do not hold a state.

**Rules for functional programming**

- No mutable data to avoid side effects
- No state
- Do not modify variables once they are assigned a value
- Avoid side effects, such as API call

```
input A -> return B (all the time)
```

```go
func time(a int) func {
	return func(b) {
		return a + b
	}
}

time2 := time(2)
time2(3) -> 6
```

