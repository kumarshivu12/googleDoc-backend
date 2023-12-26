import dotenv from "dotenv";
import io from "./app.js";
import connectDB from "./db/index.js";
import {
  getDocument,
  updateDocument,
} from "./controllers/document.controller.js";

dotenv.config({
  path: "./.env",
});

connectDB();

io.on("connection", (socket) => {
  //catching data from frontend
  socket.on("get-document", async (documentId) => {
    const document = await getDocument(documentId);
    socket.join(documentId);
    socket.emit("load-document", document.data);

    socket.on("send-changes", (delta) => {
      // broadcasting to other users
      socket.broadcast.to(documentId).emit("receive-changes", delta);
    });

    socket.on("save-document", async (data) => {
      await updateDocument(documentId, data);
    });
  });
});
