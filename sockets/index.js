const MessageModel = require("../database/models/MessageModel");

const socketHandler = socket => {
  console.log("Someone has connected!");

  // receive message and save to db
  socket.on("sendMessage", async data => {
    const { body } = data;
    const newMessage = await MessageModel.create({
      body,
      socket: socket.id,
      name: "test"
    });

    socket.emit("renderMessage", newMessage);
  });

  socket.on("disconnect", () => {
    console.log("Someone has left");
  });
};

module.exports = socketHandler;
