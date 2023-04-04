const { EBook } = require("../models");

const EBookController = {
  addEBook: (req, res) => {
    // if (req) {
    //   const newEBook = EBooks.create({
    //     name: req.name,
    //     desciption: req.desciption,
    //     source: req.source,
    //   });
    // }
    res.status(200).json(req.body);
  },
};

module.export = EBookController;
