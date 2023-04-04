const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const app = express();
const db = require("./src/utils/database");
const db2 = require("./src/models");
const eBookRoute = require("./src/routers/EBook.route");

dotenv.config();
app.use(bodyParser.json());
const port = process.env.PORT;

app.use("/api/ebook", eBookRoute);

app.listen(port, () => {
  console.log(`app is running at http://localhost:${port}`);
});
