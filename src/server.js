const express = require("express");
const path = require("path");
const cors = require("cors");
const session = require("express-session");
const connectMongo = require("connect-mongo");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Initializations
const app = express();

// settings
app.set("port", process.env.PORT || 4000);
const MongoStore = connectMongo(session);
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);
// cors 
app.use(cors());

// body bodyParser
// app.use(bodyParser.urlencoded());

app.use(bodyParser.json());
// static files
app.use("/", express.static(path.join(__dirname, "../public")));
// routes
app.use(require("./router"));



module.exports = app;
