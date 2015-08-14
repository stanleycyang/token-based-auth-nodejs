#Node Token Authentication ![Build passing](https://travis-ci.org/syang019/token-based-auth-nodejs.svg?branch=master) [![Coverage Status](https://coveralls.io/repos/syang019/token-based-auth-nodejs/badge.svg?branch=master&service=github)](https://coveralls.io/github/syang019/token-based-auth-nodejs?branch=master)

###Objectives

- Understand the benefits of tokens
- Understand token auth flow
- Understand JSON web tokens
- Create a user model
- Authenticate a user using JWTs

###Benefits of tokens

- stateless and scalable servers
- mobile app ready
- pass authentication to other applications
- Extra security as compared to other authentication methods


###Server-side auth

Traditionally, we have our applications store who we are on the server.

1. Server deliver website
2. User logs in with email and password. Server saves user in a session
3. Every request checks the server for a session. If everything checks out, return the data

###Token-based auth

Token-based auth is stateless. We are not storing info in a session. 

1. User requests access with username and password
2. Application validates credentials
3. App provides a signed token to the client
4. Client stores the token and sends it along with every request
5. Server verifies token and responds with the data

###JSON Web Tokens

JSON Web Tokens (JWTs) pronounced 'jots' are a standard since we are transmitting information via JSON

- JWTs work across different programming languages
- JWTs are self-contained (information about itself, a payload, and a signature
- JWTs can be passed around easily (through HTTP header or url params)

####JWTs are made up of 3 parts

	aaaaaaaaaa.bbbbbbbbbbb.cccccccccccc

Sections:
- header
- payload
- signature

####Header

Header carries 2 parts:
- declare the type, which is JWT
- Hashing algorithm to use (HMAC SHA256) 

Example header
```
{
	"typ": "JWT",
	"alg": "HS256"
}
```

####Claims

Claims are not mandatory. Some are: 

*iss:* The issuer of the token
*sub:* The subject of the token
*aud:* The audience of the token
*exp:* expiration
*nbf:* Not before
*iat:* Time JWT was issued

Example payload

```

{
	'iss' : 'stanleycyang.com',
	'exp': 1300819380,
	'name': 'Stanley Yang',
	'admin': true
}

```
####Signature 

Signatures are made up of:

- the header
- the payload
- the secret
- The token is sent on every request so there is no CSRF attacks. No session info to manipulate since there is not session

```
var encodedString = base64UrlEncode(header) + "." + base64UrlEncode(payload);

HMACSHA256(encodedString, 'secret');

// Final piece
03f329983b86f7d9a9f5fef85305880101d5e302afafa20154d094b229f75773
```
###This repo contains code about token authentication
