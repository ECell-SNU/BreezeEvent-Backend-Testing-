const express = require("express");
const cors = require("cors");
const compression = require("compression");

const app = express();

app.use(express.json());
app.use(compression());
app.use(express.urlencoded({ extended: true }))
app.use(cors({origin: '*'}))

app.use("/", require("./routes"));

module.exports = app;
