const express = require("express");
const router = express.Router();
const EBookController = require("../controllers/EBook.controller");
const GenreController = require("../controllers/Genre.controller");
const AuthorPublisherController = require("../controllers/AuthorPublisher.controller");

const middleware = require("../controllers/Middleware.controller");

//FOR EBOOKS
router.get("/ebook/:id", EBookController.get);
// router.get("/ebooks", middleware.verifyToken, EBookController.index);
router.get("/ebooks", EBookController.index);
router.post("/ebook", EBookController.store);
router.delete("/ebookdel", EBookController.deleteEbook);

//FOR GENRES
router.get("/genres", GenreController.index);
router.post("/genre", GenreController.store);
router.post("/ebook-genre", GenreController.eBookGenres);

//FOR AUTHOR&PUBLISHER
router.get("/authors", AuthorPublisherController.authorIndexes);
router.post("/author", AuthorPublisherController.storeAuthor);

router.get("/publishers", AuthorPublisherController.publisherIndexes);
router.post("/publisher", AuthorPublisherController.storePublisher);

module.exports = router;
