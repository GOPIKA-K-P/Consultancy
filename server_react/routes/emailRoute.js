const express = require("express");
const Router = express.Router();
const { email_post} = require("../controller/mailController");

Router.post("/", email_post);


module.exports = Router;
