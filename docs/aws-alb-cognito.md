---
title: AWS ALB + Cognito
category: Devops
---

# AWS ALB + Cognito

ALB checks users’ request headers for an `AWSELB` authentication session cookie.

ALB redirects unauthenticated users to a login page, which is hosted by AWS Cognito hosted UI.

When users successfully sign in, AWS Cognito redirects them back to the ALB with an authorization grant code

ALB presents the authorization grant code back to the **AWS Cognito's token endpoint** and receives **ID** and **access tokens**.

ALB exchanges the access token with **AWS Cognito's user info endpoint** for user claims which contains user's email, phone number, etc.

Then ALB redirects user back to the orignial URI, this time setting the `AWSELB` authentication session cookie.

![[Pasted image 20230221142651.png]]

#aws
