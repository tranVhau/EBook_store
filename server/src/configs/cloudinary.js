const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

const dotenv = require("dotenv");
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// filter file(only acept pdf file)

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    const error = new Error("only pdf file please!!!");
    cb(error, false);
  }
};

// for pdf files
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "ebook_web/ebooks", // directory of saving file on cloud
  },
});

const upload = multer({ storage: storage, fileFilter: fileFilter }); //choose storage option for third-party (multer-storage-cloudinary)

module.exports = {
  upload,
  cloudinary,
};
