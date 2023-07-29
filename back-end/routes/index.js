import express from "express";
import {
  creatNewProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/index.js";
const productRoutes = express.Router();
productRoutes.get("/", getProducts);
productRoutes.post("/", creatNewProduct);
productRoutes.patch("/:id", updateProduct);
productRoutes.delete("/:id", deleteProduct);

export default productRoutes;
