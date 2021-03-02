import express from "express";
import {
  postCustomer,
  customerForm,
} from "../controller/customer.controller.js";

const router = express.Router();

router.post("/customer", postCustomer);

router.get("/", customerForm);

export default router;
