import { Router } from "express";

import {
  findAllTasks,
  createTask,
  findOneTask,
  deleteTask,
  findAllDoneTasks,
  updateTask,
} from "../controllers/task.controller";
const router = Router();

router.get("/", findAllTasks);

router.post("/", createTask);

router.get("/done", findAllDoneTasks);

router.get("/:id", findOneTask);

router.delete("/:id", deleteTask);

router.put("/:id", updateTask);

export default router;
