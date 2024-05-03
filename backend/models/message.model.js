import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        // senderId is the id of the user who sent the message
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId: {
        // receiverId is the id of the user who received the message
        type : mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message: {
        type: String,
        required: true
    }
},
// add timestamps to the schema
// this will add createdAt and updatedAt fields to the schema
{ timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;