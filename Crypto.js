const crypto =require("crypto");
const BeforeExe =Date.now();
crypto.pbkdf2("password","salt",10000,515,"sha512",(err)=>{ 
if(err){
    console.log("err");
}
else{
    console.log("fine")
}
});
for(int i= 0;i<100;i++){
    crypto.pbkdf2("password","salt",10000,515,"sha512");
}
// crypto.pbkdf2("password","salt",10000,515,"sha512");
// crypto.pbkdf2("password","salt",10000,515,"sha512");
console.log(Date.now() - BeforeExe);