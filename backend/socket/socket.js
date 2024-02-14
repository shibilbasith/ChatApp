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
    
    //userId from frontend
    const userId = socket.handshake.query.userId;
    
    if(userId != 'undefined') userSocketMap[userId] = socket.id; 

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
