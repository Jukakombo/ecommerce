import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdCall } from "react-icons/md";
import { BsApple } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-[#008ECC] py-8 relative overflow-hidden">
      <div className="w-4/5 m-auto grid sm:grid-cols-1 md:grid-cols-3 gap-4">
        <div className="">
          <h1 className="font-bold text-white text-xl">AliExpress</h1>
          <h2 className=" font-bold text-white py-8">Contact Us</h2>

          <div className="flex items-center text-white">
            <div className="mr-4">
              <BsWhatsapp size={25} />
            </div>
            <div className="">
              <h3>WhatsApp</h3>
              <p>+212698487054</p>
            </div>
          </div>
          <div className="my-8 flex items-center text-white">
            <div className="mr-4">
              <MdCall size={25} />
            </div>
            <div className="">
              <h3>Call Us</h3>
              <p>+212698487054</p>
            </div>
          </div>
          {/* download app */}
          <h1 className="text-white font-bold text-xl my-4">Download App</h1>
          <div className="flex items-center">
            <div className="bg-black p-2 rounded text-white mr-4 flex items-center">
              <BsApple size={25} />
              <div className="ml-2">
                <p>Download on</p>
                <h1 className="font-bold  text-white">App Store</h1>
              </div>
            </div>
            <div className="bg-black p-2 rounded text-white   flex items-center">
              <FaGooglePlay size={25} />
              <div className="ml-2">
                <p>Get it from</p>{" "}
                <h1 className="font-bold   text-white">GooglePlay</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="text-white border-b-2 border-white pb-4">
            Most Popular Categories
          </h2>
          <ul>
            <li className="my-4 text-white">Staples</li>
            <li className="my-4 text-white">Beverages</li>
            <li className="my-4 text-white">Personal Care</li>
            <li className="my-4 text-white">Home Care</li>
            <li className="my-4 text-white">Baby Care</li>
            <li className="my-4 text-white">Vegetables & Fruits</li>
            <li className="my-4 text-white">Snacks & Foods</li>
            <li className="my-4 text-white">Diary Backery</li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-white border-b-2 pb-4 border-white">
            Customer Services
          </h2>
          <ul>
            <li className="my-4 text-white">About Us</li>
            <li className="my-4 text-white">Terms & Conditions</li>
            <li className="my-4 text-white">FAQ</li>
            <li className="my-4 text-white">Privacy Policy</li>
            <li className="my-4 text-white">E-Waste Policy</li>
            <li className="my-4 text-white">Cancellation & Return Policy</li>
          </ul>
        </div>
      </div>
      <div className="absolute  top-0  right-0 md:top-[-50px] md:right-[-50px]">
        <div className="border-[1px] border-[#05ABF3] rounded-full p-2">
          <div className="bg-[#05ABF3] p-16 md:p-32 rounded-full" />
        </div>
      </div>
      {/* copyright */}
      <div className="w-4/5 m-auto mt-8 text-white text-center">
        <div className="border-t-[1px] border-[#05ABF3] pb-2" />
        <p>
          &copy; {new Date().getFullYear()} All rights reserved.Reliance Ltd
        </p>
      </div>
    </div>
  );
}

export default Footer;
