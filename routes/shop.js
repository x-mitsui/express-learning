const path = require("path");

const express = require("express");

const router = express.Router();
const adiminRoutesBoj = require("../routes/admin");

router.get("/", (req, res, next) => {
  const products = adiminRoutesBoj.products;
  // 渲染模板使用render
  res.render("shop", {
    prods: products,
    pageTitle: "我的商店",
    path: "/",
  });
});

module.exports = router;
