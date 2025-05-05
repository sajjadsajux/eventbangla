import React from "react";
import Slider from "../Slider/Slider";
import Banner from "../Banner/Banner";
import UpcomingEvent from "../UpcomingEvent/UpcomingEvent";
import { Outlet } from "react-router";
import DynamicTittle from "../../Utils/DynamicTittle";

const Home = () => {
  DynamicTittle("Home");
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-5 ">
        <div className="col-span-1 md:col-span-2  ">
          <Banner></Banner>
        </div>
        <div className="col-span-1 md:col-span-3">
          <Slider></Slider>
        </div>
      </section>
      <section className="py-12">
        <UpcomingEvent></UpcomingEvent>
      </section>
    </>
  );
};

export default Home;
