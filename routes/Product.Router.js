const ProductController = require("../controllers/Product.Controller");
const express = require("express")
const upload = require("../middlewares/uploads")
const Router =express.Router();
Router.post("/",upload.array("files"),ProductController.create)
Router.post("/",ProductController.create)
Router.delete("/:id",ProductController.delete)
Router.put("/:id",ProductController.update)
Router.get("/",ProductController.read)
module.exports = Router;
