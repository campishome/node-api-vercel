const express = require('express');
const app = express();

const PORT = 4000;

app.listen(PORT,()=>{
    console.log(`API Listening on PORT ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send('This is my API');
})

app.get('/Movie',(req, res) =>{
    res.send('Movie api');
})

app.get('/Person',(req, res) =>{
    res.send('Person api');
})

app.get('/Star',(req, res) =>{
    res.send('Star api');
})

app.get('/Creator',(req, res) =>{
    res.send('Creator api');
})

module.exports = app