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

> server.js send data to routes.js to post/get request