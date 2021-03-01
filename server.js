const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const productController = require("./controller/products.controller");

app.post("/products", productController.postProduct);

app.get("/", productController.productForm);

app.listen(4000, () => console.log("Server started"));
