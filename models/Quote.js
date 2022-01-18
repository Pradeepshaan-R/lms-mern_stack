import mongoose from "mongoose";

const quoteSchema = mongoose.Schema({
  client_id: String,
  category: String,
  type: String,
  type: {
    type: String,
    default: "Quoted",
  },
  due_date: String,
  amount: String,
  deposit: String,
  total_fee_description: String,
  document: String,
  keywords: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Quote = mongoose.model("Quote", quoteSchema);

export default Quote;
