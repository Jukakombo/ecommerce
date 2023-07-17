import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
function Subheader() {
  return (
    <div className="w-4/5 m-auto md:flex justify-between items-center my-2">
      <div className="flex items-center">
        <BiMenuAltLeft size={25} className="text-[#008ECC]" />
        <Link to="/">
          <span className="text-[#008ECC] p-4">ALLiExpress</span>
        </Link>
      </div>
      <div className="bg-[#F3F9FB] flex items-center p-4 rounded flex-1 mx-4 ">
        <FiSearch className="text-[#008ECC] mr-2 cursor-pointer" size={25} />
        <form className="flex">
          <input
            type="text"
            className="outline-none searchBar"
            name=""
            placeholder="Search products by name, id, ..."
          />
        </form>
        <TfiMenuAlt
          className="text-[#008ECC] ml-2 cursor-pointer flex-end"
          size={25}
        />
      </div>
      <div className="">
        <div className="flex items-center">
          <Link to="/login">
            <span className=" ">SignIn/SignUp</span>
          </Link>
          <div className="flex items-center mx-2 border-gray-400 border-l-2 pl-2">
            <BsCart2 size={20} color="#008ECC" />
            <span>Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subheader;
