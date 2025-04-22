const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const bpp = express();

bpp.use(express.static(path.join(__dirname, "public")));

bpp.use(bodyParser.urlencoded({extended:false}))


bpp.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

bpp.get("/Signup", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Sign_up.html"));
});

bpp.get("/Login", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "Login.html"));
});

bpp.post("/Login", (req, res) => {
    const{email,password}=req.body;
    console.log("form data receive",{email,password});

    if(email==="shubhamsrkr07@gmail.com"&&password=="1234"){
    res.sendFile(path.join(__dirname,"public","index.html"))
    }
    else{
    res.send("wrong id and password")
    }
    
});

bpp.post("/Signup", (req, res) => {
    const{name,email,password,address}=req.body;
    console.log("form data receive",{name,email,password,address});
    res.sendFile(path.join(__dirname,"public","index.html")) 
    
});


bpp.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});


