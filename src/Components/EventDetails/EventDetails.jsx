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
  const { thumbnail, name, category, date, location, entryFee, shortDescription, seatsAvailable, organizer } = uEvent;

  return (
    <>
      <div className="py-16 px-4 md:px-6">
        <div className="container mx-auto bg-gray-300 shadow-md outline outline-primary  rounded-3xl overflow-hidden flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="lg:w-2/3">
            <img src={thumbnail} alt={name} className="w-full lg:h-full md:h-[50vh] object-cover lg:rounded-l-3xl" />
          </div>

          {/* Details Section */}
          <div className="lg:w-1/3 p-6  ">
            <div>
              <div className="flex justify-between items-center mb-5">
                <p className="md:text-xl">
                  <span className="font-semibold">Date:</span> {date}
                </p>
                <span className="inline-block text-xs md:text-xl px-2 lg:px-4 py-1 bg-purple-100 text-primary rounded-full">{category}</span>
              </div>

              <h2 className="text-3xl font-bold text-center text-primary md:mt-10">{name}</h2>

              <div className=" mt-6 text-gray-700 flex flex-col space-y-10">
                <div className="mt-6 text-gray-700 space-y-6 max-h-[250px] overflow-y-auto pr-2  text-ellipsis">
                  <p className="text-gray-600 text-ellipsis">{shortDescription}</p>
                </div>
                <div className="md:space-y-7">
                  <p>
                    <span className="font-semibold">Location:</span> {location}
                  </p>
                  <p>
                    <span className="font-semibold">Organizer:</span> {organizer}
                  </p>

                  <p>
                    <span className="font-semibold">Entry Fee:</span> {entryFee}
                  </p>
                  <p>
                    <span className="font-semibold">Seats Available:</span> {seatsAvailable}
                  </p>
                </div>
                <div className="mt-6">
                  <Link to="/" className="inline-block bg-primary hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md transition">
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
