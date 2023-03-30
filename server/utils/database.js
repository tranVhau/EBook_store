const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const conn = mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((error) => {
    console.log(`on mongoDB connected: ${error}`);
  });

module.exports = conn;
