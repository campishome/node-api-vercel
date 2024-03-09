const express = require('express');
const movieRouter = require('./api/movie');

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('This is my API, but from try.ts');
});

app.use("/movie", movieRouter);

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = server;