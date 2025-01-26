const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const foodRoutes = require("./routes/foodRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect("mongodb+srv://lakshmivchaithanya:KHJ5oj3vnDmgJzpK@cluster0.n8wia.mongodb.net/foodapp?retryWrites=true&w=majority&appName=cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.use("/api/food", foodRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
