// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js"; // Importing the product route
dotenv.config();
const app = express();

app.use(express.json()); //allow express to parse JSON data in the request body

app.use("/api/products", productRoutes); // Mounting the product route on the /api/products path)

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on at http://localhost:5000");
});
