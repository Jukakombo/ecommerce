import React from "react";
import Header from "./Header";
import SliderComponent from "./herosection/SliderComponent";
import SmartPhones from "./SmartPhones";
import Categories from "./Categories";
import ElectronicBrand from "./ElectronicBrand";
import DailyEssential from "./DailyEssential";
import Footer from "./Footer";
import CountDown from "./CountDown";

function Home() {
  return (
    <div>
      <Header />
      <div className="w-4/5 m-auto">
        <SliderComponent />
      </div>
      <SmartPhones />
      <Categories />
      <ElectronicBrand />
      <DailyEssential />
      <CountDown />
      <Footer />
    </div>
  );
}

export default Home;
