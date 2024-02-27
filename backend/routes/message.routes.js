import express from 'express';
import { fileUpload, getMessage, sendMessage } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';
import upload from '../utils/multerHandler.js';
import handleFileUpload from '../utils/multerHandler.js';

const router = express.Router();

router.get('/:id', protectRoute, getMessage)
router.post('/send/:id', protectRoute, handleFileUpload, sendMessage)

router.post('/upload/:id', protectRoute, handleFileUpload, fileUpload);

export default router