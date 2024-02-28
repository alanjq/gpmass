const db = require('../mysql/db')

const TABLE_COLUMNS = ['id', 'title', 'published', 'article', 'author']
// const TABLE_COLUMNS = [SELECT id, title, published, article, author FROM blog_post WHERE CONCAT(title,article, author) LIKE "%alan%"]

async function getBlogPosts() {
    try {
        const results = await db.query(`SELECT ${TABLE_COLUMNS.join(',')} FROM blog_post`)
        return results
    } catch (error) {
        return []
    }
}

async function searchByTitle(title) {
    try {
        const results = await db.query(`SELECT ${TABLE_COLUMNS.join(',')} FROM blog_post WHERE title LIKE "%${title}%"`)
        return results
    } catch (error) {
        return []
    }
}

async function searchByAuthor(author) {
    try {
        const results = await db.query(`SELECT ${TABLE_COLUMNS.join(',')} FROM blog_post WHERE author LIKE "%${author}%"`)
        return results
    } catch (error) {
        return []
    }
}

async function searchByArticle(article) {
    try {
        const results = await db.query(`SELECT ${TABLE_COLUMNS.join(',')} FROM blog_post WHERE article LIKE "%${article}%"`)
        return results
    } catch (error) {
        return []
    }
}

async function getById(id) {
    try {
        const results = await db.query(`SELECT ${TABLE_COLUMNS.join(',')} FROM blog_post WHERE id=${id}`)
        return results[0]
    } catch (error) {
        return {}
    }
}

async function searchAllContent(searchValue) {
    try {

        let myQuery = `SELECT {0} FROM blog_post WHERE CONCAT({1}) LIKE "%${searchValue}%"`
        myQuery = myQuery.replace('{0}', TABLE_COLUMNS.join(','))
        myQuery = myQuery.replace('{1}', TABLE_COLUMNS.slice(1, 5).join(`,`))
        const results = await db.query(myQuery)
        return results
    } catch (error) {
        return []
    }
}

async function createBlogPost(blogpost) {
    try {
        let myQuery = "CALL create_blog_post(?,?,?,@result)";
        const results = await db.query(myQuery, [blogpost.title, blogpost.article, blogpost.author], (error, result) => {
            if (error) {
                console.log("Error:", error);
            } else {
                console.log("Nuevo ID post:", result);
            }
        })
        return results
    } catch (error) {
        return []
    }
}

module.exports = {
    getBlogPosts,
    searchByTitle,
    searchByAuthor,
    searchByArticle,
    getById,
    searchAllContent,
    createBlogPost,
}
