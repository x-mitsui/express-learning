const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adiminRoutes = require("../routes/admin");

const shopRoutes = require("../routes/shop");

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); //yarn add body-parser

app.use("/admin", adiminRoutes); //测试：http://localhost:3000/admin/add-product

app.use(shopRoutes);

// 处理404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "..", "views", "404.html"));
});

app.listen("3000");
