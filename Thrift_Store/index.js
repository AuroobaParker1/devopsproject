const express = require("express");
const mongoose = require("mongoose");
const Router = require("./user/routes");
const Routeradmin = require("./admin/routes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
require("dotenv").config();

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/user", Router);
app.use("/admin", Routeradmin);

// API health check
app.get('/api/status', (req, res) => {
    res.json({ status: true, message: 'Backend is up and running' });
});

mongoose.set("strictQuery", true);

module.exports = app;
