import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
// import port = 8080;

const app = express();

// BASIC CONFIG
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(express.json());

// ROUTER IMPORTS
import taskRoutes from "./routes/tasks.js";
import assignmentRoutes from "./routes/assignments.js";
import clientRoutes from "./routes/clients.js";
import quoteRoutes from "./routes/quotes.js";
import expenseRoutes from "./routes/expenses.js";

// EXPRESS MIDDLEWARE
app.use("/tasks", taskRoutes);
app.use("/assignments", assignmentRoutes);
app.use("/clients", clientRoutes);
app.use("/quotes", quoteRoutes);
app.use("/expenses", expenseRoutes);

// CONNECT TO MONGOOSE
// mongoose.connect("mongodb+srv://Pradeepshaan:Malisha1998@cluster0.h0uxn.mongodb.net/lms_v3");

// DATABASE CONNECTION
const CONNECTION_URL =
  "mongodb+srv://Pradeepshaan:Malisha1998@cluster0.h0uxn.mongodb.net/lms_v3";
const PORT = process.env.PORT || 8080;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`The Express Server is running on Port: ${PORT}`)
    )
  )
  .catch((error) => console.log(error.message));

// mongoose.set("useFindAndModify", false);
