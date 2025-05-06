import React from "react";
import { MdEventAvailable } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <>
      <h2 className="lg:text-5xl md:text-3xl text-2xl text-center font-bold ">
        Our <span className="text-primary"> Journey So Far</span>
      </h2>
      <div className="flex flex-row items justify-center items-center py-10 gap-5">
        <hr className="w-2/6 text-gray-200" /> <IoStatsChart size={30} />
        <hr className="w-2/6 text-gray-200" />
      </div>

      <p className="text-gray-600 text-center px-2">From small meetups to nationwide festivals — we've been helping people discover and enjoy amazing events every day. Here’s a quick look at what we’ve achieved together.</p>
      {/* cards */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center transform hover:scale-140 transition duration-300">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12  ">
              <MdEventAvailable size={30} />
            </div>
            <h6 className="text-4xl font-bold text-primary">
              <CountUp end={2000} duration={25} delay={2} />+
            </h6>
            <p className="mb-2 font-bold text-md py-2">Events Promoted</p>
            <p className="text-gray-700">Successfully connected thousands of attendees with over 1,200 events across Bangladesh.</p>
          </div>
          <div className="text-center transform hover:scale-140 transition duration-300">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
              <FaLocationDot size={30} />
            </div>
            <h6 className="text-4xl font-bold text-primary">
              <CountUp end={100} duration={25} delay={2} />+
            </h6>
            <p className="mb-2 font-bold text-md py-2">Cities Covered</p>
            <p className="text-gray-700 ">We've brought events to more than 100 cities, making them accessible to everyone.</p>
          </div>
          <div className="text-center transform hover:scale-140 transition duration-300">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
              <FaUsers size={30} />
            </div>
            <h6 className="text-4xl font-bold text-primary">
              <CountUp end={12000} duration={25} delay={2} />+
            </h6>
            <p className="mb-2 font-bold text-md py-2">Registered Users</p>
            <p className="text-gray-700">It's a helluva start, being able to recognize what makes you happy today, in this moment.</p>
          </div>
          <div className="text-center transform hover:scale-140 transition duration-300">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
              <FcLike size={30} />
            </div>
            <h6 className="text-4xl font-bold text-primary">
              <CountUp end={4.8} duration={20} decimals={1} delay={2} />
              /5
            </h6>
            <p className="mb-2 font-bold text-md py-2">Average User Rating</p>
            <p className="text-gray-700">Our users give us 4.8/5, loving EventBangla for discovering top events.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
