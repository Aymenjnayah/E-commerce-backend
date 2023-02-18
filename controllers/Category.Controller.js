const CategoryModel = require("../models/Category.Model")
const CategoryController = {
   create: function (req, res) {
       CategoryModel.create(req.body, function (err, item) {
           if (err) {
               res.status(406).json({ status: 406, message: "Category not created" +err, data: null })
           }
           res.status(200).json({ status: 200, message: "create Category", data: item })
       })
   },
   read: function (req, res) {
       CategoryModel.find({}, function (err, items) {
           if (err) {
               res.status(406).json({ status: 406, message: "Category not found" +err, data: null })
           }
           res.status(200).json({ status: 200, message: "found Category", data: items })
       }).select("-__v").populate("subCategories","-__v")
   },
   update: function (req, res) {
       CategoryModel.findByIdAndUpdate(req.params.id,req.body,{new:true}, function (err, item) {
           if (err) {
               res.status(406).json({ status: 406, message: "Category not updated", data: null })
           }
           res.status(200).json({ status: 200, message: "update Category", data: item })
       })
   },
   delete: function (req, res) {
       CategoryModel.findByIdAndDelete(req.params.id, function (err, item) {
           if (err) {
               res.status(406).json({ status: 406, message: "Category not deleted", data: null })
           }
           res.status(200).json({ status: 200, message: "delete Category", data: item })
       })
   },

}
module.exports = CategoryController