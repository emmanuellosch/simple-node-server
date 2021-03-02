import express from "express";
import bodyParser from "body-parser";

import customerRoutes from "./routes/customer.routes.js";
import productRoutes from "./routes/products.routes.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(customerRoutes);
app.use(productRoutes);
app.listen(4000, () => console.log("Server started"));
