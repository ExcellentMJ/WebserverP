var express = require("express");
var router = express.Router();

/* GET Books page. */
router.get("/", function (req, res, next) {
  res.render("books", { title: "김근미레스", name: "홍길동" });
});

module.exports = router;
