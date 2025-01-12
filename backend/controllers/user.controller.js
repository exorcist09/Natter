const userModel = require("../models/user.model");
const cloudinary = require("../lib/cloudinary");

// User SignUp
module.exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }

    const userAlreadyExist = await userModel.findOne({ email });
    if (userAlreadyExist) {
      return res.status(400).json({ message: "User already exist" });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });

    if (user) {
      const token = await user.generateAuthToken(res);
      await user.save();
      res.status(201).json({ token, user });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//UserLogin
module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    } else {
      res.status(200).json({ user });
    }
    const comparePassword = await user.comparePassword(password);

    if (!comparePassword) {
      return res.status(401).json({ message: "Invalid Credentials" });
    } else {
      const token = await user.generateAuthToken(res);
      res.status(200).json({ token, user });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// userLogout
module.exports.logout = async (req, res) => {
  try {
    // the second input after jwt is token just make it empty and the user will be removed
    // res.cookie("jwt", " ", { maxAge: 0 });
    res.clearCookie("jwt"); // this will clear the cookie the above one also does the same
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// update UserProfile

module.exports.updateProfile = async (req, res) => {
  try {
    const { profilePic } = req.body;
    const userId = req.user._id;

    if (!profilePic) {
      return res
        .status(400)
        .json({ message: "Please provide profile picture" });
    }
    const uploadResponse = await cloudinary.uploader.upload(profilePic);

    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { profilePic: uploadResponse.secure_url },
      { new: true }
    );
    res.status(200).json({ updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};


// check Authenatication of User

module.exports.checkAuth = async (req, res, next) => {
  try {
    const user = req.user;
    res.status(200).json({ user });
    return next();
  } catch (error) {
    console.log("Error in checkAuth Controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
