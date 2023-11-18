var express = require("express");
var router = express.Router();

/* GET 게시판 page. */
router.get("/", function (req, res, next) {
  res.render("posts", { title: "김근미레스", name: "홍길동" });
});

module.exports = router;
