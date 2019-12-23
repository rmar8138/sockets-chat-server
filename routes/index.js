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

router.get("/room/:room", cors(), async (req, res) => {
  const { room } = req.params;

  // send back all messages belonging to room
  const messages = await MessageModel.find({ room });
  res.json(messages);
});

module.exports = router;
