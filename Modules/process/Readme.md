## Why was the process module created in Node.js?

process is Node.js's interface to the currently running Node program and the operating system environment around it.

When you run:

`node app.js`

your operating system starts a process.

That process has things like:

* a process ID
* memory
* environment variables
* command-line arguments
* input
* output
* error output
* a current working * directory
* an exit status
* signals from the operating system

JavaScript normally doesn't know how to access these things.

Node therefore exposes the global process object.


## process is special: you don't need to import it
But you can also explicitly import it:

import process from "node:process";

## Environment variables

You've probably seen:

`const PORT = process.env.PORT;`

Your operating system can provide configuration values to the program.

For example: `PORT=3000 node app.js`

Then: `console.log(process.env.PORT);`

prints: 3000

This is extremely important for backend applications.

For example:

```
const PORT = process.env.PORT || 3000;

Production:

PORT=8080

Development:

PORT=3000
```

Same code. Different configuration.

Why this matters?
You don't want to hardcode things like:
```
const password = "abc123";
const databaseURL = "...";
const port = 3000;
```
Instead:

```
process.env.DB_URL
process.env.API_KEY
process.env.PORT
process.env.NODE_ENV
```