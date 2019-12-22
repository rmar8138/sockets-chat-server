const app = require("./app");
const http = require("http").createServer(app);
const MessageModel = require("./database/models/MessageModel");
const port = process.env.PORT || 5000;

const io = require("socket.io")(http);

io.on("connection", socket => {
  console.log("Someone has connected!");

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
});

http.listen(port, () => console.log(`Server listening on port ${port}`));

module.exports = { io };
