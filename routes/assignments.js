import express from "express";

import {
  getAssignment,
  createAssignment,
  updateAssignment,
} from "../controllers/assignments.js";

const router = express.Router();

router.get("/", getAssignment); // VIEW
router.post("/", createAssignment); // CREATE
router.patch("/:id", updateAssignment); // UPDATE

export default router;
