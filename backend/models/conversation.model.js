import mongoose from "mongoose";

const Conversation = mongoose.model("Conversation",
    new mongoose.Schema({
        participents: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            }
        ],
        messages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Message",
                default: []
            }
        ]
    }, { timestamps: true }));


export default Conversation;