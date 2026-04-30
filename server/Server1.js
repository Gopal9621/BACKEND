// const http = require("http");
// let server = http.createServer((req,res) =>{

// });
// server.listen(8000,'Localhost',(err)=>{
//     if(err) console.log(err);
//     else{
//         console.log("Server started at http://localhost:8000");
//     }
// })


const http=require("http");
const  server=http.createServer((request,response)=>{

console.log(request);
response.end("server Succesfully Started");
});
server.listen(8000,'localhost',(err)=>{
if(err)console.log(err);
console.log("server started at http://localhost:8000");
})




///header , URL, Status code 