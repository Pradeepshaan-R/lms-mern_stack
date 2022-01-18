import express from "express";

import { getQuote, createQuote, updateQuote } from "../controllers/quotes.js";

const router = express.Router();

router.get("/", getQuote); // VIEW
router.post("/", createQuote); // CREATE
router.patch("/:id", updateQuote); // UPDATE

export default router;
