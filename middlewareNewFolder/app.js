let express = require("express");
let app = express();
let path = requir("path");
let bcrypt =require("bcrypt");
app.set("view engine","ejs");
app.set("view",path.join(_dirname,"view"));

app.listen(3000,()=>{
    console.log("App is listening on port 3000");
    
});
app.get()
app.get("/register", (req,res)=>{
    res.send("register");
});