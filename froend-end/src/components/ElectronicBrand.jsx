import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { TopbrandsElectroniques } from "./lacalDatabase";
import { useState } from "react";
import { useEffect } from "react";
function ElectronicBrand() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) =>
          prev === TopbrandsElectroniques.length - 1 ? 0 : prev + 1
        ),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-4/5 m-auto">
      <div className="flex items-center justify-between pb-4">
        <h1 className=" ">
          Top <strong className="text-blue-500">Electronic Brands</strong>
        </h1>
        <Link to="/view-all" className="flex items-center">
          View All <MdKeyboardArrowRight color="blue" />
        </Link>
      </div>
      <div className="">
        <div className="border_blue border-b-2 border-blue-500 " />
      </div>

      <div className="brand-slider-image py-8  ">
        <img
          className="brand-image rounded w-full"
          src={TopbrandsElectroniques[currentSlide].image}
          alt="electronique"
        />
      </div>
    </div>
    // </div>
  );
}

export default ElectronicBrand;
