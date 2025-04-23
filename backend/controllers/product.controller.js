import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}); // Fetch all products from the database
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error in fetching products:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body; // user will send this data in the request body

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in creating product:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params; // Extract the product ID from the request parameters

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res
    .status(400)  
    .json({ success: false, message: "Invalid product ID" });
  }
  // Check if the ID is valid
  // If the ID is not valid, return a 400 Bad Request response
  // with a message indicating that the ID is invalid.
  // If the ID is valid, proceed to delete the product from the database
  // using the findByIdAndDelete method of the Product model.
  // If the product is not found, return a 404 Not Found response
  // with a message indicating that the product was not found.  


  try {
    const deletedProduct = await Product.findByIdAndDelete(id); // Find and delete the product by ID
    res.status(200).json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error in deleting product:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params; // Extract the product ID from the request parameters
  const product = req.body; // user will send this data in the request body

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid product ID" });
  } // Check if the ID is valid

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    }); // Find and update the product by ID
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error("Error in updating product:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
