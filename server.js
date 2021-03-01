const express = require("express");
const bodyParser = require("body-parser");
const customerController = require("./controller/customer.controller");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post("/", customerController.customerForm);
app.get("/", customerController.customerForm);

app.listen(4000, () => console.log("Server started"));
