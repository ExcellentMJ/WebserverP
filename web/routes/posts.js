var express = require("express");
var router = express.Router();

/* 게시판 */
router.get("/", function (req, res, next) {
  res.render("index", { title: "게시판", pageName: "posts/list.ejs" });
});

/* 글쓰기 */
router.get("/insert", function (req, res, next) {
  res.render("index", { title: "글쓰기", pageName: "posts/insert.ejs" });
});

/* 읽기 */
router.get("/read", function (req, res, next) {
  const id = req.query.id;

  res.render("index", {
    title: "게시글정보",
    pageName: "posts/read.ejs",
    id: id,
  });
});

/* 수정하기 */
router.get("/update", function (req, res, next) {
  const id = req.query.id;

  res.render("index", {
    title: "게시글수정",
    pageName: "posts/update.ejs",
    id: id,
  });
});
module.exports = router;
