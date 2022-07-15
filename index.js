const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

require("./config/mongoConnection");

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server is listening on port: " + port);
});