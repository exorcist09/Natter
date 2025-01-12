const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`Database Connected at: ${connection.connection.host}`);

  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectToDB;
