const path = require("path");

const express = require("express");

const router = express.Router();
const products = [];

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});

router.post("/product", (req, res, next) => {
  console.log(req.body.title);
  products.push(req.body.title);
  res.redirect("/");
});

module.exports.routers = router;
module.exports.products = products;
