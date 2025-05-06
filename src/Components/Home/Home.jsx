import React from "react";
import Slider from "../Slider/Slider";
import Banner from "../Banner/Banner";
import UpcomingEvent from "../UpcomingEvent/UpcomingEvent";
import { Outlet } from "react-router";
import DynamicTittle from "../../Utils/DynamicTittle";
import Stats from "../Stats/Stats";
import NewsLetter from "../Newsletter/NewsLetter";

const Home = () => {
  DynamicTittle("Home");
  return (
    <>
      <section className=" ">
        <div className="  ">{/* <Banner></Banner> */}</div>
        <div className="">
          <Slider></Slider>
        </div>
      </section>
      <section className="py-12">
        <UpcomingEvent></UpcomingEvent>
      </section>
      <section>
        <Stats></Stats>
      </section>
      <section className="py-12">
        <NewsLetter></NewsLetter>
      </section>
    </>
  );
};

export default Home;
