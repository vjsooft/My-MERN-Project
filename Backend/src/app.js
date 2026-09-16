const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors());
const mainRoutes =  require('./routes/index')
app.use(express.json());
mainRoutes(app);
module.exports = app;
