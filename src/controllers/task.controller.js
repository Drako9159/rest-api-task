import Task from "../models/Task";
import { getPagination } from "../libs/getPagination";

export const findAllTasks = async (req, res) => {
  try {
    const { size, page, title } = req.query;
    const condition = title
      ? { title: { $regex: new RegExp(title), $options: "i" } }
      : {};
    const { limit, offset } = getPagination(page, size);
    const data = await Task.paginate(condition, { offset, limit });
    res.json({
      totalItems: data.totalDocs,
      tasks: data.docs,
      totalPages: data.totalPages,
      currentPage: data.page - 1,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong retrieving the tasks",
    });
  }
};
export const createTask = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({
      message: "Title can not be empty",
    });
  }
  try {
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
      done: req.body.done ? req.body.done : false,
    });
    const taskSaved = await newTask.save(); // save to database
    res.json(taskSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong creating the task",
    });
  }
};
export const findOneTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong retrieving the task",
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong deleting the task",
    });
  }
};
export const findAllDoneTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ done: true });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong retrieving the tasks",
    });
  }
};
export const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Task updated" });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something goes wrong updating the task",
    });
  }
};
