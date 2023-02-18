const CustomerController = require("../controllers/Customer.Controller");
const express = require("express")
const upload = require("../middlewares/uploads");
const Router =express.Router();
Router.post("/",upload.single("file"),CustomerController.create);
Router.post("/",CustomerController.create)
Router.delete("/:id",CustomerController.delete)
Router.put("/:id",CustomerController.update)
Router.get("/",CustomerController.read)
module.exports = Router;