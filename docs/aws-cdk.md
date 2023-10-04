---
title: AWS CDK
category: Devops
---

# AWS CDK

![](https://res.cloudinary.com/practicaldev/image/fetch/s--WVJOtC4F--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://miro.medium.com/max/1400/0%2ARSk7GUi_RtbvfOky.png)

## Contructs

A construct can represent a single AWS resource.

## Apps

An app is **a container for one or more stacks**.

## Stacks

**The unit of deployment** in the AWS CDK is called a *stack*. All AWS resources defined within the scope of a stack.

Each stack constructs one or more AWS resources. Stack within a single `App` can easily refer to each others' resources.

Commands:

```bash
# List stack
cdk ls

# Synthesize 
cdk synth <stack>
```
