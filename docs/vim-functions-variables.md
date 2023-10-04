---
title: Vim functions and variables
category: Vim
---

# Vim

Functions

```vim
function x()
  <do_something>
endfunction
```

Variables scopes

- g: Global
- s: Script-local (like "static" in C)
- l: Function-local
- a: Function argument
- v: Vim internal
- b: Buffer local
- w: Window local
- t: Tab local

For example:

```vim
let s:Background = "#1a1b26"
```
