import express from 'npm:express';
import {Server} from 'npm:socket.io';
import cors from 'npm:cors';

const app = express();
app.use(cors());
const server = app.listen(8000);
const io = new Server(server, {
  cors: {
    origin:'*' ,
    methods: ["GET", "POST"]
  }

});

console.log("Socket Server started on port 8000");

const fakeNewStatus = (socket, id, status, seconds) => {
  setTimeout(() => {
    socket.emit("paymentStatus", {id, status, message: `Payment ${status}`});
  }, seconds * 1000);
}


io.on("connection", (socket) => {
  console.log(`socket ${socket.id} connected`);


  socket.on("disconnect", (reason) => {
    console.log(`socket ${socket.id} disconnected due to ${reason}`);
  });

  socket.on("paymentStart", (payment, cb) => {
    console.log(`socket ${socket.id} sent message: ${payment.id}`);
    fakeNewStatus(socket, payment.id, "pending", 1);
    fakeNewStatus(socket, payment.id,  "approved", 3);

    cb({id: payment.id, status: "init", message: "Payment initialized"});


  });

});
