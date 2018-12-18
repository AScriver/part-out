const router = require('express').Router();
const userController = require('../../controllers/userController');

// routes /api/user
router.route('/:id')
    .get(userController.userInfo);

module.exports = router;