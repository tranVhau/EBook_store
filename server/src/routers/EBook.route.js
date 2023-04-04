const express = require("express");
const router = express.Router();
const EBookController = require("../controllers/EBook.controller");

router.post("/", (req, res) => {
  //   if (req) {
  //     EBooks.create({
  //       name: req.name,
  //       desciption: req.desciption,
  //       source: req.source,
  //     });
  //   }
  res.status(200).json(req.body);
});

module.exports = router;
