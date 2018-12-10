const db = require("../models");
const passport = require("../config/passport");
const multer = require('multer');
const path = require('path');
var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = {
  createUser: function(req, res) {
    db.User.create(req.body)
      .then(dbModel => {res.redirect(200, '/login')})
      .catch(err => res.status(422).json(err));
  },
};
