const express = require('express');
const BlogController = require('./controllers/BlogController')
const blogRouter = express.Router();

blogRouter.get('/', async function (req, res, next) {
    try {
        if (Object.keys(req.query).length === 0) {
            res.json({ data: await BlogController.getBlogPosts() });
        }
        if (req.query.q) {
            res.json({ data: await BlogController.searchAllContent(req.query.q) });
        } else if (req.query.title) {
            res.json({ data: await BlogController.searchByTitle(req.query.title) });
        }
        else if (req.query.author) {
            res.json({ data: await BlogController.searchByAuthor(req.query.author) });
        }
        else if (req.query.article) {
            res.json({ data: await BlogController.searchByArticle(req.query.article) });
        }
    } catch (error) {
        console.error('API Error:', error.message);
        next(error);
    }
})

module.exports = { blogRouter }
