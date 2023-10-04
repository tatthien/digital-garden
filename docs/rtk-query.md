---
title: RTK Query
category: React
---

# RTK Query

## What

- RTK Query is an advanced data feching and caching.
- Every external requests should use RTK Query.


## Why 

Web applications normally need to fetch data from a server in order to display it. The behaviors used in today's applications:

- Tracking loading state in order to show UI spinners
- Avoiding duplicating requests for the same data
- Optimistic updates to make the UI feel faster
- Managing cache lifetimes as the user interacts with the UI

Compared to other tools (swr, react-query). RTK Query is included in the Redux Toolkit package. We don't need to install other packages.

## When

In general, the main reason to use RTK Query are:

- You already have a Redux app
- You want to be able to use the Redux devtools

## How

```
createApi()
injectEndpoints()
```

Note:

Tags used to control caching and invalidation behavior for re-feching purposes.

RTK Query uses a "cache tag" system to automate re-fetching for query endpoints that have data affected by mutation endpoints.

If cache data is being invalidated, it will either refetch the providing query (if components are still using that data) or remove the data from the cache.
