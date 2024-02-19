import express from 'express';
import http from "http";
import { Server } from 'socket.io';

const app = express();

//create socket server
const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin: ["http://192.168.12.88:3000"],
        methods: ["GET", "POST"]
    }
}) 


export const getReceiverSocketId = (receiverId) => {
	return userSocketMap[receiverId];
};

const userSocketMap = {};

io.on("connection", (socket)=>{
    console.log('a user connected', socket.id);


     // B R O A D C A S T C O N N E C T
     socket.on('joinRoom', (roomId) => {
        socket.join(roomId);
        console.log(`User joined room: ${roomId}`);
      });

      socket.on('leaveRoom', (roomId) => {
        socket.leave(roomId);
        console.log(`User left room: ${roomId}`);
      });

      socket.on('codeChange', (roomId, message) => {
        console.log(`Received message from client in room ${roomId}:`, message);
        console.log('message:',message);
        io.to(roomId).emit('codeChange', message); // Broadcast the message to all clients in the room
      });


    
    //userId from frontend
    const userId = socket.handshake.query.userId;
    
    if(userId != 'undefined') userSocketMap[userId] = socket.id;  //setting user connection

    // io.emit() is used to send events to all the connected clients (to frontend)
	io.emit("getOnlineUsers", Object.keys(userSocketMap)); 

    // socket.on() is used to listen to the events. can be used both on client and server side
	socket.on("disconnect", () => {
		console.log("user disconnected", socket.id);
		delete userSocketMap[userId];
		io.emit("getOnlineUsers", Object.keys(userSocketMap)); //send userId key to frontend
	});
})

export {app, io, server}
