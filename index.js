require("dotenv").config(); // loads environment variables from .env file into process.env
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const todoRoutes = require("./routes/movieRoutes");
const mongoose = require("mongoose");

const MONGODB_URL =
  process.env.MONGODB_URL || "mongodb://localhost:27017/todoDB"; // MongoDB connection string

app.use(express.json()); // middleware to parse JSON requests

mongoose
  .connect(MONGODB_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/movies", movieRoutes);

// POST request - used for sending information and when you want to create a new resource

// configuring app to listen on a specific port (accepts requests)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
