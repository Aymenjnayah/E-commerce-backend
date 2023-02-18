const CustomerModel = require("../models/Customer.Model")
const CustomerController = {
   create: function (req, res) {
    req.body["photo"] = req.file.filename;
       CustomerModel.create(req.body, function (err, item) {
           if (err) {
               res.status(406).json({ status: 406, message: "Customer not created" +err, data: null })
           }
           res.status(200).json({ status: 200, message: "create Customer", data: item })
       })
   },
   read: function (req, res) {
       CustomerModel.find({}, function (err, items) {
           if (err) {
               res.status(406).json({ status: 406, message: "Customer not found", data: null })
           }
           res.status(200).json({ status: 200, message: "found Customer", data: items })
       }).select("-__v")
   },
   update: function (req, res) {
       CustomerModel.findByIdAndUpdate(req.params.id,req.body,{new:true}, function (err, item) {
           if (err) {
               res.status(406).json({ status: 406, message: "Customer not updated", data: null })
           }
           res.status(200).json({ status: 200, message: "updated Customer", data: item })
       })
   },
   delete: function (req, res) {
       CustomerModel.findByIdAndDelete(req.params.id, function (err, item) {
           if (err) {
               res.status(406).json({ status: 406, message: "Customer not deleted", data: null })
           }
           res.status(200).json({ status: 200, message: "deleted Customer", data: item })
       })
   },
}
module.exports = CustomerController