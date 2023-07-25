import React from "react";
import { ImLocation2 } from "react-icons/im";
import { TbTruckDelivery } from "react-icons/tb";
import { TiStarburstOutline } from "react-icons/ti";
function Topheader() {
  return (
    <div className="bg-[#F5F5F5]">
      <div className=" py-2 w-4/5 m-auto">
        <div className="flex items-center justify-between">
          <span>Welcome to Abrar Express Delivery</span>
          <div className="flex items-center">
            <div className="flex items-center">
              <ImLocation2
                className="ml-2 text-[#008ECC] cursor-pointer"
                size={25}
              />
              <h1 className="ml-2">Deliver to : 509596</h1>
            </div>
            <div className="flex items-center">
              <TbTruckDelivery
                className="ml-2 text-[#008ECC] cursor-pointer"
                size={25}
              />
              <h1 className="ml-2">Track your order</h1>
            </div>
            <div className="flex items-center">
              <TiStarburstOutline
                className="ml-2 text-[#008ECC] cursor-pointer"
                size={25}
              />
              <h1 className="ml-2">All offers</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topheader;
