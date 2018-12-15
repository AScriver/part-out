const db = require("../models");
const passport = require("../config/passport");
const multer = require('multer');
const path = require('path');
var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = {
  createPost: function(req, res) {
      console.log(req.body);
      console.log("================== CREATE POST - USERCONTROLLER =================");
      db.Post.create({
        title: req.body.title,
        desc: req.body.desc,
        itemImg: req.body.itemImg,
        price: req.body.price,
        carYear: req.body.carYear,
        carMake: req.body.carMake,
        carModel: req.body.carModel,
        location: req.body.location,
        category: req.body.category,
        UserId: req.user.id
      })
        .then(dbModel => res.json("/"))
        .catch(err => res.status(422).json(err));
  },
  getAllPosts: function(req, res) {
    db.Post.findAll({
      include: [db.User],
      order: [['id', 'DESC']]
    })
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err))
  },
  getPostBySearch: function(req, res) {
    db.Post.findAll({
      where: {
        [Op.or]: [{carMake: req.body.make}, {carModel: req.body.model}, {carYear: req.body.year}]
      },
      include: [db.User],
      order: [['id', 'DESC']]
    })
    .then(dbPost => res.json(dbPost))
    .catch(err => res.status(422).json(err))
  }
};
