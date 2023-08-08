const { EBooks, GenresEBooks } = require("../models");
const { upload } = require("../configs/cloudinary");
const { getImgSource } = require("../utils/ebooks.util");
const mongoose = require("mongoose");
const uploadSingleImage = upload.single("pdfFile");

const store = async (req, res) => {
  uploadSingleImage(req, res, async function (err) {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    // if everything fined
    try {
      const ebook = new EBooks({
        name: req.body.name,
        description: req.body.description,
        source: req.file.path,
        discount: req.body.discount,
      });
      await ebook.save();
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
  let genres = req.query.genres || null;
  const author = req.query.author || null;
  const page = req.query.page > 0 ? req.query.page : 1;
  const keyword = req.query.keyword || null;
  const isASC = req.query.sort == "asc" ? true : false;
  const discount = req.query.discount ? true : false;
  const limit = Number(req.query.limit) || 8;

  try {
    //author pipeline:
    const authorPipeline = author && {
      author: author,
    };

    // genres filter

    if (!Array.isArray(genres) && genres) {
      genres = [genres];
    }
    const genrePipeline = genres && {
      genres: {
        $all: genres,
      },
    };

    const sortPineline = discount
      ? {
          $sort: { discount: -1 },
        }
      : {
          $sort: { price: isASC ? 1 : -1 },
        };

    // pipeline.push(sortPineline);

    //pipeline aggregate
    const pipeline = [
      {
        $lookup: {
          from: "authors",
          localField: "author",
          foreignField: "_id",
          as: "author",
        },
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
        $unwind: "$author",
      },
      {
        $project: {
          name: 1,
          price: {
            $toDouble: "$price",
          },
          description: 1,
          image: 1,
          source: 1,
          discount: 1,
          author: "$author.name",
          genres: "$genres.name",
          created_at: 1,
          updated_at: 1,
        },
      },

      {
        $match: {
          ...genrePipeline,
          ...authorPipeline,
        },
      },
      {
        ...sortPineline,
      },
      {
        $facet: {
          pagination: [{ $count: "total" }],
          data: [{ $skip: (page - 1) * limit }, { $limit: limit }],
        },
      },
    ];

    // search filter
    const searchPineline = {
      $match: {
        $text: { $search: keyword },
      },
    };
    if (keyword) {
      pipeline.unshift(searchPineline);
    }

    // console.log(pipeline.$match.genres);
    // associate all genres
    await EBooks.aggregate(pipeline)
      .then((result) => {
        // const totalPage = result.length;

        if (result[0].data.length > 0) {
          result[0].pagination[0].total = Math.ceil(
            result[0].pagination[0].total / limit
          );

          result[0].pagination[0].page = Number(page);
          result[0].pagination = result[0].pagination[0];
        }
        res.status(200).json(...result);
      })
      .catch((err) => res.status(400).json(err.message));
  } catch (error) {
    res.status(400).json(err.message);
  }
};

const get = async (req, res) => {
  try {
    const ebook = await EBooks.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(req.params.id) },
      },
      {
        $lookup: {
          from: "authors",
          localField: "author",
          foreignField: "_id",
          as: "author",
        },
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
        $unwind: "$author",
      },

      {
        $project: {
          name: 1,
          price: {
            $toDouble: "$price",
          },
          discount: 1,
          description: 1,
          source: 1,
          image: 1,
          author: "$author.name",
          genres: 1,
          created_at: 1,
          updated_at: 1,
        },
      },
    ]);

    ebook
      ? res.status(200).json({ ebook: ebook[0] })
      : res.status(404).json({ message: "ebook not found" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteEbook = async (req, res) => {
  try {
    const id = "6432cbdc592977ac80e62381";
    const prices = 20;
    // const ebook = await EBooks.findByIdAndUpdate(id, { price: prices });
    const ebooks = await EBooks.find({ price: null });

    ebooks.forEach(async (ebook) => {
      ebook.price = 20.99;
      await ebook.save();
    });
    res.status(200).json(ebooks);
  } catch (error) {
    res.status(200).json(error);
  }
};

const update = async (req, res) => {};

module.exports = {
  store,
  get,
  index,
  deleteEbook,
  update,
};
