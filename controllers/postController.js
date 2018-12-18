const db = require("../models");

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
  getPostsById: function(req, res){
    db.Post.findOne({
      where: {
        id: req.params.id
      },
      inclide: [db.User],
      order: [['id', 'DESC']]
    })
      .then(dbPost => res.json(dbPost))
      .catch(err => res.status(422).json(err))
  },
  getPostByMake: function(req, res) {
    console.log("==================GET POST BY MAKE BACKEND==================")
    // console.log(req);
    console.log(req.params)
    db.Post.findAll({
      where: {
        carMake: req.params.carMake
      },
      include: [db.User],
      order: [['id', 'DESC']]
    })
    .then(dbPost => res.json(dbPost))
    .catch(err => res.status(422).json(err))
  },
  getPostByMakeModel: function(req, res) {
    console.log("==================GET POST BY MAKE AND MODEL BACKEND==================")
    db.Post.findAll({
      where: {
        carMake: req.params.carMake,
        carModel: req.params.carModel
      },
      include: [db.User],
      order: [['id', 'DESC']]
    })
    .then(dbPost => res.json(dbPost))
    .catch(err => res.status(422).json(err))
  },
  getPostByMakeModelYear: function(req, res) {
    console.log("==================GET POST BY MAKE MODEL YEAR BACKEND==================")
    db.Post.findAll({
      where: {
        carMake: req.params.carMake,
        carModel: req.params.carModel,
        carYear: req.params.carYear
      },
      include: [db.User],
      order: [['id', 'DESC']]
    })
    .then(dbPost => res.json(dbPost))
    .catch(err => res.status(422).json(err))
  }
};
