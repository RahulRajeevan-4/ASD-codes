const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.url,req.method)
  if (req.url === "/home") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("A simple text - HomePage");
  } else if (req.url === "/user") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>User heading</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ title: "About Page" }));
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.end("Something went wrong");
  }
});

server.listen(3000);
