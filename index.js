const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

mongoose.connect(`mongodb://localhost/sockets-chat`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Server listening on port ${port}`));
