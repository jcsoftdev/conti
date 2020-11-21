const mongoose = require("mongoose");
const config = require("./config");

// const MONGODB_URI = `mongodb://${config.MONGODB_HOST}/${config.MONGODB_DATABASE}`;
const MONGODB_URI = `mongodb+srv://jcsoftdev:${config.MONGODB_PASSWORD}@curso-platzi.xq9pa.mongodb.net/${config.MONGODB_DATABASE}?retryWrites=true&w=majority`;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((db) => console.log("Mongodb is connected to", db.connection.host))
  .catch((err) => console.error(err));