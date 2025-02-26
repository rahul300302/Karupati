const express = require("express");
const Router = express.Router();

const Admin = require("./Admin/router"); 

Router.use("/api", Admin); 

module.exports = Router; 
