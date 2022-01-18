import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    client_id: String,
    assignment_id: String,
    type: String,
    status: String,
    task_process: String,
    due_date: Date,
    note: String,
    amount: String,
    deposit: String,
    total_fee_description: String,
    document: String,
    keywords: String,
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

const Task = mongoose.model("Task", taskSchema);

export default Task;