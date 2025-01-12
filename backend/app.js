const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const messageRoutes = require("./routes/message.routes");
const connectToDB = require("./database/db");

connectToDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json()); //helps to get the data from the body of the request

app.use(cookieParser()); //to get the cookie from the request

app.get("/", (req, res) => {
  res.send("Hello from Backend");
});

app.use("/user", userRoutes);
app.use("/message", messageRoutes);

module.exports = app;
