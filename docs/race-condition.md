---
title: Race condition
category: Golang
--- 

# Race condition

A race condition orrurs when two or more threads can access shared data and try to change it at the same time (concurrently).

Solving: mutex (mutual exclusion lock)

Example code showing how race condition happens:

```go
package main

import (
	"log"
	"sync"
)

var userBalance float32 = 1000

func withdraw(amount float32, ws *sync.WaitGroup) {
	if amount < userBalance {
		userBalance -= amount
	} else {
		log.Printf("withdrawing %f: insufficient balance\n", amount)
	}
	ws.Done()
}

func main() {
	ws := new(sync.WaitGroup)
	ws.Add(2)

	go withdraw(500, ws)
	go withdraw(700, ws)

	ws.Wait()
}

```    
