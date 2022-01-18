import mongoose from "mongoose";

const assignmentSchema = mongoose.Schema({
  id: String,
  serial: String,
  type: String,
  status: String,
  client_id: String,
  due_date: Date,
  note: String,
  amount: String,
  deposit: String,
  total_fee_description: String,
  document: String,
  keywords: String,
  quotation_id: String,
  user_id: String,
  tenant_id: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Assignment = mongoose.model("Assignment", assignmentSchema);

export default Assignment;
