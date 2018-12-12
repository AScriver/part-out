const router = require('express').Router();
const userController = require('../../controllers/userController');

// /api/user_data
router.route('/')
    .get(userController.sendUserData)

module.exports = router;