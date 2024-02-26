const express = require('express');
const BlogController = require('./controllers/BlogController')
const blogRouter = express.Router();

blogRouter.get('/', async function (req, res, next) {
    try {
        res.json(await BlogController.getBlogPosts());
    } catch (error) {
        console.error('API Error:', err.message);
        next(error);
    }
})

module.exports = {blogRouter}
