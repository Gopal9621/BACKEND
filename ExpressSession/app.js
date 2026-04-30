const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
// Session middleware
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie:{maxAge: 5*60*1000} // Session expires after 5 minutes
}));
//Home route
app.get('/', (req, res) => {
    res.render('login');
});

// Login route
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/home', (req, res) => {
    if (req.session.user) {
        res.render('home', { user: req.session.user });
    } else {
        res.redirect('/login');
    }
});
app.get("/profile", (req, res)=>{
    if(req.session.user){
        res.render('profile',{user:req.session.user});
    }
    else{
        res.redirect("/login");
    }
});

// Login form submit
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    console.log(email, password);
    req.session.user = { email };
    res.redirect('/home');
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});