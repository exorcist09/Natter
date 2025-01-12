const mongoose = require("mongoose");
const userModel = require("./user.model");

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",  
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const MessageModel = mongoose.model("Message", messageSchema);
module.exports = MessageModel;
