const socketHandler = socket => {
  console.log("Someone has connected!");

  // receive message and save to db
  socket.on("sendMessage", data => {
    console.log(data.body);
  });

  socket.on("disconnect", () => {
    console.log("Someone has left");
  });
};

module.exports = socketHandler;
