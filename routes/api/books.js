const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/").get(booksController.searchByTitle);

module.exports = router;