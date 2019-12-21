const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  body: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: String,
    required: true
  }
});

module.exports = MessageSchema;