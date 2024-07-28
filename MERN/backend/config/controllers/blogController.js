const mongoose = require('mongoose');
const Blog = require('../models/blogModel');

const getBlogs = async (req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
};

const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if the id is a valid ObjectId
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: 'Invalid blog ID' });
    }

    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.json(blog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const createBlog = async (req, res) => {
  const { title, imageUrl, content } = req.body;
  const blog = new Blog({
    title,
    imageUrl,
    content,
  });
  const createdBlog = await blog.save();
  res.status(201).json(createdBlog);
};

const updateBlog = async (req, res) => {
  const { title, imageUrl, content } = req.body;
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    blog.title = title;
    blog.imageUrl = imageUrl;
    blog.content = content;

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
};

const deleteBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    await blog.remove();
    res.json({ message: 'Blog removed' });
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
};

module.exports = {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};
