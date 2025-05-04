import React from "react";
import Slider from "../Slider/Slider";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="col-span-1 md:col-span-2 bg-gray-100 ">
          <Banner></Banner>
        </div>
        <div className="col-span-1 md:col-span-3">
          <Slider></Slider>
        </div>
      </section>
    </>
  );
};

export default Home;
