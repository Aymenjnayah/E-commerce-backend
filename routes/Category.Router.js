const CategoryController = require("../controllers/Category.Controller");
const express = require("express")
const Router =express.Router();
Router.post("/",CategoryController.create)
Router.delete("/:id",CategoryController.delete)
Router.put("/:id",CategoryController.update)
Router.get("/",CategoryController.read)
module.exports = Router;
