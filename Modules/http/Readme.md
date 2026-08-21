Node gives JavaScript access to the network. The http module adds the rules of HTTP on top of that network connection.

## What problem was Node trying to solve?
Suppose you open:
`http://localhost:3000/`
Something has to be sitting there waiting for your request. That something is a server program.
In Node.js, you can create that server yourself:
```JavaScript
const http = require("http");
const server = http.createServer((req, res) => {
 res.end("Hello");
});
server.listen(3000);
```
That tiny program turns your Node process into an HTTP server.

## Client and Server
Most web communication involves two sides:
| Client     | Server                 |
|------------|------------------------|
| Browser    | Node.js application    |
| Postman    | Express application    |
| Mobile app | Java/Spring server     |
| React app  | Python/Django server   |

The client asks. The server responds.

## What is HTTP?
HTTP = HyperText Transfer Protocol
Ignore the intimidating name.
HTTP is simply a set of rules defining how clients and servers communicate over the web.
Think of it as a communication format.
The browser cannot simply send: Bro, send me the homepage.
There has to be an agreed format.

HTTP provides that agreement.
A client can send something conceptually like:
```
GET / HTTP/1.1
Host: localhost:3000
```
And the server might respond:
```
HTTP/1.1 200 OK
Content-Type: text/plain
Homepage
```

HTTP is a protocol
You've seen other protocols too.
For example:
* HTTP Web communication
* HTTPS Secure HTTP
* FTP File transfer
* SMTP Email sending
* DNS Domain-name resolution

A protocol is basically:
A defined set of rules two systems agree to follow while communicating.

### What is an HTTP request?
When a browser wants something from a server, it sends an HTTP request.
For example:
`GET /products`
Meaning:
Server, please give me /products.


An HTTP request can contain several things:
* HTTP Request
* Method
* URL
* Headers
* Body

What is an HTTP response?
After receiving the request, the server sends back an HTTP response.
An HTTP response usually contains:
* Status code
* Headers
* Body

Example:
```
HTTP/1.1 200 OK
Content-Type: application/json
{
 "version": "1.0.0"
}
```

### Where does Node.js come into this?
JavaScript itself doesn't magically create web servers.

Node provides built-in modules. One of them is:
`http`

The Node http module gives you functionality for creating HTTP servers and HTTP clients.

