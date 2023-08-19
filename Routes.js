const express = require("express");
const Router = express.Router();
const path = require("path");

const pathDir = path.join(__dirname, "public");

Router.get("/", (req, res) => {
    res.sendFile(`${pathDir}/index.html`);
})


module.exports = Router;