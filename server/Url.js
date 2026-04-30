// const Url =  require("url");
// const myUrl = "http\\mydummy.com";
// const filter = Url.Parse(myUrl,true);
// console.log(filter);
// const url = require("url");
// const http = require("http");
// const fs = require("fs");

// const  server=http.createServer((request,response)=>{

// console.log(request);
// response.end("server Succesfully Started");
// });
// server.listen(8000,'localhost',(err)=>{
// if(err)console.log(err);
// console.log("server started at http://localhost:8000");
// })

// const myUrl = "http://mydummy.com?name=gopal&age=21";

// const filter = url.parse(myUrl, true);

// console.log(filter);


// const url = require("url");
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((request, response) => {

//     console.log("URL:", request.url);
//     console.log("Method:", request.method);

//     response.writeHead("<h1>Welcome to our Website" );
//     response.end("Server Successfully Started");
// });

// server.listen(8000, "localhost", () => {
//     console.log("Server started at http://localhost:8000");
// });



const url = require("url");
const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
 fs.appendfile("ser")
    console.log("URL:", request.url);
    console.log("Method:", request.method);
    const da = new Date();
    console.log(da);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<h1>Welcome to our Website</h1>");
});

server.listen(8000, "localhost", () => {
    console.log("Server started at http://localhost:8000");
});
