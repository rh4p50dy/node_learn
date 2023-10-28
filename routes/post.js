const { Router } = require('express');
const path = require('path');
const postController = require('./../controllers/posts')

const router = Router();

router.get('/',postController.renderPostPage)
router.get('/:postID',postController.renderDetailPage)

module.exports = router;