const express = require("express");
const router = express.Router();
const messageController = require("../controllers/message.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get(
  "/users",
  authMiddleware.authUser,
  messageController.getUsersForSideBar
);

router.get("/:id", authMiddleware.authUser, messageController.getMessages); //:id is the id of the user to whom the logged in user wants to send a message meaning : over here means its a dynamic parameter

router.post(
  "/send/:id",
  authMiddleware.authUser,
  messageController.createMessage
);

module.exports = router;
