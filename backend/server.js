import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import morgan from "morgan";
import cors from "cors";

import authRoutes from './routes/auth.routes.js'
import messsageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectDB from './config/db.js';
import { app, server } from './socket/socket.js';
import upload from './utils/multerHandler.js';
import bodyParser from 'body-parser';
import path from 'path';
dotenv.config();


const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(morgan('dev'));

// Serve images from a directory
app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes)
app.use("/api/messages", messsageRoutes)
app.use("/api/users", userRoutes)

app.use('/', (req, res) => {
    res.status(200).json("Welcome to the application. No such Api");
});


server.listen(PORT, () => {
    connectDB();
    console.log(`server is running on ${PORT}`)
})