const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  body: {
    type: String,
    required: true,
    trim: true
  },
  name: {
    type: String,
    required: true
  },
  socket: {
    type: String,
    required: true
  }
});

module.exports = MessageSchema;
