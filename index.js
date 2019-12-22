const app = require("./app");
const http = require("http").createServer(app);
const socketHandler = require("./sockets");
const port = process.env.PORT || 5000;

const io = require("socket.io")(http);

io.on("connection", socketHandler);

http.listen(port, () => console.log(`Server listening on port ${port}`));
