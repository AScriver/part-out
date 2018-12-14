const router = require('express').Router();
const postController = require('../../controllers/postController');


// Matches with /api/post
router.route('/')
    .post(postController.createPost)
    .get(postController.getAllPosts)

module.exports = router;