const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

module.exports.authUser = async (req, res, next) => {
  // Get token from header query, x-auth-token or cookie
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }

    const user = await userModel.findById(decoded._id).select("-password"); // Get user details except password but if it was +password, it would get the password too but if you don't mention anything, it will get all the details inlcuding password

    if (!user) {
      return res.status(401).json({ message: "Unauthorized - User not found" });
    }
    req.user = user;

    return next(); // Go to the next middleware or controller
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
