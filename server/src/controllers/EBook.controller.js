const { EBooks, GenresEBooks } = require("../models");
const { upload } = require("../utils/cloudinary");
const mongoose = require("mongoose");

const uploadSingleImage = upload.single("pdfFile");

const store = async (req, res) => {
  uploadSingleImage(req, res, function (err) {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    // if everything went fine
    const ebook = new EBooks({
      name: req.body.name,
      description: req.body.description,
      source: req.file.path,
    });
    try {
      ebook.save();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }

    res.status(200).json({
      message: "upload successfully",
      ebook,
    });
  });
};

const index = async (req, res) => {
  //customize image link
  function getImgSource(pdfSource) {
    const configStr = "w_600,h_400,c_fill,pg_1,c_pad";
    const start = pdfSource.indexOf("upload/") + 7;
    // add config
    const configedIMG = pdfSource
      .slice(0, start)
      .concat(configStr, "/", pdfSource.slice(start, -4), ".png");
    return configedIMG;
  }
  // associate all genres
  await EBooks.aggregate([
    {
      $lookup: {
        from: "genresebooks",
        localField: "_id",
        foreignField: "ebook",
        as: "Ebook",
      },
    },
    {
      $lookup: {
        from: "genres",
        localField: "Ebook.genre",
        foreignField: "_id",
        as: "genres",
      },
    },
    {
      $addFields: {
        image: {
          $function: {
            body: getImgSource,
            args: ["$source"],
            lang: "js",
          },
        },
      },
    },
    {
      $project: {
        Ebook: 0,
      },
    },
  ])
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => res.status(400).json(err.message));
  // res.json(genreEbook);
};

const get = async (req, res) => {
  try {
    const ebook = await EBooks.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(req.params.id) },
      },
      {
        $lookup: {
          from: "genresebooks",
          localField: "_id",
          foreignField: "ebook",
          as: "Ebook",
        },
      },
      {
        $lookup: {
          from: "genres",
          localField: "Ebook.genre",
          foreignField: "_id",
          as: "genres",
        },
      },
      {
        $project: { Ebook: 0 },
      },
    ]);

    ebook
      ? res.status(200).json({ ebook: ebook })
      : res.status(404).json({ message: "ebook not found" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteEbook = async (req, res) => {
  try {
  } catch (error) {}
};

const update = async (req, res) => {};

module.exports = {
  store,
  get,
  index,
  deleteEbook,
  update,
};
