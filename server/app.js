const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
const db = require("./utils/database");

dotenv.config();
app.use(bodyParser.json());
const port = process.env.PORT;
//connect DB

// db.then((res) => console.log("MongoDB connected")).catch((error) =>
//   console.log(error)
// );

app.listen(port, () => {
  console.log(`app is running ${port}`);
});
