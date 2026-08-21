const http=require("http");

const server=http.createServer((req,res)=>{
    res.write("Hi")
    res.end("Bye")
    // Only 1 end 
});

server.listen(3000);

// Node runs the callback function every time an HTTP request reaches your server.