# Node.js readline module

The easiest way to understand readline is to start with the problem Node was trying to solve.

Process module has `process.stdin`

means:

data coming into the Node process, usually from the terminal/keyboard.

The problem is that process.stdin gives you a stream of data. Humans usually don't want to think in arbitrary chunks of bytes. We think in terms of:

Type something → press Enter → that's one complete line

That is exactly why Node has the readline module.

readline sits on top of a readable stream and lets you conveniently work with the <mark>data one line at a time</mark>.

## Without readline

You could technically do this:

`process.stdin.on("data", (chunk) => {
  console.log("Received:", chunk.toString());
});`

Run:

`node app.js`

Then type:

`hello`

and press Enter.

You might receive:

`hello\n`

But now you are responsible for thinking about: where one line ends, newline characters, etc..

