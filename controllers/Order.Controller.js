const OrderModel = require("../models/Order.Model")
const OrderController = {
   create: function (req, res) {
       OrderModel.create(req.body, function (err, item) {
           if (err) {
               res.status(406).json({ status: 406, message: "Order not created", data: null })
           }
           res.status(200).json({ status: 200, message: "create Order", data: item })
       })
   },
   read: function (req, res) {
       OrderModel.find({}, function (err, items) {
           if (err) {
               res.status(406).json({ status: 406, message: "Order not found", data: null })
           }
           res.status(200).json({ status: 200, message: "found Order", data: items })
       }).select("-__v")
   },
   update: function (req, res) {
       OrderModel.findByIdAndUpdate(req.params.id,req.body,{new:true}, function (err, item) {
           if (err) {
               res.status(406).json({ status: 406, message: "Order not updated", data: null })
           }
           res.status(200).json({ status: 200, message: "update Order", data: item })
       })
   },
   delete: function (req, res) {
       OrderModel.findByIdAndDelete(req.params.id, function (err, item) {
           if (err) {
               res.status(406).json({ status: 406, message: "Order not deleted", data: null })
           }
           res.status(200).json({ status: 200, message: "deleted Order", data: item })
       })
   },
}
module.exports = OrderController