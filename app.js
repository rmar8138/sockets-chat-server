const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

mongoose.connect(`mongodb://localhost/sockets-chat`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(routes);

module.exports = app;
