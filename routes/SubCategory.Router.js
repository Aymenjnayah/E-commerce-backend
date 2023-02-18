const SubCategoryController = require("../controllers/SubCategory.Controller");
const express = require("express")
const Router =express.Router();
Router.post("/",SubCategoryController.create)
Router.delete("/:id",SubCategoryController.delete)
Router.put("/:id",SubCategoryController.update)
Router.get("/",SubCategoryController.read)
module.exports = Router;
