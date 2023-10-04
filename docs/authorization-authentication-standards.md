---
title: Authorization Authentication standards
category: Programming
---

## OAuth2 (Open Authorization)

OAuth2 = Allowing an application (Octotree) to act on your behalf to access information from an application that you use (GitHub)

OAuth2 is an authorization framework that enables applications to obtain limited access to user accounts via HTTP serivce.

Terminology:
- **The User: Resource owner**: is the ==user== who authorizes an application (client) to acess their account.
- **Client**: (application) is the *application* that want to access the user's account.
- **Resource server**: hosts the user accounts (data).
- **Authorization server**: verifies the identity of the *user* and issues access tokens to the *application*. Presents the interface where the user approves or denies the authorization request.
- **Authorization grant**
- **Redirect URI / Callback URI**: where to go next after approviing
- **Access token**: the key to use to access into the resource server
- **Front channel**: public to user, e.g. information (client_id, scope) appears on the URI
- **Back channel**: exchange authorization code for access token MUST be done in the back channel

## OpenID Connect (OIDC)

OpenID = Using login credentials from an OpenID provider (Google) to login to another application (Stackoverflow)

- Used to **authenticate**
- An identity layer built on top of OAuth2. 
- One login can be used across multiple applications (Single sign on: SSO)
- Cannot work without the underlying OAuth framework

JWT standards claims https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims
