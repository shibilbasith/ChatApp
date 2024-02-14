import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import morgan from "morgan";

import authRoutes from './routes/auth.routes.js'
import messsageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectDB from './config/db.js';
import { app, server } from './socket/socket.js';

const PORT = process.env.PORT || 5002;

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

app.use("/api/auth", authRoutes)
app.use("/api/messages", messsageRoutes)
app.use("/api/users", userRoutes)

server.listen(PORT, () => {
    connectDB();
    console.log(`server is running on ${PORT}`)
})