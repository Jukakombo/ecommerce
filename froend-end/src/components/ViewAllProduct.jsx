import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cards from "./Cards";
function ViewAllProduct() {
  return (
    <div>
      <Header />
      <div className="w-4/5 m-auto my-8">
        <div className="">
          <form className="flex items-center bg-gray-50 rounded p-2">
            <input
              type="text"
              className="flex-1 p-2 outline-none"
              placeholder="Search Products by Name..."
              onChange={(e) => {}}
            />
            <button className="ml-4 bg-[#008Ecc] text-white p-2 font-bold rounded">
              Search
            </button>
          </form>
          {/* products cards will be displayed here ..... */}
          <div className="my-4">
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ViewAllProduct;
