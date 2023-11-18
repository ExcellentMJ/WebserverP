var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "도서검색", pageName: "books/search.ejs" });
});
router.get("/cart", function (req, res, next) {
  res.render("index", { title: "장바구니", pageName: "books/cart.ejs" });
});
module.exports = router;
