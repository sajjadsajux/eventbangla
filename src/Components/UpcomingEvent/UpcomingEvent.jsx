import React from "react";
import { MdEventAvailable } from "react-icons/md";
import { useLoaderData } from "react-router";
import EventCard from "../EventCard/EventCard";

const UpcomingEvent = () => {
  const eventData = useLoaderData();
  console.log(eventData);
  return (
    <>
      <div>
        <h2 className="lg:text-5xl md:text-3xl text-2xl text-center font-bold">
          Upcoming <span className="text-primary"> Events</span>
        </h2>
        <div className="flex flex-row items justify-center items-center py-10 gap-5">
          <hr className="w-2/6 text-gray-200" /> <MdEventAvailable size={30} />
          <hr className="w-2/6 text-gray-200" />
        </div>

        <p className="text-gray-600 text-center ">Discover the best events in Bangladesh, from exciting workshops to fun festivals. Don’t miss out on the chance to be part of something great. See what’s coming up next!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto gap-10 py-20 px-2 lg:px-0">
          {eventData.map((event) => (
            <EventCard event={event}></EventCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default UpcomingEvent;
