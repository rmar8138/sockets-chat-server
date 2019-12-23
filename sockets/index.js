const MessageModel = require("../database/models/MessageModel");

const socketInit = (io, socket) => {
  let room = null;

  socket.on("joinRoom", data => {
    room = data;
    socket.join(room);
  });

  // receive message and save to db
  socket.on("sendMessage", async data => {
    const { body, name, room } = data;
    const newMessage = await MessageModel.create({
      body,
      name,
      room,
      socket: socket.id
    });

    io.to(room).emit("renderMessage", newMessage);
  });

  socket.on("disconnect", () => {
    console.log("Someone has left");
  });
};

module.exports = socketInit;
