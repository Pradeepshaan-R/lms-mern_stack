import mongoose from "mongoose";
import Assignment from "../models/Assignment.js";

export const getAssignment = async (req, res) => {
  // res.send("This Works Fine!!!");
  try {
    const assignments = await Assignment.find();

    res.status(200).json(assignments);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createAssignment = async (req, res) => {
  const assignment = req.body;

  const newAssignment = new Assignment(assignment);
  try {
    await newAssignment.save();

    res.status(201).json(newAssignment);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateAssignment = async (req, res) => {
  const { id: _id } = req.params;
  const assignment = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Assignments with this ID.");

  const updatedAssignment = await Assignment.findByIdAndUpdate(
    _id,
    { ...assignment, _id },
    {
      new: true,
    }
  );

  res.json(updatedAssignment);
};
