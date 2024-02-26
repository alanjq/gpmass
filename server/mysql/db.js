const mysql = require('mysql2/promise')
const { config } = require('./config')

module.exports.query = async (query_string, params) => {
    const connection = await mysql.createConnection(config)
    const [results,] = await connection.execute(query_string, params)
    return results
}
