// controllers/postController.js
const Post = require('../models/Post');

const createPost = async (req, res) => {
  const { title, content } = req.body;
  const author = req.user._id;

  try {
    const newPost = await Post.create({ title, content, author });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'username');
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPostById = async (req, res) => {
  const postId = req.params.id;
  
  try {
    const post = await Post.findById(postId).populate('author', 'username');
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  const { title, content } = req.body;
  const postId = req.params.id;
  const userId = req.user._id;

  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (post.author.toString() !== userId.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    post.title = title;
    post.content = content;
    const updatedPost = await post.save();
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
    const postId = req.params.id;
    const userId = req.user._id;
  
    try {
      const post = await Post.findById(postId);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      if (post.author.toString() !== userId.toString()) {
        return res.status(401).json({ message: 'Not authorized' });
      }
  
      await Post.findByIdAndDelete(postId);
  
      res.json({ message: 'Post deleted' });
    } catch (error) {
   
      res.status(500).json({ message: error.message });
    }
  };
  
  

  const likePost = async (req, res) => {
    const postId = req.params.id;
  
    try {
      const post = await Post.findById(postId).populate('author', 'username'); 
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
  
      post.likes += 1;
      await post.save();

      res.json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
  likePost,
};
