const db = require('../mysql/db')

async function getBlogPosts() {
    const results = await db.query(`SELECT * FROM blog_post`)
    return results
}

module.exports = { getBlogPosts }
