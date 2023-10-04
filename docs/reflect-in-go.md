---
title: Relect in go
category: Golang
---

# Reflect in Go

This example code shows us how to extract everything from a struct using [reflect](https://pkg.go.dev/reflect) package.

```go
package main

import (
	"fmt"
	"os"
	"reflect"
	"strings"
	"text/tabwriter"
)

func main() {
	type Person struct {
		Username string `attr:"AttrTag" fmt:"FormatTag"`
		Email    string `attr:"-"`
		Age      int
	}

	p := Person{
		Username: "x",
		Email:    "x@x.com",
		Age:      30,
	}

	ty := reflect.TypeOf(p)
	val := reflect.ValueOf(p)

	fmt.Printf("Kind is: %s\n", ty.Kind())

	w := tabwriter.NewWriter(os.Stdout, 8, 8, 3, '\t', 0)
	fmt.Fprintln(w, "Name\tType\tValue\tTag")
	for i := 0; i < ty.NumField(); i++ {
		sf := ty.Field(i)
		fv := val.Field(i)
		tag1 := sf.Tag.Get("attr")
		tag2 := sf.Tag.Get("fmt")
		fmt.Fprintf(w, "%s\t%s\t%v\t%s\n", sf.Name, sf.Type, fv.Interface(), strings.Join([]string{tag1, tag2}, "; "))
	}
	w.Flush()
}

// [Output](Output)
// Kind is: struct
// Name            Type            Value           Tag
// Username        string          x               AttrTag; FormatTag
// Email           string          x@x.com         -;
// Age             int             30              ;
```
