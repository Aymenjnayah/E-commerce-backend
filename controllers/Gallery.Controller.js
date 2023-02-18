const GalleryModel = require("../models/Gallery.Model")
const GalleryController = {
   create: function (req, res) {
    req.body["photo"] = req.file.filename;
       GalleryModel.create(req.body, function (err, item) {
           if (err) {
               res.status(406).json({ status: 406, message: "Gallery not created", data: null })
           }
           res.status(200).json({ status: 200, message: "create Gallery", data: item })
       })
   },
   read: function (req, res) {
       GalleryModel.find({}, function (err, items) {
           if (err) {
               res.status(406).json({ status: 406, message: "Gallery not found", data: null })
           }
           res.status(200).json({ status: 200, message: "found Gallery", data: items })
       }).select("-__v")
   },
   update: function (req, res) {
       GalleryModel.findByIdAndUpdate(req.params.id,req.body,{new:true}, function (err, item) {
           if (err) {
               res.status(406).json({ status: 406, message: "Gallery not updated", data: null })
           }
           res.status(200).json({ status: 200, message: "updated Gallery", data: item })
       })
   },
   delete: function (req, res) {
       GalleryModel.findByIdAndDelete(req.params.id, function (err, item) {
           if (err) {
               res.status(406).json({ status: 406, message: "Gallery not deleted", data: null })
           }
           res.status(200).json({ status: 200, message: "deleted Gallery", data: item })
       })
   },
}
module.exports = GalleryController