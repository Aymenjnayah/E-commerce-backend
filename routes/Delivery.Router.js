const DeliveryController = require("../controllers/Delivery.Controller");
const express = require("express")
const Router =express.Router();
Router.post("/",DeliveryController.create)
Router.delete("/:id",DeliveryController.delete)
Router.put("/:id",DeliveryController.update)
Router.get("/",DeliveryController.find)
module.exports = Router;
