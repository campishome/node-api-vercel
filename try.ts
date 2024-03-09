const express = require('express');
const app = express();

const PORT = 4000;

import { router as movie } from "./api/movie";

module.exports = app;
app.use("/movie", movie);