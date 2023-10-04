---
title: Linux commands
category: Linux
---

# Linux commands

## Check if a command exists

```bash
if [[ ! -x "$(command -v $CMD)" ]]; then
	echo "$CMD could not be found"
	exit
fi
```

