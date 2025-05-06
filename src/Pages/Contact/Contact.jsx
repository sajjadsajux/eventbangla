import React from "react";
import DynamicTittle from "../../Utils/DynamicTittle";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { showCustomSuccessToast } from "../../Utils/SuccessToast";

const Contact = () => {
  DynamicTittle("Contact Us");

  const HandleFormSub = (e) => {
    e.preventDefault();
    showCustomSuccessToast("Your message has been sent. We'll contact you soon");
    e.target.reset();
  };
  return (
    <>
      <div className="bg-gray-50 text-gray-800 px-6 md:px-20 py-12 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center text-primary">Get in Touch</h1>
        <p className="text-center mb-10 text-lg text-gray-600">Have a question, suggestion, or need help? We're here to listen and help you out.</p>

        <div className="max-w-md mx-auto">
          {/* Contact Form */}
          <form onSubmit={HandleFormSub} className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-primary" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-primary" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea rows="5" placeholder="Your message here..." className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-primary"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-white py-2 rounded hover:bg-green-600 transition hover:cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
