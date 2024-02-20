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
dotenv.config();


const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(morgan('dev'));

app.use("/api/auth", authRoutes)
app.use("/api/messages", messsageRoutes)
app.use("/api/users", userRoutes)

app.post('/api/upload', upload.single('file'), async (req, res) => {
    res.json({message: 'File uploaded successfully!'})
    // Handle the uploaded file
    // try {
    //     const filePath = req.file.path;
    //     // Save the file path to the database
    //     const file = new File({ filePath });
    //     await file.save();
    //     res.json({ filePath, message: 'File uploaded successfully!' });
    //   } catch (err) {
    //     console.error(err);
    //     res.status(500).send('Server Error');
    //   }
  });

server.listen(PORT, () => {
    connectDB();
    console.log(`server is running on ${PORT}`)
})