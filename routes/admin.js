const express = require('express');
const postController = require('../controllers/posts')
const {isLogin} = require('../middleware/isLogin')


const router = express.Router();

router.get('/add-post',isLogin,postController.renderAddPostPage)

router.post('/',postController.createPost);

module.exports = {adminRouter : router};