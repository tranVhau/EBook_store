const { Genres, GenresEBooks } = require("../models");

const index = async (req, res) => {
  try {
    const genres = await Genres.find();
    res.status(200).json(genres);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const store = async (req, res) => {
  const genre = await Genres.findOne({ name: req.body.name });
  if (genre) {
    return res
      .status(409)
      .json({ message: `'${req.body.name}' is already exist` });
  }

  const newGenre = new Genres({
    name: req.body.name,
  });

  try {
    await newGenre.save();
    res.status(200).json({ newGenre });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const eBookGenres = async (req, res) => {
  const { bookID, genreID } = req.body;
  const newEbookGenre = new GenresEBooks({
    ebook: bookID,
    genre: genreID,
  });

  const isExist = await GenresEBooks.findOne({ ebook: bookID, genre: genreID });
  try {
    if (!isExist) {
      await newEbookGenre.save();
      return res
        .status(200)
        .json({ message: "new ebook genre has been added" });
    } else {
      return res.status(409).json({ message: "already existed" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  index,
  store,
  eBookGenres,
};
