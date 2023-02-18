const DeliveryModel = require("../models/Delivery.Model");
const DeliveryController = {
  create: function (req, res) {
    const Delivery = DeliveryModel(req.body);
    Delivery.save(function (err, item) {
      if (err) {
        res.json({
          status: "200",
          message: "err add delivery "+ err,
          data: null,
        });
      }

      console.log("item of save ",item)
      res.json({
        status: "200",
        message: "add delivery ",
        data: {
          _id: item._id,
          name: item.name,
          email: item.email,
          mobile: item.mobile,
          photo: item.photo,
          itemtype: item.itemtype,
        },
      });
    });
  },
  update: function (req, res) {
    const id = req.params.id;
    DeliveryModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      function (err, item) {
        if (err) {
          res.json(err);
        }
        res.json(item);
      }
    );
  },
  delete: function (req, res) {
    const id = req.params.id;
    DeliveryModel.findByIdAndDelete(id, {}, function (err, item) {
      if (err) {
        res.json(err);
      }
      res.json(item);
    });
  },
  find: function (req, res) {
    DeliveryModel.find({}, function (err, items) {
      if (err) {
        res.json({
            status: "200",
            message: "err find all delivery ",
          data: null,
        });
      }
      res.json({
        status: "200",
        message: "find all delivery ",
        data: items,
      });
    }).select("-__v -password -orders -photo");
  },
  findById: function (req, res) {
    DeliveryModel.findOne({ _id: req.params.id }, function (err, item) {
      if (err) {
        res.json(err);
      }
      res.json(item);
    });
  },
};
module.exports = DeliveryController;
