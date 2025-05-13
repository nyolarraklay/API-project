// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import path from "path"; // Importing the path module to handle file paths

import productRoutes from "./routes/product.route.js"; // Importing the product route
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000; // Set the port to the value in the .env file or default to 5000
const __dirname = path.resolve(); // Get the current directory name
// Middleware to serve static files from the frontend build directory

app.use(express.json()); //allow express to parse JSON data in the request body

app.use("/api/products", productRoutes); // Mounting the product route on the /api/products path)

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist"))); // Serve static files from the frontend build directory

  app.get("/{*any}", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html")); // Send the index.html file for any other route
  });
}

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on at http://localhost:" + PORT);
});
