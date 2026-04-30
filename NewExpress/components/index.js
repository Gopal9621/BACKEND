// const express = require("express");
// const app = express();
// const path =require("path");
// const path2 = path.join(__dirname,'components');
// app.use(express.static(path2));
// app.listen(8000,(err)=>{
//     if(err) console.log(err);
//     console.log("Server started on port http://localhost:8000");
// });  



const express = require('express');
const app = express();
//console.log(app);
const path = require('path');
const pathjoin = path.join(__dirname,"components");
app.use(express.static(pathjoin));

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "components", "dashboard.html"));
});

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "components", "index.html"));
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "components", "about.html"));
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "components", "contact.html"));
});

app.get("/image", (req, res) => {
  res.sendFile(path.join(__dirname, "components", "image.jpg"));
});
app.listen(8000,(err)=>{
    if(err) console.log(err);
    console.log("Server started on port http://localhost:8000");
});  