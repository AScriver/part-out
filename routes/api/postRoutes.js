const router = require('express').Router();
const postController = require('../../controllers/postController');


// Matches with /api/post
router.route('/')
    .post(postController.createPost)
    .get(postController.getAllPosts);

router.route('/:carMake')
    .get(postController.getPostByMake)

router.route('/:carMake/:carModel')
    .get(postController.getPostByMakeModel)

router.route('/:carMake/:carModel/:carYear')
    .get(postController.getPostByMakeModelYear)

module.exports = router;
//