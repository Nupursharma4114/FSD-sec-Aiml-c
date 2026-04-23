const http = require("http");
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("conrent-type","text/plan");
    res.end("Welcome to the node.js Tutorial");
});
server.listen(3000,()=>{
    console.log(
        "server is running on http://localhost:3000");
   } );