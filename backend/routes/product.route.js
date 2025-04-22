import express from "express"; // Importing express framework

import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js"; // Importing the getProducts controller function

const router = express.Router(); // Creating a new router object

router.get("/", getProducts); // Route to get all products

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

router.put("/:id", updateProduct);

export default router; // Exporting the router object
