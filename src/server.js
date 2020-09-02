const express = require("express");
const server = express();

server.use(express.static("public"));

server.get("/", (req,res) =>{
    return res.sendFile(__dirname +"/views/index.html");
});


server.get("/contato", (req,res) =>{
    return res.sendFile(__dirname +"/views/contato.html");
});

server.get("/sobre", (req,res) =>{
    return res.sendFile(__dirname +"/views/sobre.html");
});

server.get("/login", (req,res) =>{
    return res.sendFile(__dirname +"/views/login.html");
});

server.listen(3000);
