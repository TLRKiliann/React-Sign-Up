# Sign Up

## Install


└─ $ ▶ npx create-react-app signup-front

└─ $ ▶ cd signup-front

└─ $ ▶ mkdir signup-backend

└─ $ ▶ cd signup-backend

└─ $ ▶ npm init
...
description: Sign Up App
main: (index.js) server.js
author: koalatr33
...
answer ok for all others

└─ $ ▶ npm install express nodemon mongoose dotenv cors bcrypt

└─ $ ▶ touch server.js

basic express config to listen on port 4000

```
(server.js)
const express = require("express");

const app = express();



app.listen(4000, () => console.log("Server is running"));
```

---

## package.json

Introduce this line in package.json :

```
  ...
  "scripts": {
    "start": "nodemon server.js",
    ...}
```

└─ $ ▶ npm run start

---

> server.js send data to routes.js to post/get requests

---

## Some informations about `bcrypt` :

https://security.stackexchange.com/questions/17207/recommended-of-rounds-for-bcrypt/17238#17238

I think the answer to all of your questions is already contained in Thomas Pornin's answer. You linked to it, so you presumably know about it, but I suggest that you read it again.

The basic principles are: don't choose a number of rounds; instead, choose the amount of time password verification will take on your server, then calculate the number of rounds based upon that. You want verification to take as long as you can stand.

For some examples of concrete numbers, see Thomas Pornin's answer. He suggests a reasonable goal would be for password verification/hashing to take 241 milliseconds per password. (Note: Thomas initially wrote "8 milliseconds", which is wrong -- this is the figure for a patience of one day instead of one month.) That still lets your server verify 4 passwords per second (more if you can do it in parallel). Thomas estimates that, if this is your goal, about 20,000 rounds is in the right ballpark.

However, the optimal number of rounds will change with your processor. Ideally, you would benchmark how long it takes on your processor and choose the number accordingly. This doesn't take that long; so for best results, just whip up the script and work out how many rounds are needed to ensure that password hashing takes about 240 milliseconds on your server (or longer, if you can bear it).

---

## Some informations about `cors` :

https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/

CORS stands for cross-origin resource sharing. Just like HTTPS, it's a protocol that defines some rules for sharing resources from a different origin. We know that modern web apps consist of two key components: a client and a server. The client requests some data from the server, and the server sends back data as a response. 

The bottom line is that at some point you are going to interact with an application with a different origin than yours. This means you're going to request resources from the application by making an HTTP request.

When you request a resource from an application of a different origin, the web browser uses an SOP (same-origin policy) protocol to block all your requests to that origin. Back in the day, this is what made the Internet secure! For instance, a malicious cracker or hacker from xyz.com wouldn't be able to access your information on abcbank.com. However, this underlying security rule governing browsers does not allow you to request a resource from a different origin. That's a common use case widely used across web apps today. So what's the solution?
Enter CORS

CORS enables you to access a resource from a different origin. It is used to override your browser's default behavior due to SOP. So now when your client requests a resource, the response will additionally contain a stamp that tells your browser to allow resource sharing across different origins. 

---

## Get & POST (security) :

https://security.stackexchange.com/questions/33837/get-vs-post-which-is-more-secure

POST is more secure than GET for a couple of reasons.

GET parameters are passed via URL. This means that parameters are stored in server logs, and browser history. When using GET, it makes it very easy to alter the data being submitted the the server as well, as it is right there in the address bar to play with.

The problem when comparing security between the two is that POST may deter the casual user, but will do nothing to stop someone with malicious intent. It is very easy to fake POST requests, and shouldn't be trusted outright.

The biggest security issue with GET is not malicious intent of the end-user, but by a third party sending a link to the end-user. I cannot email you a link that will force a POST request, but I most certainly can send you a link with a malicious GET request. I.E:

Click Here for the best free movies!

Edit:

I just wanted to mention that you should probably use POST for most of your data. You would only want to use GET for parameters that should be shared with others, i.e: /viewprofile.php?id=1234, /googlemaps.php?lat=xxxxxxx&lon=xxxxxxx

---

