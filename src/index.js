const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adiminRoutesBoj = require("../routes/admin");

const shopRoutes = require("../routes/shop");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false })); //yarn add body-parser

app.use("/admin", adiminRoutesBoj.routers); //测试：http://localhost:3000/admin/add-product

app.use(shopRoutes);
app.use(express.static(path.join(__dirname, "..", "public")));
// 处理404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "..", "views", "404.html"));
});

app.listen("3000");
