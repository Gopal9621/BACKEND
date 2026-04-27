// const express = require("express");
// const cookieParser = require("cookie-parser");
// const app = express();
// app.use(cookieParser());
// const setCookieRoute = require("./routes/setcookies");


// // Use route
// app.use("/set-cookie", setCookieRoute);

// const PORT = 3000;

// app.listen(PORT, () => {
//     console.log("Server runnig at http://localhost:3000");
// });

const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// middleware
app.use(cookieParser());

// route
app.get('/set_cookie', (req, res) => {
    res.cookie("name", "SecFB", {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false
    });

    res.send("Cookie has been set");
});

app.get('/get_cookie', (req, res) => {
    const name = req.cookies.name;
    if (name) {
        res.send(`Cookie value: ${name}`);
    } else {
        res.send("No cookie found");
    }
});
app.get("/clear_cookie",(req,res)=>{
    res.clearCookie("name");
    res.send("Cookie has been clear");
});

app.listen(5000, () => {
    console.log("Server running on port http://localhost:5000");
});
app.get

