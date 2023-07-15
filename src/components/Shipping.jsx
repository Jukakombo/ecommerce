import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Shipping() {
  const navigate = useNavigate();
  const [move, setMove] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMove(true);
    setTimeout(() => {
      setMove(false);
      navigate("/payment");
    }, 5000);
  };
  return (
    <div>
      <Header />
      <div className="py-8 w-4/5 m-auto">
        <h1 className="text-center font-bold text-xl text-[#008ECC] py-8">
          Shipping Information
        </h1>
        <form className="bg-gray-50 p-4 rounded" onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label htmlFor="firstName " className="text-lg">
                First Name
              </label>
              <input
                id="firstName"
                className="outline-none p-2 rounded"
                type="text"
                placeholder="Enter your First Name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName " className="text-lg">
                Last Name
              </label>
              <input
                id="lastName"
                className="outline-none p-2 rounded"
                type="text"
                placeholder="Enter your Last Name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email " className="text-lg">
                Email
              </label>
              <input
                id="email"
                className="outline-none p-2 rounded"
                type="text"
                placeholder="Enter your Email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone " className="text-lg">
                Phone Number
              </label>
              <input
                id="phone"
                className="outline-none p-2 rounded"
                type="text"
                placeholder="Enter your Phone Number"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="product " className="text-lg">
                Product Name
              </label>
              <input
                id="product"
                className="outline-none p-2 rounded"
                type="text"
                placeholder="Enter your Product Name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="price " className="text-lg">
                Price
              </label>
              <input
                id="price"
                className="outline-none p-2 rounded"
                type="text"
                placeholder="Enter your price  "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="address " className="text-lg">
                Address
              </label>
              <input
                id="address"
                className="outline-none p-2 rounded"
                type="text"
                placeholder="Enter your address  "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="country code " className="text-lg">
                Country Code
              </label>
              <input
                id="country code"
                className="outline-none p-2 rounded"
                type="text"
                placeholder="Enter your country code number "
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Post Number " className="text-lg">
                Post Number
              </label>
              <input
                id="Post Number"
                className="outline-none p-2 rounded"
                type="text"
                placeholder="Enter your Post Number  "
              />
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#008Ecc] p-2 rounded text-white my-4 mt-8 font-bold"
            >
              {move ? "Loading..." : "Proceed to the payment"}
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Shipping;
