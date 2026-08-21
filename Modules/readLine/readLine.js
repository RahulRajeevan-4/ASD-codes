const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

// Create a readline controller/interface that reads from stdin and writes prompts/output to stdout.
const rl = readline.createInterface({ input, output });

// Single question
rl.question("What do you think of Node.js? ", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.close();
});

// Multiple question
rl.question("What is your name? ", (name) => {
  rl.question(`Hi ${name}, how old are you?`, (age) => {
    console.log(`${name}'s age is ${age}`);
    rl.close();
  });
});

// REPL (Read Eval Print Loop)
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function startREPL() {
  rl.question("> ", (input) => {
    try {
      const result = eval(input);
      console.log(result);
    } catch (err) {
      console.log("Error:", err.message);
    }
    startREPL();
  });
}

startREPL();
// Here try catch makes sure error doesn't stop the REPL

