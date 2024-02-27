const db = require('../mysql/db')

const TABLE_COLUMNS = ['id', 'title', 'published', 'article', 'author']
// const TABLE_COLUMNS = [SELECT id, title, published, article, author FROM blog_post WHERE CONCAT(title,article, author) LIKE "%alan%"]

async function getBlogPosts() {
    const results = await db.query(`SELECT ${TABLE_COLUMNS.join(',')} FROM blog_post`)
    return results
}

async function searchByTitle(title) {
    const results = await db.query(`SELECT ${TABLE_COLUMNS.join(',')} FROM blog_post WHERE title LIKE "%${title}%"`)
    return results
}

async function searchByAuthor(author) {
    const results = await db.query(`SELECT ${TABLE_COLUMNS.join(',')} FROM blog_post WHERE author LIKE "%${author}%"`)
    return results
}

async function searchByArticle(article) {
    const results = await db.query(`SELECT ${TABLE_COLUMNS.join(',')} FROM blog_post WHERE article LIKE "%${article}%"`)
    return results
}

async function getById(id) {
    const results = await db.query(`SELECT ${TABLE_COLUMNS.join(',')} FROM blog_post WHERE id=${id}`)
    return results
}

async function searchAllContent(searchValue) {
    let myQuery = `SELECT {0} FROM blog_post WHERE CONCAT({1}) LIKE "%${searchValue}%"`
    myQuery = myQuery.replace('{0}', TABLE_COLUMNS.join(','))
    myQuery = myQuery.replace('{1}', TABLE_COLUMNS.slice(1, 5).join(`,`))
    const results = await db.query(myQuery)
    return results
}

async function createBlogPost(blogpost) {
    let myQuery = "CALL create_blog_post(?,?,?,@result)";
    const results = await db.query(myQuery, [blogpost.title, blogpost.article, blogpost.author], (error, result) => {
        if (error) {
            console.log("Error:", error);
        } else {
            console.log("Nuevo ID post:", result);
        }
    })
    return results
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
