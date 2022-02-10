const express = require("express");

const router = express.Router();

let addProductPage = `
<body>
  <form action='/product' method='POST'>
    <input type='text' name='product'/>
    <button type='submit'>添加产品</button>
  </form>
</body>
 `;

router.get("/add-product", (req, res, next) => {
  res.send(addProductPage); // 返回html相对于http res.write写法清爽很多
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
