import React, { useEffect } from "react";
import DynamicTittle from "../../Utils/DynamicTittle";
import Aos from "aos";
{
  /* <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>; */
}
import "aos/dist/aos.css"; // Import AOS CSS

const About = () => {
  DynamicTittle("About Us");

  useEffect(() => {
    Aos.init({
      offset: 10,
      duration: 600,
      easing: "ease-in-sine",
      delay: 50,
      once: false,
    });
  }, []);
  return (
    <>
      <div className="pt-10">
        <h2 className="lg:text-5xl md:text-3xl text-2xl text-center font-bold px-2 lg:px-0">
          About<span className="text-primary px-2 lg:px-0"> Us</span>
        </h2>
        <p className="text-gray-600 text-center my-5">EventBangla helps you find and enjoy the best events around. Whether it’s fun, learning, or just a great time — we bring people and events together. Learn more about what we do and why we love doing it!</p>
        <section className="bg-gray-50 py-16 px-4 md:px-20 text-gray-800">
          <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12">
            {/* Card 1 - Who We Are */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300" data-aos="slide-up">
              <h3 className="text-2xl font-semibold text-primary mb-4">Who We Are</h3>
              <p className="text-gray-600 text-sm md:text-lg">EventBangla is your go-to platform for discovering the most exciting events happening across Bangladesh. From cultural festivals to tech talks, we help you stay connected with what’s happening around you.</p>
            </div>

            {/* Card 2 - Our Mission */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300" data-aos="flip-down">
              <h3 className="text-2xl font-semibold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600 text-sm md:text-lg">We want to make event discovery easy, fun, and useful for everyone. Whether you're an event lover or an organizer, EventBangla brings people together through real-life experiences.</p>
            </div>

            {/* Card 3 - What We Do */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300" data-aos="fade-right">
              <h3 className="text-2xl font-semibold text-primary mb-4">What We Do</h3>
              <ul className="list-disc pl-6 text-gray-600 text-sm md:text-lg space-y-2">
                <li>Help users explore and attend amazing local events</li>
                <li>Give organizers a space to promote their events</li>
                <li>Share event details, times, and locations in one place</li>
                <li>Let users reserve spots and stay updated through newsletters</li>
              </ul>
            </div>

            {/* Card 4 - Why Choose EventBangla */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300" data-aos="slide-up">
              <h3 className="text-2xl font-semibold text-primary mb-4">Why Choose EventBangla</h3>
              <ul className="list-disc pl-6 text-gray-600 text-sm md:text-lg space-y-2">
                <li>Easy-to-use website</li>
                <li>Verified and fresh event listings</li>
                <li>Free and paid event options</li>
                <li>Great user reviews (4.8/5 average rating!)</li>
              </ul>
            </div>

            {/* Card 5 - Join the Journey */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300" data-aos="flip-up">
              <h3 className="text-2xl font-semibold text-primary mb-4">Join the Journey</h3>
              <p className="text-gray-600 text-sm md:text-lg">Whether you're looking for your next adventure or want to share your event with the world — EventBangla is here to help. Be part of a growing community that celebrates life, culture, and connection.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
