var express = require("express");
var router = express.Router();

//루트 페이지.
// '/'를 받으면, title과 pageName에 각 홈페이지, home.ejs를 보내줌
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "홈페이지", pageName: "home.ejs" });
});

module.exports = router;
