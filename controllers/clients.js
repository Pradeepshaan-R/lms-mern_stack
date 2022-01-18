import mongoose from "mongoose";
import Client from "../models/Client.js";

export const getClient = async (req, res) => {
  // res.send("This Works Fine!!!");
  try {
    const clients = await Client.find();

    res.status(200).json(clients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createClient = async (req, res) => {
  const client = req.body;

  const newClient = new Client(client);
  try {
    await newClient.save();

    res.status(201).json(newClient);
    console.log("success");
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};

export const updateClient = async (req, res) => {
  const { id: _id } = req.params;
  const client = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Clients with this ID.");

  const updatedClient = await Client.findByIdAndUpdate(
    _id,
    { ...client, _id },
    {
      new: true,
    }
  );

  res.json(updatedClient);
};
