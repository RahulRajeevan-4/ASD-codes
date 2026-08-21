import process from "node:process";

console.log("Process ID:", process.pid);
console.log("Parent process ID:", process.ppid);
console.log("Platform:", process.platform);
console.log("Architecture:", process.arch);
console.log("Node version:", process.version);
console.log("Working directory:", process.cwd());
console.log("Uptime:", process.uptime());

// Command-line arguments — process.argv
console.log(process.argv);
// Try node app.js hello 25 
// You'll get an array
// To take out only values, do:
const arr=process.argv.slice(2);


// Environment variables
const PORT = process.env.PORT;

