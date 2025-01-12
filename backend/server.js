const http = require("http");
const dotenv = require("dotenv");
require("dotenv").config();

const app = require("./app");
const port = process.env.PORT || 5002;
const server = http.createServer(app);


server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
