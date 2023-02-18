const UserModel = require("../models/User.Model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const tokenList = {};
const UserController = {
  login: function (req, res, next) {
    UserModel.findOne({ email: req.body.email }, function (err, userInfo) {
      if (err) {
        next(err);
      } else {
        if (userInfo != undefined)
          if (bcrypt.compareSync(req.body.password, userInfo.password)) {
            const token = jwt.sign(
              { id: userInfo._id },
              req.app.get("secretKey"),
              { expiresIn: "1h" }
            );
            const refresh_token = jwt.sign(
              { id: userInfo._id },
              req.app.get("secretKey"),
              { expiresIn: "2h" }
            );
            tokenList[refresh_token] = { refresh_token: refresh_token };
            console.log(tokenList);
            res.json({
              status: "success",
              message: "user found!!!",
              data: {
                user: userInfo,
                token: token,
                refreshtoken: refresh_token,
              },
            });
          } else {
            res.json({
              status: "error",
              message: "Invalid email/password!!!",
              data: null,
            });
          }
        else {
          res.json({
            status: "error",
            message: "email not found!!!",
            data: null,
          });
        }
      }
    });
  },
  logout: function (req, res) {
    if (req.body.refresh_token && req.body.refresh_token in tokenList) {
      delete tokenList[req.body.refresh_token];
      res.json({ status: "success", message: "log out !", data: null });
    } else {
      res.json({
        status: "success",
        message: "refresh token not found !!",
        data: null,
      });
    }
  },
  refresh: function (req, res) {
    console.log(
      "%cUser.Controller.js line:33 tokenList",
      "color: #007ACC;",
      tokenList
    );
    console.log(req.body.refresh_token);
    if (req.body.refresh_token && req.body.refresh_token in tokenList) {
      jwt.verify(
        req.body.refresh_token,
        req.app.get("secretKey"),
        function (err, decoded) {
          if (err) {
            res.json({ status: "error", message: err.message, data: null });
          } else {
            // add user id to request
            req.body.userId = decoded.id;
            const token = jwt.sign(
              { id: req.body.userId },
              req.app.get("secretKey"),
              { expiresIn: "1h" }
            );
            const refresh_token = jwt.sign(
              { id: req.body.userId },
              req.app.get("secretKey"),
              { expiresIn: "2h" }
            );
            tokenList[refresh_token] = { refresh_token: refresh_token };
            console.log(tokenList);
            res.json({
              status: "success",
              message: "user found!!!",
              data: { token: token, refresh_token: refresh_token },
            });
          }
        }
      );
    } else {
      res.json({
        status: "success",
        message: "refresh token not found!!!",
        data: null,
      });
    }
  },
};

module.exports = UserController;
