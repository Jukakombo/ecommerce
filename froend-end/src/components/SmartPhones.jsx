import React from "react";
import Cards from "./Cards";
function SmartPhones() {
  return (
    <div className="w-4/5 m-auto">
      <h1 className="text-gray-600 text-2xl py-8">
        Grab the best deal on{" "}
        <span className="text-[#008ECC]">smartPhones</span>
      </h1>
      <div className="">
        <Cards />
      </div>
    </div>
  );
}

export default SmartPhones;
