import React from "react";

const MyEventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 p-6 flex flex-col">
      {/* Event Name */}
      <h2 className="text-xl font-semibold text-gray-800 mb-2 ">{event.title}</h2>
      {/* Event Location */}
      <div className="text-gray-700 text-sm font-semibold mt-auto mb-4">
        <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs">{event.date}</span>
      </div>
      {/* Event Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{event.description}</p>
      {/* Event Date */}
      <p className="text-gray-600 text-sm mb-4 font-semibold">{event.location}</p>
    </div>
  );
};

export default MyEventCard;
