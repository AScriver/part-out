const db = require('../models');

module.exports = {
    createUser: function(req, res){
        db.User.create(req.body)
            .then(dbModel => res.json(dbModel)) // redirect here?
            .catch(err => res.status(422).json(err))
    }
}