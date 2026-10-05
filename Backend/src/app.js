const express = require('express');
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
// app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const mainRoutes =  require('./routes/index')
app.use(express.json());
app.use(cookieParser());
mainRoutes(app);
module.exports = app;
