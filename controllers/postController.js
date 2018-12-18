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
      include: [{
        model: db.User
      },{
        model: db.Comment
      }],
      order: [['id', 'DESC']]
    })
      .then(dbPost => res.json(dbPost))
      .catch(err => res.json(err))
  }
  // getComments: function(req, res){
  //   console.log("================== GET COMMENTS ==================")
  //   db.Comment.findAll({
  //     where: {
  //       PostId: req.params.id
  //     },
  //     include: [db.User]
  //   })
  //   .then(dbComment => res.json(dbComment))
  //   .catch(err => console.log(err.response))
  // }
};
