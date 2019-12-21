const mongoose = require("mongoose");
const messageSchema = require("./../schemas/messageSchema");

const MessageModel = mongoose.model("message", messageSchema);

module.exports = MessageModel;
