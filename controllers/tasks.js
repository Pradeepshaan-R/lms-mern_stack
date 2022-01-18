import mongoose from "mongoose";
import Task from "../models/Task.js";

export const getTask = async (req, res) => {
  // res.send("This Works Fine!!!");
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const task = req.body;

  const newTask = new Task(task);
  try {
    await newTask.save();

    res.status(201).json(newTask);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id: _id } = req.params;
  const task = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Tasks with this ID.");

  const updatedTask = await Task.findByIdAndUpdate(
    _id,
    { ...task, _id },
    {
      new: true,
    }
  );

  res.json(updatedTask);
};
