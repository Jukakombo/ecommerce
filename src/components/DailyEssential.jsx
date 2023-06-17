import React from "react";
import { DailyEssentials } from "./lacalDatabase";

function DailyEssential() {
  return (
    <div className="">
      <div className="w-4/5 m-auto">
        <h1 className="border-b-[2px] pb-4 border-gray-100">
          Daily Essentials
        </h1>
        <div className="border-b-2 border-[#05ABF3] w-[150px]" />
      </div>
      <div className="w-4/5 m-auto grid sm:grid-cols-1 md:grid-cols-6 gap-4 py-8">
        {DailyEssentials.map((x) => (
          <div
            className="bg-gray-100 p-4 rounded-[15px] text-center"
            key={x._id}
          >
            <img
              className="w-[130px] h-[100px] rounded-[15px]"
              src={x.image}
              alt="dailEssential"
            />
            <h2 className="text-gray-500">{x.title}</h2>
            <h1 className="font-bold text-[14px]">UP TO 50% OFF</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyEssential;
