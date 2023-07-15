import React from "react";
import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import { phones } from "./lacalDatabase";
import Footer from "./Footer";
function ProductDetail() {
  const { id } = useParams();
  const product = phones.find((x) => x._id === id);

  return (
    <div>
      <Header />
      <div className="w-4/5 m-auto grid sm:grid-cols-1 md:grid-cols-2 my-8">
        <div className="">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="">
          <h1 className="py-8 font-bold text-[#008ECC]">Product Detail</h1>
          <div className="">
            <h1>
              <strong>Product Name:</strong>
              {product.name}
            </h1>
            <h1 className="py-4">
              <strong>Description:</strong> {product.description}
            </h1>
            <h1 className="py-4">
              <strong>Price:</strong>$ {product.price}
            </h1>
            <h1 className="py-4">
              <strong>Count In Stock:</strong> {product.stock}
            </h1>
          </div>
          <Link to="/shipping">
            <div className="">
              <button className="bg-[#008ECC] p-2 my-8 rounded text-white">
                Buy Now
              </button>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetail;
