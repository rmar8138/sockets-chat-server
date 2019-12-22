const MessageModel = require("../database/models/MessageModel");

const socketInit = (io, socket) => {
  // receive message and save to db
  socket.on("sendMessage", async data => {
    const { body, name } = data;
    const newMessage = await MessageModel.create({
      body,
      name,
      socket: socket.id
    });

    io.emit("renderMessage", newMessage);
  });

  socket.on("disconnect", () => {
    console.log("Someone has left");
  });
};

module.exports = socketInit;
