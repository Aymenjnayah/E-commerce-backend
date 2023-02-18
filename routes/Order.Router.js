const OrderController = require("../controllers/Order.Controller");
const express = require("express")
const Router =express.Router();
Router.post("/",OrderController.create)
Router.delete("/:id",OrderController.delete)
Router.put("/:id",OrderController.update)
Router.get("/",OrderController.read)
module.exports = Router;
