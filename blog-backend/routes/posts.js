const express = require('express');
const { createPost, getAllPosts, getPostById, updatePost, deletePost, likePost } = require('../controllers/postController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/create-post', auth, createPost);
router.get('/posts', getAllPosts); 
router.get('/posts/:id', getPostById); 
router.put('/posts/:id', auth, updatePost);
router.delete('/posts/:id', auth, deletePost);
router.post('/posts/:id/like', auth, likePost);

module.exports = router;
