import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const sendMessage = asyncHandler(async (req, res) => {
    const { message } = req.body;
    const { id: recieverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
        participents: { $all: [senderId, recieverId] } //all-> check senderId and recieverId include in the db
    });

    if (!conversation) {
        conversation = await Conversation.create({
            participents: [senderId, recieverId]
        });
    }

    const newMessage = new Message({
        senderId,
        recieverId,
        message
    });

    if (newMessage) {
        conversation.messages.push(newMessage._id)
    }

    await Promise.all([conversation.save(), newMessage.save()]); //it will run at the same time


    //SOCKET.IO FUNCTIONS
    const receiverSocketId = getReceiverSocketId(recieverId);
    if (receiverSocketId) {
        // io.to(<socket_id>).emit() used to send events to specific client
        io.to(receiverSocketId).emit("newMessage", newMessage);
    }
    return res.status(200).json(newMessage)
})


export const getMessage = asyncHandler(async (req, res) => {

    const { id: userToChatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
        participents: { $all: [senderId, userToChatId] }
    }).populate("messages")

    if (!conversation) return res.status(200).json([])

    const messages = conversation.messages;

    return res.status(200).json(messages)
})