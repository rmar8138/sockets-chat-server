const app = require("./app");
const http = require("http").createServer(app);
const port = process.env.PORT || 5000;

const io = require("socket.io")(http);

io.on("connection", socket => {
  console.log("Someone has connected");
});

http.listen(port, () => console.log(`Server listening on port ${port}`));
