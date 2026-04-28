const express = require('express');
const app = express();
app.get("/",(req,res)=>{
    res.send("Hello Welcome from Home page");
})
app.get("/about",(req,res)=>{
    res.send("hello welcome from about page");
})
app.get("/home",(req,res)=>{
    res.send("Hello Welcome from Home page");
})
app.get("/contact",(req,res)=>{
    res.send("<h1>Hello Welcome from contact page</h1>");
})
app.get("/search",(req,res)=>{
    console.log(req.query);
    res.send("Hello search result served"+ req.query);
})

//localhost:8000/search?name=aksh&age=21

app.use((req,res)=>{
    res.status(404).send("page not found");
})

app.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
});


