import React from "react";
import { Link } from "react-router";
import DynamicTittle from "../../Utils/DynamicTittle";
import { MdError } from "react-icons/md";

const ErrorPages = () => {
  DynamicTittle("404 Page");

  return (
    <section className="flex items-center h-screen   ">
      <div className="container flex flex-col items-center justify-center  mx-auto my-8">
        <div className="text-center transition-all duration-500 ease-in-out">
          <h2 className="font-extrabold md:text-7xl text-4xl transition-transform duration-300 hover:scale-105">Oops!</h2>
          <h2 className="mb-8 font-extrabold md:text-7xl text-4xl transition-transform duration-300 hover:scale-105">Page Not Found</h2>
          <p className="text-2xl font-semibold md:text-3xl px-2 transition-transform duration-300 hover:scale-105">Sorry, we couldn't find the event or page you're looking for.</p>
          <p className="mt-4 mb-8 px-2 transition-transform duration-300 hover:scale-105">But don’t worry, you can find plenty of other things on our homepage.</p>
          <Link to="/" className="px-8 py-3 font-semibold rounded bg-primary text-white hover:bg-green-600 transition-colors duration-300">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPages;
