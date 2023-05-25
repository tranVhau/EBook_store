const { Authors, Publishers } = require("../models");

const authorIndexes = async (req, res) => {
  const authors = await Authors.find();
  res.status(200).json(authors);
};

const publisherIndexes = async (req, res) => {
  const publishers = await Publishers.find();
  res.status(200).json({ publishers: publishers });
};

const storeAuthor = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(200).json({ message: "name not filled" });
  }
  const isExist = await Authors.findOne({ name: name });
  if (!isExist) {
    try {
      await Authors.create({ name: name });
      res.status(200).json({ message: "author inserted successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(400).json({ message: "author name has already taken" });
  }
};

const storePublisher = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(200).json({ message: "name not filled" });
  }
  const isExist = await Publishers.findOne({ name: name });
  if (!isExist) {
    try {
      await Publishers.create({ name: name });
      res.status(200).json({ message: "publisher inserted successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else {
    res.status(400).json({ message: "publisher name has already taken" });
  }
};

module.exports = {
  authorIndexes,
  publisherIndexes,
  storeAuthor,
  storePublisher,
};
