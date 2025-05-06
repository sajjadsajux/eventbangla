import React from "react";
import { Link } from "react-router";

const EventCard = ({ event }) => {
  console.log(event);
  const { id, thumbnail, name, category, date, location, entryFee } = event;

  return (
    <div className="bg-gradient-to-br from-red-600 via-orange-200 to-blue-700  shadow hover:shadow-md transition duration-300 overflow-hidden p-5 rounded-3xl">
      <div className="h-60 w-full overflow-hidden">
        <img src={thumbnail} alt={name} className="rounded-2xl w-full h-full object-cover transform hover:scale-105 transition duration-300" />
      </div>
      <div className="p-4 space-y-2">
        <span className="inline-block text-xs px-2 py-1 bg-purple-100 text-primary rounded-full">{category}</span>
        <h2 className="text-lg font-bold ">{name}</h2>
        <p className="text-sm font-semibold">Date: {date}</p>
        <p className="text-sm font-semibold">Location: {location}</p>
        <p className="text-sm font-semibold">Entry Fee: {entryFee === 0 ? "Free" : `${entryFee}`}</p>
        <Link to={`/event/${id}`} className="inline-block mt-3 text-sm text-white bg-primary hover:bg-green-600 px-4 py-2 rounded-md transition">
          View More
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
