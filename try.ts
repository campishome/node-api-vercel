const express = require('express');
const app = express();

const PORT = 4000;
import { router as movie } from "./api/movie";

app.get('/',(req,res)=>{
    res.send('This is my API,But from try.ts');
})

app.use("/movie", movie);

module.exports = app;
