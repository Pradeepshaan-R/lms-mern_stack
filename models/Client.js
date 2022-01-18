import mongoose from "mongoose";

const clientSchema = mongoose.Schema({
  id: String,
  name: String,
  email: String,
  pv: String,
  phone: String,
  tax: String,
  address: String,
  city: String,
  country: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Client = mongoose.model("Client", clientSchema);

export default Client;
