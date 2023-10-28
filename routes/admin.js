const express = require('express');
const path = require('path');
const postController = require('../controllers/posts')

const router = express.Router();

router.get('/add-post',postController.renderAddPostPage)

router.post('/',postController.createPost);

module.exports = {adminRouter : router};