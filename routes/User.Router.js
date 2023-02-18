const UserController = require("../controllers/User.Controller");
const express = require("express")
const Router =express.Router();
Router.post("/login",UserController.login);
Router.post("/logout",UserController.logout);
Router.post("/refresh",UserController.refresh);
module.exports = Router;
