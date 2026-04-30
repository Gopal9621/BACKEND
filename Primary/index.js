const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            fs.readFile('./component/home.html', (err, page) => {
                if(err){
                    console.log(err);
                }
                else{
                    res.write(page);
                }
                res.end();
            });
            break;

        case '/about':
            fs.readFile('./component/about.html', (err, page) => {
                if(err) {
                    console.log(err);
                }
                else {
                    res.write(page);
                }
                res.end();
            });
            break;
            
    }
    res.end("server strarted successfully on port 3000");  
}).listen(3000, '127.0.0.1', (err) => {
    if(err) console.log(err);
    console.log("Server started on port http://localhost:3000");
});