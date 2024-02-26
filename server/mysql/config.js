module.exports.config = {
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PSWD,
    connectTimeout: 60000
};
