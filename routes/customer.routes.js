import express from "express";
import {
  postCustomer,
  getCustomers,
} from "../controller/customer.controller.js";

const router = express.Router();

router.post("/customer", postCustomer);

router.get("/customer", getCustomers);

export default router;
