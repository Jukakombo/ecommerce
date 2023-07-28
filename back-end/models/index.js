import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  productName: { type: String, required: true },
  rating: { type: Number, required: true },
  countInStock: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
});
const Products =
  mongoose.models.Products || mongoose.model("Products", productSchema);

export default Products;
