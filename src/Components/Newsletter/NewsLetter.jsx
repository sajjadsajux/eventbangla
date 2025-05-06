import React from "react";
import { IoStatsChart } from "react-icons/io5";
import { SlEnvolopeLetter } from "react-icons/sl";
import { showCustomSuccessToast } from "../../Utils/SuccessToast";

const NewsLetter = () => {
  const HandleNewsSubmit = (e) => {
    e.preventDefault();
    showCustomSuccessToast("Thanks for subscribing to our newsletter!");
    e.target.reset();
  };
  return (
    <>
      <h2 className="lg:text-5xl md:text-3xl text-2xl text-center font-bold">
        Never Miss <span className="text-primary"> a Great Event Again</span>
      </h2>
      <div className="flex flex-row items justify-center items-center py-10 gap-5">
        <hr className="w-2/6 text-gray-200" /> <SlEnvolopeLetter size={30} />
        <hr className="w-2/6 text-gray-200" />
      </div>

      <p className="text-gray-600 text-center px-2">Sign up with your email to get updates on the hottest events, new experiences, and special offers. Straight to your inbox - so you’re always in the know!</p>

      <div className="overflow-hidden ">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans md:text-3xl font-bold tracking-tight text-center lg:text-start  sm:text-4xl sm:leading-none">
                Be the First to Know <br className="hidden md:block" />
                About <span className="text-teal-accent-400"> Exciting Events Around You!</span>
              </h2>
              <p className="max-w-xl mb-4   md:text-lg text-center lg:text-start">From music shows and food festivals to learning workshops and family fun — get all the latest event updates right in your inbox. Join our newsletter and make sure you never miss out!</p>
              <a href="/" aria-label="" className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700">
                Learn more
                <svg className="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="relative">
                <svg viewBox="0 0 52 24" fill="currentColor" className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block">
                  <defs>
                    <pattern id="766323e1-e594-4ffd-a688-e7275079d540" x="0" y="0" width=".135" height=".30">
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect fill="url(#766323e1-e594-4ffd-a688-e7275079d540)" width="52" height="24" />
                </svg>
                <div className="relative bg-primary rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl text-white">Sign up for updates</h3>
                  <form onSubmit={HandleNewsSubmit}>
                    <div className="mb-1 sm:mb-2">
                      <label htmlFor="name" className="inline-block mb-1 font-medium text-white">
                        Name
                      </label>
                      <input
                        placeholder="John Doe"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline "
                        id="name"
                        name="name"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label htmlFor="email" className="inline-block mb-1 font-medium text-white">
                        E-mail
                      </label>
                      <input
                        placeholder="john.doe@example.org"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button type="submit" className="btn-primary  w-full h-12 px-6 font-medium  shadow-md bg-white hover:bg-green-600  hover:text-white hover:cursor-pointer">
                        Subscribe
                      </button>
                    </div>
                    <p className="text-xs text-white sm:text-sm">We respect your privacy. You can Unsubscribe at any time.</p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
