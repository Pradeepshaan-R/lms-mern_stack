import mongoose from "mongoose";
import Quote from "../models/Quote.js";

export const getQuote = async (req, res) => {
  // res.send("This Works Fine!!!");
  try {
    const quotes = await Quote.find();

    res.status(200).json(quotes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createQuote = async (req, res) => {
  const quote = req.body;

  const newQuote = new Quote(quote);
  try {
    await newQuote.save();

    res.status(201).json(newQuote);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateQuote = async (req, res) => {
  const { id: _id } = req.params;
  const quote = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Quotes with this ID.");

  const updatedQuote = await Quote.findByIdAndUpdate(
    _id,
    { ...quote, _id },
    {
      new: true,
    }
  );

  res.json(updatedQuote);
};
