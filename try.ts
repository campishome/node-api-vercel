const express = require('express');
const app = express();

const PORT = 4000;

app.get('/',(req,res)=>{
    res.send('This is my API,But from ts');
})

module.exports = app;