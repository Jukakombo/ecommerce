import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { categories } from "./lacalDatabase";
function Categories() {
  return (
    <div className="w-4/5 m-auto">
      <div className="flex items-center justify-between pb-4">
        <h1 className=" ">
          Shop from <strong className="text-blue-500">top Categories</strong>
        </h1>
        <Link to="/view-all" className="flex items-center">
          View All <MdKeyboardArrowRight color="blue" />
        </Link>
      </div>
      <div className="">
        <div className="border_blue border-b-2 border-blue-500 " />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-7 gap-4 border__top  ">
        {categories.map((x) => (
          <div key={x._id} className="categories py-8">
            <div className="bg-gray-300 p-4 rounded-full w-[90px] category ">
              <img
                src={x.image}
                className="w-[60px] h-[60px] rounded-full"
                alt="categories"
              />
            </div>
            <h1>{x.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
