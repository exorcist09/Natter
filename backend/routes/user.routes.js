const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/signup", userController.signup);

router.post("/login", userController.login);

router.post("/logout", userController.logout);

router.put(
  "/update-profile",
  authMiddleware.authUser,
  userController.updateProfile
);

router.get("/check", authMiddleware.authUser, userController.checkAuth);

module.exports = router;
