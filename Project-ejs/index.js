// const express = require("express");
// const app =express();
// const users = require("./users_400_entries (4).json");

// app.get("/",(req,res)=>{
//     res.send("Welcome to our website");
// });

// app.get("/users",(req,res)=>{
//     return res.json(users);
// });

// app.get("/",(req,res)=>{
//     res.send("Welcome to our website");
// });




// app.get("/api/users/id",(req,res)=>{
//     const id = Number (req.params.id);
//     console.log(id);
//     const user= users.find((users)=>{
//         users.id===id;
//     })
//     return res.json(user);
// })



// app.post("/users",(req,res)=>{
//     //will do this with mangodb

//     const newData={
//         "id": 1,
//         "name": "User 1",
//         "email": "user1@example.com",
//         "address": "Address 1, City 1",
//         "contact_detail": "+91-900000001"
//     }
//     fs.appendFile(newData);
// })


// app.patch("/api/user/:id",(req,res)=>{
//     //will do this mongodb or postman
// })

// app.delete("/api/users/:id",(req,res)=>{
//       //will do this mongodb or postman
// })




const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());


const users = require("./userdata.json");

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to our website");
});


// Get All Users
app.get("/api/users", (req, res) => {
    return res.json(users);
});


// Get User By ID
app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);

    const user = users.find((u) => {
        return u.id === id;
    });

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    return res.json(user);
});

app.post('/userPost', (req, res)=>{
    const data = req.body;
    console.log(data);
    return res.json({messege: "data received succwssfully", data});
    fs.appendFile('userdata.json', JSON.stringify(newuser), (err)=>{
        if(err){
            console.log("error hai bhai");
        }else{
            res.status(201).json(newuser);
        }
    })

})




// Delete User
// app.delete("/api/users/:id", (req, res) => {

//     const id = Number(req.params.id);

//     const index = users.findIndex((u) => u.id === id);

//     if (index === -1) {
//         return res.status(404).json({
//             message: "User not found"
//         });
//     }

//     const deletedUser = users.splice(index, 1);

//     fs.writeFile(
//         "./users_400_entries (4).json",
//         JSON.stringify(users, null, 2),
//         (err) => {
//             if (err) {
//                 return res.status(500).json({
//                     message: "Error deleting user"
//                 });
//             }

//             return res.json({
//                 message: "User deleted",
//                 user: deletedUser
//             });
//         }
//     );
// });


app.listen(3000, () => {
    console.log("Server started on port http://localhost:3000");
});