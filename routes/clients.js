import express from "express";

import {
  getClient,
  createClient,
  updateClient,
} from "../controllers/clients.js";

const router = express.Router();

router.get("/", getClient); // VIEW
router.post("/", createClient); // CREATE
router.patch("/:id", updateClient); // UPDATE

export default router;
