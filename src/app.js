import { Server } from "socket.io";

const io = new Server(9000, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

export default io;
