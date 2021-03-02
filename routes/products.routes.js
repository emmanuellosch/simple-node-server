import express from "express";
import { postProduct, productForm } from "../controller/products.controller.js";

const router = express.Router();

router.post("/products", postProduct);

router.get("/", productForm);

export default router;
