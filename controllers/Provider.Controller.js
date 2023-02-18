const ProviderModel = require("../models/Provider.Model")
const ProviderController = {
   create: function (req, res) {
       ProviderModel.create(req.body, function (err, item) {
           if (err) {
               res.status(406).json({ status: 406, message: "Provider not created", data: null })
           }
           res.status(200).json({ status: 200, message: "create Provider", data: item })
       })
   },
   read: function (req, res) {
       ProviderModel.find({}, function (err, items) {
           if (err) {
               res.status(406).json({ status: 406, message: "Provider not found", data: null })
           }
           res.status(200).json({ status: 200, message: "found Provider", data: items })
       }).select("-__v")
   },
   update: function (req, res) {
       ProviderModel.findByIdAndUpdate(req.params.id,req.body,{new:true}, function (err, item) {
           if (err) {
               res.status(406).json({ status: 406, message: "Provider not updated", data: null })
           }
           res.status(200).json({ status: 200, message: "updated Provider", data: item })
       })
   },
   delete: function (req, res) {
       ProviderModel.findByIdAndDelete(req.params.id, function (err, item) {
           if (err) {
               res.status(406).json({ status: 406, message: "Provider not deleted", data: null })
           }
           res.status(200).json({ status: 200, message: "deleted Provider", data: item })
       })
   },
}
///
module.exports = ProviderController