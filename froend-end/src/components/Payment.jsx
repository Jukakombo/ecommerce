import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PayPal from "./Paypal";
function Payment() {
  return (
    <div>
      <Header />
      <div className="w-4/5 m-auto py-8">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 rounded p-4">
            <h1 className="font-bold text-[#008ecc]">Product Detail:</h1>
            <div className="flex justify-between">
              <h2 className="text-lg my-4">Product Name: </h2>
              <h2 className="text-lg my-4">Iphone 14 pro Max</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="text-lg my-4">Price $: </h2>
              <h2 className="text-lg my-4 font-bold">1200</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="text-lg my-4">Name: </h2>
              <h2 className="text-lg my-4"> Ali Juma</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="text-lg my-4">Shipping Country:</h2>
              <h2 className="text-lg my-4"> Morocco</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="text-lg my-4">City: </h2>
              <h2 className="text-lg my-4"> Casablanca</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="text-lg my-4">Telephone No: </h2>
              <h2 className="text-lg my-4"> +212698487054</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="text-lg my-4">Email: </h2>
              <h2 className="text-lg my-4"> alisonMagid2016@gmail.com</h2>
            </div>
            <div className="flex justify-between">
              <h2 className="text-lg my-4">Poste No: </h2>
              <h2 className="text-lg my-4"> 32000</h2>
            </div>
          </div>
          <div className="">
            {" "}
            <h1 className="font-bold text-[#008ecc]">Payment Method:</h1>
            <PayPal />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Payment;
