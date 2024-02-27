import mongoose from "mongoose";

const Message = mongoose.model("Message",
    new mongoose.Schema({
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        recieverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        message: {
            type: String,
            // required: true
        },
        fileLocation: {
            type: String,
        }
    }, { timestamps: true }));

export default Message;