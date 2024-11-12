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

io.on("connection", (socket) => {
  console.log(`socket ${socket.id} connected`);


  socket.on("disconnect", (reason) => {
    console.log(`socket ${socket.id} disconnected due to ${reason}`);
  });

  socket.on("paymentStart", (payment, cb) => {
    console.log(`socket ${socket.id} sent message: ${payment.id}`);
    cb({id: payment.id, status: "success", message: "Payment successful"});

  });

});
