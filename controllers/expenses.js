import mongoose from "mongoose";
import Expense from "../models/Expense.js";

export const getExpense = async (req, res) => {
  // res.send("This Works Fine!!!");
  try {
    const expenses = await Expense.find();

    res.status(200).json(expenses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createExpense = async (req, res) => {
  const expense = req.body;

  const newExpense = new Expense(expense);
  try {
    await newExpense.save();

    res.status(201).json(newExpense);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateExpense = async (req, res) => {
  const { id: _id } = req.params;
  const expense = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Expenses with this ID.");

  const updatedExpense = await Expense.findByIdAndUpdate(
    _id,
    { ...quote, _id },
    {
      new: true,
    }
  );

  res.json(updatedExpense);
};
