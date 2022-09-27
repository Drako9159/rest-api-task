import { Router } from "express";

import {
  findAllTasks,
  createTask,
  findOneTask,
  deleteTask,
} from "../controllers/task.controller";
const router = Router();

router.get("/", findAllTasks);

router.post("/", createTask);

router.get("/:id", findOneTask);

router.delete("/:id", deleteTask);
export default router;
