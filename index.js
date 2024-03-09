const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('This is my API, but from try.ts');
});

app.get('/', (req, res) => {
    conn.query('SELECT * FROM Movie', (err, result, fields)=>{
        res.json(result);
    });
});

module.exports = app;