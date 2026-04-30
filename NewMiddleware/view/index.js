const express = require("express");
const app = express();

app.get("./",(req,res)=>{
    res.send("Welcome to home page");
});
app.use((req,res,next)=>{
    const erroe = new error("page not found");
    error.statusCode =404;
    error.status ="Fail";
    next(error);
})
app.listen(4000);