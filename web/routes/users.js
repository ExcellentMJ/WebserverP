var express = require("express");
var router = express.Router();

/* 유저 관련 */
router.get("/login", function (req, res, next) {
  res.render("index", { title: "로그인", pageName: "users/login.ejs" });
});
/* 유저 관련 */
router.get("/join", function (req, res, next) {
  res.render("index", { title: "회원가입", pageName: "users/join.ejs" });
});
/* 유저 관련 */
router.get("/mypage", function (req, res, next) {
  res.render("index", { title: "마이페이지", pageName: "users/mypage.ejs" });
});
module.exports = router;
