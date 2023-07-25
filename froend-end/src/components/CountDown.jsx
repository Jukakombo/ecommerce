import React, { useState } from "react";
import { useEffect } from "react";
import Countdown from "react-countdown";
const promotions = [
  {
    image: "/promotions/img1.png",
    id: "343DEerdDF",
  },
  {
    image: "/promotions/img2.png",
    id: "343DEddzDF",
  },
  {
    image: "/promotions/img3.png",
    id: "343dzdDEDF",
  },
  {
    image: "/promotions/img4.png",
    id: "343DdefEDF",
  },
];
function CountDown() {
  const [promotionSlide, setPromotionSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () =>
        setPromotionSlide((prev) =>
          prev === promotions.length - 1 ? 0 : prev + 1
        ),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  const endTime = new Date("2023-07-24");
  return (
    <div className="w-4/5 m-auto py-8 bg-black text-white rounded-md p-4 mb-8   flex  justify-between items-center">
      <div className="">
        <h1 className="font-bold text-xl xl:text-2xl lg:text-lg uppercase">
          Promotion end in{" "}
        </h1>
        <p>Please hurry up the promotion end soon get 50% off right now</p>
        <Countdown
          className="text-yellow-500 font-bold text-lg lg:text-xl xl:text-2xl"
          date={endTime}
        />
      </div>
      <div className="">
        <img
          src={promotions[promotionSlide].image}
          alt="images"
          className="rounded  w-[250px]"
        />
      </div>
    </div>
  );
}

export default CountDown;
