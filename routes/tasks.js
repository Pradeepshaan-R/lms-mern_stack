import express from "express";

import { getTask, createTask, updateTask } from "../controllers/tasks.js";

const router = express.Router();

router.get("/", getTask); // VIEW
router.post("/", createTask); // CREATE
router.patch("/:id", updateTask); // UPDATE

export default router;
