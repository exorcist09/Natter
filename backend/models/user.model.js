const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "Password must be at least 6 characters long"],
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true } //this will automatically add the created at and updated at fields
);

// generating a hash password from the user password
userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

// generating a token for the user
userSchema.methods.generateAuthToken = async function (res) {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  // cookie generation
  res.cookie("jwt", token, {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true, //prevents from cors attacks
    sameSite: "strict", //prevents from cors attacks
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};

// comparing the user password with the hashed password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
  // this.password is the hashed password and password is the password that user enters
};



const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
