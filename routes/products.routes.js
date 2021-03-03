import express from "express";
import {
  postProduct,
  getProducts,
  findProduct,
} from "../controller/products.controller.js";

const router = express.Router();

router.post("/products", postProduct);
router.get("/products/:productId", findProduct);
router.get("/products", getProducts);

export default router;
