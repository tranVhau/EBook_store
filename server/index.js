const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const database = require("./src/configs/database");

// const Model = require("./src/models");
const routes = require("./src/routes");

const app = express();
dotenv.config();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

routes(app);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`app is running at http://localhost:${port}`);
});
