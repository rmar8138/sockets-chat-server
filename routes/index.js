const express = require("express");
const cors = require("cors");
const MessageModel = require("../database/models/MessageModel");
const router = express.Router();

// enable cors
router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000/"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.get("/", cors(), async (req, res) => {
  // send back all messages
  const messages = await MessageModel.find();
  res.json(messages);
});
router.get("/goodbye", (req, res) => res.send("Goodbye World!"));

module.exports = router;
