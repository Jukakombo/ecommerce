import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import x1 from "./images/x (1).jpg";
import x2 from "./images/x (2).jpg";
import x3 from "./images/x (3).jpg";
function SliderComponent() {
  const slidings = [
    {
      _id: "jfjzeoijfi",
      image: x1,
      description: "Hello welcome to the lates broducts",
      description2: "Hello welcome to the lates broducts",
    },
    {
      _id: "jfjzdsfdeoijfi",
      image: x2,
      description: "Buy from 500$ and free delivery",
      description2: "Hello welcome to the lates broducts",
    },
    {
      _id: "jzszsfjzeoijfi",
      image: x3,
      description: "50% off delivery for everyone staying in Morocco",
      description2: "Only at our store your satisfaction is value",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    accessibility: true,
    arrows: true,
  };
  return (
    <Slider {...settings}>
      {slidings.map((x) => (
        <div key={x._id} className="slider__image">
          <img
            className="md:h-[400px] w-[100%] rounded"
            src={x.image}
            alt="product"
          />
          <p className="text_description  font-bold text-white md:text-4xl">
            {x.description}
          </p>
          <p className="text_description  font-bold text-white md:text-2xl mt-16">
            {x.description2}
          </p>
        </div>
      ))}
    </Slider>
  );
}
export default SliderComponent;
