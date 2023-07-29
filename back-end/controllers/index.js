import mongoose from "mongoose";
import Products from "../models/index.js";

// read data from API
export const getProducts = async (req, res) => {
  const getAllProducts = await Products.find();
  try {
    res.status(200).json(getAllProducts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// creating new product
export const creatNewProduct = async (req, res) => {
  const requestInput = req.body;
  const newProduct = new Products(requestInput);
  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(209).json({ message: error.message });
  }
};

// uptodating product
export const updateProduct = async (req, res) => {
  const { id: _id } = req.params;
  const updateProduct = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No data found with such Id: ${_id}`);
  const productToBeUpdated = await Products(updateProduct, id, {
    new: true,
  });
  try {
    res.status(2009).json(productToBeUpdated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete product from database
export const deleteProduct = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send(`No data found with such Id: ${_id}`);
  await Products.findByIdAndRemove(id);
  res.send("Product successfully deleted");
};
