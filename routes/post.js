const { Router } = require('express');
const path = require('path');
const postController = require('./../controllers/posts')
const { isLogin } = require('../middleware/isLogin')

const router = Router();

router.get('/',postController.renderPostPage)
router.get('/edit/:postID',isLogin,postController.renderEditPage)
router.post('/edit',isLogin,postController.updatePost)
router.post('/delete/:postID',isLogin,postController.deletePost)
router.get('/:postID',postController.renderDetailPage)

module.exports = router;