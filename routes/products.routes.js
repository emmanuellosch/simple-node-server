import express from "express";
import { postProduct, getProducts } from "../controller/products.controller.js";

const router = express.Router();

router.post("/products", postProduct);

router.get("/products", getProducts);

export default router;
