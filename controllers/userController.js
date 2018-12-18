const db = require("../models");
const passport = require("../config/passport");
const multer = require('multer');
const path = require('path');
var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = {
  createUser: function(req, res) {
    console.log("================== CREATE USER - USERCONTROLLER =================")
    db.User.create(req.body)
      .then(dbModel => res.json("/login"))
      .catch(err => res.status(422).json(err));
  },
  userLogin: function(req, res) {
    console.log("==================USER LOGIN - USERCONTROLLER =================")
      if (req.isAuthenticated()) {
        res.json(req.user)
      }
  },
  userInfo: function(req, res) {
    console.log("================== FIND USER - USERCONTROLLER =================")
    console.log(req.params);
    db.User.findOne({where: {id: req.params.id}})
      .then(dbModel => res.json(dbModel))
  }
};
