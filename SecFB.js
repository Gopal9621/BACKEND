
const fs = require("fs");

//const data = fs.readFileSync("Secfb", "utf8");
 //console.log(data);

//  const data = fs.writeFileSync("Secfb", "Hello");
//  console.log(data);

const data = fs.renameSync("Secfb", "first.js");
console.log(data);

// const data = fs.cpSync("Secfb", "first.js");
// console.log(data);

// const data = fs.unlinkSync("file.txt");
// console.log(data);