const ProviderController = require("../controllers/Provider.Controller");
const express = require("express")
const Router =express.Router();
Router.post("/",ProviderController.create)
Router.delete("/:id",ProviderController.delete)
Router.put("/:id",ProviderController.update)
Router.get("/",ProviderController.read)
module.exports = Router;
