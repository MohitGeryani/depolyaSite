const express  = require("express");
const server = express();

const route = require("./Routes");

server.use(route);

server.listen(3000,()=> {
    console.log("Server Is Running Successfully!");
})