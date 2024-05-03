import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
    {
        // members is an array of user ids
        members: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
        ],
        
        messages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Message",
                default: []
            },
        ],
    },
        
    // add timestamps to the schema
    // this will add createdAt and updatedAt fields to the schema
    { timestamps: true }
);

const conversation = mongoose.model("Conversation", conversationSchema);

export default conversation;