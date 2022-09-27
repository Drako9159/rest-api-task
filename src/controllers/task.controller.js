import Task from "../models/Task";

export const findAllTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};
export const createTask = async (req, res) => {
  const newTask = new Task({
    title: req.body.title,
    description: req.body.description,
  });
  const taskSaved = await newTask.save(); // save to database
  res.json(taskSaved);
};
export const findOneTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
};
export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
};
