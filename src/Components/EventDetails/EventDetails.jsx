import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { ToastContainer } from "react-toastify";
import { showCustomSuccessToast } from "../../Utils/SuccessToast";
import DynamicTittle from "../../Utils/DynamicTittle";

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

  const handleReserve = (e) => {
    e.preventDefault();
    e.target.reset();

    showCustomSuccessToast(` Thank you, your seat is reserved!`);
  };
  DynamicTittle(`${name}`);

  return (
    <>
      <section>
        <div className="bg-[#f8f7fc] py-8 px-4 ">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 ">
            {/* Left Side: Event Content */}
            <div className="lg:col-span-3 bg-white p-6 rounded-2xl shadow-md ">
              <img src={thumbnail} alt="Event Banner" className="w-full md:h-[55vh] rounded-xl mb-6 transform hover:scale-105 transition duration-300" />
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold mb-4 text-primary">{name}</h2>
                <span className="inline-block text-xs px-2 py-1 bg-purple-100 text-primary rounded-full lg:text-xl">{category}</span>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 text-justify">{shortDescription}</p>
            </div>

            {/* Right Side: 3 Sections */}
            <div className="space-y-2">
              {/* Event Info */}
              <div className="bg-white p-6 rounded-2xl shadow-md space-y-3 ">
                <h3 className="text-lg font-bold text-primary">Event Info</h3>

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
              <div className="bg-white p-6 rounded-2xl shadow-md space-y-3 ">
                <h3 className="text-lg font-bold text-primary">Tickets</h3>
                <p className="font-medium">
                  Seats Available: <strong>{seatsAvailable} </strong> Only
                </p>
                <p className="font-medium">
                  Price: <strong>{entryFee}</strong>
                </p>
              </div>
              {/* Ticket Info */}
              <div className="bg-white p-6 rounded-2xl shadow-md space-y-3 ">
                <h3 className="text-lg font-bold text-primary">Registration Deadline</h3>
                <p>
                  <span className="font-bold">Hurry Up!</span> – Register Before <strong>{registrationDeadline}</strong> to Secure Your Spot at the <strong>{name}</strong>
                </p>
              </div>

              {/* Reservation Form */}
              <div className="bg-white p-6 rounded-2xl shadow-md space-y-3 ">
                <h3 className="text-lg font-bold text-primary">Reserve Your Seat</h3>
                <form className="space-y-3 " onSubmit={handleReserve}>
                  <input name="email" type="text" placeholder="Your Name" className="w-full px-4 py-1 border rounded" required />
                  <input name="email" type="email" placeholder="Your Email" className="w-full px-4 py-1 border rounded" required />
                  <button type="submit" className="w-full bg-primary font-semibold text-white py-2 rounded hover:bg-green-600 transition">
                    Reserve Seat
                  </button>
                  <ToastContainer></ToastContainer>
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
