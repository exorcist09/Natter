const messageModel = require("../models/message.model");
const userModel = require("../models/user.model");

module.exports.getUsersForSideBar = async (req, res) => {
  try {
    const loggedInUser = req.user._id; // Get the logged in user's id
    const filteredUsers = await userModel
      .find({ _id: { $ne: loggedInUser } })
      .select("-password"); // Get all users except the logged in user over her $ne means not equal
    res.status(200).json(filteredUsers);
  } catch (error) {
    res.status(500).json({ "Internal Server Error": error });
  }
};

module.exports.getMessages = async (req, res) => {
  try {
    const { id:userToChatId } = req.params; // Get the id of the user to whom the logged in user wants to send a message
    const myId = req.user._id;
    const messages = await messageModel.find({
      $or: [
        { senderId: myId, receiverId: userToChatId },
        { senderId: userToChatId, receiverId: myId },
      ], // Get all messages where the senderId is the logged in user and the receiverId is the id of the user to whom the logged in user wants to send a message or vice versa and $or means either of the condition should be true
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};



module.exports.createMessage = async (req, res) => {
  try {
    const { text, image } = req.body; // Get the text and image from the request body

    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let imageUrl; // Declare a variable to store the image url afterwards

    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image); // Upload the image to cloudinary
      imageUrl = uploadResponse.secure_url; // Get the image url from the cloudinary response
    }

    // Create a new message
    const message = new messageModel({
      senderId,
      receiverId,
      text,
      image: imageUrl,
    });

    await message.save(); // Save the message to the database

    res.status(200).json({ message });
    
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
