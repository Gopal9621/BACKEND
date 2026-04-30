// const express = require('express');
// const app = express();
// const route = require('../routes/url_routes');
// const {connection} = require('../config/db');
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// const mongoose = require('mongoose');

// app.use("/url", route);

// connection("mongodb://127.0.0.1:27017/urlShortener").then(()=>{
//     console.log("Connected to mongodb");

// })

// .catch((err)=>{
//     console.log("Error connection to mongodb", err);
// });

// app.listen(3000,()=>{
//     console.log("Server running  on port 3000 at htp://localhost:3000");
    
// });




// const express = require("express");
// const app = express();

// const route = require("./routes/url_routes");
// const { connection } = require("./config/db");

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.use("/url", route);

// // Database connection
// connection("mongodb://127.0.0.1:27017/urlShortener")
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((err) => {
//     console.log("Error connecting to MongoDB:", err);
//   });

// // Server start
// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });



const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.set('view engine', 'ejs');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Routes
const urlRoutes = require('./routes/url_route');

// Database connection
const  connection  = require('./config/db');

connection('mongodb://localhost:27017/shortUrlGenerator')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
app.get('/',(req,res)=>{
  res.send('index');
})

// Start server
app.listen(3000, () => {
    console.log('Server is running on port http://localhost:3000');
});
app.use('/Url', urlRoutes);