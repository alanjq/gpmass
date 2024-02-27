const express = require('express');
const { blogRouter } = require('./router');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: `API server is working on port: ${PORT}` })
})
app.use('/blog', blogRouter)


// Error Handler
app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500
    console.error(error.message, error.stack);
    res.status(statusCode).json({ message: error.message })
    return;
})

app.listen(PORT, () => {
    console.log('API Server listening on port', PORT);
})