import express from "express";

import {
  getExpense,
  createExpense,
  updateExpense,
} from "../controllers/expenses.js";

const router = express.Router();

router.get("/", getExpense); // VIEW
router.post("/", createExpense); // CREATE
router.patch("/:id", updateExpense); // UPDATE

export default router;
