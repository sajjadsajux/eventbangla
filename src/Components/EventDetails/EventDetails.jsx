import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router";

const EventDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [uEvent, setUEvent] = useState({});
  // console.log(id, data);
  useEffect(() => {
    const uniqueEvent = data.find((uEvent) => uEvent.id == id);
    console.log(uniqueEvent);
    setUEvent(uniqueEvent);
  }, [data, id]);
  const { thumbnail, name, category, date, time, location, entryFee, shortDescription, seatsAvailable, organizer, registrationDeadline } = uEvent;

  return (
    <>
      <section>
        <div className="bg-[#f8f7fc] py-10 px-4">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Side: Event Content */}
            <div className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-md">
              <img src={thumbnail} alt="Event Banner" className="w-full md:h-[60vh] rounded-xl mb-6" />
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold mb-4">{name}</h2>
                <span className="inline-block text-xs px-2 py-1 bg-purple-100 text-primary rounded-full lg:text-xl">{category}</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-justify">{shortDescription}</p>
            </div>

            {/* Right Side: 3 Sections */}
            <div className="space-y-5">
              {/* Event Info */}
              <div className="bg-white p-6 rounded-2xl shadow-md space-y-3">
                <p className="">
                  <span className="font-semibold">Date :</span> {date}
                </p>
                <p className="">
                  <span className="font-semibold">Time :</span> {time}
                </p>
                <p>
                  <span className="font-semibold">Venue :</span> {location}
                </p>
                <p>
                  <span className="font-semibold">Organizer :</span> {organizer}
                </p>
              </div>

              {/* Ticket Info */}
              <div className="bg-white p-6 rounded-2xl shadow-md space-y-3">
                <h3 className="text-lg font-bold">Tickets</h3>
                <p className="font-medium">
                  Seats Available: <strong>{seatsAvailable} </strong> Only
                </p>
                <p className="font-medium">
                  Price: <strong>{entryFee}</strong>
                </p>
              </div>
              {/* Ticket Info */}
              <div className="bg-white p-6 rounded-2xl shadow-md space-y-3">
                <h3 className="text-lg font-bold">Registration Deadline</h3>
                <p>
                  <span className="font-bold">Hurry Up!</span> – Register Before <strong>{registrationDeadline}</strong> to Secure Your Spot at the <strong>{name}</strong>
                </p>
              </div>

              {/* Reservation Form */}
              <div className="bg-white p-6 rounded-2xl shadow-md space-y-3">
                <h3 className="text-lg font-bold">Reserve Your Seat</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded" />
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded" />
                  <button type="submit" className="w-full bg-primary text-white py-2 rounded hover:bg-purple-700 transition">
                    Reserve Seat
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetails;
