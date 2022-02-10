const path = require("path");

const express = require("express");

const router = express.Router();

// 访问：http://localhost:3000/admin/add-product测试
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views/add-product.html"));
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
