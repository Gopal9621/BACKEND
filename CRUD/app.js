// const express=require('express');
// const app = express();
// app.use(express.urlencoded({extended:true}));
// app.use(express.json());
// const mongoose=require('mongoose');
// mongoose.connect("mongodb://127.0.0.1:27017/db1")
// .then(()=>{
//     console.log("db connected");
// })
// .catch((err)=>{
//     console.log("errrrr");
// })

// const userSchema=mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },
//     email:{
//         type:String,unique:true,required:true
//     }
// })

// const User=mongoose.model("User","userSchema");



// app.post("/users",async(req,res)=>{
//     try{
//         const newUser=await User.create(req.body);
//         return res.status(201).json("new user");
//     }
//     catch(err){
//         return res.status(400).json({error:err.message});
//     }
// });

// const port = 3000;

// app.listen(port,()=>{
//     console.log("server created!!")
// })





const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect("mongodb://127.0.0.1:27017/DB")
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("Connection error:", err));

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});

const User = mongoose.model("User", userSchema); // Capitalized standard


app.post('/users', async (req, res) => {
    try {
        const newUser = await User.create(req.body); 
        return res.status(201).json(newUser);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log("Server Started on port 3000");
});