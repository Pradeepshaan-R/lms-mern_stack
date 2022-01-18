import mongoose from "mongoose";

const expenseSchema = mongoose.Schema({
  client_id: String,
  type: String,
  category_internal: String,
  category_external: String,
  date: String,
  note: String,
  amount: String,
  description: String,
  document: String,
  keywords: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense;
